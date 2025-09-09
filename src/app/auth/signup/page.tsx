'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName, role: 'volunteer' } }
    });
    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-red-100 via-yellow-50 to-teal-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl">✓</div>
          <h1 className="text-2xl font-bold text-gray-800">Регистрация успешна!</h1>
          <p className="text-gray-600">Мы отправили письмо с подтверждением на ваш email. Пожалуйста, активируйте аккаунт.</p>
          <Link href="/auth/login" className="inline-block w-full px-4 py-2 text-white font-semibold bg-primary rounded-lg hover:bg-opacity-90 transition-colors">
            Перейти к входу
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-red-100 via-yellow-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl">🐕</div>
          <h1 className="text-2xl font-bold text-gray-800">Регистрация</h1>
          <p className="text-gray-500">Создайте аккаунт волонтера</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="fullName">Полное имя</label>
            <input id="fullName" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary transition" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input id="email" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary transition" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="password">Пароль</label>
            <input id="password" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary transition" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
            <p className="text-xs text-gray-500 mt-1">Минимум 6 символов</p>
          </div>

          {error && <p className="text-sm text-red-600 bg-red-100 border border-red-300 rounded-lg p-3">{error}</p>}

          <button type="submit" disabled={loading} className="w-full px-4 py-2 text-white font-semibold bg-primary rounded-lg hover:bg-opacity-90 disabled:bg-gray-400 transition-all">
            {loading ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="text-center text-sm pt-4 border-t">
          <Link href="/auth/login" className="font-medium text-secondary hover:underline">
            Уже есть аккаунт? Войти
          </Link>
        </div>
      </div>
    </div>
  )
}
