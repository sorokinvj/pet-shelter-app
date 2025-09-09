'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message)
    } else {
      router.push('/admin')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-red-100 via-yellow-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl">🐕</div>
          <h1 className="text-2xl font-bold text-gray-800">Вход в админ-панель</h1>
          <p className="text-gray-500">Приют Эвакуированных Лап</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              id="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary transition"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="password">Пароль</label>
            <input
              id="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary transition"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-sm text-red-600 bg-red-100 border border-red-300 rounded-lg p-3">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-white font-semibold bg-primary rounded-lg hover:bg-opacity-90 disabled:bg-gray-400 transition-all"
          >
            {loading ? 'Вход...' : 'Войти'}
          </button>
        </form>

        <div className="text-center text-sm">
          <Link href="/auth/signup" className="font-medium text-secondary hover:underline">
            Нет аккаунта? Зарегистрироваться
          </Link>
        </div>
        <div className="text-center text-sm pt-4 border-t border-gray-200">
          <Link href="/" className="text-gray-500 hover:underline">
            ← Вернуться на сайт
          </Link>
        </div>
      </div>
    </div>
  )
}
