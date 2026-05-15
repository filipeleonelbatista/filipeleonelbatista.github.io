// Theme and Language Toggle
const translations = {
  br: {
    quickLinks: 'Acesso Rápido',
    networks: 'Redes',
    projects: 'Projetos',
    youtube: 'Canal no Youtube',
    connect: 'Conecte-se',
    profileBio: 'Desenvolvedor Full Stack com +7 anos de experiência em React, Node.js, React Native e TypeScript. Especialista em desenvolvimento web, mobile e integrações com IA.',
    resumeAI: 'Resume AI CV',
    resumeAIDesc: 'Análise e geração de currículos inteligentes usando IA.',
    atendiazap: 'AtendIAZap',
    atendiazapDesc: 'Envio de mensagens em massa para WhatsApp automatizado com IA.',
    finances: 'MINHAS FINANÇAS$',
    financesDesc: 'Controle financeiro familiar com gestão de despesas e análise por IA.',
    kbDev: 'KB Dev Sites',
    kbDevDesc: 'Templates de portfólio para desenvolvedores.',
    resume: 'Currículo',
    linkedin: 'LinkedIn',
    linkedinDesc: 'Postagens sobre desenvolvimento',
    github: 'GitHub',
    githubDesc: 'Meus projetos',
    youtubeLink: 'YouTube',
    youtubeDesc: 'Assista meus vídeos',
    xTwitter: 'X · Twitter',
    xDesc: ' thoughts',
    instagram: 'Instagram',
    instagramDesc: 'Vida pessoal e code',
    whatsapp: 'WhatsApp',
    whatsappDesc: 'Entre em contato',
    email: 'Email',
    emailDesc: 'Me mande um email',
    discord: 'Discord',
    discordDesc: 'Vamos conversar',
    lastVideo: 'Último vídeo',
    short: 'SHORT',
    watch: 'Assistir →',
    ytChannel: '@filipeleonelbatista',
    githubLabel: 'GitHub',
    curriculumLabel: 'Currículo',
    curriculumDownload: 'Curriculo-Filipe-Batista-Desenvolvedor Fullstack.pdf',
    linkedinLabel: 'LinkedIn',
    resumeAIProj: 'IA • Web App',
    whatsappAiProj: 'WhatsApp • Automação',
    financesProj: 'Finanças • PWA',
    portfolioProj: 'Portfólio • Templates',
    viewProject: 'Ver projeto',
    watchVideos: 'Assista meus vídeos',
    watchProject: 'Ver projeto'
  },
  en: {
    quickLinks: 'Quick Access',
    networks: 'Networks',
    projects: 'Projects',
    youtube: 'YouTube Channel',
    connect: 'Connect',
    profileBio: 'Full Stack Developer with +7 years of experience in React, Node.js, React Native and TypeScript. Specialist in web, mobile development and AI integrations.',
    resumeAI: 'Resume AI CV',
    resumeAIDesc: 'AI-powered resume analysis and generation for job applications.',
    atendiazap: 'AtendIAZap',
    atendiazapDesc: 'Mass WhatsApp messaging with AI-powered automated responses.',
    finances: 'MY FINANCES$',
    financesDesc: 'Family financial control with expense management and AI analysis.',
    kbDev: 'KB Dev Sites',
    kbDevDesc: 'Developer portfolio templates.',
    resume: 'Resume',
    linkedin: 'LinkedIn',
    linkedinDesc: 'Development posts',
    github: 'GitHub',
    githubDesc: 'My projects',
    youtubeLink: 'YouTube',
    youtubeDesc: 'Watch my videos',
    xTwitter: 'X · Twitter',
    xDesc: ' thoughts',
    instagram: 'Instagram',
    instagramDesc: 'Personal life & code',
    whatsapp: 'WhatsApp',
    whatsappDesc: 'Get in touch',
    email: 'Email',
    emailDesc: 'Send me an email',
    discord: 'Discord',
    discordDesc: "Let's chat",
    lastVideo: 'Latest video',
    short: 'SHORT',
    watch: 'Watch →',
    ytChannel: '@filipeleonelbatista',
    githubLabel: 'GitHub',
    curriculumLabel: 'Resume',
    curriculumDownload: 'Resume-Filipe-Batista-Fullstack Developer.pdf',
    linkedinLabel: 'LinkedIn',
    resumeAIProj: 'AI • Web App',
    whatsappAiProj: 'WhatsApp • Automation',
    financesProj: 'Finance • PWA',
    portfolioProj: 'Portfolio • Templates',
    viewProject: 'View project',
    watchVideos: 'Watch my videos',
    watchProject: 'View project'
  }
};

