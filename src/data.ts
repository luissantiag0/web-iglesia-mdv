import type { Sermon, ChurchEvent, Meeting } from './types';

// Import newly generated images
import heroImage from './assets/images/foto-arde.jpeg';
import communityImage from './assets/images/quienes-somos.jpeg';
import moisesImg from './assets/images/pastor-moises-segura.png';
import daniImg from './assets/images/pastor-dani-gines.png';
import abelImg from './assets/images/pastor-abel-gines.png';
import visionImage from './assets/images/foto-vision.jpeg';
import donationImage from './assets/images/donation_banner_1780330755393.png';
import eventYouthImage from './assets/images/event_youth_1780330785803.png';
import eventFamilyImage from './assets/images/event_family_1780330819112.png';

export const IMAGES = {
  hero: heroImage,
  community: communityImage,
  vision: visionImage,
  donation: donationImage,
  eventYouth: eventYouthImage,
  eventFamily: eventFamilyImage,
};

export const INSTAGRAM_URL = "https://instagram.com";
export const FACEBOOK_URL = "https://facebook.com";
export const YOUTUBE_URL = "https://youtube.com";
export const TIKTOK_URL = "https://www.tiktok.com";
export const WHATSAPP_URL = "https://wa.me/34600000000?text=Hola%20Mensaje%20de%20Vida%2C%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20con%20vosotros.";

export const CHURCH_INFO = {
  name: "Mensaje de Vida · Sobre las Naciones",
  slogan: "Un lugar para pertenecer, crecer y servir",
  foundedYear: "1998",
  affiliation: "Miembro de las Asambleas de Dios de España (FADE)",
  address: "Carrer de la Mina, 9, 08913 Santa Coloma de Gramenet, Barcelona",
  phone: "+34 93 123 45 67",
  email: "contacto@mensajedevida.org",
  mapsEmbed: "https://maps.google.com/maps?q=Carrer%20de%20la%20Mina%2C%209%2C%2008913%20Santa%20Coloma%20de%20Gramenet%20Barcelona&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export const WE_ARE = {
  history: "Nuestra iglesia, Mensaje de Vida, comenzó con un pequeño grupo de creyentes apasionados que compartían el mismo deseo: ser un faro de esperanza y luz para nuestra ciudad. Confiando plenamente en el mover del Espíritu Santo, celebramos nuestras primeras reuniones en un pequeño local. A lo largo de los años, hemos visto la increíble fidelidad del Señor añadiendo a aquellos que han sido transformados por Su gracia. Hoy nos erigimos como una comunidad vibrante de fe, amor fraternal y firme compromiso con las Sagradas Escrituras.",
  values: [
    {
      title: "Identidad Bíblica",
      description: "La Palabra de Dios es nuestra única regla de fe y conducta. Estudiamos, enseñamos y vivimos las Escrituras de manera práctica."
    },
    {
      title: "Espíritu de Comunidad",
      description: "Creemos en la unidad familiar y en el discipulado intencional. Cada persona es valorada y acogida con amor."
    },
    {
      title: "Pasión por el Servicio",
      description: "Servimos a nuestro prójimo local e internacionalmente mediante la acción social y la proclamación del Evangelio."
    },
    {
      title: "Espiritualidad Pentecostal",
      description: "Anhelamos y experimentamos la llenura y los dones del Espíritu Santo para la edificación diaria y el impacto evangelístico."
    }
  ],
  leadership: [
    {
      name: "Pr. Moisés Segura",
      role: "Pastor Principal",
      bio: "Apasionado por la plantación de iglesias, el cuidado integral de las familias y ver el Reino de Dios expandirse a través de una iglesia unida y comprometida con la Gran Comisión.",
      avatar: moisesImg
    },
    {
      name: "Pr. Dani Ginés",
      role: "Pastor Terrassa",
      bio: "Apasionado por el mover del Espíritu Santo, la alabanza y la adoración, y ver vidas transformadas por el poder de Dios en cada reunión.",
      avatar: daniImg
    },
    {
      name: "Pr. Abel Ginés",
      role: "Pastor Rubí",
      bio: "Amante de las Escrituras, dedicado al estudio profundo de la Palabra y a enseñarla con claridad para que otros crezcan en su conocimiento de Cristo.",
      avatar: abelImg
    }
  ]
};

