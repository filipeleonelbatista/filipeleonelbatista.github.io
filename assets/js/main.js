import { translations } from './translations.js';
import { initTheme } from './theme.js';

const LANG_KEY = 'preferred-language';

function getInitialLanguage() {
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang')?.toLowerCase();
    
    if (langParam === 'pt-br' || langParam === 'pt') return 'pt';
    if (langParam === 'en-us' || langParam === 'en') return 'en';
    
    // Check localStorage
    const storedLang = localStorage.getItem(LANG_KEY);
    if (storedLang === 'pt' || storedLang === 'en') return storedLang;
    
    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().startsWith('pt')) return 'pt';
    if (browserLang.toLowerCase().startsWith('en')) return 'en';
    
    return 'pt'; // Default language
}

function updateLanguage(lang) {
    // Update toggle button text
    const ptText = document.querySelector('.pt-text');
    const enText = document.querySelector('.en-text');
    
    if (lang === 'pt') {
        ptText.classList.remove('hidden');
        enText.classList.add('hidden');
    } else {
        ptText.classList.add('hidden');
        enText.classList.remove('hidden');
    }

    // Store language preference
    localStorage.setItem(LANG_KEY, lang);

    // Update all translatable elements
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
}

function init() {
    // Initialize theme
    initTheme();
    
    // Initialize language
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = getInitialLanguage();
    
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        updateLanguage(currentLang);
    });
    
    updateLanguage(currentLang);
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Add fade-in animation to main content
    document.querySelector('.container').classList.add('animate-fade-in');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);