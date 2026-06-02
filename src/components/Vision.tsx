import { Eye, Rocket, Compass, HeartHandshake } from 'lucide-react';
import { VISION_MISSION, IMAGES } from '../data';

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-neutral-950 text-white scroll-mt-10 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-red-500 tracking-wider uppercase font-mono">
            Propósito Eterno
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Nuestra Visión y Misión
          </p>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vision & Mission Split block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text blocks: Vision and Mission */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8">
            
            {/* Vision card */}
            <div className="bg-neutral-900/60 hover:bg-neutral-900/80 border border-white/5 p-8 rounded-2xl shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600 rounded-l-2xl group-hover:scale-y-110 transition-transform duration-300" />
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-600/15 rounded-xl text-red-500">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {VISION_MISSION.vision.title}
                  </h3>
                  <p className="mt-3 text-gray-300 leading-relaxed text-base font-light">
                    {VISION_MISSION.vision.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission card */}
            <div className="bg-neutral-900/60 hover:bg-neutral-900/80 border border-white/5 p-8 rounded-2xl shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600 rounded-l-2xl group-hover:scale-y-110 transition-transform duration-300" />
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-600/15 rounded-xl text-red-500">
                  <FlameIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {VISION_MISSION.mission.title}
                  </h3>
                  <p className="mt-3 text-gray-300 leading-relaxed text-base font-light">
                    {VISION_MISSION.mission.text}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Inspirational Image */}
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 opacity-20 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] bg-neutral-800">
                <img
                  src={IMAGES.vision}
                  alt="Visión divina de esperanza"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Id y haced discípulos</span>
                  <p className="text-lg font-bold mt-1">"Por tanto, id, y haced discípulos a todas las naciones..."</p>
                  <p className="text-xs text-gray-300 mt-1 font-mono tracking-widest">Mateo 28:19</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Inline mini helper icon if needed, or using Compass
function FlameIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}
