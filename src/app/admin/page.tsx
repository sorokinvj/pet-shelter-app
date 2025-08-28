import { createClient } from '../../../lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminDashboard() {
  const supabase = createClient()
  
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const handleSignOut = async () => {
    'use server'
    const supabase = createClient()
    await supabase.auth.signOut()
    redirect('/auth/login')
  }

  return (
    <main style={{minHeight: '100vh', background: '#F7FAFC'}}>
      {/* Header */}
      <header style={{background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '16px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{width: '40px', height: '40px', background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px'}}>🐕</div>
            <div>
              <h1 style={{fontSize: '20px', fontWeight: '700', color: '#2D3748', margin: 0}}>Админ-панель</h1>
              <p style={{fontSize: '14px', color: '#718096', margin: 0}}>Приют Эвакуированных Лап</p>
            </div>
          </div>
          
          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <span style={{color: '#718096', fontSize: '14px'}}>
              Добро пожаловать, {user.user_metadata?.full_name || user.email}
            </span>
            <form action={handleSignOut}>
              <button
                type="submit"
                style={{
                  padding: '8px 16px',
                  background: '#F7FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#718096',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Выйти
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '32px 16px'}}>
        {/* Stats */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '48px'}}>
          <div style={{background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
              <div style={{width: '40px', height: '40px', background: '#FF6B6B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>🐕</div>
              <div>
                <div style={{fontSize: '24px', fontWeight: '700', color: '#2D3748'}}>156</div>
                <div style={{fontSize: '14px', color: '#718096'}}>Собак спасено</div>
              </div>
            </div>
          </div>

          <div style={{background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
              <div style={{width: '40px', height: '40px', background: '#68D391', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>🏠</div>
              <div>
                <div style={{fontSize: '24px', fontWeight: '700', color: '#2D3748'}}>89</div>
                <div style={{fontSize: '14px', color: '#718096'}}>Нашли дом</div>
              </div>
            </div>
          </div>

          <div style={{background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
              <div style={{width: '40px', height: '40px', background: '#4ECDC4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>📝</div>
              <div>
                <div style={{fontSize: '24px', fontWeight: '700', color: '#2D3748'}}>12</div>
                <div style={{fontSize: '14px', color: '#718096'}}>Заявок на усыновление</div>
              </div>
            </div>
          </div>

          <div style={{background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
              <div style={{width: '40px', height: '40px', background: '#FFE66D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#744210'}}>📖</div>
              <div>
                <div style={{fontSize: '24px', fontWeight: '700', color: '#2D3748'}}>8</div>
                <div style={{fontSize: '14px', color: '#718096'}}>Статей в блоге</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
          <div style={{background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Управление животными</h3>
            <p style={{color: '#718096', marginBottom: '20px'}}>Добавляйте новых подопечных, редактируйте информацию о них</p>
            <div style={{display: 'flex', gap: '12px'}}>
              <button style={{
                padding: '12px 24px',
                background: '#FF6B6B',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Добавить собаку
              </button>
              <button style={{
                padding: '12px 24px',
                background: 'transparent',
                color: '#4ECDC4',
                border: '2px solid #4ECDC4',
                borderRadius: '8px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Список животных
              </button>
            </div>
          </div>

          <div style={{background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Блог и новости</h3>
            <p style={{color: '#718096', marginBottom: '20px'}}>Публикуйте истории успеха и новости приюта</p>
            <div style={{display: 'flex', gap: '12px'}}>
              <button style={{
                padding: '12px 24px',
                background: '#4ECDC4',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Новая статья
              </button>
              <button style={{
                padding: '12px 24px',
                background: 'transparent',
                color: '#FF6B6B',
                border: '2px solid #FF6B6B',
                borderRadius: '8px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Все статьи
              </button>
            </div>
          </div>

          <div style={{background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Заявки на усыновление</h3>
            <p style={{color: '#718096', marginBottom: '20px'}}>Обрабатывайте заявки от потенциальных хозяев</p>
            <div style={{display: 'flex', gap: '12px'}}>
              <button style={{
                padding: '12px 24px',
                background: '#68D391',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Новые заявки (3)
              </button>
            </div>
          </div>

          <div style={{background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Настройки</h3>
            <p style={{color: '#718096', marginBottom: '20px'}}>Управляйте контактами, пользователями и настройками сайта</p>
            <div style={{display: 'flex', gap: '12px'}}>
              <button style={{
                padding: '12px 24px',
                background: 'transparent',
                color: '#718096',
                border: '2px solid #E2E8F0',
                borderRadius: '8px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Открыть настройки
              </button>
            </div>
          </div>
        </div>

        {/* Back to site */}
        <div style={{textAlign: 'center', marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #E2E8F0'}}>
          <Link href="/" style={{color: '#4ECDC4', textDecoration: 'none', fontWeight: '500'}}>
            ← Вернуться на сайт
          </Link>
        </div>
      </div>
    </main>
  )
}