const urlTranslations = {
  br: {
    'linkedin-url': 'https://linkedin.com/in/filipeleonelbatista',
    'github-url': 'https://github.com/filipeleonelbatista',
    'youtube-url': 'https://youtube.com/@filipeleonelbatista',
    'x-url': 'https://x.com/filipeboficial',
    'instagram-url': 'https://instagram.com/filipeleonelbatista',
    'whatsapp-url': 'https://wa.me/+5551992736445?text=Ol%C3%A1%20Filipe%2C%0A%0AGostaria%20de%20conversar%20sobre%20um%20projeto.%20Podemos%20agendar%20uma%20reuni%C3%A3o%3F%0A%0AAtenciosamente.',
    'email-url': 'mailto:filipe.x2016@gmail.com?subject=Ol%C3%A1%20Filipe%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto&body=Ol%C3%A1%20Filipe%2C%0A%0AGostaria%20de%20conversar%20sobre%20um%20projeto.%20Podemos%20agendar%20uma%20reuni%C3%A3o%3F%0A%0AAtenciosamente%2C%0A',
    'discord-url': 'https://discord.com/users/280715729404166144',
    'facebook-url': 'https://facebook.com/filipeleonelbatista',
    'curriculo-url': './Curriculo.pdf',
    'kb-dev-sites-url': 'https://kbdevsite.vercel.app/',
    'whatsapp-ai-url': 'https://atendiazap.com.br/',
    'resume-ai-cv-url': 'https://resume-ai-cv.vercel.app/',
    'finances-url': 'https://minhasfinancas.vercel.app/'
  },
  en: {
    'linkedin-url': 'https://www.linkedin.com/in/filipeleonelbatista/?locale=en_US',
    'github-url': 'https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/README_EN.md',
    'youtube-url': 'https://youtube.com/@filipeleonelbatista',
    'x-url': 'https://x.com/filipeboficial',
    'instagram-url': 'https://instagram.com/filipeleonelbatista',
    'whatsapp-url': 'https://wa.me/+5551992736445?text=Hi%20Filipe%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Can%20we%20schedule%20a%20meeting%3F%0A%0ABest%20regards.',
    'email-url': 'mailto:filipe.x2016@gmail.com?subject=Hi%20Filipe%2C%20I%20would%20like%20to%20discuss%20a%20project&body=Hi%20Filipe%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Can%20we%20schedule%20a%20meeting%3F%0A%0ABest%20regards%2C%0A',
    'discord-url': 'https://discord.com/users/280715729404166144',
    'facebook-url': 'https://facebook.com/filipeleonelbatista',
    'curriculo-url': './Resume.pdf',
    'kb-dev-sites-url': 'https://kbdevsite.vercel.app/',
    'whatsapp-ai-url': 'https://atendiazap.com.br/',
    'resume-ai-cv-url': 'https://resume-ai-cv.vercel.app/',
    'finances-url': 'https://minhasfinancas.vercel.app/'
  }
};

let currentLang = localStorage.getItem('lang') || 'br';
let currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme === 'light' ? 'light' : '');
}

function updateURLs() {
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.getAttribute('data-i18n-href');
    if (urlTranslations[currentLang] && urlTranslations[currentLang][key]) {
      el.href = urlTranslations[currentLang][key];
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  document.querySelector('.lang-label').textContent = lang.toUpperCase();
  applyTheme();
  updateURLs();
  translatePage();
}

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-download]').forEach(el => {
    const key = el.getAttribute('data-i18n-download');
    if (translations[currentLang][key]) {
      el.download = translations[currentLang][key];
    }
  });
  const ytBadge = document.getElementById('yt-badge');
  if (ytBadge && ytBadge.textContent !== 'SHORT') {
    ytBadge.textContent = currentLang === 'br' ? 'ÚLTIMO VÍDEO' : 'LATEST VIDEO';
  }
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  applyTheme();
});

document.getElementById('lang-toggle').addEventListener('click', () => {
  setLanguage(currentLang === 'br' ? 'en' : 'br');
});

// Initialize
applyTheme();
document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-BR';
document.querySelector('.lang-label').textContent = currentLang.toUpperCase();
updateURLs();
translatePage();

// YouTube Video Fetcher
(async () => {
  const CHANNEL = 'UCYUeJiqZCXcABWukG9RvQtw';
  const RSS = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + CHANNEL;
  const PROXIES = [
    'https://corsproxy.io/?url=' + encodeURIComponent(RSS),
    'https://api.allorigins.win/raw?url=' + encodeURIComponent(RSS)
  ];

  const thumbEl = document.getElementById('yt-thumb');
  const titleEl = document.getElementById('yt-title');
  const badgeEl = document.getElementById('yt-badge');
  const cardEl  = document.getElementById('yt-card');

  for (const proxy of PROXIES) {
    try {
      const ctrl  = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 7000);
      const res   = await fetch(proxy, { signal: ctrl.signal });
      clearTimeout(timer);
      if (!res.ok) continue;

      const xml = await res.text();
      let entryStart = xml.indexOf('<entry>');
      if (entryStart === -1) continue;

      let videoId, title, thumb, isShort, videoUrl;
      
      while (entryStart !== -1) {
        const entry = xml.slice(entryStart, xml.indexOf('</entry>', entryStart));
        videoId = (entry.match(/<yt:videoId>([^<]+)/) || [])[1];
        if (videoId) {
          let rawTitle = (entry.match(/<title>([^<]+)/) || [])[1] || '';
          title = rawTitle.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
          thumb = (entry.match(/media:thumbnail url="([^"]+)"/) || [])[1] || 'https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg';
          isShort = entry.includes('/shorts/' + videoId);
          
          if (!isShort) {
            videoUrl = 'https://www.youtube.com/watch?v=' + videoId;
            break;
          }
        }
        entryStart = xml.indexOf('<entry>', entryStart + 1);
      }
      
      if (!videoId || isShort) continue;

      cardEl.href = videoUrl;
      thumbEl.classList.remove('yt-loading');
      badgeEl.textContent = 'ÚLTIMO VÍDEO';

      const img = document.createElement('img');
      img.src  = thumb;
      img.alt  = title;
      img.loading = 'lazy';
      thumbEl.insertBefore(img, thumbEl.firstChild);

      const playBtn = thumbEl.querySelector('.play-btn');
      playBtn.setAttribute('aria-label', 'Reproduzir: ' + title);
      playBtn.setAttribute('aria-hidden', 'false');
      playBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
        thumbEl.innerHTML = '<iframe src="' + src + '" allow="autoplay;encrypted-media;fullscreen" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>';
      });

      titleEl.textContent = title;
      return;
    } catch(e) { /* try next proxy */ }
  }
})();

// Current Year
document.getElementById('currentYear').textContent = new Date().getFullYear();