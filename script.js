
const allLang = ['ua', 'en', 'pl', 'pt', 'es', 'de', 'lt', 'hu', 'zh', 'lu'];


const semanticCore = {
  logo: {
    ua: 'LiN',
    en: 'LiN',
    pl: 'LiN',
    pt: 'LiN',
    es: 'LiN',
    de: 'LiN',
    lt: 'LiN',
    hu: 'LiN',
    zh: 'LiN',
    lu: 'LiN'
  },
  home: {
    ua: 'Домашня сторінка',
    en: 'Home',
    pl: 'Strona główna',
    pt: 'Início',
    es: 'Inicio',
    de: 'Startseite',
    lt: 'Pagrindinis',
    hu: 'Kezdőlap',
    zh: '主页',
    lu: 'Haaptsäit'
  },
  security: {
    ua: 'Безпека',
    en: 'Security',
    pl: 'Bezpieczeństwo',
    pt: 'Segurança',
    es: 'Seguridad',
    de: 'Sicherheit',
    lt: 'Sauga',
    hu: 'Biztonság',
    zh: '安全',
    lu: 'Sécherheet'
  },
  about: {
    ua: 'Про нас',
    en: 'About us',
    pl: 'O nas',
    pt: 'Sobre nós',
    es: 'Sobre nosotros',
    de: 'Über uns',
    lt: 'Apie mus',
    hu: 'Rólunk',
    zh: '关于我们',
    lu: 'Iwwer eis'
  },
  contacts: {
    ua: 'Контакти',
    en: 'Contacts',
    pl: 'Kontakt',
    pt: 'Contactos',
    es: 'Contactos',
    de: 'Kontakte',
    lt: 'Kontaktai',
    hu: 'Kapcsolat',
    zh: '联系方式',
    lu: 'Kontakter'
  },
  help: {
    ua: 'Допомога',
    en: 'Help',
    pl: 'Pomoc',
    pt: 'Ajuda',
    es: 'Ayuda',
    de: 'Hilfe',
    lt: 'Pagalba',
    hu: 'Súgó',
    zh: '帮助',
    lu: 'Hëllef'
  },
  title: {
    ua: 'Привіт!',
    en: 'Hello!',
    pl: 'Cześć!',
    pt: 'Olá!',
    es: '¡Hola!',
    de: 'Hallo!',
    lt: 'Sveiki!',
    hu: 'Szia!',
    zh: '你好！',
    lu: 'Moien!'
  },
  text: {
    ua: 'Шукаєте когось, хто б правильно, коротко та якісно переклав ваш матеріал? Ми можемо перекласти все на понад 20 мов! Наша команда складається з носіїв мов та лінгвістів-поліглотів, які забезпечать вам надійний та зрозумілий переклад.',
    en: 'Are you looking for someone who can correctly, briefly and clearly translate your material? We can translate it into more than 20 languages! Our team consists of native speakers and linguists who will provide a reliable and clear translation.',
    pl: 'Szukasz kogoś, kto poprawnie i jasno przetłumaczy Twój materiał? Możemy tłumaczyć na ponad 20 języków! Nasz zespół składa się z native speakerów i lingwistów, którzy zapewnią rzetelne tłumaczenie.',
    pt: 'Procura alguém que traduza o seu material de forma correta, breve e clara? Podemos traduzir para mais de 20 idiomas! A nossa equipa é formada por falantes nativos e linguistas que garantem uma tradução fiável.',
    es: '¿Buscas a alguien que traduzca tu material de forma correcta, breve y clara? Podemos traducirlo a más de 20 idiomas. Nuestro equipo está formado por hablantes nativos y lingüistas que garantizan una traducción fiable.',
    de: 'Suchen Sie jemanden, der Ihr Material korrekt, kurz und verständlich übersetzt? Wir können in mehr als 20 Sprachen übersetzen. Unser Team besteht aus Muttersprachlern und Linguisten, die eine zuverlässige und klare Übersetzung liefern.',
    lt: 'Ieškote žmogaus, kuris teisingai ir aiškiai išverstų jūsų medžiagą? Galime versti į daugiau nei 20 kalbų! Mūsų komanda – tai gimtakalbiai ir lingvistai, užtikrinantys patikimą vertimą.',
    hu: 'Olyan embert keresel, aki helyesen és érthetően lefordítja az anyagodat? Több mint 20 nyelvre tudunk fordítani! Csapatunk anyanyelvi beszélőkből és nyelvészekből áll, akik megbízható fordítást nyújtanak.',
    zh: '您是否在寻找能正确、简洁、清楚地翻译您材料的人？我们可以翻译成二十多种语言！我们的团队由母语人士和语言学家组成，为您提供可靠而清晰的翻译。',
    lu: 'Sichs du no engem, deen däi Material korrekt a kloer iwwersetzt? Mir kënnen an iwwer 20 Sproochen iwwersetzen. Eise Team aus Native Speaker an Linguisten suergt fir eng zouverlässeg Iwwersetzung.'
  }
};



const flags = document.querySelectorAll('.flag[data-lang]');
const defaultLang = 'ua';


function applyLanguage(lang) {
  if (!allLang.includes(lang)) lang = defaultLang;

  for (let key in semanticCore) {
    const elem = document.querySelector('.language-' + key);
    if (elem) {
      elem.innerHTML = semanticCore[key][lang];
    }
  }


  flags.forEach(f => {
    if (f.dataset.lang === lang) {
      f.classList.add('flag-active');
    } else {
      f.classList.remove('flag-active');
    }
  });

  localStorage.setItem('lang', lang);
}


flags.forEach(flag => {
  flag.addEventListener('click', () => {
    const lang = flag.dataset.lang;
    applyLanguage(lang);
  });
});

const savedLang = localStorage.getItem('lang') || defaultLang;
applyLanguage(savedLang);


const toggleBtn = document.querySelector('.theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
}
