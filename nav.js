// Shared Kinai Navbar — included on all pages
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isHome = currentPage === 'index.html' || currentPage === '';
  const isFitbot = currentPage === 'fitbot.html';
  const isMedical = currentPage === 'kinai-medical.html';

  const navHTML = `
  <nav id="mainNav">
    <a href="index.html" class="nav-logo">
      <div class="logo-hex">K</div>
      <div class="nav-logo-text">
        <div class="logo-wordmark">KINAI</div>
        <div class="logo-tagline">AI Fitness Platform</div>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" class="${isHome ? 'nav-active' : ''}">Home</a></li>
      <li><a href="index.html#about" class="">About</a></li>
      <li><a href="fitbot.html" class="${isFitbot ? 'nav-active' : ''}">
        <span class="nav-app-dot" style="background:#38B2F0"></span>FitBot
      </a></li>
      <li><a href="kinai-medical.html" class="${isMedical ? 'nav-active' : ''}">
        <span class="nav-app-dot" style="background:#E8721C"></span>Kinai Medical
      </a></li>
      <li><a href="index.html#contact" class="nav-cta-link">Contact Us</a></li>
    </ul>
    <div class="nav-hamburger" id="navHamburger">
      <span></span><span></span><span></span>
    </div>
  </nav>
  <div class="nav-mobile-menu" id="navMobile">
    <a href="index.html">Home</a>
    <a href="index.html#about">About</a>
    <a href="fitbot.html">FitBot App</a>
    <a href="kinai-medical.html">Kinai Medical</a>
    <a href="index.html#contact">Contact Us</a>
  </div>`;

  const navStyles = `
  <style id="shared-nav-styles">
    #mainNav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 500;
      padding: 16px 60px;
      display: flex; align-items: center; justify-content: space-between;
      background: rgba(10,10,10,0.92);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(232,114,28,0.15);
      transition: padding 0.3s, box-shadow 0.3s;
    }
    #mainNav.nav-scrolled {
      padding: 11px 60px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.4);
      border-bottom-color: rgba(232,114,28,0.25);
    }
    .nav-logo {
      display: flex; align-items: center; gap: 10px; text-decoration: none;
    }
    .logo-hex {
      width: 32px; height: 32px; flex-shrink: 0;
      background: linear-gradient(135deg, #E8721C, #D4A843);
      display: flex; align-items: center; justify-content: center;
      clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
      font-family: 'Bebas Neue', 'Syne', sans-serif;
      font-size: 16px; color: #0A0A0A; font-weight: 900;
    }
    .logo-wordmark {
      font-family: 'Bebas Neue', 'Syne', sans-serif;
      font-size: 22px; font-weight: 800; color: #F5F2EC;
      letter-spacing: 2px; line-height: 1;
    }
    .logo-tagline {
      font-size: 9px; color: rgba(232,114,28,0.8);
      letter-spacing: 1.5px; text-transform: uppercase;
      font-family: 'Space Mono', 'DM Mono', monospace;
    }
    .nav-links {
      display: flex; align-items: center; gap: 4px; list-style: none;
    }
    .nav-links a {
      color: rgba(245,242,236,0.65); text-decoration: none;
      font-size: 13px; font-weight: 500; letter-spacing: 0.5px;
      padding: 8px 14px; display: flex; align-items: center; gap: 6px;
      transition: color 0.3s, background 0.3s;
      position: relative;
    }
    .nav-links a:hover, .nav-links a.nav-active {
      color: #F5F2EC;
      background: rgba(232,114,28,0.08);
    }
    .nav-links a.nav-active::after {
      content: ''; position: absolute; bottom: 4px; left: 14px; right: 14px;
      height: 1px; background: #E8721C;
    }
    .nav-app-dot {
      width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
      opacity: 0.8;
    }
    .nav-cta-link {
      background: linear-gradient(135deg, #E8721C, #D4A843) !important;
      color: #0A0A0A !important; font-weight: 700 !important;
      margin-left: 8px;
      clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
    }
    .nav-cta-link:hover { opacity: 0.9; background: #E8721C !important; }
    .nav-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
    .nav-hamburger span { width: 22px; height: 1.5px; background: #F5F2EC; transition: all 0.3s; }
    .nav-mobile-menu {
      display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(10,10,10,0.97); z-index: 499; flex-direction: column;
      align-items: center; justify-content: center; gap: 32px;
    }
    .nav-mobile-menu.open { display: flex; }
    .nav-mobile-menu a {
      font-family: 'Bebas Neue', 'Syne', sans-serif;
      font-size: 40px; color: rgba(245,242,236,0.8); text-decoration: none;
      letter-spacing: 3px; transition: color 0.3s;
    }
    .nav-mobile-menu a:hover { color: #E8721C; }
    @media (max-width: 900px) {
      #mainNav { padding: 14px 24px; }
      .nav-links { display: none; }
      .nav-hamburger { display: flex; }
    }
  </style>`;

  // Inject styles into head
  document.head.insertAdjacentHTML('beforeend', navStyles);

  // Inject nav into body
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('nav-scrolled', window.scrollY > 50);
  });

  // Hamburger
  document.getElementById('navHamburger').addEventListener('click', () => {
    document.getElementById('navMobile').classList.toggle('open');
  });
  document.getElementById('navMobile').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') document.getElementById('navMobile').classList.remove('open');
  });
})();
