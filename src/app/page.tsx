import Link from 'next/link'

export default function HomePage() {
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

      <section className="hero">
        <div className="container">
          <div className="subtitle">Каждый заслуживает второй шанс</div>
          <h1>Спасенные герои ищут дом</h1>
          <p>Эти удивительные собаки пережили невозможное и показали невероятную стойкость. Теперь они готовы подарить всю свою любовь новым семьям.</p>
          <div className="hero-actions">
            <Link href="/dogs" className="btn btn-primary">Познакомиться с собаками</Link>
            <Link href="/brand" className="btn btn-secondary">Узнать больше</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">156</div>
              <div className="stat-label">Собак спасено</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">89</div>
              <div className="stat-label">Нашли дом</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">23</div>
              <div className="stat-label">Ищут семью</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">44</div>
              <div className="stat-label">Адаптируются</div>
            </div>
          </div>
        </div>
      </section>

      <section className="dogs-section">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Знакомьтесь</div>
            <h2 className="section-title">Наши герои</h2>
            <p className="section-description">Каждая собака в нашем приюте — это история стойкости, надежды и невероятной способности к любви.</p>
          </div>
          
          <div className="dogs-grid">
            <div className="dog-card">
              <div className="dog-image">🐕</div>
              <h3 className="dog-name">Барон, 3 года</h3>
              <span className="dog-status status-ready">🟢 Готов к семье</span>
              <p className="dog-description">Благородный и умный пес, который обожает долгие прогулки и уже научился играть с мячиком.</p>
              <Link href="/dogs/baron" className="btn btn-primary">Познакомиться</Link>
            </div>
            
            <div className="dog-card" style={{opacity: 0.6, pointerEvents: 'none'}}>
              <div className="dog-image">🐕‍🦺</div>
              <h3 className="dog-name">Лада, 2 года</h3>
              <span className="dog-status status-adapting">🟡 Адаптируется</span>
              <p className="dog-description">Нежная и ласковая девочка, которая каждый день открывает для себя радости мирной жизни.</p>
              <button className="btn btn-primary" style={{opacity: 0.5, cursor: 'not-allowed'}} disabled>Скоро доступно</button>
            </div>
            
            <div className="dog-card" style={{opacity: 0.6, pointerEvents: 'none'}}>
              <div className="dog-image">🦮</div>
              <h3 className="dog-name">Рекс, 5 лет</h3>
              <span className="dog-status status-special">🟣 Особые потребности</span>
              <p className="dog-description">Мудрый и спокойный пес, который будет идеальным компаньоном для тихих семей.</p>
              <button className="btn btn-primary" style={{opacity: 0.5, cursor: 'not-allowed'}} disabled>Скоро доступно</button>
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Link href="/dogs" className="btn btn-secondary">Смотреть всех собак</Link>
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