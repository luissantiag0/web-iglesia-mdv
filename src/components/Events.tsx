import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { EVENTS } from '../data';
import type { ChurchEvent } from '../types';

export default function Events() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="eventos" className="py-24 bg-surface text-main scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-red-600 tracking-wider uppercase font-mono">
            Comunidad en Movimiento
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-main">
            Próximos Eventos Destacados
          </p>
          <p className="mt-4 text-muted text-lg">
            Súmate a nuestras actividades especiales diseñadas para la edificación y el compañerismo de toda la congregación.
          </p>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Provisional warning */}
        <div className="max-w-3xl mx-auto mb-12 p-4 bg-red-600/10 border-2 border-red-600 rounded-xl text-center">
          <p className="text-sm font-bold text-red-600 uppercase tracking-widest">
            ⚠ AÚN NO TERMINADO — Contenido provisional, no oficial
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {EVENTS.map((event: ChurchEvent) => (
            <div
              key={event.id}
              className="group bg-card-alt hover:bg-card border border-surface hover:border-neutral-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Event Image Banner with date flag overlay */}
              <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Visual badge */}
                <span className="absolute bottom-4 left-4 inline-flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Calendar className="h-3 w-3 mr-1" />
                  Próximamente
                </span>
              </div>

              {/* Event Text block content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-main group-hover:text-red-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-secondary mt-4 leading-relaxed font-light text-sm">
                    {event.description}
                  </p>
                </div>

                {/* Event Metadata (Times and locations) */}
                <div className="mt-8 pt-6 border-t border-surface space-y-3">
                  <div className="flex items-center text-sm font-semibold text-main">
                    <Calendar className="h-4 w-4 text-red-600 mr-3 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-secondary">
                    <Clock className="h-4 w-4 text-red-600 mr-3 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-secondary">
                    <MapPin className="h-4 w-4 text-red-600 mr-3 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>

                {/* Event action link */}
                <div className="mt-8">
                  <button
                    onClick={() => handleScrollTo('contacto')}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-neutral-900 group-hover:bg-red-600 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
                  >
                    <span>Solicitar información</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
