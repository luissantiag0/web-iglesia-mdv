import { motion } from 'motion/react';
import { Cross, Calendar, Volume2, ArrowDownCircle } from 'lucide-react';
import { IMAGES } from '../data';

export default function Hero() {
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
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden pt-16"
    >
      {/* Background Image with Dark & Red Radial Overlays */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Adoración Mensaje de Vida"
          className="w-full h-full object-cover opacity-70 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/30 to-neutral-950/80" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vh] bg-red-600/15 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-24">
        {/* Dynamic Fading Greetings card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-2">
            <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md shadow-red-900/30">
              Bienvenidos a casa • Badalona / Rubí / Terrassa / El Prat
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Una comunidad unida <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500 drop-shadow-sm">
              por el amor de Cristo
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Existimos porque tenemos propósito: para compartir el evangelio y extender el mensaje de vida a cada rincón de nuestra sociedad con pasión, amor y restoration.
          </p>

          {/* Featured Bible Verse Card */}
          <div className="max-w-xl mx-auto bg-neutral-900/40 border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-md mt-6">
            <p className="text-sm italic text-gray-200">
              "Pero los que esperan en Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán."
            </p>
            <span className="block mt-2.5 text-[10px] font-bold text-red-500 tracking-widest uppercase font-mono">
              — Isaías 40:31
            </span>
          </div>

          {/* Action CTAs Callouts */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
            <button
              onClick={() => handleScrollTo('reuniones')}
              className="w-full sm:w-auto min-w-[200px] px-6 py-3.5 bg-white text-zinc-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-100 transition-all duration-200 shadow-lg cursor-pointer hover:scale-105 active:scale-95"
            >
              <Cross className="h-4 w-4 text-red-600" />
              <span>Ver Cultos</span>
            </button>
            <button
              onClick={() => handleScrollTo('eventos')}
              className="w-full sm:w-auto min-w-[200px] px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-200 shadow-md shadow-red-600/30 cursor-pointer flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>Próximos Eventos</span>
            </button>
            <button
              onClick={() => handleScrollTo('predicaciones')}
              className="w-full sm:w-auto min-w-[200px] px-6 py-3.5 bg-zinc-900/80 backdrop-blur-md text-white border border-white/15 hover:border-white/20 rounded-xl font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <Volume2 className="h-4 w-4 text-red-500" />
              <span>Ver Predicaciones</span>
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 font-medium text-xs tracking-widest cursor-pointer select-none"
             onClick={() => handleScrollTo('quienes-somos')}>
          <span className="uppercase text-[10px] tracking-widest text-gray-500 mb-2 font-mono">
            Conócenos más
          </span>
          <ArrowDownCircle className="h-5 w-5 text-red-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
