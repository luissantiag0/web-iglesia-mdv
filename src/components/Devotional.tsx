import React, { useState, useEffect } from 'react';
import { BookOpen, Share2, Copy, Sparkles, RefreshCw, Check, Heart, ChevronDown, ChevronUp, Trash2, Search, Tag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DevotionalItem {
  verse: string;
  reference: string;
  title: string;
  reflection: string;
  prayer: string;
  tag: string;
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

const STORY_GRADIENTS = [
  { name: 'Fuego Celestial', from: '#e11d48', to: '#4c0519', bgClass: 'from-rose-600 to-rose-950', text: '#ffffff', accent: '#fca5a5' },
  { name: 'Noche Cósmica', from: '#18181b', to: '#09090b', bgClass: 'from-zinc-900 to-zinc-950', text: '#ffffff', accent: '#ef4444' },
  { name: 'Azul Profundo', from: '#1d4ed8', to: '#17143a', bgClass: 'from-blue-700 to-indigo-950', text: '#ffffff', accent: '#60a5fa' },
  { name: 'Atardecer Divino', from: '#d97706', to: '#451a03', bgClass: 'from-amber-600 to-amber-950', text: '#ffffff', accent: '#fcd34d' },
  { name: 'Santuario Esmeralda', from: '#047857', to: '#022c22', bgClass: 'from-emerald-700 to-emerald-950', text: '#ffffff', accent: '#6ee7b7' },
];

const DEVOTIONALS: DevotionalItem[] = [
  {
    title: "Un Nuevo Comienzo en Su Gracia",
    verse: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.",
    reference: "2 Corintios 5:17",
    reflection: "Comenzar de nuevo es una de las promesas más hermosas del evangelio. Muchas veces cargamos con el peso de nuestros errores pasados, de las oportunidades perdidas o de las heridas que otros nos causaron. Sin embargo, en Cristo, el Padre borra nuestro ayer y nos ofrece una página en blanco. Su gracia no se limita a perdonarnos; restaura nuestra identidad de raíz para que podamos caminar con la frente en alto y el corazón lleno de paz.",
    prayer: "Señor, gracias por Tu misericordia renovada. Clavo mi pasado en Tu cruz y decido abrazar con fe el presente que has diseñado para mí. Guíame a vivir como una nueva creación.",
    tag: "Restauración"
  },
  {
    title: "Nuevas Fuerzas para el Camino",
    verse: "Pero los que esperan en Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
    reference: "Isaías 40:31",
    reflection: "El cansancio es una realidad humana inevitable. Pasamos por temporadas donde las fuerzas físicas y emocionales parecen agotarse por completo. Pero la Biblia nos revela un secreto espiritual extraordinario: esperar en el Señor no es una inactividad pasiva, sino un reposo de confianza. Cuando depositamos nuestra fatiga en Sus manos, Él intercambia nuestra debilidad por Su poder ilimitado, permitiéndonos remontar el vuelo por encima de cualquier circunstancia.",
    prayer: "Padre, hoy rindo mi cansancio ante Ti. Lléname de Tu Espíritu Santo y renueva mis fuerzas corporales y espirituales. Enséñame a descansar plenamente en Tu fidelidad.",
    tag: "Fortaleza"
  },
  {
    title: "Caminando sin Temor",
    verse: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
    reference: "Josué 1:9",
    reflection: "La valentía en el reino de Dios no es la ausencia de temor, sino la certeza absoluta de que no caminamos solos. El desánimo y el miedo intentan paralizar nuestro propósito. Dios no le dijo a Josué que el camino sería fácil o libre de gigantes, sino que le garantizó Su presencia constante. Ante cualquier transición, reto familiar o incertidumbre laboral, mantente firme: el Creador del universo camina a tu lado.",
    prayer: "Señor Jesús, decido ser valiente hoy. Expulsa todo temor de mi mente con Tu perfecto amor. Recordar que estás conmigo me basta para dar el siguiente paso con gozo.",
    tag: "Valentía"
  },
  {
    title: "La Paz que Sobrepasa todo Entendimiento",
    verse: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.",
    reference: "Filipenses 4:6-7",
    reflection: "La ansiedad intenta adueñarse de nuestros pensamientos proyectando escenarios oscuros sobre el futuro. La respuesta bíblica frente a la preocupación no es ignorar los problemas, sino transformarlos en oraciones. Al presentar nuestras cargas con un espíritu agradecido por lo que Dios ya ha hecho, Su paz desciende como un escudo protector que resguarda nuestro corazón, trayendo un orden sobrenatural e inexplicable a nuestra vida interna.",
    prayer: "Dios de paz, rindo toda ansiedad y preocupación por el mañana en Tus manos sanas. Traigo mis peticiones ante Ti con gratitud. Inunda mis pensamientos con Tu tranquilidad divina.",
    tag: "Paz"
  },
  {
    title: "La Bendición de Habitaren Unidad",
    verse: "¡Mirad cuán bueno y cuán delicioso es habitar los hermanos juntos en armonía!",
    reference: "Salmos 133:1",
    reflection: "Mensaje de Vida es una comunidad llamada a sobrellevar las cargas los unos de los otros. El individualismo y la distancia aíslan la bendición del compañerismo. Cuando procuramos activamente la reconciliación, el amor sincero y la armonía en nuestras familias y en la iglesia, creamos un ambiente propicio donde el Señor derrama vida eterna y bendición abundante. La unidad no es uniformidad, sino la sinfonía de corazones rindiendo gloria al mismo Padre.",
    prayer: "Señor, hazme un instrumento de unidad en mi familia, comunidad y congregación. Ayúdame a perdonar con generosidad y a buscar la armonía sincera por amor a Ti.",
    tag: "Comunidad"
  },
  {
    title: "Inseparables de Su Amor Eterno",
    verse: "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir... nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro.",
    reference: "Romanos 8:38-39",
    reflection: "En un mundo donde los afectos humanos fluctúan y las promesas suelen romperse, el amor de Dios permanece colosal, firme e incambiable. No depende de nuestro rendimiento, de nuestro humor diario o de nuestro estado espiritual; Su amor está sellado con la sangre de Jesucristo. Nada en el universo físico o espiritual tiene el poder de apartarte de Su tierno cuidado. Eres amado profundamente, hoy y siempre.",
    prayer: "Amado Padre, gracias por amarme de forma tan incondicional y eterna. Que esta seguridad barra toda acusación y duda, permitiéndome vivir con el gozo de saberme Tu hijo predilecto.",
    tag: "Amor Divino"
  },
  {
    title: "Planes de Esperanza y Futuro",
    verse: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.",
    reference: "Jeremías 29:11",
    reflection: "A veces miramos a nuestro alrededor y solo vemos caos, retrasos o puertas cerradas. El pueblo de Dios recibió esta promesa estando en el exilio, en medio de la desolación. Sin embargo, el Señor les recordó que Su perspectiva es infinitamente más amplia. Sus planes para tu vida no son de destrucción, sino de restauración integral. Cada proceso tiene un propósito redentor y el destino final que tiene reservado para ti está impregnado de Su gloria y bondad.",
    prayer: "Padre Celestial, elijo confiar en Tus planes aunque hoy no logre comprender el camino. Descanso sabiendo que Tus pensamientos sobre mí son buenos y que mi futuro está seguro en Ti.",
    tag: "Propósito"
  },
  {
    title: "La Fe que Mueve Corazones",
    verse: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.",
    reference: "Hebreos 11:1",
    reflection: "La fe no es un mero optimismo emocional o un pensamiento positivo. Es una sólida convicción espiritual anclada en el carácter inmutable de Dios. Significa creerle a Su Palabra por encima de lo que reportan nuestros sentidos físicos. Fe es confiar en la sanidad antes de que desaparezca el síntoma, agradecer por la provisión antes de ver la cuenta de banco provista, sabiendo que Aquel que prometió es fiel para cumplir.",
    prayer: "Señor Jesús, aumenta mi fe. Ayúdame a poner mis ojos en Ti, el autor y consumador de la fe, y no en el viento ni en las olas de las dificultades.",
    tag: "Fe"
  }
];

export default function Devotional({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDaily, setIsDaily] = useState(true);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [animDirection, setAnimDirection] = useState<'forward' | 'backward'>('forward');
  const [favorites, setFavorites] = useState<DevotionalItem[]>(() => {
    try {
      const saved = localStorage.getItem('mdv_favorite_devotionals_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showFavorites, setShowFavorites] = useState(false);
  const [expandedFavTitle, setExpandedFavTitle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [selectedGradient, setSelectedGradient] = useState(0);

  // Extract unique tags present in saved favorites
  const uniqueTags = Array.from(new Set(favorites.map(fav => fav.tag)));

  // Filter saved favorites based on both text input and tag selection
  const filteredFavorites = favorites.filter(fav => {
    const matchesSearch = searchQuery === '' || 
      fav.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fav.verse.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fav.reflection.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fav.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fav.tag.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = !selectedTag || fav.tag === selectedTag;
    
    return matchesSearch && matchesTag;
  });

  const toggleFavorite = () => {
    let updated;
    const isFav = favorites.some(fav => fav.title === currentDevotional.title);
    if (isFav) {
      updated = favorites.filter(fav => fav.title !== currentDevotional.title);
    } else {
      updated = [...favorites, currentDevotional];
    }
    setFavorites(updated);
    localStorage.setItem('mdv_favorite_devotionals_v1', JSON.stringify(updated));
  };

  const removeFavorite = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = favorites.filter(fav => fav.title !== title);
    setFavorites(updated);
    localStorage.setItem('mdv_favorite_devotionals_v1', JSON.stringify(updated));
    if (expandedFavTitle === title) {
      setExpandedFavTitle(null);
    }
  };

  const selectFavoriteToView = (title: string) => {
    const idx = DEVOTIONALS.findIndex(d => d.title === title);
    if (idx !== -1) {
      setIsDaily(false);
      setAnimDirection('forward');
      setCurrentIndex(idx);
      const sec = document.getElementById('devocional');
      if (sec) {
        sec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Set initial index based on the day of the month
  useEffect(() => {
    const day = new Date().getDate();
    const index = day % DEVOTIONALS.length;
    setCurrentIndex(index);
  }, []);

  const handleRandomize = () => {
    setIsDaily(false);
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * DEVOTIONALS.length);
    } while (newIndex === currentIndex && DEVOTIONALS.length > 1);
    
    setAnimDirection('forward');
    setCurrentIndex(newIndex);
  };

  const handleResetToDaily = () => {
    setIsDaily(true);
    const day = new Date().getDate();
    const index = day % DEVOTIONALS.length;
    setAnimDirection('backward');
    setCurrentIndex(index);
  };

  const copyToClipboard = () => {
    const current = DEVOTIONALS[currentIndex];
    const textToCopy = `"${current.verse}" — ${current.reference}\n\n*${current.title}* (Devocional Mensaje de Vida)\n\n${current.reflection}\n\n🙏 *Oración:* ${current.prayer}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnWhatsApp = () => {
    const current = DEVOTIONALS[currentIndex];
    const text = `*Devocional Mensaje de Vida • Sobre las Naciones*\n\n📖 *Versículo:* "${current.verse}" (${current.reference})\n\n🌟 *Reflexión:* ${current.reflection}\n\n🙏 *Oración:* ${current.prayer}\n\n👉 ¡Únete a nosotros: Carrer de la Mina, 9, Santa Coloma de Gramenet!`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const shareOnTwitter = () => {
    const current = DEVOTIONALS[currentIndex];
    const text = `📖 "${current.verse}" — ${current.reference}\n\n✨ Reflexión: ${current.title}\n\n@mensajedevida #devocional #fe`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://twitter.com/intent/tweet?text=${encodedText}`, '_blank');
  };

  const downloadStoryImage = () => {
    const current = DEVOTIONALS[currentIndex];
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const grad = STORY_GRADIENTS[selectedGradient];

    // Solid gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, 1920);
    gradient.addColorStop(0, grad.from);
    gradient.addColorStop(1, grad.to);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1920);

    // Decorative border
    ctx.lineWidth = 12;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.strokeRect(30, 30, 1080 - 60, 1920 - 60);

    // Decorative corner accents
    ctx.strokeStyle = grad.accent;
    ctx.lineWidth = 4;
    // Top-left
    ctx.beginPath();
    ctx.moveTo(50, 110); ctx.lineTo(50, 50); ctx.lineTo(110, 50);
    ctx.stroke();
    // Top-right
    ctx.beginPath();
    ctx.moveTo(1080 - 50, 110); ctx.lineTo(1080 - 50, 50); ctx.lineTo(1080 - 110, 50);
    ctx.stroke();
    // Bottom-left
    ctx.beginPath();
    ctx.moveTo(50, 1920 - 110); ctx.lineTo(50, 1920 - 50); ctx.lineTo(110, 1920 - 50);
    ctx.stroke();
    // Bottom-right
    ctx.beginPath();
    ctx.moveTo(1080 - 50, 1920 - 110); ctx.lineTo(1080 - 50, 1920 - 50); ctx.lineTo(1080 - 110, 1920 - 50);
    ctx.stroke();

    // Church Branding header
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    // Quote icon mark
    ctx.font = 'bold 160px Georgia, serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.fillText('“', 540, 280);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText('MENSAJE DE VIDA', 540, 180);
    
    ctx.font = '300 24px sans-serif';
    ctx.fillStyle = grad.accent;
    ctx.fillText('SOBRE LAS NACIONES', 540, 235);

    // Category banner
    ctx.font = '900 22px sans-serif';
    ctx.fillStyle = grad.accent;
    ctx.fillText(`PALABRA DE DIOS • ${current.tag.toUpperCase()}`, 540, 480);

    // Inner verse wrap
    ctx.fillStyle = '#ffffff';
    ctx.font = 'italic 500 46px Georgia, serif';
    
    const textX = 540;
    const textWidth = 840;
    const lineHeight = 72;
    let currentY = 570;

    const words = `"${current.verse}"`.split(' ');
    let line = '';

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const width = ctx.measureText(testLine).width;
      if (width > textWidth && n > 0) {
        ctx.fillText(line, textX, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, textX, currentY);

    // Verse reference
    currentY += 100;
    ctx.font = 'bold 34px sans-serif';
    ctx.fillStyle = grad.accent;
    ctx.fillText(current.reference.toUpperCase(), 540, currentY);

    // Golden separator line
    currentY += 120;
    ctx.beginPath();
    ctx.moveTo(420, currentY);
    ctx.lineTo(660, currentY);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Quick reflection title excerpt
    currentY += 80;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.font = '300 30px sans-serif';
    ctx.fillText(current.title, 540, currentY);

    // Bottom Watermark details
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('Asamblea de Dios • Santa Coloma de Gramenet', 540, 1780);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = '20px sans-serif';
    ctx.fillText('mensajedevida.es', 540, 1830);

    // Trigger raw browser download stream
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `Devocional_MensajeDeVida_${current.reference.replace(/\s+/g, '_')}.png`;
    link.href = dataUrl;
    link.click();
  };

  const currentDevotional = DEVOTIONALS[currentIndex];
  const isCurrentFavorite = favorites.some(fav => fav.title === currentDevotional.title);

  return (
    <section id="devocional" className={`py-24 transition-colors duration-300 relative overflow-hidden border-b ${
      theme === 'dark'
        ? 'bg-zinc-950 text-white border-white/5'
        : 'bg-zinc-50 text-zinc-900 border-zinc-200'
    }`}>
      {/* Decorative ambient spots */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10 transition-opacity ${
        theme === 'dark' ? 'bg-red-650/10' : 'bg-red-500/5'
      }`} />
      <div className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl -z-10 transition-opacity ${
        theme === 'dark' ? 'bg-zinc-900/40' : 'bg-zinc-200/50'
      }`} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-600/10 text-red-500 border border-red-500/20 rounded-full text-[11px] font-mono uppercase tracking-widest mb-4">
            <BookOpen className="h-3 w-3 animate-pulse text-red-600" />
            <span>Alimento para el Alma</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-sans font-extrabold tracking-tight transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            Devocional <span className="text-red-500">Diario</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed transition-colors ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'
          }`}>
            Medita en la Palabra de Dios y fortalece tu fe con reflexiones directas y pastorales elaboradas para guiar tu día a día en Barcelona y más allá.
          </p>
        </div>

        {/* Toggle Controls between Daily and Random */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={handleResetToDaily}
            className={`px-4 py-2 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              isDaily
                ? 'bg-red-600 text-white shadow-md shadow-red-900/30 ring-2 ring-red-500'
                : theme === 'dark'
                  ? 'bg-zinc-900/45 hover:bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  : 'bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200 shadow-sm'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Palabra del Día</span>
          </button>
          <button
            onClick={handleRandomize}
            className={`px-4 py-2 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              !isDaily
                ? 'bg-red-600 text-white shadow-md shadow-red-900/30'
                : theme === 'dark'
                  ? 'bg-zinc-900/45 hover:bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  : 'bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200 shadow-sm'
            }`}
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Versículo Aleatorio</span>
          </button>
        </div>

        {/* Devotional Card wrapper with AnimatePresence */}
        <div className="min-h-[420px] lg:min-h-[400px] flex items-stretch">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: animDirection === 'forward' ? 15 : -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: animDirection === 'forward' ? -15 : 15 }}
              transition={{ duration: 0.3 }}
              className={`w-full border rounded-3xl p-6 sm:p-10 text-left flex flex-col justify-between shadow-2xl backdrop-blur-md relative transition-all duration-350 ${
                theme === 'dark'
                  ? 'bg-neutral-900/50 hover:bg-neutral-900/70 border-white/10 shadow-black/40'
                  : 'bg-white hover:bg-zinc-50/80 border-zinc-200/80 shadow-zinc-200/30 text-zinc-900'
              }`}
            >
              <div>
                {/* Meta details with Category Label */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className={`px-3 py-1 border text-[10px] font-bold uppercase rounded-md tracking-wider transition-colors ${
                    theme === 'dark'
                      ? 'bg-red-950/50 border-red-900 text-red-400'
                      : 'bg-red-50 border-red-100 text-red-650'
                  }`}>
                    {currentDevotional.tag}
                  </span>
                  <span className={`text-[11px] uppercase font-bold tracking-widest font-mono transition-colors ${
                    theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    {isDaily ? '📅 Lectura Recomendada' : '🔮 Palabra de Fe'}
                  </span>
                </div>

                {/* Main Encouraging Title */}
                <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-4 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                  {currentDevotional.title}
                </h3>

                {/* Encouraging Scripture block */}
                <div className={`relative pl-4 border-l-4 py-1 mb-6 rounded-r-lg pr-3 transition-colors ${
                  theme === 'dark'
                    ? 'border-red-600 bg-red-950/10'
                    : 'border-red-500 bg-red-50/40'
                }`}>
                  <p className={`text-sm sm:text-base italic font-medium transition-colors ${
                    theme === 'dark' ? 'text-zinc-100' : 'text-zinc-800'
                  }`}>
                    "{currentDevotional.verse}"
                  </p>
                  <span className="block mt-2 text-xs font-extrabold text-red-500 tracking-wider">
                    — {currentDevotional.reference}
                  </span>
                </div>

                {/* Pastoral Reflection paragraph */}
                <div className="space-y-4">
                  <p className={`text-sm sm:text-base font-light leading-relaxed transition-colors ${
                    theme === 'dark' ? 'text-zinc-300' : 'text-zinc-650'
                  }`}>
                    {currentDevotional.reflection}
                  </p>
                  
                  {/* Suggestive Prayer */}
                  <div className={`p-4 border rounded-2xl transition-colors ${
                    theme === 'dark'
                      ? 'bg-zinc-950/50 border-zinc-800 text-zinc-400'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-650'
                  }`}>
                    <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1.5 font-mono">
                      👣 Oración Práctica para Hoy:
                    </h4>
                    <p className={`text-[13px] leading-relaxed font-light italic transition-colors ${
                      theme === 'dark' ? 'text-zinc-450' : 'text-zinc-600'
                    }`}>
                      {currentDevotional.prayer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4 transition-colors ${
                theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200/60'
              }`}>
                <div className={`text-xs flex items-center gap-1.5 transition-colors ${
                  theme === 'dark' ? 'text-zinc-500' : 'text-zinc-450'
                }`}>
                  <BookOpen className="h-3.5 w-3.5 opacity-60" />
                  <span>Mensaje de la Biblia • REINA VALERA 1960</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Save to favorites */}
                  <button
                    onClick={toggleFavorite}
                    className={`p-2.5 rounded-xl border transition-all flex items-center justify-center gap-1.5 text-xs font-bold cursor-pointer ${
                      isCurrentFavorite
                        ? 'bg-red-650/20 border-red-500/35 text-red-500 hover:bg-red-650/30'
                        : theme === 'dark'
                          ? 'bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-805'
                          : 'bg-white hover:bg-zinc-100 text-zinc-650 hover:text-zinc-900 border border-zinc-250 shadow-sm'
                    }`}
                    title={isCurrentFavorite ? "Quitar de favoritos" : "Guardar como favorito"}
                  >
                    <Heart className={`h-4 w-4 transition-transform duration-200 ${isCurrentFavorite ? 'fill-red-500 text-red-500 scale-110' : ''}`} />
                    <span>{isCurrentFavorite ? 'Favorito' : 'Guardar'}</span>
                  </button>

                  {/* Copy to system Clipboard */}
                  <button
                    onClick={copyToClipboard}
                    className={`p-2.5 border transition-all flex items-center justify-center gap-1.5 text-xs font-bold cursor-pointer rounded-xl ${
                      theme === 'dark'
                        ? 'bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border-zinc-805'
                        : 'bg-white hover:bg-zinc-100 text-zinc-650 hover:text-zinc-900 border-zinc-250 shadow-sm'
                    }`}
                    title="Copiar devocional completo"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>

                  {/* Share to WhatsApp directly */}
                  <button
                    onClick={shareOnWhatsApp}
                    className={`p-2.5 border transition-all flex items-center justify-center gap-1.5 text-xs font-bold cursor-pointer rounded-xl ${
                      theme === 'dark'
                        ? 'bg-green-600/10 hover:bg-green-600 text-green-400 hover:text-white border-green-700/30'
                        : 'bg-green-50 hover:bg-green-600 text-green-600 hover:text-white border-green-200 shadow-sm'
                    }`}
                    title="Compartir por WhatsApp"
                  >
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </button>

                  {/* Share to Twitter */}
                  <button
                    onClick={shareOnTwitter}
                    className={`p-2.5 border transition-all flex items-center justify-center gap-1.5 text-xs font-bold cursor-pointer rounded-xl ${
                      theme === 'dark'
                        ? 'bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border-zinc-800'
                        : 'bg-zinc-50 hover:bg-zinc-800 text-zinc-750 hover:text-zinc-900 border-zinc-200 shadow-sm'
                    }`}
                    title="Compartir en Twitter (X)"
                  >
                    <TwitterIcon className="h-4 w-4" />
                    <span className="hidden sm:inline">X / Twitter</span>
                  </button>

                  {/* Share as Instagram Story layout creator */}
                  <button
                    onClick={() => setShowStoryModal(true)}
                    className={`px-4 py-2.5 border transition-all flex items-center justify-center gap-1.5 text-xs font-bold cursor-pointer rounded-xl ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-purple-650/10 to-pink-650/10 hover:from-purple-600 hover:to-pink-600 text-pink-400 hover:text-white border-pink-700/30'
                        : 'bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-600 hover:to-pink-600 text-pink-650 hover:text-white border-pink-200/80 shadow-sm'
                    }`}
                    title="Crear Imagen de Instagram Story"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    <span>Insta Story</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Collapsible Favorites Section */}
        <div className={`mt-12 border-t pt-8 text-left transition-colors ${
          theme === 'dark' ? 'border-white/5' : 'border-zinc-200'
        }`}>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className={`group flex items-center space-x-2 transition-colors cursor-pointer text-sm font-bold uppercase font-mono tracking-wider bg-transparent border-none outline-none ${
                theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
              }`}
              id="toggle-favorites-btn"
            >
              <Heart className={`h-4 w-4 text-red-500 transition-transform ${favorites.length > 0 && !showFavorites ? 'animate-pulse' : ''}`} />
              <span>Mis Versículos Favoritos ({favorites.length})</span>
              {showFavorites ? (
                <ChevronUp className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors" />
              ) : (
                <ChevronDown className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors" />
              )}
            </button>
            
            {favorites.length > 0 && showFavorites && (
              <button
                onClick={() => {
                  if (window.confirm('¿Estás seguro de que deseas vaciar todos tus versículos favoritos?')) {
                    setFavorites([]);
                    localStorage.setItem('mdv_favorite_devotionals_v1', JSON.stringify([]));
                  }
                }}
                className={`text-[10px] uppercase font-bold transition-colors cursor-pointer bg-transparent border-none outline-none ${
                  theme === 'dark' ? 'text-zinc-500 hover:text-red-400' : 'text-zinc-400 hover:text-red-600'
                }`}
              >
                Vaciar todo
              </button>
            )}
          </div>

          <AnimatePresence>
            {showFavorites && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {favorites.length === 0 ? (
                  <div className={`mt-4 p-8 border rounded-2xl text-center transition-colors ${
                    theme === 'dark'
                      ? 'bg-neutral-900/30 border-zinc-800/40 text-zinc-500'
                      : 'bg-white border-zinc-200 text-zinc-500 shadow-sm'
                  }`}>
                    <Heart className="h-8 w-8 text-zinc-500/60 mx-auto mb-2 opacity-50" />
                    <p className="text-xs">Aún no has guardado ningún versículo. Pulsa el botón de "Guardar" en tus devocionales preferidos para verlos aquí.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Search & Theme Tag Filters bar */}
                    <div className={`mt-4 p-4 border rounded-2xl space-y-4 transition-colors ${
                      theme === 'dark'
                        ? 'bg-neutral-900/40 border-zinc-800/60'
                        : 'bg-white border-zinc-200 shadow-sm shadow-zinc-100'
                    }`}>
                      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                        {/* Keyword Search text input */}
                        <div className="relative flex-1">
                          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar favoritos por palabra, versículo o libro..."
                            className={`w-full border rounded-xl py-2 pl-10 pr-10 text-xs transition-all focus:outline-none focus:ring-1 focus:ring-red-650/40 ${
                              theme === 'dark'
                                ? 'bg-zinc-950/70 border-zinc-800 text-white placeholder-zinc-500 focus:border-red-650/70'
                                : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-red-500'
                            }`}
                          />
                          {searchQuery && (
                            <button
                              onClick={() => setSearchQuery('')}
                              className={`absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full cursor-pointer bg-transparent border-none outline-none transition-colors ${
                                theme === 'dark' ? 'text-zinc-500 hover:text-white hover:bg-zinc-800/60' : 'text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200'
                              }`}
                              title="Limpiar búsqueda"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          )}
                        </div>

                        {/* Reset filters */}
                        {(searchQuery || selectedTag) && (
                          <button
                            onClick={() => {
                              setSearchQuery('');
                              setSelectedTag(null);
                            }}
                            className={`px-3 py-2 text-[10px] font-bold uppercase rounded-xl border cursor-pointer transition-all self-end sm:self-auto ${
                              theme === 'dark'
                                ? 'text-red-500 hover:text-red-400 hover:bg-red-955/20 border-red-900/40'
                                : 'text-red-600 hover:text-red-500 hover:bg-red-50 border-red-200'
                            }`}
                          >
                            Limpiar Filtros
                          </button>
                        )}
                      </div>

                      {/* Tag pill filters */}
                      {uniqueTags.length > 0 && (
                        <div className={`flex flex-wrap items-center gap-2 pt-3 border-t transition-colors ${
                          theme === 'dark' ? 'border-zinc-800/30' : 'border-zinc-150'
                        }`}>
                          <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 flex items-center gap-1 mr-1">
                            <Tag className="h-3 w-3 text-zinc-400" />
                            Filtrar por tema:
                          </span>
                          
                          <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-3 py-1 rounded-lg text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                              selectedTag === null
                                ? 'bg-red-600 text-white shadow-sm shadow-red-900/20'
                                : theme === 'dark'
                                  ? 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-850'
                                  : 'bg-zinc-100 text-zinc-650 hover:text-zinc-900 border border-zinc-200'
                            }`}
                          >
                            Todos
                          </button>

                          {uniqueTags.map(tag => (
                            <button
                              key={tag}
                              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                              className={`px-3 py-1 rounded-lg text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                                selectedTag === tag
                                  ? 'bg-red-600 text-white shadow-sm shadow-red-900/20'
                                  : theme === 'dark'
                                    ? 'bg-zinc-950/50 text-zinc-400 hover:text-white border border-zinc-850/60'
                                    : 'bg-white text-zinc-650 hover:text-zinc-900 border border-zinc-200 shadow-sm'
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {filteredFavorites.length === 0 ? (
                      <div className={`p-8 border rounded-2xl text-center transition-colors ${
                        theme === 'dark' ? 'bg-neutral-900/20 border-zinc-800/40 text-zinc-500' : 'bg-white border-zinc-200 text-zinc-500 shadow-sm'
                      }`}>
                        <Search className="h-7 w-7 text-zinc-400 mx-auto mb-2 opacity-50" />
                        <p className="text-xs font-light">Ningún versículo favorito coincide con los criterios de búsqueda.</p>
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setSelectedTag(null);
                          }}
                          className={`mt-3 px-3 py-1.5 text-xs rounded-lg font-bold transition-colors ${
                            theme === 'dark' ? 'bg-zinc-850 hover:bg-zinc-800 text-zinc-350' : 'bg-zinc-100 hover:bg-zinc-205 text-zinc-700'
                          }`}
                        >
                          Restablecer filtros
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredFavorites.map((fav) => {
                          const isExpanded = expandedFavTitle === fav.title;
                          return (
                            <div
                              key={fav.title}
                              className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                                theme === 'dark'
                                  ? 'bg-neutral-900/60 border-zinc-800 hover:border-zinc-700 shadow-md'
                                  : 'bg-white border-zinc-200 shadow-md hover:border-zinc-300 shadow-zinc-100/30'
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className={`px-2 py-0.5 border text-[9px] font-bold uppercase rounded transition-colors ${
                                    theme === 'dark' ? 'bg-red-950/40 border-red-900/50 text-red-400' : 'bg-red-50 border-red-200/60 text-red-600'
                                  }`}>
                                    {fav.tag}
                                  </span>
                                  <button
                                    onClick={(e) => removeFavorite(fav.title, e)}
                                    className={`p-1 rounded transition-colors bg-transparent border-none outline-none cursor-pointer ${
                                      theme === 'dark' ? 'text-zinc-500 hover:text-red-400 hover:bg-zinc-800' : 'text-zinc-450 hover:text-red-600 hover:bg-zinc-100'
                                    }`}
                                    title="Quitar de favoritos"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                                <h4 className={`font-bold text-sm mb-2 transition-colors ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{fav.title}</h4>
                                <p className={`text-xs italic mb-2 line-clamp-3 transition-colors ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600 font-medium'}`}>
                                  "{fav.verse}"
                                </p>
                                <span className="block text-[10px] text-red-500 font-bold mb-3">{fav.reference}</span>
                                
                                {isExpanded && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className={`border-t pt-3 mt-3 space-y-3 ${theme === 'dark' ? 'border-zinc-800/60' : 'border-zinc-150'}`}
                                  >
                                    <p className={`text-xs leading-relaxed font-light transition-colors ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'}`}>
                                      {fav.reflection}
                                    </p>
                                    <div className={`p-3 rounded-xl border font-sans transition-colors ${
                                      theme === 'dark' ? 'bg-zinc-950/40 border-zinc-850' : 'bg-zinc-50 border-zinc-200'
                                    }`}>
                                      <h5 className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1 font-mono">Oración:</h5>
                                      <p className={`text-[11px] italic leading-relaxed font-light transition-colors ${
                                        theme === 'dark' ? 'text-zinc-500' : 'text-text-zinc-600'
                                      }`}>
                                        {fav.prayer}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </div>

                              <div className={`flex items-center justify-between mt-4 border-t pt-3 ${theme === 'dark' ? 'border-zinc-800/40' : 'border-zinc-150'}`}>
                                <button
                                  onClick={() => selectFavoriteToView(fav.title)}
                                  className={`text-[10px] font-bold tracking-wider uppercase transition-colors bg-transparent border-none outline-none cursor-pointer ${
                                    theme === 'dark' ? 'text-red-400 hover:text-red-350' : 'text-red-650 hover:text-red-700'
                                  }`}
                                >
                                  Cargar completo &rarr;
                                </button>
                                <button
                                  onClick={() => setExpandedFavTitle(isExpanded ? null : fav.title)}
                                  className={`text-[10px] font-bold uppercase transition-colors bg-transparent border-none outline-none cursor-pointer ${
                                    theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
                                  }`}
                                >
                                  {isExpanded ? 'Ocultar' : 'Leer reflexión'}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Instagram Story Builder Modal */}
      <AnimatePresence>
        {showStoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row text-left"
            >
              {/* Left Column: Live 9:16 Mock Story Card Preview */}
              <div className="p-6 md:p-8 bg-zinc-950 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 shrink-0">
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-4">
                  Vista Previa (9:16)
                </span>
                
                {/* Visual Story Card Mockup */}
                <div
                  id="story-preview-card"
                  className={`relative w-[270px] h-[480px] bg-gradient-to-b ${STORY_GRADIENTS[selectedGradient].bgClass} border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden text-center select-none font-sans`}
                  style={{
                    color: STORY_GRADIENTS[selectedGradient].text
                  }}
                >
                  {/* Subtle decorative corners */}
                  <div
                    className="absolute inset-5 border border-white/5 pointer-events-none rounded-lg"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}
                  />
                  <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: STORY_GRADIENTS[selectedGradient].accent }} />
                  <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 pointer-events-none" style={{ borderColor: STORY_GRADIENTS[selectedGradient].accent }} />
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 pointer-events-none" style={{ borderColor: STORY_GRADIENTS[selectedGradient].accent }} />
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: STORY_GRADIENTS[selectedGradient].accent }} />

                  {/* Header */}
                  <div className="pt-2 z-10">
                    <h5 className="text-[11px] font-extrabold tracking-[0.25em] text-white">
                      MENSAJE DE VIDA
                    </h5>
                    <p className="text-[7px] font-light tracking-[0.3em] uppercase opacity-75 mt-0.5" style={{ color: STORY_GRADIENTS[selectedGradient].accent }}>
                      SOBRE LAS NACIONES
                    </p>
                  </div>

                  {/* Verse Middle content */}
                  <div className="px-1 flex flex-col justify-center items-center flex-1 my-auto relative z-10">
                    <span className="text-4xl Georgia, serif italic opacity-15 select-none absolute -top-8 text-white">“</span>
                    <p className="text-[12px] leading-relaxed italic font-medium text-white mb-2 font-serif line-clamp-8">
                      "{currentDevotional.verse}"
                    </p>
                    <span className="text-[9px] font-bold tracking-wider uppercase mt-1" style={{ color: STORY_GRADIENTS[selectedGradient].accent }}>
                      — {currentDevotional.reference}
                    </span>
                    
                    <div className="w-8 h-[1px] bg-white/20 my-4" />
                    
                    <span className="text-[9px] font-extrabold tracking-widest uppercase" style={{ color: STORY_GRADIENTS[selectedGradient].accent }}>
                      {currentDevotional.tag}
                    </span>
                  </div>

                  {/* Title and Footer Details */}
                  <div className="pb-2 z-10">
                    <p className="text-[10px] text-white/90 font-light mb-5 tracking-tight">
                      {currentDevotional.title}
                    </p>
                    <p className="text-[7px] font-bold tracking-widest uppercase opacity-45">
                      Carrer de la Mina, 9, Santa Coloma de Gramenet
                    </p>
                    <p className="text-[6px] tracking-widest uppercase opacity-35 mt-0.5">
                      mensajedevida.es
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Customizers & Actions */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                      <InstagramIcon className="h-5 w-5 text-pink-500" />
                      Creador de Stories de Instagram
                    </h4>
                    <button
                      onClick={() => setShowStoryModal(false)}
                      className="p-1 px-2.5 bg-zinc-805 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg text-xs cursor-pointer border-none outline-none"
                    >
                      Cerrar
                    </button>
                  </div>
                  
                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                    Genera una imagen artística en vertical (9:16) con el versículo bíblico diario. Es perfecta para compartirla directamente en tus Stories de Instagram o estados de WhatsApp.
                  </p>

                  {/* Gradient Chooser */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 font-mono">
                      1. Elige una combinación de colores:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {STORY_GRADIENTS.map((grad, idx) => (
                        <button
                          key={grad.name}
                          onClick={() => setSelectedGradient(idx)}
                          className={`p-2 rounded-xl text-left border flex items-center gap-2 transition-all cursor-pointer ${
                            selectedGradient === idx
                              ? 'border-red-500 bg-red-950/20 text-white'
                              : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700 text-zinc-500 hover:text-white'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-b ${grad.bgClass} shrink-0`} />
                          <span className="text-[10px] font-bold truncate">{grad.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Instructions details */}
                  <div className="bg-zinc-950/60 border border-zinc-850 rounded-2xl p-4 space-y-2 mb-6 text-zinc-400">
                    <span className="block text-[10px] uppercase font-extrabold tracking-wider text-zinc-500 font-mono">
                      💡 Instrucciones de uso rápido:
                    </span>
                    <ul className="text-[11px] list-decimal list-inside space-y-1 font-light leading-relaxed">
                      <li>Haz clic en <strong className="text-zinc-300">Descargar Imagen (Story)</strong> para generar y bajar el archivo listo para compartir.</li>
                      <li>Para compartir en tu teléfono, también puedes tomar una <strong className="text-zinc-300">captura de pantalla</strong> directa de la vista previa de la izquierda.</li>
                      <li>Abre tu aplicación de Instagram, añade la imagen a tu Story, ¡y comparte el versículo!</li>
                    </ul>
                  </div>
                </div>

                {/* Final download button trigger */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const text = `📖 "${currentDevotional.verse}" — ${currentDevotional.reference}\n\n✨ Reflexión: ${currentDevotional.title}\n\n@mensajedevida #devocional #fe`;
                      navigator.clipboard.writeText(text);
                      alert('¡Mensaje y hashtags listos! Copiados al portapapeles.');
                    }}
                    className="flex-1 p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer border border-zinc-700/40 text-center"
                  >
                    Copiar Texto de Publicación
                  </button>
                  
                  <button
                    onClick={downloadStoryImage}
                    className="flex-1 p-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-900/10 cursor-pointer border-none outline-none"
                  >
                    <DownloadIcon className="h-4.5 w-4.5" />
                    <span>Descargar Imagen (Story)</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
