/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Vision from './components/Vision';
import Meetings from './components/Meetings';
import Events from './components/Events';
import Sermons from './components/Sermons';
import Donations from './components/Donations';
import Contact from './components/Contact';
import Footer from './components/Footer';

import LegalDocuments from './components/LegalDocuments';
import CookieBanner from './components/CookieBanner';

import { WHATSAPP_URL } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('mdv_theme_v1');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('mdv_theme_v1', next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      // Manage Show Scroll to top trigger
      if (window.scrollY > 400) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }

      // Track active section element coordinates in viewport
      const sections = [
        'inicio',
        'quienes-somos',
        'vision',
        'reuniones',
        'eventos',
        'predicaciones',
        'donaciones',
        'contacto',
      ];
      const scrollPosition = window.scrollY + 120; // safe top trig offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-red-600 selection:text-white antialiased transition-colors duration-300 ${
      theme === 'dark' ? 'bg-neutral-950 text-white dark' : 'bg-zinc-50 text-neutral-900 light'
    }`}>
      {/* Dynamic Sticky Header Navigation */}
      <Header activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      {/* Structured Sections list */}
      <main>
        {/* 1. Inicio Banner */}
        <Hero />

        {/* 2. Quiénes Somos Section */}
        <AboutUs />

        {/* 3. Visión Section */}
        <Vision />

        {/* 4. Reuniones Semanales */}
        <Meetings />

        {/* 5. Próximos Eventos */}
        <Events />

        {/* 6. Últimas Predicaciones */}
        <Sermons />

        {/* 7. Donaciones */}
        <Donations />

        {/* 8. Contacto */}
        <Contact />
      </main>

      {/* Global Interactive Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
        {/* Return to top indicator */}
        {showScrollToTop && (
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-neutral-900/90 text-white rounded-full shadow-xl hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* Floating WhatsApp Action Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl shadow-green-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none hover:shadow-green-500/50"
          aria-label="Contactar por WhatsApp"
        >
          <MessageSquare className="h-6 w-6 fill-current" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out font-bold text-sm whitespace-nowrap">
            ¿En qué podemos ayudarte?
          </span>
        </a>
      </div>

      {/* GDPR compliance cookie consent and policy popups */}
      <CookieBanner />
      <LegalDocuments />
    </div>
  );
}

