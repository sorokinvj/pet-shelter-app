import Link from 'next/link'

export default function DogsPage() {
  return (
    <main>
      <header>
        <nav className="container">
          <Link href="/" className="logo">
            <div className="logo-icon">🐕</div>
            <span>Приют Эвакуированных Лап</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/dogs" style={{color: '#FF6B6B'}}>Наши собаки</Link></li>
            <li><Link href="/brand">Бренд-гайд</Link></li>
            <li><Link href="/logos">Логотипы</Link></li>
            <li><Link href="/contact">Контакты</Link></li>
          </ul>
          <Link href="/dogs" className="btn btn-primary">Помочь</Link>
        </nav>
      </header>

      <div style={{background: 'white', padding: '16px 0', borderBottom: '1px solid #E2E8F0'}}>
        <div className="container">
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px'}}>
            <Link href="/" style={{color: '#718096', textDecoration: 'none'}}>Главная</Link>
            <span style={{color: '#CBD5E0'}}>→</span>
            <span>Наши собаки</span>
          </div>
        </div>
      </div>

      <section className="hero" style={{padding: '48px 0'}}>
        <div className="container">
          <div className="subtitle">Знакомьтесь с нашими героями</div>
          <h1>Собаки ищут дом</h1>
        </div>
      </section>

      <section style={{background: 'white', padding: '24px 0', borderBottom: '1px solid #E2E8F0'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
            <div style={{color: '#718096', fontSize: '14px'}}>Найдено: 6 собак</div>
            <button style={{background: 'none', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '8px', color: '#4ECDC4'}}>
              🔍 Фильтры
            </button>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
            <div>
              <label style={{display: 'block', fontWeight: '500', marginBottom: '8px', color: '#2D3748'}}>Статус</label>
              <select style={{width: '100%', padding: '10px 12px', border: '2px solid #E2E8F0', borderRadius: '8px'}}>
                <option>Все статусы</option>
                <option>Готов к семье</option>
                <option>Адаптируется</option>
                <option>Особые потребности</option>
              </select>
            </div>
            
            <div>
              <label style={{display: 'block', fontWeight: '500', marginBottom: '8px', color: '#2D3748'}}>Возраст</label>
              <select style={{width: '100%', padding: '10px 12px', border: '2px solid #E2E8F0', borderRadius: '8px'}}>
                <option>Любой возраст</option>
                <option>Щенок (до 1 года)</option>
                <option>Молодой (1-3 года)</option>
                <option>Взрослый (3-7 лет)</option>
                <option>Пожилой (7+ лет)</option>
              </select>
            </div>
            
            <div>
              <label style={{display: 'block', fontWeight: '500', marginBottom: '8px', color: '#2D3748'}}>Размер</label>
              <select style={{width: '100%', padding: '10px 12px', border: '2px solid #E2E8F0', borderRadius: '8px'}}>
                <option>Любой размер</option>
                <option>Маленький (до 10 кг)</option>
                <option>Средний (10-25 кг)</option>
                <option>Крупный (25+ кг)</option>
              </select>
            </div>
            
            <div>
              <label style={{display: 'block', fontWeight: '500', marginBottom: '8px', color: '#2D3748'}}>Пол</label>
              <select style={{width: '100%', padding: '10px 12px', border: '2px solid #E2E8F0', borderRadius: '8px'}}>
                <option>Любой</option>
                <option>Мальчик</option>
                <option>Девочка</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="dogs-section">
        <div className="container">
          <div className="dogs-grid">
            <div className="dog-card">
              <div className="dog-image" style={{position: 'relative'}}>
                🐕
                <div style={{position: 'absolute', top: '12px', right: '12px', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', background: 'rgba(104, 211, 145, 0.9)', color: 'white'}}>
                  🟢 Готов к семье
                </div>
              </div>
              <div style={{padding: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                  <div>
                    <div className="dog-name">Барон</div>
                    <div style={{color: '#718096', fontSize: '14px'}}>3 года, мальчик</div>
                  </div>
                  <button style={{background: '#F7FAFC', border: '2px solid #E2E8F0', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>♡</button>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px'}}>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Активный</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Умный</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Крупный</span>
                </div>
                <p className="dog-description">Благородный и умный пес, который обожает долгие прогулки и уже научился играть с мячиком.</p>
                <div style={{display: 'flex', gap: '12px'}}>
                  <Link href="/dogs/baron" className="btn btn-primary" style={{padding: '8px 16px', fontSize: '14px'}}>Познакомиться</Link>
                  <button className="btn btn-secondary" style={{padding: '8px 16px', fontSize: '14px'}}>В избранное</button>
                </div>
              </div>
            </div>
            
            <div className="dog-card" style={{opacity: 0.6, pointerEvents: 'none'}}>
              <div className="dog-image" style={{position: 'relative'}}>
                🐕‍🦺
                <div style={{position: 'absolute', top: '12px', right: '12px', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', background: 'rgba(255, 230, 109, 0.9)', color: '#744210'}}>
                  🟡 Адаптируется
                </div>
              </div>
              <div style={{padding: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                  <div>
                    <div className="dog-name">Лада</div>
                    <div style={{color: '#718096', fontSize: '14px'}}>2 года, девочка</div>
                  </div>
                  <button style={{background: '#FF6B6B', border: '2px solid #FF6B6B', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', opacity: 0.5}}>♥</button>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px'}}>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Ласковая</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Спокойная</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Средняя</span>
                </div>
                <p className="dog-description">Нежная и ласковая девочка, которая каждый день открывает для себя радости мирной жизни.</p>
                <div style={{display: 'flex', gap: '12px'}}>
                  <button className="btn btn-primary" style={{padding: '8px 16px', fontSize: '14px', opacity: 0.5, cursor: 'not-allowed'}} disabled>Скоро доступно</button>
                  <button className="btn btn-secondary" style={{padding: '8px 16px', fontSize: '14px', opacity: 0.5, cursor: 'not-allowed'}} disabled>В избранное</button>
                </div>
              </div>
            </div>

            <div className="dog-card" style={{opacity: 0.6, pointerEvents: 'none'}}>
              <div className="dog-image" style={{position: 'relative'}}>
                🦮
                <div style={{position: 'absolute', top: '12px', right: '12px', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', background: 'rgba(183, 148, 246, 0.9)', color: 'white'}}>
                  🟣 Особые потребности
                </div>
              </div>
              <div style={{padding: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                  <div>
                    <div className="dog-name">Рекс</div>
                    <div style={{color: '#718096', fontSize: '14px'}}>5 лет, мальчик</div>
                  </div>
                  <button style={{background: '#F7FAFC', border: '2px solid #E2E8F0', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5}}>♡</button>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px'}}>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Мудрый</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Спокойный</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Крупный</span>
                </div>
                <p className="dog-description">Мудрый и спокойный пес, который будет идеальным компаньоном для тихих семей.</p>
                <div style={{display: 'flex', gap: '12px'}}>
                  <button className="btn btn-primary" style={{padding: '8px 16px', fontSize: '14px', opacity: 0.5, cursor: 'not-allowed'}} disabled>Скоро доступно</button>
                  <button className="btn btn-secondary" style={{padding: '8px 16px', fontSize: '14px', opacity: 0.5, cursor: 'not-allowed'}} disabled>В избранное</button>
                </div>
              </div>
            </div>

            <div className="dog-card" style={{opacity: 0.6, pointerEvents: 'none'}}>
              <div className="dog-image" style={{position: 'relative'}}>
                🐶
                <div style={{position: 'absolute', top: '12px', right: '12px', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', background: 'rgba(104, 211, 145, 0.9)', color: 'white'}}>
                  🟢 Готов к семье
                </div>
              </div>
              <div style={{padding: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                  <div>
                    <div className="dog-name">Майя</div>
                    <div style={{color: '#718096', fontSize: '14px'}}>1 год, девочка</div>
                  </div>
                  <button style={{background: '#F7FAFC', border: '2px solid #E2E8F0', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5}}>♡</button>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px'}}>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Игривая</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Энергичная</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Маленькая</span>
                </div>
                <p className="dog-description">Молодая и жизнерадостная собачка, которая готова стать лучшим другом для активной семьи.</p>
                <div style={{display: 'flex', gap: '12px'}}>
                  <button className="btn btn-primary" style={{padding: '8px 16px', fontSize: '14px', opacity: 0.5, cursor: 'not-allowed'}} disabled>Скоро доступно</button>
                  <button className="btn btn-secondary" style={{padding: '8px 16px', fontSize: '14px', opacity: 0.5, cursor: 'not-allowed'}} disabled>В избранное</button>
                </div>
              </div>
            </div>

            <div className="dog-card" style={{opacity: 0.6, pointerEvents: 'none'}}>
              <div className="dog-image" style={{position: 'relative'}}>
                🐕‍🦺
                <div style={{position: 'absolute', top: '12px', right: '12px', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', background: 'rgba(255, 230, 109, 0.9)', color: '#744210'}}>
                  🟡 Адаптируется
                </div>
              </div>
              <div style={{padding: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                  <div>
                    <div className="dog-name">Граф</div>
                    <div style={{color: '#718096', fontSize: '14px'}}>4 года, мальчик</div>
                  </div>
                  <button style={{background: '#F7FAFC', border: '2px solid #E2E8F0', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5}}>♡</button>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px'}}>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Благородный</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Осторожный</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Средний</span>
                </div>
                <p className="dog-description">Элегантный пес с аристократическими манерами. Постепенно учится доверять людям.</p>
                <div style={{display: 'flex', gap: '12px'}}>
                  <button className="btn btn-primary" style={{padding: '8px 16px', fontSize: '14px', opacity: 0.5, cursor: 'not-allowed'}} disabled>Скоро доступно</button>
                  <button className="btn btn-secondary" style={{padding: '8px 16px', fontSize: '14px', opacity: 0.5, cursor: 'not-allowed'}} disabled>В избранное</button>
                </div>
              </div>
            </div>

            <div className="dog-card" style={{opacity: 0.6, pointerEvents: 'none'}}>
              <div className="dog-image" style={{position: 'relative'}}>
                🐕
                <div style={{position: 'absolute', top: '12px', right: '12px', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', background: 'rgba(104, 211, 145, 0.9)', color: 'white'}}>
                  🟢 Готов к семье
                </div>
              </div>
              <div style={{padding: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                  <div>
                    <div className="dog-name">Белла</div>
                    <div style={{color: '#718096', fontSize: '14px'}}>3 года, девочка</div>
                  </div>
                  <button style={{background: '#F7FAFC', border: '2px solid #E2E8F0', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5}}>♡</button>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px'}}>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Дружелюбная</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Общительная</span>
                  <span style={{background: '#F7FAFC', color: '#718096', padding: '4px 8px', borderRadius: '8px', fontSize: '12px'}}>Средняя</span>
                </div>
                <p className="dog-description">Социальная и дружелюбная собака, которая легко находит общий язык с людьми и другими животными.</p>
                <div style={{display: 'flex', gap: '12px'}}>
                  <button className="btn btn-primary" style={{padding: '8px 16px', fontSize: '14px', opacity: 0.5, cursor: 'not-allowed'}} disabled>Скоро доступно</button>
                  <button className="btn btn-secondary" style={{padding: '8px 16px', fontSize: '14px', opacity: 0.5, cursor: 'not-allowed'}} disabled>В избранное</button>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '48px'}}>
            <button style={{padding: '10px 14px', border: '1px solid #E2E8F0', background: 'white', color: '#718096', borderRadius: '8px', opacity: '0.5'}}>← Предыдущая</button>
            <button style={{padding: '10px 14px', border: '1px solid #FF6B6B', background: '#FF6B6B', color: 'white', borderRadius: '8px'}}>1</button>
            <button style={{padding: '10px 14px', border: '1px solid #E2E8F0', background: 'white', color: '#718096', borderRadius: '8px'}}>2</button>
            <button style={{padding: '10px 14px', border: '1px solid #E2E8F0', background: 'white', color: '#718096', borderRadius: '8px'}}>Следующая →</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Контакты</h3>
              <a href="tel:+7-xxx-xxx-xxxx">+7 (XXX) XXX-XX-XX</a>
              <a href="mailto:info@evacuatedpaws.ru">info@evacuatedpaws.ru</a>
            </div>
            
            <div className="footer-section">
              <h3>Разделы</h3>
              <Link href="/dogs">Наши собаки</Link>
              <Link href="/brand">Бренд-гайд</Link>
              <Link href="/logos">Логотипы</Link>
            </div>
            
            <div className="footer-section">
              <h3>Демо-страницы</h3>
              <Link href="/">Главная</Link>
              <Link href="/dogs">Каталог собак</Link>
              <Link href="/dogs/baron">Профиль собаки</Link>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Приют Эвакуированных Лап.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
