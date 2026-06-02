import React, { useState, useEffect } from 'react';
import { Shield, Settings, Check, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [statsCookies, setStatsCookies] = useState(true);

  useEffect(() => {
    // Check if user has already made a selection
    const consent = localStorage.getItem('mdv_cookie_consent_v1');
    if (!consent) {
      // Show with a slight delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('mdv_cookie_consent_v1', JSON.stringify({ technical: true, analytics: true }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('mdv_cookie_consent_v1', JSON.stringify({ technical: true, analytics: false }));
    setIsVisible(false);
  };

  const handleSaveConfig = () => {
    localStorage.setItem('mdv_cookie_consent_v1', JSON.stringify({ technical: true, analytics: statsCookies }));
    setIsVisible(false);
    setShowConfig(false);
  };

  const triggerOpenPolicy = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: 'cookies' }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-4 sm:p-6 bg-neutral-900/98 backdrop-blur-md border-t border-zinc-800 text-zinc-100 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Banner Copy */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-2 text-red-500">
            <Shield className="h-5 w-5" />
            <h4 className="font-bold text-sm tracking-wide uppercase font-mono">Control de cookies</h4>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-4xl">
            Utilizamos cookies técnicas y, si nos lo permite, cookies de análisis estadísticos no invasivos para optimizar la carga del sitio web y comprender mejor qué secciones son útiles para la congregación. Puede configurar sus preferencias o aceptarlas todas. Lea más en nuestra{' '}
            <a 
              href="#" 
              onClick={triggerOpenPolicy}
              className="text-red-400 hover:text-red-300 font-semibold underline underline-offset-2"
            >
              Política de Cookies
            </a>.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={() => setShowConfig(!showConfig)}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-lg transition-all cursor-pointer"
          >
            <Settings className="h-3.5 w-3.5" />
            <span>Configurar</span>
          </button>
          
          <button
            onClick={handleRejectAll}
            className="px-4 py-2 text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-lg transition-all cursor-pointer"
          >
            Solo esenciales
          </button>

          <button
            onClick={handleAcceptAll}
            className="px-5 py-2.5 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition-all cursor-pointer hover:scale-[1.02]"
          >
            Aceptar todo
          </button>
        </div>
      </div>

      {/* Expanded config overlay drawer/panel */}
      {showConfig && (
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-zinc-800 animate-in fade-in duration-200">
          <div className="p-4 bg-zinc-950/40 rounded-xl space-y-4 max-w-3xl">
            <h5 className="font-bold text-xs uppercase tracking-wider text-white">Configuración detallada de cookies:</h5>
            
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h6 className="font-bold text-xs text-zinc-200">1. Cookies Básicas y Técnicas (Obligatorias)</h6>
                  <p className="text-[11px] text-zinc-400">Habilitan las conexiones esenciales, el almacenamiento de la aprobación de cookies y el correcto funcionamiento del portal.</p>
                </div>
                <span className="px-2 py-1 bg-red-950/40 border border-red-900 text-red-400 text-[10px] font-bold uppercase rounded-md">Activado</span>
              </div>

              <div className="flex items-start justify-between gap-4 pt-2 border-t border-zinc-900/40">
                <div>
                  <h6 className="font-bold text-xs text-zinc-200">2. Cookies de Rendimiento y Análisis (Opcionales)</h6>
                  <p className="text-[11px] text-zinc-400">Analizan la audiencia de nuestra web de forma puramente estadística y agregada, ayudándonos a difundir el evangelio con mayor alcance.</p>
                </div>
                <button
                  onClick={() => setStatsCookies(!statsCookies)}
                  className={`flex items-center space-x-1.5 px-3 py-1 text-[10px] font-bold uppercase rounded-md transition-all cursor-pointer border ${
                    statsCookies 
                      ? 'bg-red-600 border-red-600 text-white' 
                      : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                  }`}
                >
                  {statsCookies ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                  <span>{statsCookies ? 'Activado' : 'Desactivado'}</span>
                </button>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleSaveConfig}
                className="px-4 py-2 text-xs font-bold bg-white text-zinc-950 rounded-lg hover:bg-zinc-100 transition-all cursor-pointer"
              >
                Guardar selección
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
