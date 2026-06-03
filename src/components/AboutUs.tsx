import { ShieldCheck, HeartPulse, Sparkles, Footprints } from 'lucide-react';
import { WE_ARE, IMAGES } from '../data';

export default function AboutUs() {
  const valueIcons = [
    <ShieldCheck key="icon-0" className="h-6 w-6" />,
    <HeartPulse key="icon-1" className="h-6 w-6" />,
    <Sparkles key="icon-2" className="h-6 w-6" />,
    <Footprints key="icon-3" className="h-6 w-6" />,
  ];

  return (
    <section id="quienes-somos" className="py-24 bg-surface text-main scroll-mt-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-red-600 tracking-wider uppercase font-mono">
            Quiénes Somos
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-main">
            Una Iglesia para las Naciones
          </p>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* History and Image Grid Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <p className="text-secondary leading-relaxed text-lg whitespace-pre-line">
              {WE_ARE.history}
            </p>
            <div className="bg-gradient-to-r from-red-600/10 to-transparent p-6 rounded-xl border-l-2 border-red-600 flex items-start space-x-4">
              <div className="p-2.5 bg-red-600 rounded-lg text-white shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-main">Filiación oficial</h4>
                <p className="text-sm text-muted mt-1">
                  Iglesia Mensaje de Vida Sobre las Naciones está constituida legalmente y forma parte de la Federación de las Asambleas de Dios de España (FADE), manteniendo una cobertura doctrinal y pastoral basada en las Sagradas Escrituras.
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold text-red-600 uppercase tracking-widest font-mono">
              Nuestros pilares
            </p>
            <h3 className="text-2xl font-extrabold text-main mt-2">Los valores que nos definen</h3>
            <div className="h-0.5 w-16 bg-red-600 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WE_ARE.values.map((v, i) => (
              <div
                key={i}
                className="group p-6 bg-card-alt hover:bg-card border border-surface hover:border-red-600/30 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col items-start gap-4 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-600/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-red-600/10 transition-all duration-300" />
                <div className="p-3 bg-red-600/10 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-600/20 transition-all duration-300 shrink-0">
                  {valueIcons[i]}
                </div>
                <div className="relative">
                  <h4 className="text-lg font-bold text-main tracking-tight group-hover:text-red-600 transition-colors">{v.title}</h4>
                  <p className="text-sm text-secondary mt-2 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Segment */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold text-red-600 uppercase tracking-widest font-mono">
              Pastoral
            </p>
            <h3 className="text-2xl font-extrabold text-main mt-2">Ministerios y Servicio</h3>
            <div className="h-0.5 w-16 bg-red-600 mx-auto mt-4" />
            <p className="mt-4 text-muted">
              Un equipo comprometido con el servicio, el apoyo y el desarrollo de la iglesia en sus distintas áreas.
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
                  <div className="relative h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-red-600/30 ring-2 ring-red-600/10 group-hover:ring-red-600/30 group-hover:border-red-600 transition-all duration-300">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className={`h-full w-full object-cover ${i === 0 ? 'scale-[1.6] group-hover:scale-[1.76]' : 'group-hover:scale-110'} transition-transform duration-300`}
                      style={i === 0 ? { objectPosition: 'center 27%' } : undefined}
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
