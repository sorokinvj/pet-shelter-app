'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '../../../../lib/supabase/client'
import Link from 'next/link'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role: 'volunteer' // По умолчанию все новые пользователи - волонтеры
          }
        }
      })

      if (error) {
        setError(error.message)
      } else {
        setSuccess(true)
      }
    } catch (err) {
      setError('Произошла ошибка при регистрации')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <main style={{minHeight: '100vh', background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{background: 'white', borderRadius: '16px', padding: '48px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%', textAlign: 'center'}}>
          <div style={{width: '60px', height: '60px', background: '#68D391', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', margin: '0 auto 24px'}}>✓</div>
          <h1 style={{fontSize: '24px', fontWeight: '700', color: '#2D3748', marginBottom: '16px'}}>Регистрация успешна!</h1>
          <p style={{color: '#718096', marginBottom: '24px'}}>
            Мы отправили письмо с подтверждением на ваш email. Пожалуйста, перейдите по ссылке в письме для активации аккаунта.
          </p>
          <Link href="/auth/login" style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: '#FF6B6B',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '500'
          }}>
            Перейти к входу
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{background: 'white', borderRadius: '16px', padding: '48px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%'}}>
        <div style={{textAlign: 'center', marginBottom: '32px'}}>
          <div style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', margin: '0 auto 16px'}}>🐕</div>
          <h1 style={{fontSize: '24px', fontWeight: '700', color: '#2D3748', marginBottom: '8px'}}>Регистрация</h1>
          <p style={{color: '#718096'}}>Создайте аккаунт волонтера</p>
        </div>

        <form onSubmit={handleSignup}>
          <div style={{marginBottom: '20px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '500', color: '#2D3748'}}>
              Полное имя
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              minLength={6}
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
            <p style={{fontSize: '12px', color: '#718096', marginTop: '4px'}}>
              Минимум 6 символов
            </p>
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
            {loading ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>

          <div style={{textAlign: 'center'}}>
            <Link href="/auth/login" style={{color: '#4ECDC4', textDecoration: 'none', fontSize: '14px'}}>
              Уже есть аккаунт? Войти
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
