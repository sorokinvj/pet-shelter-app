'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BrandPage() {
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <main>
      {copied && (
        <div style={{position: 'fixed', top: '20px', right: '20px', background: '#68D391', color: 'white', padding: '12px 16px', borderRadius: '8px', zIndex: 1000}}>
          Скопировано в буфер обмена!
        </div>
      )}

      <header style={{background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)', color: 'white', padding: '80px 0', textAlign: 'center'}}>
        <div className="container">
          <div style={{fontFamily: "'Caveat', cursive", fontSize: '24px', opacity: 0.9, marginBottom: '8px'}}>Руководство по стилю</div>
          <h1 style={{fontSize: '48px', fontWeight: '700', marginBottom: '16px', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>Brand Guidelines</h1>
          <p style={{fontSize: '18px', opacity: 0.95, maxWidth: '600px', margin: '0 auto'}}>Полное руководство по визуальной идентичности приюта &quot;Эвакуированных Лап&quot;</p>
        </div>
      </header>

      <nav style={{position: 'sticky', top: '0', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', zIndex: 100, padding: '16px 0'}}>
        <div className="container">
          <ul style={{display: 'flex', justifyContent: 'center', gap: '32px', listStyle: 'none', flexWrap: 'wrap'}}>
            <li><a href="#colors" style={{textDecoration: 'none', fontWeight: '500', padding: '8px 16px', borderRadius: '8px', background: '#FF6B6B', color: 'white'}}>Цвета</a></li>
            <li><a href="#typography" style={{textDecoration: 'none', color: '#718096', fontWeight: '500', padding: '8px 16px', borderRadius: '8px'}}>Типографика</a></li>
            <li><a href="#logo" style={{textDecoration: 'none', color: '#718096', fontWeight: '500', padding: '8px 16px', borderRadius: '8px'}}>Логотип</a></li>
            <li><a href="#components" style={{textDecoration: 'none', color: '#718096', fontWeight: '500', padding: '8px 16px', borderRadius: '8px'}}>Компоненты</a></li>
            <li><a href="#voice" style={{textDecoration: 'none', color: '#718096', fontWeight: '500', padding: '8px 16px', borderRadius: '8px'}}>Тон голоса</a></li>
          </ul>
        </div>
      </nav>

      <section id="colors" style={{padding: '80px 0'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Палитра бренда</div>
            <h2 className="section-title">Цветовая система</h2>
            <p className="section-description">
              Наша цветовая палитра отражает тепло, надежду и профессионализм. 
              Каждый цвет несет эмоциональную нагрузку и имеет конкретное применение.
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px'}}>
            <div style={{background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
              <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '20px', color: '#2D3748'}}>Основные цвета</h3>
              
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px', borderRadius: '12px', background: '#F7FAFC'}}>
                <div onClick={() => copyToClipboard('#FF6B6B')} style={{width: '60px', height: '60px', borderRadius: '12px', border: '2px solid #E2E8F0', cursor: 'pointer', background: '#FF6B6B'}}></div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, marginBottom: '4px'}}>Теплый коралловый</div>
                  <div onClick={() => copyToClipboard('#FF6B6B')} style={{fontFamily: "'Courier New', monospace", background: '#E2E8F0', padding: '4px 8px', borderRadius: '6px', fontSize: '14px', marginBottom: '4px', cursor: 'pointer'}}>#FF6B6B</div>
                  <div style={{fontSize: '12px', color: '#718096'}}>Основные CTA, заголовки, активные элементы</div>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px', borderRadius: '12px', background: '#F7FAFC'}}>
                <div onClick={() => copyToClipboard('#4ECDC4')} style={{width: '60px', height: '60px', borderRadius: '12px', border: '2px solid #E2E8F0', cursor: 'pointer', background: '#4ECDC4'}}></div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, marginBottom: '4px'}}>Мягкий синий</div>
                  <div onClick={() => copyToClipboard('#4ECDC4')} style={{fontFamily: "'Courier New', monospace", background: '#E2E8F0', padding: '4px 8px', borderRadius: '6px', fontSize: '14px', marginBottom: '4px', cursor: 'pointer'}}>#4ECDC4</div>
                  <div style={{fontSize: '12px', color: '#718096'}}>Вторичные кнопки, иконки, успокаивающие акценты</div>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px', borderRadius: '12px', background: '#F7FAFC'}}>
                <div onClick={() => copyToClipboard('#FFE66D')} style={{width: '60px', height: '60px', borderRadius: '12px', border: '2px solid #E2E8F0', cursor: 'pointer', background: '#FFE66D'}}></div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, marginBottom: '4px'}}>Солнечный желтый</div>
                  <div onClick={() => copyToClipboard('#FFE66D')} style={{fontFamily: "'Courier New', monospace", background: '#E2E8F0', padding: '4px 8px', borderRadius: '6px', fontSize: '14px', marginBottom: '4px', cursor: 'pointer'}}>#FFE66D</div>
                  <div style={{fontSize: '12px', color: '#718096'}}>Символ надежды, позитивные новости, выделения</div>
                </div>
              </div>
            </div>
            
            <div style={{background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
              <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '20px', color: '#2D3748'}}>Нейтральные цвета</h3>
              
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px', borderRadius: '12px', background: '#F7FAFC'}}>
                <div onClick={() => copyToClipboard('#2D3748')} style={{width: '60px', height: '60px', borderRadius: '12px', border: '2px solid #E2E8F0', cursor: 'pointer', background: '#2D3748'}}></div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, marginBottom: '4px'}}>Темно-серый</div>
                  <div onClick={() => copyToClipboard('#2D3748')} style={{fontFamily: "'Courier New', monospace", background: '#E2E8F0', padding: '4px 8px', borderRadius: '6px', fontSize: '14px', marginBottom: '4px', cursor: 'pointer'}}>#2D3748</div>
                  <div style={{fontSize: '12px', color: '#718096'}}>Основной текст, серьезная информация</div>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px', borderRadius: '12px', background: '#F7FAFC'}}>
                <div onClick={() => copyToClipboard('#718096')} style={{width: '60px', height: '60px', borderRadius: '12px', border: '2px solid #E2E8F0', cursor: 'pointer', background: '#718096'}}></div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, marginBottom: '4px'}}>Средний серый</div>
                  <div onClick={() => copyToClipboard('#718096')} style={{fontFamily: "'Courier New', monospace", background: '#E2E8F0', padding: '4px 8px', borderRadius: '6px', fontSize: '14px', marginBottom: '4px', cursor: 'pointer'}}>#718096</div>
                  <div style={{fontSize: '12px', color: '#718096'}}>Вторичный текст, даты, подписи</div>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px', borderRadius: '12px', background: '#F7FAFC'}}>
                <div onClick={() => copyToClipboard('#F7FAFC')} style={{width: '60px', height: '60px', borderRadius: '12px', border: '2px solid #E2E8F0', cursor: 'pointer', background: '#F7FAFC'}}></div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, marginBottom: '4px'}}>Светло-серый</div>
                  <div onClick={() => copyToClipboard('#F7FAFC')} style={{fontFamily: "'Courier New', monospace", background: '#E2E8F0', padding: '4px 8px', borderRadius: '6px', fontSize: '14px', marginBottom: '4px', cursor: 'pointer'}}>#F7FAFC</div>
                  <div style={{fontSize: '12px', color: '#718096'}}>Фон страниц, нейтральные зоны</div>
                </div>
              </div>
            </div>

            <div style={{background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
              <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '20px', color: '#2D3748'}}>Специальные цвета</h3>
              
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px', borderRadius: '12px', background: '#F7FAFC'}}>
                <div onClick={() => copyToClipboard('#68D391')} style={{width: '60px', height: '60px', borderRadius: '12px', border: '2px solid #E2E8F0', cursor: 'pointer', background: '#68D391'}}></div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, marginBottom: '4px'}}>Зеленый надежды</div>
                  <div onClick={() => copyToClipboard('#68D391')} style={{fontFamily: "'Courier New', monospace", background: '#E2E8F0', padding: '4px 8px', borderRadius: '6px', fontSize: '14px', marginBottom: '4px', cursor: 'pointer'}}>#68D391</div>
                  <div style={{fontSize: '12px', color: '#718096'}}>"Дом найден", выздоровление, адаптация</div>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px', borderRadius: '12px', background: '#F7FAFC'}}>
                <div onClick={() => copyToClipboard('#B794F6')} style={{width: '60px', height: '60px', borderRadius: '12px', border: '2px solid #E2E8F0', cursor: 'pointer', background: '#B794F6'}}></div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, marginBottom: '4px'}}>Мягкий фиолетовый</div>
                  <div onClick={() => copyToClipboard('#B794F6')} style={{fontFamily: "'Courier New', monospace", background: '#E2E8F0', padding: '4px 8px', borderRadius: '6px', fontSize: '14px', marginBottom: '4px', cursor: 'pointer'}}>#B794F6</div>
                  <div style={{fontSize: '12px', color: '#718096'}}>Особые потребности, реабилитация</div>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', padding: '12px', borderRadius: '12px', background: '#F7FAFC'}}>
                <div onClick={() => copyToClipboard('#F7E6D3')} style={{width: '60px', height: '60px', borderRadius: '12px', border: '2px solid #E2E8F0', cursor: 'pointer', background: '#F7E6D3'}}></div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, marginBottom: '4px'}}>Теплый бежевый</div>
                  <div onClick={() => copyToClipboard('#F7E6D3')} style={{fontFamily: "'Courier New', monospace", background: '#E2E8F0', padding: '4px 8px', borderRadius: '6px', fontSize: '14px', marginBottom: '4px', cursor: 'pointer'}}>#F7E6D3</div>
                  <div style={{fontSize: '12px', color: '#718096'}}>Комфорт, безопасность, новый дом</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="typography" style={{padding: '80px 0', background: 'white'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Шрифтовая система</div>
            <h2 className="section-title">Типографика</h2>
            <p className="section-description">
              Используем современный Inter для основного текста и теплый Caveat для эмоциональных акцентов
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
            <div style={{background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
              <div style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Inter - Основной шрифт</div>
              <div style={{marginBottom: '16px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{fontSize: '12px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px'}}>H1 - 48px / 700</div>
                <div style={{fontSize: '48px', fontWeight: '700'}}>Спасенные герои</div>
              </div>
              <div style={{marginBottom: '16px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{fontSize: '12px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px'}}>H2 - 36px / 600</div>
                <div style={{fontSize: '36px', fontWeight: '600'}}>Ищут новый дом</div>
              </div>
              <div style={{marginBottom: '16px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{fontSize: '12px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px'}}>H3 - 24px / 600</div>
                <div style={{fontSize: '24px', fontWeight: '600'}}>Наши подопечные</div>
              </div>
              <div style={{marginBottom: '16px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{fontSize: '12px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px'}}>Body - 16px / 400</div>
                <div style={{fontSize: '16px', fontWeight: '400'}}>Каждая собака в нашем приюте — это история стойкости, надежды и невероятной способности к любви.</div>
              </div>
            </div>
            
            <div style={{background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
              <div style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Caveat - Акцентный шрифт</div>
              <div style={{marginBottom: '16px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{fontSize: '12px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px'}}>Эмоциональные заголовки - 24px</div>
                <div style={{fontFamily: "'Caveat', cursive", fontSize: '24px'}}>"Каждый заслуживает второй шанс"</div>
              </div>
              <div style={{marginBottom: '16px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{fontSize: '12px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px'}}>Цитаты и истории</div>
                <div style={{fontFamily: "'Caveat', cursive", fontSize: '24px'}}>"Я готов дарить всю свою любовь новой семье"</div>
              </div>
              <div style={{marginBottom: '16px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{fontSize: '12px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px'}}>Теплые послания</div>
                <div style={{fontFamily: "'Caveat', cursive", fontSize: '24px'}}>"Спасибо за то, что даете нам надежду"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="components" style={{padding: '80px 0'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">UI Элементы</div>
            <h2 className="section-title">Компоненты</h2>
            <p className="section-description">
              Основные элементы интерфейса с примерами использования
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
            <div style={{background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
              <div style={{fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Кнопки</div>
              <button className="btn btn-primary" style={{margin: '8px'}}>💕 Хочу познакомиться</button>
              <button className="btn btn-secondary" style={{margin: '8px'}}>Узнать больше</button>
              <div style={{marginTop: '16px', fontSize: '14px', color: '#718096'}}>
                Основная кнопка для ключевых действий, вторичная - для дополнительных
              </div>
            </div>
            
            <div style={{background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
              <div style={{fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Статусы собак</div>
              <div style={{marginBottom: '8px'}}>
                <span className="dog-status status-ready">🟢 Готов к семье</span>
              </div>
              <div style={{marginBottom: '8px'}}>
                <span className="dog-status status-adapting">🟡 Адаптируется</span>
              </div>
              <div style={{marginBottom: '16px'}}>
                <span className="dog-status status-special">🟣 Особые потребности</span>
              </div>
              <div style={{fontSize: '14px', color: '#718096'}}>
                Цветовая кодировка помогает быстро понять статус животного
              </div>
            </div>
            
            <div style={{background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
              <div style={{fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Карточка собаки</div>
              <div className="dog-card">
                <div className="dog-image" style={{height: '120px', fontSize: '32px'}}>🐕</div>
                <div style={{fontWeight: '600', marginBottom: '4px'}}>Барон, 3 года</div>
                <span className="dog-status status-ready">🟢 Готов к семье</span>
                <div style={{fontSize: '14px', color: '#718096', margin: '8px 0'}}>
                  Благородный пес, который обожает долгие прогулки...
                </div>
                <button className="btn btn-primary" style={{margin: '0', padding: '8px 16px', fontSize: '14px'}}>Познакомиться</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="voice" style={{padding: '80px 0', background: 'white'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Как мы говорим</div>
            <h2 className="section-title">Тон голоса</h2>
            <p className="section-description">
              Наша коммуникация строится на принципах достоинства, надежды и уважения
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px'}}>
            <div style={{background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', borderLeft: '4px solid #68D391'}}>
              <h3 style={{color: '#68D391', marginBottom: '16px'}}>✅ Правильно</h3>
              <div style={{marginBottom: '12px', padding: '12px', borderRadius: '8px', background: '#F7FAFC', borderLeft: '3px solid #68D391'}}>
                <strong>"Спасенные собаки"</strong><br />
                вместо "бездомные"
              </div>
              <div style={{marginBottom: '12px', padding: '12px', borderRadius: '8px', background: '#F7FAFC', borderLeft: '3px solid #68D391'}}>
                <strong>"Ищет семью"</strong><br />
                вместо "нуждается в доме"
              </div>
              <div style={{marginBottom: '12px', padding: '12px', borderRadius: '8px', background: '#F7FAFC', borderLeft: '3px solid #68D391'}}>
                <strong>"Пережил трудности"</strong><br />
                вместо "пострадал"
              </div>
              <div style={{marginBottom: '12px', padding: '12px', borderRadius: '8px', background: '#F7FAFC', borderLeft: '3px solid #68D391'}}>
                <strong>"Герой"</strong><br />
                вместо "жертва"
              </div>
            </div>
            
            <div style={{background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', borderLeft: '4px solid #FC8181'}}>
              <h3 style={{color: '#FC8181', marginBottom: '16px'}}>❌ Неправильно</h3>
              <div style={{marginBottom: '12px', padding: '12px', borderRadius: '8px', background: '#F7FAFC', borderLeft: '3px solid #FC8181'}}>
                Подробности о травмирующих событиях
              </div>
              <div style={{marginBottom: '12px', padding: '12px', borderRadius: '8px', background: '#F7FAFC', borderLeft: '3px solid #FC8181'}}>
                Слово "брошенный" (хозяева могли погибнуть)
              </div>
              <div style={{marginBottom: '12px', padding: '12px', borderRadius: '8px', background: '#F7FAFC', borderLeft: '3px solid #FC8181'}}>
                Драматичные описания прошлого
              </div>
              <div style={{marginBottom: '12px', padding: '12px', borderRadius: '8px', background: '#F7FAFC', borderLeft: '3px solid #FC8181'}}>
                Жалостливые формулировки
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{padding: '40px 0', background: '#2D3748', color: 'white', textAlign: 'center'}}>
        <div className="container">
          <p>Назад к: <Link href="/" style={{color: '#FFE66D', textDecoration: 'none'}}>Главная</Link> | <Link href="/dogs" style={{color: '#FFE66D', textDecoration: 'none'}}>Каталог собак</Link> | <Link href="/logos" style={{color: '#FFE66D', textDecoration: 'none'}}>Логотипы</Link></p>
        </div>
      </div>
    </main>
  )
}
