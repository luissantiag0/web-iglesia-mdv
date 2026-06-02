import { ShieldCheck, HeartPulse, Sparkles, Footprints } from 'lucide-react';
import { WE_ARE, IMAGES } from '../data';

export default function AboutUs() {
  // Map icons to the values indexes safely
  const valueIcons = [
    <ShieldCheck key="icon-0" className="h-6 w-6 text-red-600" />,
    <HeartPulse key="icon-1" className="h-6 w-6 text-red-600" />,
    <Sparkles key="icon-2" className="h-6 w-6 text-red-600" />,
    <Footprints key="icon-3" className="h-6 w-6 text-red-600" />,
  ];

  return (
    <section id="quienes-somos" className="py-24 bg-surface text-main scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-red-600 tracking-wider uppercase font-mono">
            Quiénes Somos
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Nuestra Historia e Identidad
          </p>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* History and Image Grid Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-main">
              Unidos para bendecir a nuestra comunidad de fe
            </h3>
            <p className="text-secondary leading-relaxed text-lg">
              {WE_ARE.history}
            </p>
            <div className="bg-card-alt p-6 rounded-xl border-surface-light flex items-start space-x-4">
              <div className="p-3 bg-red-600/10 rounded-lg text-red-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-main">Filiación oficial</h4>
                <p className="text-sm text-muted mt-1">
                  Somos una comunidad de fe constituida formalmente, asociada de manera hermanada a la Federación de las Asambleas de Dios de España (FADE) garantizando solidez escritural y pastoral.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 opacity-20 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] bg-neutral-200">
              <img
                src={IMAGES.community}
                alt="Comunidad Mensaje de Vida"
                className="w-full h-full object-cover shadow-inner hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Vida en comunidad</span>
                <p className="text-lg font-bold mt-1">Creciendo y compartiendo la fe juntos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Block */}
        <div className="mb-24">
          <p className="text-center text-sm font-bold text-muted-2 uppercase tracking-widest mb-10">
            Los valores que sustentan nuestro obrar diario
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WE_ARE.values.map((v, i) => (
              <div
                key={i}
                className="p-6 bg-card-alt hover:bg-card border border-surface rounded-xl transition-all duration-300 shadow-sm flex flex-col items-start gap-4"
              >
                <div className="p-3 bg-red-600/10 rounded-lg">
                  {valueIcons[i]}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-main tracking-tight">{v.title}</h4>
                  <p className="text-sm text-secondary mt-2 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Segment */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-extrabold text-main">Liderazgo y Servicio</h3>
            <p className="mt-1 text-muted">
              Un equipo comprometido con el cuidado y servicio pastoral de cada persona de la congregación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {WE_ARE.leadership.map((leader, i) => (
              <div
                key={i}
                className="group relative bg-card border border-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400" />
                <div className="p-6 text-center">
                  <div className="relative h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-red-600/30 ring-2 ring-red-600/10 group-hover:ring-red-600/30 transition-all duration-300">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className={`h-full w-full object-cover group-hover:scale-110 transition-transform duration-300 ${i === 0 ? 'scale-[1.4]' : ''}`}
                      style={i === 0 ? { objectPosition: 'center 30%' } : undefined}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1 mb-3">
                    <h4 className="text-lg font-bold text-main group-hover:text-red-600 transition-colors">
                      {leader.name}
                    </h4>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest">
                      {leader.role}
                    </p>
                  </div>
                  <div className="w-10 h-0.5 bg-red-600/30 mx-auto mb-3" />
                  <p className="text-sm text-muted leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
