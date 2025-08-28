# 🚀 Настройка Supabase для приюта собак

## 1. Создание проекта Supabase

1. Перейдите на [supabase.com](https://supabase.com)
2. Создайте аккаунт или войдите в существующий
3. Нажмите "New Project"
4. Заполните:
   - **Name**: pet-shelter-app
   - **Database Password**: создайте надежный пароль
   - **Region**: выберите ближайший к России регион (Europe West)
5. Нажмите "Create new project"

## 2. Получение API ключей

После создания проекта:

1. Перейдите в **Settings** → **API**
2. Скопируйте следующие значения:
   - **Project URL** (например: `https://xxxxx.supabase.co`)
   - **anon public** ключ
   - **service_role** ключ (для админских операций)

## 3. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=ваш_anon_ключ
SUPABASE_SERVICE_ROLE_KEY=ваш_service_role_ключ
```

## 4. Создание схемы базы данных

Перейдите в **SQL Editor** в Supabase и выполните следующие SQL команды:

### 4.1 Таблица профилей пользователей

```sql
-- Создаем таблицу профилей
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  role TEXT CHECK (role IN ('admin', 'editor', 'volunteer')) DEFAULT 'volunteer',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включаем RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Политика: пользователи могут читать свой профиль
CREATE POLICY "Users can view own profile" 
ON profiles FOR SELECT USING (auth.uid() = id);

-- Политика: пользователи могут обновлять свой профиль
CREATE POLICY "Users can update own profile" 
ON profiles FOR UPDATE USING (auth.uid() = id);

-- Функция для автоматического создания профиля
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    COALESCE(new.raw_user_meta_data->>'role', 'volunteer')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Триггер для создания профиля при регистрации
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### 4.2 Таблица животных

```sql
-- Создаем таблицу животных
CREATE TABLE animals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  species TEXT CHECK (species IN ('dog', 'cat')) DEFAULT 'dog',
  breed TEXT,
  age_months INTEGER,
  gender TEXT CHECK (gender IN ('male', 'female')),
  size TEXT CHECK (size IN ('small', 'medium', 'large')),
  weight_kg DECIMAL(4,1),
  
  -- Статус
  status TEXT CHECK (status IN ('ready', 'adapting', 'special_needs', 'adopted')) DEFAULT 'adapting',
  
  -- Описание
  description TEXT,
  personality_traits TEXT[],
  special_requirements TEXT,
  story TEXT,
  
  -- Медицинская информация
  health_status TEXT,
  vaccinated BOOLEAN DEFAULT FALSE,
  sterilized BOOLEAN DEFAULT FALSE,
  medical_notes TEXT,
  
  -- Прогресс адаптации
  trust_progress INTEGER DEFAULT 0 CHECK (trust_progress >= 0 AND trust_progress <= 100),
  socialization_progress INTEGER DEFAULT 0 CHECK (socialization_progress >= 0 AND socialization_progress <= 100),
  training_progress INTEGER DEFAULT 0 CHECK (training_progress >= 0 AND training_progress <= 100),
  
  -- Метаданные
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES profiles(id),
  is_featured BOOLEAN DEFAULT FALSE
);

-- Включаем RLS
ALTER TABLE animals ENABLE ROW LEVEL SECURITY;

-- Политика: все могут читать опубликованных животных
CREATE POLICY "Animals are viewable by everyone" 
ON animals FOR SELECT USING (true);

-- Политика: только админы и редакторы могут управлять
CREATE POLICY "Only admins and editors can manage animals" 
ON animals FOR ALL USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() 
    AND role IN ('admin', 'editor')
  )
);
```

### 4.3 Таблица фотографий

```sql
-- Создаем таблицу фотографий
CREATE TABLE animal_photos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  animal_id UUID REFERENCES animals(id) ON DELETE CASCADE,
  photo_url TEXT NOT NULL,
  is_primary BOOLEAN DEFAULT FALSE,
  caption TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включаем RLS
ALTER TABLE animal_photos ENABLE ROW LEVEL SECURITY;

-- Политика: все могут читать фотографии
CREATE POLICY "Photos are viewable by everyone" 
ON animal_photos FOR SELECT USING (true);

-- Политика: только админы и редакторы могут управлять
CREATE POLICY "Only admins and editors can manage photos" 
ON animal_photos FOR ALL USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() 
    AND role IN ('admin', 'editor')
  )
);
```

### 4.4 Таблица заявок на усыновление

```sql
-- Создаем таблицу заявок
CREATE TABLE adoption_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  animal_id UUID REFERENCES animals(id),
  
  -- Данные заявителя
  applicant_name TEXT NOT NULL,
  applicant_email TEXT NOT NULL,
  applicant_phone TEXT,
  
  -- Опыт и условия
  experience_level TEXT CHECK (experience_level IN ('first', 'some', 'experienced')),
  housing_conditions TEXT,
  has_yard BOOLEAN,
  has_other_pets BOOLEAN,
  other_pets_description TEXT,
  
  -- Мотивация
  motivation TEXT,
  additional_info TEXT,
  
  -- Статус заявки
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected', 'completed')) DEFAULT 'pending',
  notes TEXT,
  
  -- Даты
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID REFERENCES profiles(id)
);

-- Включаем RLS
ALTER TABLE adoption_applications ENABLE ROW LEVEL SECURITY;

-- Политика: админы и редакторы могут управлять заявками
CREATE POLICY "Staff can manage applications" 
ON adoption_applications FOR ALL USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() 
    AND role IN ('admin', 'editor')
  )
);
```

## 5. Настройка аутентификации

В Supabase перейдите в **Authentication** → **Settings**:

1. **Site URL**: `http://localhost:3000` (для разработки)
2. **Redirect URLs**: добавьте:
   - `http://localhost:3000`
   - `http://localhost:3000/auth/callback`
   - Ваш production URL когда будет готов

## 6. Создание первого админа

После настройки запустите проект и зарегистрируйтесь. Затем в Supabase SQL Editor выполните:

```sql
-- Обновить роль пользователя на админа (замените email на свой)
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'ваш_email@example.com';
```

## 7. Запуск проекта

```bash
npm run dev
```

Теперь вы можете:
- Перейти на `http://localhost:3000/auth/login` для входа
- Зарегистрироваться на `http://localhost:3000/auth/signup`
- Открыть админ-панель `http://localhost:3000/admin`

## 8. Следующие шаги

После настройки базы можно:
1. Добавить животных в базу
2. Создать формы для заявок на усыновление
3. Настроить загрузку изображений в Supabase Storage
4. Добавить блог-функционал
