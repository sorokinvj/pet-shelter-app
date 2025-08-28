'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LogosPage() {
  const [notification, setNotification] = useState(false)
  
  const showNotification = () => {
    setNotification(true)
    setTimeout(() => setNotification(false), 3000)
  }

  const svgData = {
    logo1: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="heartGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4ECDC4;stop-opacity:1" />
            </linearGradient>
        </defs>
        <path d="M20 60 C20 40, 30 35, 40 40 Q50 45, 60 40 C70 35, 80 40, 80 60 L80 75 C80 82, 75 85, 70 85 L30 85 C25 85, 20 82, 20 75 Z" 
              fill="url(#heartGradient1)" opacity="0.3"/>
        <ellipse cx="50" cy="45" rx="12" ry="8" fill="#2D3748"/>
        <ellipse cx="46" cy="42" rx="2" ry="2" fill="white"/>
        <ellipse cx="54" cy="42" rx="2" ry="2" fill="white"/>
        <ellipse cx="50" cy="48" rx="1" ry="1" fill="white"/>
        <ellipse cx="42" cy="38" rx="4" ry="6" fill="#2D3748"/>
        <ellipse cx="58" cy="38" rx="4" ry="6" fill="#2D3748"/>
        <ellipse cx="50" cy="60" rx="8" ry="12" fill="#2D3748"/>
        <ellipse cx="44" cy="70" rx="2" ry="4" fill="#2D3748"/>
        <ellipse cx="56" cy="70" rx="2" ry="4" fill="#2D3748"/>
        <path d="M58 55 Q65 50, 68 58" stroke="#2D3748" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`,
    logo2: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="heartGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FFE66D;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FF6B6B;stop-opacity:1" />
            </linearGradient>
        </defs>
        <path d="M50,25 C42,15 25,15 25,35 C25,55 50,75 50,75 C50,75 75,55 75,35 C75,15 58,15 50,25 Z" 
              fill="url(#heartGradient2)"/>
        <rect x="42" y="50" width="16" height="20" rx="2" fill="white" opacity="0.9"/>
        <rect x="48" y="56" width="4" height="8" fill="#4ECDC4"/>
        <circle cx="46" cy="60" r="1" fill="#4ECDC4"/>
        <ellipse cx="50" cy="40" rx="6" ry="4" fill="#2D3748"/>
        <ellipse cx="48" cy="38" rx="1" ry="1" fill="white"/>
        <ellipse cx="52" cy="38" rx="1" ry="1" fill="white"/>
        <ellipse cx="46" cy="36" rx="2" ry="3" fill="#2D3748"/>
        <ellipse cx="54" cy="36" rx="2" ry="3" fill="#2D3748"/>
    </svg>`
  }
  
  const copySVG = (logoId: keyof typeof svgData) => {
    const svgCode = svgData[logoId]
    navigator.clipboard.writeText(svgCode).then(() => {
      showNotification()
    })
  }
  
  const downloadSVG = (logoId: keyof typeof svgData, filename: string) => {
    const svgCode = svgData[logoId]
    const blob = new Blob([svgCode], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}-logo.svg`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    
    URL.revokeObjectURL(url)
  }

  return (
    <main style={{fontFamily: "'Inter', sans-serif", lineHeight: 1.6, color: '#2D3748', background: '#F7FAFC', padding: '40px 20px'}}>
      {notification && (
        <div style={{position: 'fixed', top: '20px', right: '20px', background: '#68D391', color: 'white', padding: '12px 20px', borderRadius: '8px', transform: notification ? 'translateX(0)' : 'translateX(400px)', transition: 'transform 0.3s ease', zIndex: 1000}}>
          SVG скопирован в буфер обмена!
        </div>
      )}

      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <h1 style={{fontSize: '36px', fontWeight: '700', color: '#2D3748', marginBottom: '16px'}}>Логотипы Приюта Эвакуированных Лап</h1>
          <p style={{fontSize: '18px', color: '#718096', maxWidth: '600px', margin: '0 auto'}}>Коллекция логотипов в различных стилях и вариациях для всех потребностей бренда</p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px'}}>
          {/* Logo 1: Защищающие руки */}
          <div style={{background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
            <div style={{marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px'}}>
              <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heartGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#FF6B6B', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#4ECDC4', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* Защищающие руки */}
                <path d="M20 60 C20 40, 30 35, 40 40 Q50 45, 60 40 C70 35, 80 40, 80 60 L80 75 C80 82, 75 85, 70 85 L30 85 C25 85, 20 82, 20 75 Z" 
                      fill="url(#heartGradient1)" opacity="0.3"/>
                
                {/* Собака в центре */}
                <ellipse cx="50" cy="45" rx="12" ry="8" fill="#2D3748"/>
                <ellipse cx="46" cy="42" rx="2" ry="2" fill="white"/>
                <ellipse cx="54" cy="42" rx="2" ry="2" fill="white"/>
                <ellipse cx="50" cy="48" rx="1" ry="1" fill="white"/>
                
                {/* Уши */}
                <ellipse cx="42" cy="38" rx="4" ry="6" fill="#2D3748"/>
                <ellipse cx="58" cy="38" rx="4" ry="6" fill="#2D3748"/>
                
                {/* Тело */}
                <ellipse cx="50" cy="60" rx="8" ry="12" fill="#2D3748"/>
                
                {/* Лапы */}
                <ellipse cx="44" cy="70" rx="2" ry="4" fill="#2D3748"/>
                <ellipse cx="56" cy="70" rx="2" ry="4" fill="#2D3748"/>
                
                {/* Хвост */}
                <path d="M58 55 Q65 50, 68 58" stroke="#2D3748" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#2D3748'}}>Защищающие руки</div>
            <div style={{fontSize: '14px', color: '#718096', marginBottom: '20px', lineHeight: 1.5}}>Собака в защищающих руках символизирует заботу и спасение</div>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button onClick={() => copySVG('logo1')} style={{padding: '8px 16px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s', background: '#FFE66D', color: '#744210'}}>Копировать SVG</button>
              <button onClick={() => downloadSVG('logo1', 'protective-hands')} style={{padding: '8px 16px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s', background: '#4ECDC4', color: 'white'}}>Скачать</button>
            </div>
          </div>

          {/* Logo 2: Сердце-дом */}
          <div style={{background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
            <div style={{marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px'}}>
              <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heartGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#FFE66D', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#FF6B6B', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* Сердце-дом */}
                <path d="M50,25 C42,15 25,15 25,35 C25,55 50,75 50,75 C50,75 75,55 75,35 C75,15 58,15 50,25 Z" 
                      fill="url(#heartGradient2)"/>
                
                {/* Окно-дверь */}
                <rect x="42" y="50" width="16" height="20" rx="2" fill="white" opacity="0.9"/>
                <rect x="48" y="56" width="4" height="8" fill="#4ECDC4"/>
                <circle cx="46" cy="60" r="1" fill="#4ECDC4"/>
                
                {/* Собачка в окне */}
                <ellipse cx="50" cy="40" rx="6" ry="4" fill="#2D3748"/>
                <ellipse cx="48" cy="38" rx="1" ry="1" fill="white"/>
                <ellipse cx="52" cy="38" rx="1" ry="1" fill="white"/>
                <ellipse cx="46" cy="36" rx="2" ry="3" fill="#2D3748"/>
                <ellipse cx="54" cy="36" rx="2" ry="3" fill="#2D3748"/>
              </svg>
            </div>
            <div style={{fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#2D3748'}}>Сердце-дом</div>
            <div style={{fontSize: '14px', color: '#718096', marginBottom: '20px', lineHeight: 1.5}}>Дом в форме сердца символизирует любовь и новый дом</div>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button onClick={() => copySVG('logo2')} style={{padding: '8px 16px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s', background: '#FFE66D', color: '#744210'}}>Копировать SVG</button>
              <button onClick={() => downloadSVG('logo2', 'heart-home')} style={{padding: '8px 16px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s', background: '#4ECDC4', color: 'white'}}>Скачать</button>
            </div>
          </div>

          {/* Эмодзи версия */}
          <div style={{background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
            <div style={{marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px'}}>
              <div style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px'}}>🐕</div>
            </div>
            <div style={{fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#2D3748'}}>Эмодзи версия</div>
            <div style={{fontSize: '14px', color: '#718096', marginBottom: '20px', lineHeight: 1.5}}>Простая версия с эмодзи для быстрого использования</div>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button style={{padding: '8px 16px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s', background: '#FFE66D', color: '#744210'}}>Использовать</button>
              <button style={{padding: '8px 16px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s', background: '#4ECDC4', color: 'white'}}>Копировать</button>
            </div>
          </div>
        </div>

        <div style={{marginTop: '60px'}}>
          <h2 style={{fontSize: '28px', fontWeight: '700', textAlign: 'center', marginBottom: '40px', color: '#2D3748'}}>Вариации основного логотипа</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px'}}>
            {/* Полноцветный */}
            <div style={{background: 'white', borderRadius: '16px', padding: '30px 20px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', textAlign: 'center'}}>
              <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#FF6B6B', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#4ECDC4', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <path d="M20 60 C20 40, 30 35, 40 40 Q50 45, 60 40 C70 35, 80 40, 80 60 L80 75 C80 82, 75 85, 70 85 L30 85 C25 85, 20 82, 20 75 Z" 
                      fill="url(#mainGradient)" opacity="0.3"/>
                <ellipse cx="50" cy="45" rx="12" ry="8" fill="#2D3748"/>
                <ellipse cx="46" cy="42" rx="2" ry="2" fill="white"/>
                <ellipse cx="54" cy="42" rx="2" ry="2" fill="white"/>
                <ellipse cx="42" cy="38" rx="4" ry="6" fill="#2D3748"/>
                <ellipse cx="58" cy="38" rx="4" ry="6" fill="#2D3748"/>
                <ellipse cx="50" cy="60" rx="8" ry="12" fill="#2D3748"/>
              </svg>
              <div style={{fontSize: '16px', fontWeight: '500', marginTop: '16px'}}>Полноцветный</div>
            </div>

            {/* Монохромный темный */}
            <div style={{background: 'white', borderRadius: '16px', padding: '30px 20px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', textAlign: 'center'}}>
              <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 60 C20 40, 30 35, 40 40 Q50 45, 60 40 C70 35, 80 40, 80 60 L80 75 C80 82, 75 85, 70 85 L30 85 C25 85, 20 82, 20 75 Z" 
                      fill="#2D3748" opacity="0.3"/>
                <ellipse cx="50" cy="45" rx="12" ry="8" fill="#2D3748"/>
                <ellipse cx="46" cy="42" rx="2" ry="2" fill="white"/>
                <ellipse cx="54" cy="42" rx="2" ry="2" fill="white"/>
                <ellipse cx="42" cy="38" rx="4" ry="6" fill="#2D3748"/>
                <ellipse cx="58" cy="38" rx="4" ry="6" fill="#2D3748"/>
                <ellipse cx="50" cy="60" rx="8" ry="12" fill="#2D3748"/>
              </svg>
              <div style={{fontSize: '16px', fontWeight: '500', marginTop: '16px'}}>Монохромный</div>
            </div>

            {/* Для темного фона */}
            <div style={{background: '#2D3748', borderRadius: '16px', padding: '30px 20px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', textAlign: 'center', color: 'white'}}>
              <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 60 C20 40, 30 35, 40 40 Q50 45, 60 40 C70 35, 80 40, 80 60 L80 75 C80 82, 75 85, 70 85 L30 85 C25 85, 20 82, 20 75 Z" 
                      fill="white" opacity="0.3"/>
                <ellipse cx="50" cy="45" rx="12" ry="8" fill="white"/>
                <ellipse cx="46" cy="42" rx="2" ry="2" fill="#2D3748"/>
                <ellipse cx="54" cy="42" rx="2" ry="2" fill="#2D3748"/>
                <ellipse cx="42" cy="38" rx="4" ry="6" fill="white"/>
                <ellipse cx="58" cy="38" rx="4" ry="6" fill="white"/>
                <ellipse cx="50" cy="60" rx="8" ry="12" fill="white"/>
              </svg>
              <div style={{fontSize: '16px', fontWeight: '500', marginTop: '16px'}}>Для темного фона</div>
            </div>

            {/* Контурный */}
            <div style={{background: 'white', borderRadius: '16px', padding: '30px 20px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', textAlign: 'center'}}>
              <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 60 C20 40, 30 35, 40 40 Q50 45, 60 40 C70 35, 80 40, 80 60 L80 75 C80 82, 75 85, 70 85 L30 85 C25 85, 20 82, 20 75 Z" 
                      fill="none" stroke="#FF6B6B" strokeWidth="2"/>
                <ellipse cx="50" cy="45" rx="12" ry="8" fill="none" stroke="#2D3748" strokeWidth="2"/>
                <ellipse cx="46" cy="42" rx="2" ry="2" fill="#2D3748"/>
                <ellipse cx="54" cy="42" rx="2" ry="2" fill="#2D3748"/>
                <ellipse cx="42" cy="38" rx="4" ry="6" fill="none" stroke="#2D3748" strokeWidth="2"/>
                <ellipse cx="58" cy="38" rx="4" ry="6" fill="none" stroke="#2D3748" strokeWidth="2"/>
                <ellipse cx="50" cy="60" rx="8" ry="12" fill="none" stroke="#2D3748" strokeWidth="2"/>
              </svg>
              <div style={{fontSize: '16px', fontWeight: '500', marginTop: '16px'}}>Контурный</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{padding: '40px 0', background: '#2D3748', color: 'white', textAlign: 'center', marginTop: '60px'}}>
        <div className="container">
          <p>Назад к: <Link href="/" style={{color: '#FFE66D', textDecoration: 'none'}}>Главная</Link> | <Link href="/dogs" style={{color: '#FFE66D', textDecoration: 'none'}}>Каталог собак</Link> | <Link href="/brand" style={{color: '#FFE66D', textDecoration: 'none'}}>Бренд-гайд</Link></p>
        </div>
      </div>
    </main>
  )
}
