'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '../../../../lib/supabase/client'
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

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else {
        router.push('/admin')
        router.refresh()
      }
    } catch (err) {
      setError('Произошла ошибка при входе')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{background: 'white', borderRadius: '16px', padding: '48px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%'}}>
        <div style={{textAlign: 'center', marginBottom: '32px'}}>
          <div style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', margin: '0 auto 16px'}}>🐕</div>
          <h1 style={{fontSize: '24px', fontWeight: '700', color: '#2D3748', marginBottom: '8px'}}>Вход в админ-панель</h1>
          <p style={{color: '#718096'}}>Приют Эвакуированных Лап</p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{marginBottom: '20px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '500', color: '#2D3748'}}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #E2E8F0',
                borderRadius: '8px',
                fontSize: '16px',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#4ECDC4'}
              onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
            />
          </div>

          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '500', color: '#2D3748'}}>
              Пароль
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #E2E8F0',
                borderRadius: '8px',
                fontSize: '16px',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#4ECDC4'}
              onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
            />
          </div>

          {error && (
            <div style={{
              background: '#FED7D7',
              border: '1px solid #FC8181',
              color: '#C53030',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '14px'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px 24px',
              background: loading ? '#CBD5E0' : '#FF6B6B',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              marginBottom: '16px'
            }}
          >
            {loading ? 'Вход...' : 'Войти'}
          </button>

          <div style={{textAlign: 'center'}}>
            <Link href="/auth/signup" style={{color: '#4ECDC4', textDecoration: 'none', fontSize: '14px'}}>
              Нет аккаунта? Зарегистрироваться
            </Link>
          </div>
        </form>

        <div style={{textAlign: 'center', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #E2E8F0'}}>
          <Link href="/" style={{color: '#718096', textDecoration: 'none', fontSize: '14px'}}>
            ← Вернуться на сайт
          </Link>
        </div>
      </div>
    </main>
  )
}