export const VISION_MISSION = {
  vision: {
    title: "Nuestra Visión",
    text: "Ser una iglesia apasionada por la presencia de Dios, profundamente arraigada en las Escrituras, que transforma activamente su entorno mediante el amor práctico y levanta discípulos maduros de Jesucristo para influir en las próximas generaciones de nuestra nación. Anhelamos ver ciudades transformadas por el evangelio, familias restauradas por el poder del Espíritu Santo y una generación levantándose sin miedo a proclamar el nombre de Cristo."
  },
  mission: {
    title: "Nuestra Misión",
    text: "Glorificar a Dios en todo momento, amar a nuestro prójimo sin condiciones y conectar a las personas con el propósito liberador de Jesucristo a través del discipulado, la proclamación evangelística y el servicio solidario cotidiano. Existimos para hacer discípulos que hagan discípulos, extendiendo el Reino de Dios desde nuestras congregaciones locales hasta lo último de la tierra."
  }
};

export const MEETINGS: Meeting[] = [
  // Badalona
  {
    id: "badalona-evangelismo",
    name: "Evangelismo",
    day: "Lunes",
    time: "19:30",
    description: "Salimos a las calles para compartir el amor de Cristo. Nos encontramos en la Plaza dels Pescadors (Alfons XIII, 454, Badalona).",
    icon: "HeartHandshake",
    location: "Badalona"
  },
  {
    id: "badalona-estudio-biblico",
    name: "Estudio Bíblico",
    day: "Martes",
    time: "19:30",
    description: "Profundizamos en las Escrituras con una enseñanza clara y práctica para aplicar la Palabra a nuestra vida diaria.",
    icon: "Home",
    location: "Badalona"
  },
  {
    id: "badalona-matrimonios-mujeres",
    name: "Matrimonios y Mujeres",
    day: "Miércoles",
    time: "18:30",
    description: "Espacios dedicados para fortalecer matrimonios y encuentro de mujeres, creciendo juntos en fe y comunión.",
    icon: "HeartHandshake",
    location: "Badalona"
  },
  {
    id: "badalona-hombres",
    name: "Hombres",
    day: "Miércoles",
    time: "19:30",
    description: "Reunión de varones para compartir, orar y edificarnos mutuamente en nuestro caminar con Dios.",
    icon: "Users",
    location: "Badalona"
  },
  {
    id: "badalona-culto",
    name: "Culto General",
    day: "Jueves",
    time: "19:30",
    description: "Noche de alabanza, adoración y palabra. Un encuentro especial para buscar juntos la presencia de Dios.",
    icon: "Church",
    location: "Badalona"
  },
  {
    id: "badalona-infantil",
    name: "Ministerio Infantil y Prejuvenil",
    day: "Viernes",
    time: "17:30",
    description: "PG (Pequeños Gigantes) de 6 a 8 años, NG (New Generation) de 9 a 12 años y +QP (Más que Pasión) de 12 a 16 años.",
    icon: "Users",
    location: "Badalona"
  },
  {
    id: "badalona-jovenes",
    name: "Jóvenes",
    day: "Viernes",
    time: "19:30",
    description: "Reunión de jóvenes de 16 a 30 años con música, palabra y ambiente de amistad y propósito.",
    icon: "Users",
    location: "Badalona"
  },
  {
    id: "badalona-domingo",
    name: "Culto General de Adoración",
    day: "Domingos",
    time: "11:30 | 18:30",
    description: "Nuestra celebración semanal de toda la familia de fe. Adoración congregacional, oración y predicación de la Palabra de Dios.",
    icon: "Church",
    location: "Badalona"
  },
  // Terrassa
  {
    id: "terrassa-adoracion",
    name: "Culto General de Adoración",
    day: "Domingos",
    time: "11:00",
    description: "Celebración dominical con adoración, palabra y comunión para toda la familia en Terrassa.",
    icon: "Church",
    location: "Terrassa"
  },
  {
    id: "terrassa-oracion",
    name: "Oración y Guerra Espiritual",
    day: "Martes",
    time: "19:00",
    description: "Tiempo de oración e intercesión, clamando por las necesidades de la ciudad y las familias.",
    icon: "HeartHandshake",
    location: "Terrassa"
  },
  {
    id: "terrassa-jovenes",
    name: "Reunión de Jóvenes",
    day: "Viernes",
    time: "19:30",
    description: "Espacio de encuentro, adoración y palabra para los jóvenes de Terrassa.",
    icon: "Users",
    location: "Terrassa"
  },
  // Rubí
  {
    id: "rubi-adoracion",
    name: "Culto General de Adoración",
    day: "Domingos",
    time: "18:00",
    description: "Celebración dominical en Rubí con un ambiente de fe, adoración y enseñanza bíblica.",
    icon: "Church",
    location: "Rubí"
  },
  {
    id: "rubi-estudio",
    name: "Estudio Bíblico",
    day: "Miércoles",
    time: "19:30",
    description: "Profundizamos juntos en las Escrituras para crecer en el conocimiento de Dios y su Palabra.",
    icon: "Home",
    location: "Rubí"
  },
  {
    id: "rubi-oracion",
    name: "Reunión de Oración",
    day: "Sábados",
    time: "18:00",
    description: "Nos congregamos para orar, interceder y buscar el rostro de Dios como comunidad.",
    icon: "HeartHandshake",
    location: "Rubí"
  }
];

