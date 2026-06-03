import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Church, HeartHandshake, Users, Home, RefreshCw, Clock, CalendarDays, MapPin } from 'lucide-react';
import { MEETINGS, LOCATIONS, CHURCH_INFO } from '../data';
import type { Meeting } from '../types';

const LOCATION_NAMES = ['Badalona', 'Terrassa', 'Rubí'];

export default function Meetings() {
  const [selectedLocation, setSelectedLocation] = useState('Badalona');

  const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
    Church: Church,
    HeartHandshake: HeartHandshake,
    Users: Users,
    Home: Home,
    RefreshCw: RefreshCw,
  };

  const filteredMeetings = MEETINGS.filter((m) => m.location === selectedLocation);

  return (
    <section id="reuniones" className="py-24 bg-surface-alt text-main scroll-mt-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neutral-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base font-bold text-red-600 tracking-wider uppercase font-mono">
            Nuestros Cultos
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-main">
            Reuniones Semanales
          </p>
          <p className="mt-4 text-muted text-lg">
            Selecciona tu sede para ver los horarios de cada congregación.
          </p>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Location Tabs */}
        <div className="flex items-center justify-center gap-1 mb-12">
          <div className="inline-flex items-center bg-card border border-surface rounded-xl p-1 shadow-sm">
            {LOCATION_NAMES.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`relative px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  selectedLocation === loc
                    ? 'text-white'
                    : 'text-muted hover:text-main'
                }`}
              >
                {selectedLocation === loc && (
                  <motion.div
                    layoutId="location-bg"
                    className="absolute inset-0 bg-red-600 rounded-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {loc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Meetings Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[300px]">
          <AnimatePresence mode="wait">
            {filteredMeetings.length > 0 ? (
              filteredMeetings.map((meeting: Meeting, idx) => {
                const IconComponent = iconComponents[meeting.icon] || Church;
                return (
                  <motion.div
                    key={meeting.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group relative bg-card border border-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                  >
                    <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400" />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-5">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-red-600/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative p-3 bg-red-600/10 group-hover:bg-red-600 text-red-600 group-hover:text-white rounded-xl transition-all duration-300">
                            <IconComponent className="h-5 w-5" />
                          </div>
                        </div>
                        <span className="text-[11px] font-bold tracking-widest text-red-600 uppercase bg-red-600/10 px-3 py-1.5 rounded-full shrink-0">
                          {meeting.day}
                        </span>
                      </div>

                      <h3 className="text-lg font-extrabold text-main mb-3">
                        {meeting.name}
                      </h3>

                      <p className="text-sm text-muted leading-relaxed flex-1 whitespace-pre-line">
                        {meeting.description}
                      </p>

                      <div className="pt-4 mt-5 border-t border-surface flex items-center gap-2 text-xs font-semibold tracking-wider text-muted">
                        <Clock className="h-3.5 w-3.5 text-red-600" />
                        <span>{meeting.time}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-2 text-center text-muted py-12"
              >
                No hay reuniones registradas para esta sede.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Direct Location Callout */}
        <div className="mt-16 text-center bg-neutral-900 text-white p-8 rounded-2xl max-w-4xl mx-auto shadow-lg border border-white/5">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">¿Es tu primera vez visitándonos?</span>
          <p className="text-lg font-bold mt-3 mb-5">Encuéntranos en nuestras sedes:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {LOCATIONS.map((loc) => (
              <div key={loc.name} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-sm font-bold text-red-400">{loc.name}</p>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">{loc.address}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-bold tracking-wide uppercase rounded-lg shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Ver mapa y contacto
          </button>
        </div>

      </div>
    </section>
  );
}
