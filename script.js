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
  setLanguage('tr');

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

  // Volumetric cursor light: independent spring-physics per layer creates a natural
  // trailing/comet effect at speed, and lets everything settle into one point at rest.
  const glowField = document.getElementById('glowField');
  if (glowField) {
    const core = glowField.querySelector('.glow-core');
    const mid = glowField.querySelector('.glow-mid');
    const halo = glowField.querySelector('.glow-halo');
    const fringeR = glowField.querySelector('.glow-fringe-r');
    const fringeB = glowField.querySelector('.glow-fringe-b');
    const particles = glowField.querySelector('.glow-particles');

    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2.5;
    let lastX = mouseX, lastY = mouseY, lastT = performance.now();
    let speed = 0;

    const springs = {
      core: { x: mouseX, y: mouseY, vx: 0, vy: 0, k: 0.34, d: 0.72 },
      mid:  { x: mouseX, y: mouseY, vx: 0, vy: 0, k: 0.16, d: 0.80 },
      halo: { x: mouseX, y: mouseY, vx: 0, vy: 0, k: 0.09, d: 0.85 }
    };

    function stepSpring(s) {
      const dx = mouseX - s.x, dy = mouseY - s.y;
      s.vx = (s.vx + dx * s.k) * s.d;
      s.vy = (s.vy + dy * s.k) * s.d;
      s.x += s.vx;
      s.y += s.vy;
    }

    window.addEventListener('mousemove', e => {
      const now = performance.now();
      const dt = Math.max(now - lastT, 1);
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      const inst = (Math.sqrt(dx * dx + dy * dy) / dt) * 16;
      speed = speed * 0.82 + inst * 0.18;
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastX = mouseX;
      lastY = mouseY;
      lastT = now;
      glowField.classList.add('is-active');
    });
    document.addEventListener('mouseleave', () => glowField.classList.remove('is-active'));

    if (prefersReduced) {
      [core, mid, halo, fringeR, fringeB, particles].forEach(el => {
        el.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      });
    } else {
      (function frame(){
        stepSpring(springs.core);
        stepSpring(springs.mid);
        stepSpring(springs.halo);
        speed *= 0.94;
        const boost = Math.min(speed, 1);

        core.style.transform = `translate(${springs.core.x}px, ${springs.core.y}px) scale(${1 + boost * 0.4})`;
        mid.style.transform = `translate(${springs.mid.x}px, ${springs.mid.y}px)`;
        halo.style.transform = `translate(${springs.halo.x}px, ${springs.halo.y}px)`;
        fringeR.style.transform = `translate(${springs.core.x - 2.5 - boost * 3}px, ${springs.core.y - 1}px)`;
        fringeB.style.transform = `translate(${springs.core.x + 2.5 + boost * 3}px, ${springs.core.y + 1}px)`;
        particles.style.transform = `translate(${springs.mid.x}px, ${springs.mid.y}px)`;
        glowField.style.opacity = Math.min(0.75 + boost * 0.5, 1);

        requestAnimationFrame(frame);
      })();
    }
  }

  // Magnetic hover: buttons, showcase rows and nav links tilt slightly and emit a
  // matching spotlight that tracks the pointer, with spring easing on release.
  if (!prefersReduced) {
    const magneticEls = document.querySelectorAll('.btn, .row, .nav-links a');
    magneticEls.forEach(el => {
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
          el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        }
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }
});
