import { useState, useEffect } from 'react';
import { Menu, X, Shield, Heart, Sun, Moon } from 'lucide-react';
import { INSTAGRAM_URL, FACEBOOK_URL, YOUTUBE_URL, CHURCH_INFO } from '../data';
import mdvLogo from '../assets/images/logomdv.jpg';

interface HeaderProps {
  activeSection: string;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export default function Header({ activeSection, theme = 'dark', onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Visión', id: 'vision' },
    { label: 'Reuniones', id: 'reuniones' },
    { label: 'Eventos', id: 'eventos' },
    { label: 'Predicaciones', id: 'predicaciones' },
    { label: 'Donaciones', id: 'donaciones' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky active header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-neutral-900/95 text-white border-b border-zinc-800 shadow-md backdrop-blur-md py-4'
            : 'bg-white/95 text-zinc-900 border-b border-zinc-200 shadow-sm backdrop-blur-md py-4'
          : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => handleScrollTo('inicio')}
            className="flex items-center space-x-3 group cursor-pointer text-left"
            id="logo-brand-btn"
          >
            <div>
              <img
                src={mdvLogo}
                alt="Logo Mensaje de Vida"
                className="h-10 w-10 object-contain select-none pointer-events-none"
              />
            </div>
            <div>
              <span className={`block text-xl font-bold tracking-tight font-sans transition-colors ${
                isScrolled
                  ? theme === 'dark'
                    ? 'text-white'
                    : 'text-zinc-900'
                  : 'text-white'
              }`}>
                MENSAJE <span className="text-red-600">DE VIDA</span>
               </span>
              <span className={`block text-[10px] tracking-wider uppercase font-semibold transition-colors ${
                isScrolled
                  ? theme === 'dark'
                    ? 'text-zinc-400'
                    : 'text-zinc-500'
                  : 'text-gray-300'
              }`}>
                Sobre las Naciones
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isScrolled
                        ? theme === 'dark'
                          ? 'text-red-400 bg-red-950/30 font-bold'
                          : 'text-red-600 bg-red-50 font-bold'
                        : 'text-red-400 bg-red-500/10 font-bold'
                      : isScrolled
                        ? theme === 'dark'
                          ? 'text-zinc-300 hover:text-white hover:bg-white/5'
                          : 'text-zinc-650 hover:text-zinc-900 hover:bg-zinc-100/60'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Donar Direct Button Desktop with Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center ${
                  isScrolled
                    ? theme === 'dark'
                      ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white bg-zinc-900 shadow-sm'
                      : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100/85 hover:text-zinc-900 bg-white shadow-sm'
                    : 'border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white bg-transparent'
                }`}
                title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4.5 w-4.5 text-amber-500 fill-amber-500 animate-[spin_50s_linear_infinite]" />
                ) : (
                  <Moon className="h-4.5 w-4.5 text-zinc-700 fill-zinc-200" />
                )}
              </button>
            )}

            <button
              onClick={() => {
                const el = document.getElementById('donaciones');
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = el.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  setTimeout(() => window.dispatchEvent(new CustomEvent('open-donation-modal')), 600);
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200 shadow-md shadow-red-200 hover:shadow-red-300 cursor-pointer hover:scale-105 active:scale-95"
            >
              Donar Ahora
            </button>
          </div>

          {/* Mobile Theme Toggler & menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className={`p-2 rounded-md transition-colors cursor-pointer ${
                  isScrolled
                    ? theme === 'dark'
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                      : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100/60'
                    : 'text-gray-200 hover:text-white hover:bg-white/5'
                }`}
                aria-label="Toggle Theme"
                title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-amber-500 fill-amber-500" />
                ) : (
                  <Moon className="h-5 w-5 text-zinc-700 fill-zinc-200" />
                )}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                isScrolled
                  ? theme === 'dark'
                    ? 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                  : 'text-gray-200 hover:text-white hover:bg-white/5'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-80 max-w-xs bg-neutral-950 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="text-lg font-bold tracking-tight">Menú</span>
              <div className="flex items-center space-x-1.5">
                {onToggleTheme && (
                  <button
                    onClick={onToggleTheme}
                    className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                    title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
                  >
                    {theme === 'dark' ? (
                      <Sun className="h-5 w-5 text-amber-500 fill-amber-500" />
                    ) : (
                      <Moon className="h-5 w-5 text-zinc-300 fill-zinc-200" />
                    )}
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-red-600/20 text-red-500 border-l-4 border-red-600 pl-3'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <button
              onClick={() => handleScrollTo('donaciones')}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-center font-bold tracking-wide uppercase shadow-lg shadow-red-600/15 cursor-pointer"
            >
              Ofrendar / Donar
            </button>
            <div className="mt-4 text-center text-xs text-gray-400">
              {CHURCH_INFO.affiliation}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}
    </header>
  );
}
