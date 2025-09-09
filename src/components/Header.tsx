import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';


export default async function Header() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 text-xl font-bold text-primary">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white">🐕</div>
          <span>Приют</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/dogs" className="hover:text-primary transition-colors">Наши собаки</Link>
          <Link href="/about" className="hover:text-primary transition-colors">О нас</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Контакты</Link>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <Link href="/admin" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-opacity-90 transition">
              В админку
            </Link>
          ) : (
            <>
              <Link href="/auth/login" className="text-sm font-medium text-gray-600 hover:text-primary transition">Вход</Link>
              <Link href="/auth/signup" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-opacity-90 transition">
                Регистрация
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
