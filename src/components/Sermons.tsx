import { useState } from 'react';
import { Play, Calendar, User, BookOpen, VolumeX, Volume2 } from 'lucide-react';
import { SERMONS } from '../data';
import type { Sermon } from '../types';

export default function Sermons() {
  const [selectedSermon, setSelectedSermon] = useState<Sermon>(SERMONS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="predicaciones" className="py-24 bg-neutral-950 text-white scroll-mt-10 overflow-hidden relative">
      {/* Dynamic decoration background glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-red-500 tracking-wider uppercase font-mono">
            Palabra de Dios
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Últimas Predicaciones
          </p>
          <p className="mt-4 text-gray-400 text-lg font-light">
            Alimenta tu fe escuchando y repasando las exposiciones bíblicas dominicales en formato de video y audio.
          </p>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Major Media Panel Side-by-Side Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Active Player Box Left (7cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Reproduciendo ahora
            </span>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group shadow-2xl">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedSermon.youtubeId}?autoplay=1&rel=0`}
                  title={selectedSermon.title}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Backdrop simulated thumbnail image */}
                  <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/30 transition-colors z-0" />
                  <img
                    src={`https://img.youtube.com/vi/${selectedSermon.youtubeId}/maxresdefault.jpg`}
                    alt={selectedSermon.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay z-0"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if maxresdefault doesn't exist for the specific ID
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${selectedSermon.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Category overlay */}
                  <span className="relative z-10 self-start text-xs font-semibold px-3 py-1 bg-red-600 rounded-full">
                    {selectedSermon.category}
                  </span>

                  {/* Centered Play Trigger Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 self-center p-6 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl shadow-red-600/50 hover:scale-110 transition-transform duration-300 animate-pulse cursor-pointer flex items-center justify-center"
                    aria-label="Play Sermon"
                  >
                    <Play className="h-8 w-8 fill-current ml-1" />
                  </button>

                  {/* Sermon quick summary card footer */}
                  <div className="relative z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent p-4 rounded-xl">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                      {selectedSermon.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2">
                      <span className="flex items-center">
                        <User className="h-3 w-3 text-red-500 mr-1.5" />
                        {selectedSermon.preacher}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 text-red-500 mr-1.5" />
                        {selectedSermon.date}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <p className="text-sm text-gray-400 font-light flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-red-500" />
              <span>Puedes conectarte a nuestro canal de YouTube oficial para ver el registro histórico de todas nuestras series pasadas.</span>
            </p>
          </div>

          {/* Catalog Selection List Right (5cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest block mb-1">
              Prédicas recientes
            </span>
            
            <div className="space-y-3">
              {SERMONS.map((sermon) => {
                const isActive = sermon.id === selectedSermon.id;
                return (
                  <button
                    key={sermon.id}
                    onClick={() => {
                      setSelectedSermon(sermon);
                      setIsPlaying(false);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center space-x-4 cursor-pointer ${
                      isActive
                        ? 'bg-neutral-900 border-red-600 text-white shadow-lg'
                        : 'bg-neutral-900/40 border-white/5 hover:border-white/10 text-gray-400 hover:text-white hover:bg-neutral-900/70'
                    }`}
                  >
                    {/* Thumbnail placeholder or play icon */}
                    <div className="relative h-16 w-24 rounded-lg overflow-hidden shrink-0 bg-neutral-950">
                      <img
                        src={`https://img.youtube.com/vi/${sermon.youtubeId}/hqdefault.jpg`}
                        alt={sermon.title}
                        className="w-full h-full object-cover opacity-60"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className={`h-4 w-4 ${isActive ? 'text-red-500 fill-current' : 'text-white'}`} />
                      </div>
                    </div>

                    {/* Meta labels */}
                    <div className="flex-1 min-w-0">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-red-500 font-mono">
                        {sermon.category}
                      </span>
                      <h4 className="font-bold text-sm text-white truncate mt-1">
                        {sermon.title}
                      </h4>
                      <span className="block text-xs text-gray-500 mt-1 truncate">
                        {sermon.preacher} • {sermon.date}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full py-3 bg-red-600/10 hover:bg-red-600/20 border border-red-500/20 text-red-400 hover:text-red-300 font-bold text-sm tracking-wide rounded-xl transition-all duration-300"
              >
                Suscribirse en YouTube
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
