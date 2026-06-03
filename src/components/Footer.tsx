import { Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import { CHURCH_INFO, LOCATIONS, INSTAGRAM_URL, FACEBOOK_URL, YOUTUBE_URL, TIKTOK_URL } from '../data';
import mdvLogo from '../assets/images/logomdv.png';

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  const openLegal = (type: 'legal' | 'privacy' | 'cookies') => {
    window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: type }));
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="bg-neutral-950 text-gray-400 py-16 border-t border-white/5 relative z-10 selection:bg-red-600/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand block (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => handleScrollTo('inicio')}
              className="flex items-center space-x-3 text-left cursor-pointer group"
            >
              <div>
                <img
                  src={mdvLogo}
                  alt="Logo Mensaje de Vida"
                  className="h-9 w-9 object-contain select-none pointer-events-none"
                />
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white font-sans">
                  MENSAJE <span className="text-red-500">DE VIDA</span>
                </span>
                <span className="block text-[9px] text-zinc-500 tracking-wider uppercase font-semibold">
                  Sobre las Naciones
                </span>
              </div>
            </button>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm pt-2">
              Somos una iglesia viva donde cada persona importa. Anunciando las buenas nuevas del Evangelio en la unidad del Espíritu Santo y el amor de Jesucristo.
            </p>
            {/* Social media connections */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-neutral-900 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-neutral-900 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-neutral-900 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-neutral-900 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200"
                aria-label="TikTok"
              >
                <TiktokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links block (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold font-mono uppercase tracking-widest">Nuestra Iglesia</h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <button onClick={() => handleScrollTo('quienes-somos')} className="text-left hover:text-red-500 transition-colors cursor-pointer">
                Quiénes Somos
              </button>
              <button onClick={() => handleScrollTo('vision')} className="text-left hover:text-red-500 transition-colors cursor-pointer">
                Nuestra Visión y Misión
              </button>
              <button onClick={() => handleScrollTo('reuniones')} className="text-left hover:text-red-500 transition-colors cursor-pointer">
                Reuniones de Culto
              </button>
              <button onClick={() => handleScrollTo('eventos')} className="text-left hover:text-red-500 transition-colors cursor-pointer">
                Próximos Eventos
              </button>
            </div>
          </div>

          {/* Practicalities Links Block (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold font-mono uppercase tracking-widest">Recursos e Contacto</h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <button onClick={() => handleScrollTo('predicaciones')} className="text-left hover:text-red-500 transition-colors cursor-pointer">
                Prédicas Grabadas
              </button>
              <button onClick={() => handleScrollTo('donaciones')} className="text-left hover:text-red-500 transition-colors cursor-pointer">
                Ofrendar y Diezmar en Línea
              </button>
              <button onClick={() => handleScrollTo('contacto')} className="text-left hover:text-red-500 transition-colors cursor-pointer">
                Formulario de Contacto
              </button>
              <div className="pt-2 space-y-1.5 border-t border-white/5">
                {LOCATIONS.map((loc) => (
                  <p key={loc.name} className="text-xs text-gray-500">
                    <span className="text-gray-400">{loc.name}:</span> {loc.address}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4 border-t border-white/5 mt-8">
          <div className="space-y-2 text-center md:text-left">
            <div>
              &copy; {new Date().getFullYear()} Mensaje de Vida · Sobre las Naciones. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-1 text-[11px] text-gray-400">
              <button onClick={() => openLegal('legal')} className="hover:text-red-500 transition-colors cursor-pointer font-medium">
                Aviso Legal
              </button>
              <span className="text-gray-700">&bull;</span>
              <button onClick={() => openLegal('privacy')} className="hover:text-red-500 transition-colors cursor-pointer font-medium">
                Política de Privacidad
              </button>
              <span className="text-gray-700">&bull;</span>
              <button onClick={() => openLegal('cookies')} className="hover:text-red-500 transition-colors cursor-pointer font-medium">
                Política de Cookies
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-1 select-none">
            <span>Haciendo todo con</span>
            <Heart className="h-3 w-3 text-red-600 fill-current animate-pulse" />
            <span>para la gloria del Señor.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
