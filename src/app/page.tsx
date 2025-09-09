import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#FF6B6B] to-[#FFE66D] text-white text-center py-20">
        <div className="container mx-auto px-4">
          <div className="font-serif text-2xl mb-2 opacity-90">Каждый заслуживает второй шанс</div>
          <h1 className="text-5xl font-bold font-sans mb-4 text-shadow">Спасенные герои ищут дом</h1>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">Эти удивительные собаки пережили невозможное и показали невероятную стойкость. Теперь они готовы подарить всю свою любовь новым семьям.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/animals" className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg">
              Познакомиться с собаками
            </Link>
            <Link href="/about" className="px-6 py-3 bg-white/20 border border-white/50 text-white font-semibold rounded-full hover:bg-white/30 transition">
              Узнать больше
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 -mt-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-4xl font-bold text-primary mb-2">156</div>
              <div className="text-gray-500 font-medium">Собак спасено</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-4xl font-bold text-primary mb-2">89</div>
              <div className="text-gray-500 font-medium">Нашли дом</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-4xl font-bold text-primary mb-2">23</div>
              <div className="text-gray-500 font-medium">Ищут семью</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-4xl font-bold text-primary mb-2">44</div>
              <div className="text-gray-500 font-medium">Адаптируются</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="font-serif text-xl text-primary mb-2">Знакомьтесь</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши хвостики</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Каждая собака в нашем приюте — это история стойкости, надежды и невероятной способности к любви.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Dog Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-5xl">🐕</div>
              <h3 className="text-xl font-semibold mb-2">Барон, 3 года</h3>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 mb-3">🟢 Готов к семье</span>
              <p className="text-gray-600 mb-4">Благородный и умный пес, который обожает долгие прогулки и уже научился играть с мячиком.</p>
              <Link href="/animals/baron" className="w-full text-center px-6 py-2 bg-primary text-white font-semibold rounded-full hover:bg-opacity-90 transition">
                Познакомиться
              </Link>
            </div>
            
            {/* Dog Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-400 opacity-70">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-5xl">🐕‍🦺</div>
              <h3 className="text-xl font-semibold mb-2">Лада, 2 года</h3>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 mb-3">🟡 Адаптируется</span>
              <p className="text-gray-600 mb-4">Нежная и ласковая девочка, которая каждый день открывает для себя радости мирной жизни.</p>
              <button className="w-full text-center px-6 py-2 bg-gray-300 text-white font-semibold rounded-full cursor-not-allowed" disabled>
                Скоро доступно
              </button>
            </div>
            
            {/* Dog Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-400 opacity-70">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-5xl">🦮</div>
              <h3 className="text-xl font-semibold mb-2">Рекс, 5 лет</h3>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 mb-3">🟣 Особые потребности</span>
              <p className="text-gray-600 mb-4">Мудрый и спокойный пес, который будет идеальным компаньоном для тихих семей.</p>
              <button className="w-full text-center px-6 py-2 bg-gray-300 text-white font-semibold rounded-full cursor-not-allowed" disabled>
                Скоро доступно
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/animals" className="px-6 py-3 text-secondary border-2 border-secondary font-semibold rounded-full hover:bg-secondary hover:text-white transition">
              Смотреть всех собак
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-accent mb-4">Контакты</h3>
              <a href="tel:+7-xxx-xxx-xxxx" className="block text-gray-300 hover:text-white transition">+7 (XXX) XXX-XX-XX</a>
              <a href="mailto:info@evacuatedpaws.ru" className="block text-gray-300 hover:text-white transition">info@evacuatedpaws.ru</a>
            </div>
            <div>
              <h3 className="font-bold text-accent mb-4">Разделы</h3>
              <Link href="/animals" className="block text-gray-300 hover:text-white transition">Наши животные</Link>
              <Link href="/brand" className="block text-gray-300 hover:text-white transition">Бренд-гайд</Link>
              <Link href="/logos" className="block text-gray-300 hover:text-white transition">Логотипы</Link>
            </div>
            <div>
              <h3 className="font-bold text-accent mb-4">Демо-страницы</h3>
              <Link href="/" className="block text-gray-300 hover:text-white transition">Главная</Link>
              <Link href="/animals" className="block text-gray-300 hover:text-white transition">Каталог животных</Link>
              <Link href="/animals/baron" className="block text-gray-300 hover:text-white transition">Профиль собаки</Link>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>&copy; 2024 Приют Эвакуированных Лап.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
