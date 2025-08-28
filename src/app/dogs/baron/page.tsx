import Link from 'next/link'

export default function BaronPage() {
  return (
    <main>
      <header>
        <nav className="container">
          <Link href="/" className="logo">
            <div className="logo-icon">🐕</div>
            <span>Приют Эвакуированных Лап</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/dogs">Наши собаки</Link></li>
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
            <Link href="/dogs" style={{color: '#718096', textDecoration: 'none'}}>Наши собаки</Link>
            <span style={{color: '#CBD5E0'}}>→</span>
            <span>Барон</span>
          </div>
        </div>
      </div>

      <section style={{padding: '48px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start'}}>
            <div style={{position: 'sticky', top: '100px'}}>
              <div style={{width: '100%', height: '400px', background: 'linear-gradient(135deg, #E2E8F0, #CBD5E0)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '120px', color: '#718096', marginBottom: '16px', position: 'relative'}}>
                🐕
                <div style={{position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '8px 12px', borderRadius: '12px', fontSize: '14px'}}>
                  1 / 4
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px'}}>
                <div style={{aspectRatio: '1', background: 'linear-gradient(135deg, #F7FAFC, #E2E8F0)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#CBD5E0', cursor: 'pointer', border: '2px solid #FF6B6B'}}>🐕</div>
                <div style={{aspectRatio: '1', background: 'linear-gradient(135deg, #F7FAFC, #E2E8F0)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#CBD5E0', cursor: 'pointer'}}>📸</div>
                <div style={{aspectRatio: '1', background: 'linear-gradient(135deg, #F7FAFC, #E2E8F0)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#CBD5E0', cursor: 'pointer'}}>📸</div>
                <div style={{aspectRatio: '1', background: 'linear-gradient(135deg, #F7FAFC, #E2E8F0)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#CBD5E0', cursor: 'pointer'}}>📸</div>
              </div>
            </div>
            
            <div style={{background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px'}}>
                <div>
                  <h1 style={{fontSize: '36px', fontWeight: '700', color: '#2D3748', marginBottom: '8px'}}>Барон</h1>
                  <div style={{color: '#718096', fontSize: '18px', marginBottom: '16px'}}>3 года • Мальчик • Крупная порода</div>
                </div>
                <div style={{padding: '8px 16px', borderRadius: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px', background: '#68D391', color: 'white'}}>
                  🟢 Готов к семье
                </div>
              </div>
              
              <div style={{fontFamily: "'Caveat', cursive", fontSize: '24px', color: '#FF6B6B', marginBottom: '24px', fontStyle: 'italic'}}>
                "Каждый день - это новое приключение, и я готов делиться им с семьей"
              </div>
              
              <div style={{fontSize: '16px', lineHeight: '1.7', marginBottom: '32px', color: '#4A5568'}}>
                Барон — настоящий джентльмен собачьего мира. Этот благородный пес пережил невероятные испытания, но не утратил веру в людей и радость жизни. Сейчас он полностью готов к новому дому и мечтает о семье, которая разделит с ним любовь к долгим прогулкам и активному отдыху.
                <br /><br />
                Барон уже освоил основные команды, прекрасно ходит на поводке и обожает играть с мячиком. Он социализирован с другими собаками и может стать отличным компаньоном как для одиночки, так и для семьи с детьми.
              </div>
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px'}}>
                <div style={{padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                  <div style={{fontSize: '14px', color: '#718096', marginBottom: '4px'}}>Возраст</div>
                  <div style={{fontWeight: '600', color: '#2D3748'}}>3 года</div>
                </div>
                <div style={{padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                  <div style={{fontSize: '14px', color: '#718096', marginBottom: '4px'}}>Вес</div>
                  <div style={{fontWeight: '600', color: '#2D3748'}}>28 кг</div>
                </div>
                <div style={{padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                  <div style={{fontSize: '14px', color: '#718096', marginBottom: '4px'}}>Размер</div>
                  <div style={{fontWeight: '600', color: '#2D3748'}}>Крупный</div>
                </div>
                <div style={{padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                  <div style={{fontSize: '14px', color: '#718096', marginBottom: '4px'}}>Активность</div>
                  <div style={{fontWeight: '600', color: '#2D3748'}}>Высокая</div>
                </div>
              </div>
              
              <div style={{marginBottom: '32px'}}>
                <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Характер</h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px'}}>
                  <div style={{background: '#F7E6D3', padding: '12px 16px', borderRadius: '12px', textAlign: 'center', fontWeight: '500', color: '#744210'}}>Активный</div>
                  <div style={{background: '#F7E6D3', padding: '12px 16px', borderRadius: '12px', textAlign: 'center', fontWeight: '500', color: '#744210'}}>Умный</div>
                  <div style={{background: '#F7E6D3', padding: '12px 16px', borderRadius: '12px', textAlign: 'center', fontWeight: '500', color: '#744210'}}>Дружелюбный</div>
                  <div style={{background: '#F7E6D3', padding: '12px 16px', borderRadius: '12px', textAlign: 'center', fontWeight: '500', color: '#744210'}}>Игривый</div>
                  <div style={{background: '#F7E6D3', padding: '12px 16px', borderRadius: '12px', textAlign: 'center', fontWeight: '500', color: '#744210'}}>Послушный</div>
                  <div style={{background: '#F7E6D3', padding: '12px 16px', borderRadius: '12px', textAlign: 'center', fontWeight: '500', color: '#744210'}}>Любознательный</div>
                </div>
              </div>
              
              <div style={{marginBottom: '32px'}}>
                <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Прогресс адаптации</h3>
                <div style={{marginBottom: '16px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <span style={{fontWeight: '500', color: '#2D3748'}}>Доверие к людям</span>
                    <span style={{fontSize: '14px', color: '#718096'}}>95%</span>
                  </div>
                  <div style={{width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden'}}>
                    <div style={{height: '100%', background: 'linear-gradient(90deg, #FFE66D, #68D391)', borderRadius: '4px', width: '95%'}}></div>
                  </div>
                </div>
                <div style={{marginBottom: '16px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <span style={{fontWeight: '500', color: '#2D3748'}}>Социализация</span>
                    <span style={{fontSize: '14px', color: '#718096'}}>90%</span>
                  </div>
                  <div style={{width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden'}}>
                    <div style={{height: '100%', background: 'linear-gradient(90deg, #FFE66D, #68D391)', borderRadius: '4px', width: '90%'}}></div>
                  </div>
                </div>
                <div style={{marginBottom: '16px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <span style={{fontWeight: '500', color: '#2D3748'}}>Базовые команды</span>
                    <span style={{fontSize: '14px', color: '#718096'}}>85%</span>
                  </div>
                  <div style={{width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden'}}>
                    <div style={{height: '100%', background: 'linear-gradient(90deg, #FFE66D, #68D391)', borderRadius: '4px', width: '85%'}}></div>
                  </div>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                <button className="btn btn-primary" style={{padding: '16px 32px', fontSize: '18px'}}>
                  💕 Хочу познакомиться
                </button>
                <button className="btn btn-secondary" style={{padding: '16px 32px', fontSize: '18px'}}>
                  ♡ В избранное
                </button>
              </div>
            </div>
          </div>
          
          <div style={{background: 'white', borderRadius: '16px', padding: '32px', marginTop: '32px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#2D3748'}}>Что нужно Барону</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{width: '40px', height: '40px', background: '#4ECDC4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px'}}>🏠</div>
                <div style={{flex: '1'}}>
                  <div style={{fontWeight: '600', marginBottom: '4px'}}>Просторный дом</div>
                  <div style={{fontSize: '14px', color: '#718096'}}>Квартира или дом с местом для активности</div>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{width: '40px', height: '40px', background: '#4ECDC4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px'}}>🚶</div>
                <div style={{flex: '1'}}>
                  <div style={{fontWeight: '600', marginBottom: '4px'}}>Долгие прогулки</div>
                  <div style={{fontSize: '14px', color: '#718096'}}>Минимум 2 часа активных прогулок в день</div>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{width: '40px', height: '40px', background: '#4ECDC4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px'}}>❤️</div>
                <div style={{flex: '1'}}>
                  <div style={{fontWeight: '600', marginBottom: '4px'}}>Внимание и любовь</div>
                  <div style={{fontSize: '14px', color: '#718096'}}>Нуждается в человеческом общении</div>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#F7FAFC', borderRadius: '12px'}}>
                <div style={{width: '40px', height: '40px', background: '#4ECDC4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px'}}>🎾</div>
                <div style={{flex: '1'}}>
                  <div style={{fontWeight: '600', marginBottom: '4px'}}>Игры и активность</div>
                  <div style={{fontSize: '14px', color: '#718096'}}>Любит мячики и активные игры</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding: '48px 0', background: 'white'}}>
        <div className="container">
          <h2 style={{fontSize: '20px', fontWeight: '600', textAlign: 'center', marginBottom: '32px', color: '#2D3748'}}>
            Возможно, вас также заинтересуют
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
            <div style={{background: '#F7FAFC', borderRadius: '16px', padding: '20px', textAlign: 'center'}}>
              <div style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #E2E8F0, #CBD5E0)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#718096', margin: '0 auto 16px'}}>🐕‍🦺</div>
              <div style={{fontWeight: '600', marginBottom: '8px'}}>Лада</div>
              <div style={{fontSize: '14px', color: '#718096', marginBottom: '16px'}}>Спокойная девочка, которая любит тихие вечера</div>
              <Link href="/dogs/lada" className="btn btn-secondary">Посмотреть</Link>
            </div>
            <div style={{background: '#F7FAFC', borderRadius: '16px', padding: '20px', textAlign: 'center'}}>
              <div style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #E2E8F0, #CBD5E0)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#718096', margin: '0 auto 16px'}}>🐶</div>
              <div style={{fontWeight: '600', marginBottom: '8px'}}>Майя</div>
              <div style={{fontSize: '14px', color: '#718096', marginBottom: '16px'}}>Энергичная молодая собачка, готовая к приключениям</div>
              <Link href="/dogs/maya" className="btn btn-secondary">Посмотреть</Link>
            </div>
            <div style={{background: '#F7FAFC', borderRadius: '16px', padding: '20px', textAlign: 'center'}}>
              <div style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #E2E8F0, #CBD5E0)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#718096', margin: '0 auto 16px'}}>🐕</div>
              <div style={{fontWeight: '600', marginBottom: '8px'}}>Белла</div>
              <div style={{fontSize: '14px', color: '#718096', marginBottom: '16px'}}>Дружелюбная и общительная, отлично ладит с детьми</div>
              <Link href="/dogs/bella" className="btn btn-secondary">Посмотреть</Link>
            </div>
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
            <p>&copy; 2024 Приют Эвакуированных Лап. Сделано с ❤️ для демонстрации клиенту.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
