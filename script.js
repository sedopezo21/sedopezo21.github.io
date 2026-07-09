// ===== Translations =====
const translations = {
  nav_games: {tr:"Oyunlar", en:"Games"},
  nav_studio: {tr:"Stüdyo", en:"Studio"},
  nav_contact: {tr:"İletişim", en:"Contact"},
  nav_playstore: {tr:"Play Store ↗", en:"Play Store ↗"},
  hero_eyebrow: {tr:"Türkiye · Android · Google Play", en:"Turkey · Android · Google Play"},
  hero_h1: {tr:"Modern tasarım, yenilikçi oynanış.", en:"Modern design, innovative gameplay."},
  hero_sub: {tr:"Acargames, mobil eğlenceyi yeniden tanımlayan sürüş, drift ve simülasyon oyunları tasarlıyor.", en:"Acargames designs driving, drift, and simulation games that redefine mobile entertainment."},
  hero_cta_primary: {tr:"Oyunları Gör", en:"See the Games"},
  hero_cta_secondary: {tr:"Google Play'de görüntüle", en:"View on Google Play"},
  hero_stats: {tr:"10 Uygulama · Türkiye · Android", en:"10 Apps · Turkey · Android"},
  about_eyebrow: {tr:"Stüdyo", en:"Studio"},
  about_h2: {tr:"Sürüş ve simülasyon oyunlarında uzmanlaşıyoruz.", en:"We specialize in driving and simulation games."},
  about_p: {tr:"Acargames, sürüş fizikleri, kaza simülasyonları ve hızlı temolu arcade oyunları üzerine odaklanan bir Android stüdyosu. Modern tasarım ve yenilikçi oynanışla mobil eğlenceyi yeniden tanımlıyoruz. Google Play'de yayında olan 10 başlık, gündelik eğlenceden pratik kullanıma uzanan bir yelpazeyi kapsıyor.", en:"Acargames is an Android studio focused on driving physics, crash simulations, and fast-paced arcade games. We're redefining mobile entertainment with modern design and innovative gameplay. The 10 titles live on Google Play span a range from everyday fun to practical use."},
  bd_1: {tr:"Sürüş & Drift Oyunu", en:"Driving & Drift Games"},
  bd_2: {tr:"Rastgele Oyun", en:"Casual Game"},
  bd_3: {tr:"Günlük Yaşam Uygulaması", en:"Daily-Life App"},
  showcase_eyebrow: {tr:"Portföy", en:"Portfolio"},
  showcase_h2: {tr:"10 başlık, Google Play'de yayında", en:"10 titles, live on Google Play"},
  showcase_sub: {tr:"Herhangi birine tıklayarak doğrudan mağaza sayfasına gidebilirsin.", en:"Tap any title to jump straight to its store page."},
  hook_ezanpro: {tr:"Namaz vakitlerini takip et, ezanı kaçırma.", en:"Track prayer times, never miss the call to prayer."},
  hook_idle: {tr:"Madenciliği kur, biriktir — ekranı kapatsan bile kazan.", en:"Set up your mining rig, earn even while offline."},
  hook_case: {tr:"Kutuyu aç, şansını dene, koleksiyonunu büyüt.", en:"Open the case, try your luck, grow your collection."},
  hook_blockfall: {tr:"Blokları diz, çizgileri tamamla, skorunu katla.", en:"Line up the blocks, clear the lines, multiply your score."},
  hook_battle: {tr:"Sahada son kalan araç sen ol.", en:"Be the last car standing in the arena."},
  hook_chase: {tr:"Polisten kaç, sokakları arkanda bırak.", en:"Outrun the police, leave the streets behind."},
  hook_parkour: {tr:"İmkansız rampalarda ustalığını kanıtla.", en:"Prove your skill on impossible ramps."},
  hook_drift: {tr:"Labirentte drift at, canavardan kaç.", en:"Drift through the maze, escape the monster."},
  hook_royale2: {tr:"Her çarpışma bir gösteri, her hasar gerçek.", en:"Every crash is a spectacle, every dent is real."},
  hook_accidents: {tr:"Sokaklarda kaos yarat, fren yok.", en:"Unleash chaos in the streets, no brakes."},
  tag_utility: {tr:"Günlük Yaşam", en:"Daily Life"},
  tag_casual: {tr:"Rastgele", en:"Casual"},
  tag_driving: {tr:"Sürüş", en:"Driving"},
  contact_eyebrow: {tr:"İletişim", en:"Contact"},
  contact_h2: {tr:"Destek mi lazım, fikrin mi var?", en:"Need support, or have an idea?"},
  contact_p: {tr:"Uygulamalarımızdan biriyle ilgili bir sorun mu yaşıyorsun, yoksa iş birliği mi önermek istiyorsun? Doğrudan yaz, elimizden geldiğince hızlı dönüş yaparız.", en:"Having an issue with one of our apps, or want to propose a collaboration? Write to us directly and we'll get back to you as quickly as we can."},
  contact_blog: {tr:"Blog", en:"Blog"},
  footer_contact: {tr:"İletişim", en:"Contact"},
  footer_blog: {tr:"Blog", en:"Blog"},
  footer_play: {tr:"Google Play", en:"Google Play"},
  footer_ads: {tr:"app-ads.txt", en:"app-ads.txt"},
  footer_privacy: {tr:"Gizlilik Politikası", en:"Privacy Policy"},
  footer_copy: {tr:"Tüm hakları saklıdır.", en:"All rights reserved."},
  privacy_back: {tr:"← Ana Sayfa", en:"← Home"},
  privacy_title: {tr:"Gizlilik Politikası", en:"Privacy Policy"},
  privacy_updated: {tr:"Son güncelleme: 5 Temmuz 2026", en:"Last updated: July 5, 2026"},
  privacy_intro: {tr:"Acargames (\u201Cbiz\u201D, \u201Cbizim\u201D) olarak gizliliğinize önem veriyoruz. Bu gizlilik politikası, Google Play'de yayınladığımız mobil uygulamalar ve bu web sitesi için topladığımız bilgileri ve bunları nasıl kullandığımızı açıklar.", en:"At Acargames (\u201Cwe\u201D, \u201Cus\u201D), we care about your privacy. This privacy policy explains the information we collect through the mobile apps we publish on Google Play and this website, and how we use it."},
  privacy_h_collect: {tr:"Topladığımız Bilgiler", en:"Information We Collect"},
  privacy_p_collect: {tr:"Uygulamalarımız şu türde bilgiler toplayabilir: cihaz bilgileri (işletim sistemi sürümü, cihaz modeli), reklam kimliği (Google Advertising ID), ve kullanım verileri ile çökme raporları. Uygulamalarımız adınızı, e-posta adresinizi veya diğer doğrudan kimlik bilgilerinizi talep etmez.", en:"Our apps may collect the following types of information: device information (OS version, device model), advertising identifier (Google Advertising ID), and usage data and crash reports. Our apps do not request your name, email address, or other directly identifying information."},
  privacy_h_use: {tr:"Bilgilerin Kullanımı", en:"How We Use Information"},
  privacy_p_use: {tr:"Topladığımız bilgileri uygulamaları geliştirmek, hataları gidermek, reklam göstermek ve kullanım eğilimlerini analiz etmek için kullanırız.", en:"We use the information we collect to improve our apps, fix bugs, display ads, and analyze usage trends."},
  privacy_h_third: {tr:"Üçüncü Taraf Hizmetler", en:"Third-Party Services"},
  privacy_p_third: {tr:"Uygulamalarımız reklam gösterimi için Google AdMob, temel platform işlevleri için Google Play Services ve kullanım istatistikleri için Firebase Analytics gibi hizmetleri kullanabilir. Bu hizmetler kendi gizlilik politikalarına tabidir.", en:"Our apps may use services such as Google AdMob (for displaying ads), Google Play Services (for core platform functionality), and Firebase Analytics (for usage statistics). These services are subject to their own privacy policies."},
  privacy_google_link: {tr:"Google'ın gizlilik politikasını buradan inceleyebilirsiniz.", en:"You can review Google's privacy policy here."},
  privacy_h_children: {tr:"Çocukların Gizliliği", en:"Children's Privacy"},
  privacy_p_children: {tr:"Uygulamalarımız genel kullanıcı kitlesine yöneliktir ve bilerek 13 yaşın altındaki çocuklardan kişisel bilgi toplamayız. Böyle bir durumun farkına varırsak ilgili bilgiyi derhal sileriz.", en:"Our apps are intended for a general audience, and we do not knowingly collect personal information from children under 13. If we become aware of such data, we will delete it promptly."},
  privacy_h_security: {tr:"Veri Güvenliği", en:"Data Security"},
  privacy_p_security: {tr:"Bilgilerinizi korumak için makul teknik önlemler alıyoruz, ancak internet üzerinden hiçbir iletimin yüzde yüz güvenli olmadığını unutmayın.", en:"We take reasonable technical measures to protect your information, but no transmission over the internet is 100% secure."},
  privacy_h_rights: {tr:"Haklarınız", en:"Your Rights"},
  privacy_p_rights: {tr:"Bulunduğunuz yere bağlı olarak, KVKK (Türkiye) veya GDPR (AB) gibi düzenlemeler kapsamında verilerinize erişme, düzeltme veya silinmesini talep etme hakkına sahip olabilirsiniz. Bu tür talepler için bizimle iletişime geçebilirsiniz.", en:"Depending on your location, you may have rights to access, correct, or request deletion of your data under frameworks such as Turkey's KVKK or the EU's GDPR. Contact us for such requests."},
  privacy_h_changes: {tr:"Politika Değişiklikleri", en:"Changes to This Policy"},
  privacy_p_changes: {tr:"Bu politikayı zaman zaman güncelleyebiliriz. Güncellemeler bu sayfada yayınlanacaktır.", en:"We may update this policy from time to time. Updates will be posted on this page."},
  privacy_h_contact: {tr:"İletişim", en:"Contact"},
  privacy_p_contact: {tr:"Sorularınız için:", en:"For questions:"}
};

function setLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[key] && translations[key][lang] != null){
      el.textContent = translations[key][lang];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize in Turkish so hardcoded HTML and the translations table never drift apart
  setLanguage('en');

  // Language switch
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> setLanguage(btn.dataset.lang));
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Scroll reveal
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal, .row');
  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Quiet ambient light: one soft, low-opacity patch that eases toward the cursor.
  // Deliberately minimal — no bright core, no color fringing, nothing that reads as a "light source."
  const glowField = document.getElementById('glowField');
  if (glowField) {
    const ambient = glowField.querySelector('.glow-ambient');
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2.5;
    const spring = { x: mouseX, y: mouseY, vx: 0, vy: 0, k: 0.10, d: 0.82 };

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function stepSpring(){
      const dx = mouseX - spring.x, dy = mouseY - spring.y;
      spring.vx = (spring.vx + dx * spring.k) * spring.d;
      spring.vy = (spring.vy + dy * spring.k) * spring.d;
      spring.x += spring.vx;
      spring.y += spring.vy;
    }

    if (prefersReduced) {
      ambient.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      document.documentElement.style.setProperty('--cx', mouseX + 'px');
      document.documentElement.style.setProperty('--cy', mouseY + 'px');
    } else {
      (function frame(){
        stepSpring();
        ambient.style.transform = `translate(${spring.x}px, ${spring.y}px)`;
        document.documentElement.style.setProperty('--cx', spring.x + 'px');
        document.documentElement.style.setProperty('--cy', spring.y + 'px');
        requestAnimationFrame(frame);
      })();
    }
  }

  // Dust motes: a handful of near-invisible specks drifting slowly, unrelated to the cursor —
  // pure atmosphere, cheap CSS-driven animation with randomized paths.
  const dustContainer = document.querySelector('.dust');
  if (dustContainer && !prefersReduced) {
    const count = 16;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.style.left = Math.random() * 100 + 'vw';
      s.style.top = Math.random() * 100 + 'vh';
      s.style.setProperty('--dx', (Math.random() * 30 - 15) + 'px');
      s.style.setProperty('--dy', (-60 - Math.random() * 60) + 'px');
      s.style.animationDuration = (22 + Math.random() * 20) + 's';
      s.style.animationDelay = (-Math.random() * 30) + 's';
      dustContainer.appendChild(s);
    }
  }

  // Subtle parallax: hero artwork drifts a few pixels against the cursor, hinting at depth
  // without ever feeling like a "feature."
  const parallaxEls = document.querySelectorAll('.hero-banner img, .wordmark img');
  if (parallaxEls.length && !prefersReduced) {
    window.addEventListener('mousemove', e => {
      const nx = (e.clientX / window.innerWidth - 0.5);
      const ny = (e.clientY / window.innerHeight - 0.5);
      parallaxEls.forEach(el => {
        el.style.transform = `translate(${nx * 4}px, ${ny * 4}px)`;
      });
    });
  }

  // Premium hover: buttons, showcase rows and nav links tilt slightly and catch a glass-like
  // matching spotlight that tracks the pointer, with spring easing on release.
  if (!prefersReduced) {
    const magneticEls = document.querySelectorAll('.btn, .row, .nav-links a');
    magneticEls.forEach(el => {
      el.addEventListener('mouseenter', () => { window.__nearInteractive = true; });
      el.addEventListener('mouseleave', () => {
        window.__nearInteractive = false;
        el.style.transform = '';
      });
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        el.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        el.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        if (el.classList.contains('row') || el.classList.contains('btn')) {
          const tilt = 2; // degrees, kept subtle on purpose
          const rx = (0.5 - py) * tilt * 2;
          const ry = (px - 0.5) * tilt * 2;
          el.style.transform = `perspective(700px) translateY(-2px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        }
      });
    });
  }

  // Cursor energy system: small emerald core + halo, a 0.5s fading plasma trail, and a
  // loose field of orbiting particles that scatter on fast movement and settle at rest.
  // Plain canvas — GPU-composited by the browser like WebGL would be, at a fraction of the weight
  // for this few particles, and it degrades gracefully (no WebGL context to lose on weak GPUs).
  const fx = document.getElementById('cursorFX');
  if (fx && !prefersReduced) {
    const ctx = fx.getContext('2d');
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeFx(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      fx.width = window.innerWidth * dpr;
      fx.height = window.innerHeight * dpr;
      fx.style.width = window.innerWidth + 'px';
      fx.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener('resize', resizeFx);
    resizeFx();

    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2.5;
    const cursor = { x: targetX, y: targetY, vx: 0, vy: 0 };
    let lastX = targetX, lastY = targetY, lastT = performance.now();
    let speed = 0;
    const trail = [];

    const PARTICLE_COUNT = 28;
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const baseRadius = 26 + Math.random() * 46;
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: baseRadius,
        baseRadius,
        orbitSpeed: (0.003 + Math.random() * 0.005) * (Math.random() < 0.5 ? -1 : 1),
        size: 1 + Math.random() * 1.8,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.015 + Math.random() * 0.03,
        white: Math.random() > 0.7
      });
    }

    window.addEventListener('mousemove', e => {
      const now = performance.now();
      const dt = Math.max(now - lastT, 1);
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      const inst = (Math.sqrt(dx * dx + dy * dy) / dt) * 16;
      speed = speed * 0.85 + inst * 0.15;
      targetX = e.clientX;
      targetY = e.clientY;
      lastX = targetX;
      lastY = targetY;
      lastT = now;
    });

    function frame(t){
      const k = 0.22, d = 0.74;
      const dx = targetX - cursor.x, dy = targetY - cursor.y;
      cursor.vx = (cursor.vx + dx * k) * d;
      cursor.vy = (cursor.vy + dy * k) * d;
      cursor.x += cursor.vx;
      cursor.y += cursor.vy;
      speed *= 0.95;
      const boost = Math.min(speed, 1);
      const gathered = window.__nearInteractive ? 0.55 : 1; // particles pull in near buttons/cards

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Energy trail — short plasma line, fades over ~0.5s
      trail.push({ x: cursor.x, y: cursor.y, t });
      while (trail.length && t - trail[0].t > 500) trail.shift();
      if (trail.length > 2) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        for (let i = 1; i < trail.length; i++) {
          const p0 = trail[i - 1], p1 = trail[i];
          const age = (t - p1.t) / 500;
          const alpha = (1 - age) * 0.3;
          if (alpha <= 0.01) continue;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.strokeStyle = `rgba(143,184,155,${alpha})`;
          ctx.lineWidth = Math.max(0.6, 2.6 * (1 - age));
          ctx.shadowColor = 'rgba(143,184,155,0.55)';
          ctx.shadowBlur = 5;
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
      }

      // Orbiting particle field — expands on fast movement, gathers in near buttons/at rest
      particles.forEach(p => {
        p.angle += p.orbitSpeed;
        const targetRadius = (p.baseRadius + boost * 60) * gathered;
        p.radius += (targetRadius - p.radius) * 0.06;
        const px = cursor.x + Math.cos(p.angle) * p.radius;
        const py = cursor.y + Math.sin(p.angle) * p.radius * 0.6;
        p.twinklePhase += p.twinkleSpeed;
        const twinkle = (Math.sin(p.twinklePhase) + 1) / 2;
        const alpha = 0.2 + twinkle * 0.45;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.white ? `rgba(232,244,238,${alpha})` : `rgba(143,184,155,${alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
});
