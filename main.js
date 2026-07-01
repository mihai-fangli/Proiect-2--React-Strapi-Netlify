import './style.css'

// Application State
const app = document.querySelector('#app')
let currentPage = 'home'

// Navigation Data
const pages = [
  { id: 'home', label: 'Acasă' },
  { id: 'about', label: 'Despre' },
  { id: 'hobbies', label: 'Hobby-uri' }
]

// Initialize App
function init() {
  renderApp()
  setupEventListeners()
  navigateTo('home')
  setupScrollEffects()
}

// Render App
function renderApp() {
  app.innerHTML = `
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="logo" data-nav="home">Port<span>folio</span></a>
        <ul class="nav-menu">
          ${pages.map(page => `
            <li>
              <a href="#" class="nav-link ${page.id === currentPage ? 'active' : ''}" data-nav="${page.id}">
                ${page.label}
              </a>
            </li>
          `).join('')}
        </ul>
        <button class="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <main>
      <div id="page-home" class="page"></div>
      <div id="page-about" class="page"></div>
      <div id="page-hobbies" class="page"></div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Portfolio</h3>
            <p>Un site personal creat cu pasiune pentru a imparti povestea mea cu lumea.</p>
          </div>
          <div class="footer-nav">
            <h4 class="footer-title">Navigare</h4>
            <ul class="footer-links">
              ${pages.map(page => `
                <li><a href="#" data-nav="${page.id}">${page.label}</a></li>
              `).join('')}
            </ul>
          </div>
          <div class="footer-contact">
            <h4 class="footer-title">Contact</h4>
            <div class="social-links">
              <a href="#" class="social-link" title="Email">✉</a>
              <a href="#" class="social-link" title="LinkedIn">in</a>
              <a href="#" class="social-link" title="GitHub">⚡</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Portfolio. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  `
}

