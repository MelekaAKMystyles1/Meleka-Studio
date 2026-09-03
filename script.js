(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const language = document.getElementById('language');
  const modal = document.getElementById('courseModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  let lastFocused = null;

  const copy = {
    en: {
      navCourses: 'Courses', navBenefits: 'Benefits', navAbout: 'About', navFaq: 'FAQ', startLearning: 'Start learning',
      eyebrow: 'FREE • OPEN TO EVERYONE • LEARN AT YOUR PACE',
      heroTitle: 'Build digital skills.<br><em>Protect the future.</em>',
      heroText: 'Learn ICT and Cyber Security from beginner to advanced — with clear lessons, practical thinking and multilingual support, completely free.',
      exploreCourses: 'Explore free courses <span>→</span>', howItWorks: 'How it works',
      coursesTitle: 'Your digital skills journey starts here.',
      coursesIntro: 'Structured learning paths designed to make complex technology easier to understand and apply.',
      benefitsTitle: 'Learning that respects your time, language and budget.',
      benefitsIntro: 'No expensive gatekeeping. Just useful knowledge presented simply, so more people can participate in the digital world.',
      ctaTitle: 'Turn curiosity into digital confidence.',
      ctaText: 'Choose a learning path and start building skills today — free, practical and designed for everyone.',
      ctaButton: 'Start learning free <span>→</span>'
    },
    ny: {
      navCourses: 'Maphunziro', navBenefits: 'Ubwino', navAbout: 'Za ife', navFaq: 'Mafunso', startLearning: 'Yambani kuphunzira',
      eyebrow: 'ZAULERE • ZA ALIYENSE • PHUNZIRANI PA LIWIRO LANU',
      heroTitle: 'Pangani luso la digito.<br><em>Tetezani tsogolo.</em>',
      heroText: 'Phunzirani ICT ndi Cyber Security kuyambira koyambira mpaka patsogolo — ndi maphunziro omveka, othandiza komanso zilankhulo zambiri, kwaulere.',
      exploreCourses: 'Onani maphunziro aulere <span>→</span>', howItWorks: 'Mmene zimagwirira ntchito',
      coursesTitle: 'Ulendo wanu wa luso la digito wayamba pano.',
      coursesIntro: 'Maphunziro opangidwa kuti apangitse ukadaulo wovuta kukhala wosavuta kumva ndi kugwiritsa ntchito.',
      benefitsTitle: 'Maphunziro olemekezera nthawi, chilankhulo ndi bajeti yanu.',
      benefitsIntro: 'Palibe chotchinga cha ndalama. Ndi chidziwitso chothandiza chomwe chaperekedwa mosavuta kuti anthu ambiri athe kuphunzira.',
      ctaTitle: 'Sinthani chidwi kukhala chidaliro cha digito.',
      ctaText: 'Sankhani njira ya maphunziro ndikuyamba kupanga luso lero — kwaulere komanso kwa aliyense.',
      ctaButton: 'Yambani kwaulere <span>→</span>'
    },
    sw: {
      navCourses: 'Kozi', navBenefits: 'Faida', navAbout: 'Kuhusu', navFaq: 'Maswali', startLearning: 'Anza kujifunza',
      eyebrow: 'BURE • KWA KILA MTU • JIFUNZE KWA KASI YAKO',
      heroTitle: 'Jenga ujuzi wa kidijitali.<br><em>Linda siku zijazo.</em>',
      heroText: 'Jifunze ICT na Usalama wa Mtandao kutoka mwanzo hadi kiwango cha juu — kwa masomo wazi, vitendo na lugha nyingi, bure kabisa.',
      exploreCourses: 'Angalia kozi za bure <span>→</span>', howItWorks: 'Jinsi inavyofanya kazi',
      coursesTitle: 'Safari yako ya ujuzi wa kidijitali inaanzia hapa.',
      coursesIntro: 'Njia za kujifunza zilizoundwa kufanya teknolojia ngumu iwe rahisi kuelewa na kutumia.',
      benefitsTitle: 'Mafunzo yanayoheshimu muda, lugha na bajeti yako.',
      benefitsIntro: 'Hakuna kizuizi cha gharama. Maarifa muhimu yanawasilishwa kwa urahisi ili watu wengi zaidi washiriki katika ulimwengu wa kidijitali.',
      ctaTitle: 'Badilisha udadisi kuwa ujasiri wa kidijitali.',
      ctaText: 'Chagua njia ya kujifunza na anza kujenga ujuzi leo — bure, kwa vitendo na kwa kila mtu.',
      ctaButton: 'Anza kujifunza bure <span>→</span>'
    },
    fr: {
      navCourses: 'Cours', navBenefits: 'Avantages', navAbout: 'À propos', navFaq: 'FAQ', startLearning: 'Commencer',
      eyebrow: 'GRATUIT • POUR TOUS • À VOTRE RYTHME',
      heroTitle: 'Développez vos compétences numériques.<br><em>Protégez l’avenir.</em>',
      heroText: 'Apprenez l’informatique et la cybersécurité du niveau débutant à avancé, avec des leçons claires et un support multilingue, gratuitement.',
      exploreCourses: 'Explorer les cours gratuits <span>→</span>', howItWorks: 'Comment ça marche',
      coursesTitle: 'Votre parcours numérique commence ici.',
      coursesIntro: 'Des parcours structurés pour rendre la technologie complexe plus facile à comprendre et à appliquer.',
      benefitsTitle: 'Un apprentissage qui respecte votre temps, votre langue et votre budget.',
      benefitsIntro: 'Des connaissances utiles, présentées simplement, sans barrière financière.',
      ctaTitle: 'Transformez votre curiosité en confiance numérique.',
      ctaText: 'Choisissez un parcours et commencez à développer vos compétences gratuitement.',
      ctaButton: 'Commencer gratuitement <span>→</span>'
    },
    pt: {
      navCourses: 'Cursos', navBenefits: 'Benefícios', navAbout: 'Sobre', navFaq: 'FAQ', startLearning: 'Começar',
      eyebrow: 'GRÁTIS • PARA TODOS • NO SEU RITMO',
      heroTitle: 'Construa habilidades digitais.<br><em>Proteja o futuro.</em>',
      heroText: 'Aprenda TIC e Cibersegurança do iniciante ao avançado, com aulas claras, prática e suporte multilíngue, totalmente grátis.',
      exploreCourses: 'Explorar cursos grátis <span>→</span>', howItWorks: 'Como funciona',
      coursesTitle: 'Sua jornada de habilidades digitais começa aqui.',
      coursesIntro: 'Trilhas estruturadas para tornar a tecnologia complexa mais fácil de entender e aplicar.',
      benefitsTitle: 'Aprendizado que respeita seu tempo, idioma e orçamento.',
      benefitsIntro: 'Conhecimento útil apresentado de forma simples, sem barreiras financeiras.',
      ctaTitle: 'Transforme curiosidade em confiança digital.',
      ctaText: 'Escolha uma trilha e comece a desenvolver habilidades hoje — grátis e para todos.',
      ctaButton: 'Começar grátis <span>→</span>'
    },
    es: {
      navCourses: 'Cursos', navBenefits: 'Beneficios', navAbout: 'Nosotros', navFaq: 'FAQ', startLearning: 'Empezar',
      eyebrow: 'GRATIS • PARA TODOS • A TU RITMO',
      heroTitle: 'Construye habilidades digitales.<br><em>Protege el futuro.</em>',
      heroText: 'Aprende TIC y Ciberseguridad desde cero hasta avanzado, con lecciones claras, práctica y soporte multilingüe, totalmente gratis.',
      exploreCourses: 'Explorar cursos gratis <span>→</span>', howItWorks: 'Cómo funciona',
      coursesTitle: 'Tu camino de habilidades digitales comienza aquí.',
      coursesIntro: 'Rutas estructuradas para hacer que la tecnología compleja sea más fácil de entender y aplicar.',
      benefitsTitle: 'Aprendizaje que respeta tu tiempo, idioma y presupuesto.',
      benefitsIntro: 'Conocimiento útil explicado de forma sencilla, sin barreras económicas.',
      ctaTitle: 'Convierte la curiosidad en confianza digital.',
      ctaText: 'Elige una ruta y empieza a desarrollar habilidades hoy — gratis y para todos.',
      ctaButton: 'Empezar gratis <span>→</span>'
    }
  };

  const descriptions = {
    'ICT Essentials': 'Start with computers, operating systems, files, internet basics and everyday digital productivity.',
    'Cyber Security Basics': 'Understand common threats, account protection, phishing awareness, privacy and safe networking concepts.',
    'Digital Safety': 'Build practical habits for protecting devices, accounts, personal information and online activity.',
    'Cyber Security Path': 'Progress into networking, security thinking, ethical practice and foundations for further cybersecurity study.'
  };

  function setMenu(open) {
    if (!nav || !menuButton) return;
    nav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  menuButton?.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => setMenu(false)));

  function setLang(key) {
    const content = copy[key] || copy.en;
    document.documentElement.lang = key === 'ny' ? 'ny' : key;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = content[el.dataset.i18n];
      if (value) el.innerHTML = value;
    });
    try { localStorage.setItem('meleka-language', key); } catch (_) {}
  }

  language?.addEventListener('change', event => setLang(event.target.value));
  try {
    const saved = localStorage.getItem('meleka-language');
    if (saved && copy[saved] && language) language.value = saved;
  } catch (_) {}
  setLang(language?.value || 'en');

  function showCourse(name) {
    if (!modal || !modalTitle || !modalText) return;
    lastFocused = document.activeElement;
    modalTitle.textContent = name;
    modalText.textContent = descriptions[name] || 'A structured learning path designed to help you build useful digital skills.';
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.modal-close')?.focus();
  }

  function closeCourse() {
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    lastFocused?.focus?.();
  }

  window.showCourse = showCourse;
  window.closeCourse = closeCourse;

  modal?.addEventListener('click', event => {
    if (event.target === modal) closeCourse();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (modal?.classList.contains('show')) closeCourse();
      else setMenu(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) setMenu(false);
  });
})();