export const EVENTS: ChurchEvent[] = [
  {
    id: "congreso-resurgir",
    title: "Congreso de Jóvenes: Resurgir 2026",
    date: "23 - 25 de Julio, 2026",
    time: "19:00h",
    description: "Un fin de semana inolvidable diseñado con talleres especializados, conciertos de alabanza y mensajes de desafío que impulsarán a la juventud a caminar con poder ministerial.",
    location: "Auditorio de la Iglesia",
    image: eventYouthImage
  },
  {
    id: "retiro-familias",
    title: "Retiro Anual de Parejas y Familias",
    date: "12 - 14 de Septiembre, 2026",
    time: "Todo el día",
    description: "Una escapada especial en un hermoso entorno natural. Plenarias de fortalecimiento matrimonial, juegos interactivos para niños y tiempos de ministración familiar guiados.",
    location: "Centro de Retiros Monte de Sión",
    image: eventFamilyImage
  }
];

export const SERMONS: Sermon[] = [
  {
    id: "sermon-1",
    title: "El Poder de una Vida Rendida al Espíritu",
    preacher: "Pr. Juan Carlos Martínez",
    date: "31 Mayo, 2026",
    youtubeId: "vB0X_QZ7jSw", // Hillsong / Inspiring worship alternative live clip
    category: "Serie: Profundidad"
  },
  {
    id: "sermon-2",
    title: "Caminando Firme en Medio del Silencio de Dios",
    preacher: "Pra. Elena Martínez",
    date: "24 Mayo, 2026",
    youtubeId: "9Wd_9lskmOM", // Contemporary spanish christian sermon / teaching placeholder
    category: "Serie: Confianza"
  },
  {
    id: "sermon-3",
    title: "Generación de Relevo: Viviendo Sin Disculpas",
    preacher: "Samuel Silva",
    date: "17 Mayo, 2026",
    youtubeId: "V_CymjXpY1k", // Youth service worship video
    category: "Sábado de Impacto"
  }
];

export const DONATIONS = {
  quote: "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre.",
  verseRef: "2 Corintios 9:7",
  whyDonate: "Tus diezmos y ofrendas nos permiten sostener los ministerios locales, financiar los proyectos de obra y ayuda social para familias vulnerables del vecindario, equipar a las próximas generaciones y apoyar activamente a misioneros en todo el mundo. Nos asociamos con Dios en su generosidad.",
  methods: [
    {
      title: "Bizum",
      details: "Código de ONG: 01345",
      highlight: "Método más rápido en España"
    },
    {
      title: "Transferencia Bancaria",
      details: "ES88 2100 0456 12 1234567890 (CaixaBank)",
      highlight: "Titular: Iglesia Mensaje de Vida"
    },
    {
      title: "Ofrenda Presencial",
      details: "Puedes ofrendar mediante los buzones de ofrenda y datafonos habilitados en la entrada de nuestro auditorio principal.",
      highlight: "Durante nuestros cultos semanales"
    }
  ]
};