// Page Templates
const pageTemplates = {
  home: () => `
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-pattern"></div>
      <div class="container hero-content">
        <div class="hero-text">
          <span class="hero-subtitle">Bine ai venit</span>
          <h1 class="hero-title">Salut, sunt<br>Alexandru Marin</h1>
          <p class="hero-description">
            Un dezvoltator pasionat de tehnologie si creatie digitala.
            Exploreaza site-ul pentru a descoperi mai multe despre calatoria mea.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary" data-nav="about">
              Descopera mai multe →
            </button>
            <button class="btn btn-outline" data-nav="hobbies">
              Vezi hobby-urile mele
            </button>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-img-container">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">5+</div>
            <div class="stat-label">Ani de experienta</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Proiecte finalizate</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">30+</div>
            <div class="stat-label">Clienti multumiti</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">∞</div>
            <div class="stat-label">Pasiune pentru cod</div>
          </div>
        </div>
      </div>
    </section>
  `,

  about: () => `
    <section class="section" style="padding-top: 120px;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Despre mine</span>
          <h2 class="section-title">Cine sunt eu?</h2>
          <p class="section-description">
            Afla povestea mea, experienta si competentele care ma definesc.
          </p>
        </div>

        <div class="about-content">
          <div class="about-image">
            <div class="about-decoration"></div>
            <div class="about-img-wrapper">
              <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About Image" />
            </div>
          </div>
          <div class="about-text">
            <h3>Dezvoltator Web & Entuziast Tech</h3>
            <p>
              Ma numesc Alexandru Marin si sunt un dezvoltator web cu experienta in
              crearea solutiilor digitale innovative. Cadrul meu de lucru preferat
              include JavaScript modern, React si Node.js, dar sunt mereu deschis
              sa invat tehnologii noi.
            </p>
            <p>
              Cred ca tehnologia are puterea de a transforma vieti si de a face
              lucrurile mai simple. In timpul liber, imi place sa explorez noi
              concepte de design, sa citesc despre tendintele din industrie si
              sa contribuie la proiecte open-source.
            </p>

            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-icon">⚡</div>
                <span class="skill-name">JavaScript</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">⚛</div>
                <span class="skill-name">React</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">🎨</div>
                <span class="skill-name">CSS/SASS</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">🖥</div>
                <span class="skill-name">Node.js</span>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2024 - Prezent</div>
              <h4 class="timeline-title">Senior Developer</h4>
              <p class="timeline-text">Lucrez la proiecte complexe si mentorizez dezvoltatori juniori.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2021 - 2024</div>
              <h4 class="timeline-title">Mid-Level Developer</h4>
              <p class="timeline-text">Am dezvoltat aplicatii web pentru clienti din domenii variate.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2019 - 2021</div>
              <h4 class="timeline-title">Junior Developer</h4>
              <p class="timeline-text">Am inceput calatoria in lumea dezvoltarii web.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="quote-section">
      <div class="container">
        <div class="quote-content">
          <div class="quote-icon">"</div>
          <p class="quote-text">
            Succesul nu este final, esecul nu este fatal: curajul de a continua este ceea ce conteaza.
          </p>
          <p class="quote-author">— Winston Churchill</p>
        </div>
      </div>
    </section>
  `,

  hobbies: () => `
    <section class="section" style="padding-top: 120px;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Hobby-uri</span>
          <h2 class="section-title">Ce imi place sa fac</h2>
          <p class="section-description">
            Dincolo de cod, am multe pasiuni care ma inspira si ma ajuta sa cresc.
          </p>
        </div>

        <div class="hobbies-grid">
          <div class="hobby-card">
            <div class="hobby-image">
              <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fotografie" />
            </div>
            <div class="hobby-content">
              <div class="hobby-icon">📷</div>
              <h3 class="hobby-title">Fotografie</h3>
              <p class="hobby-description">
                Capturarea momentelor speciale si explorarea frumusetii din lumea
                inconjuratoare prin obiectivul camerei.
              </p>
              <div class="hobby-tags">
                <span class="hobby-tag">Natura</span>
                <span class="hobby-tag">Urban</span>
                <span class="hobby-tag">Portrait</span>
              </div>
            </div>
          </div>

          <div class="hobby-card">
            <div class="hobby-image">
              <img src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Calatorii" />
            </div>
            <div class="hobby-content">
              <div class="hobby-icon">✈</div>
              <h3 class="hobby-title">Calatorii</h3>
              <p class="hobby-description">
                Descoperirea culturilor noi, a peisajelor uimitoare si a experientelor
                care imi broaden orizonturile.
              </p>
              <div class="hobby-tags">
                <span class="hobby-tag">Aventura</span>
                <span class="hobby-tag">Cultura</span>
              </div>
            </div>
          </div>

          <div class="hobby-card">
            <div class="hobby-image">
              <img src="https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Muzica" />
            </div>
            <div class="hobby-content">
              <div class="hobby-icon">🎵</div>
              <h3 class="hobby-title">Muzica</h3>
              <p class="hobby-description">
                Ascultarea si descoperirea de noi genuri muzicale, de la jazz la
                electronica si rock clasic.
              </p>
              <div class="hobby-tags">
                <span class="hobby-tag">Jazz</span>
                <span class="hobby-tag">Electronic</span>
              </div>
            </div>
          </div>

          <div class="hobby-card">
            <div class="hobby-image">
              <img src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Lectura" />
            </div>
            <div class="hobby-content">
              <div class="hobby-icon">📚</div>
              <h3 class="hobby-title">Lectura</h3>
              <p class="hobby-description">
                Imi place sa citesc carti de dezvoltare personala, science-fiction
                si literatura clasica.
              </p>
              <div class="hobby-tags">
                <span class="hobby-tag">Sci-Fi</span>
                <span class="hobby-tag">Self-help</span>
              </div>
            </div>
          </div>

          <div class="hobby-card">
            <div class="hobby-image">
              <img src="https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gastronomie" />
            </div>
            <div class="hobby-content">
              <div class="hobby-icon">🍳</div>
              <h3 class="hobby-title">Gastronomie</h3>
              <p class="hobby-description">
                Experimentarea in bucatarie si descoperirea retetelor noi din
                bucatarii internationale.
              </p>
              <div class="hobby-tags">
                <span class="hobby-tag">Italiana</span>
                <span class="hobby-tag">Asiatica</span>
              </div>
            </div>
          </div>

          <div class="hobby-card">
            <div class="hobby-image">
              <img src="https://images.pexels.com/photos/39100/freeride-bike-bicycling-sport-39100.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sport" />
            </div>
            <div class="hobby-content">
              <div class="hobby-icon">🚴</div>
              <h3 class="hobby-title">Sport</h3>
              <p class="hobby-description">
                Mentinerea unui stil de viata activ prin ciclism, alergare si
                exercitii in aer liber.
              </p>
              <div class="hobby-tags">
                <span class="hobby-tag">Ciclism</span>
                <span class="hobby-tag">Running</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

// Navigation
function navigateTo(pageId) {
  currentPage = pageId
  window.scrollTo(0, 0)

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.nav === pageId)
  })

  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active')
  })

  // Show target page
  const targetPage = document.querySelector(`#page-${pageId}`)
  if (targetPage) {
    targetPage.innerHTML = pageTemplates[pageId]()
    setTimeout(() => {
      targetPage.classList.add('active')
    }, 10)
  }

  // Close mobile menu
  document.querySelector('.nav-menu')?.classList.remove('active')
}

// Event Listeners
function setupEventListeners() {
  // Navigation clicks
  document.addEventListener('click', (e) => {
    const navElement = e.target.closest('[data-nav]')
    if (navElement) {
      e.preventDefault()
      navigateTo(navElement.dataset.nav)
    }
  })

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger')
  const navMenu = document.querySelector('.nav-menu')

  hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active')
  })
}

// Scroll Effects
function setupScrollEffects() {
  const navbar = document.querySelector('.navbar')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  })
}

// Start App
init()
