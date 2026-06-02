import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export type LegalDocType = 'legal' | 'privacy' | 'cookies';

export default function LegalDocuments() {
  const [activeTab, setActiveTab] = useState<LegalDocType | null>(null);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<LegalDocType>;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('open-legal-modal', handleOpen);
    return () => {
      window.removeEventListener('open-legal-modal', handleOpen);
    };
  }, []);

  const handleClose = () => {
    setActiveTab(null);
    document.body.style.overflow = 'auto';
  };

  if (!activeTab) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-4xl max-h-[85vh] bg-neutral-900 border border-zinc-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        id="legal-modal-container"
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab('legal')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'legal'
                  ? 'bg-red-600 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              Aviso Legal
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'privacy'
                  ? 'bg-red-600 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              Privacidad
            </button>
            <button
              onClick={() => setActiveTab('cookies')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'cookies'
                  ? 'bg-red-600 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              Cookies
            </button>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 text-sm text-zinc-300 space-y-6 leading-relaxed max-w-none">
          {activeTab === 'legal' && <AvisoLegalText />}
          {activeTab === 'privacy' && <PrivacidadText />}
          {activeTab === 'cookies' && <CookiesText />}
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-950/60 border-t border-zinc-800 flex justify-end text-xs text-zinc-500">
          Mensaje de Vida · Sobre las Naciones • Conforme al Reglamento (UE) 2016/679 (RGPD)
        </div>
      </div>
    </div>
  );
}

function AvisoLegalText() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-2">1. Información General</h3>
      <p>
        En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Denominación Social:</strong> Asociación Iglesia Evangélica Mensaje de Vida · Sobre las Naciones</li>
        <li><strong>Domicilio Social:</strong> Carrer de la Mina, 9, 08913 Santa Coloma de Gramenet, Barcelona, España</li>
        <li><strong>Actividad / Fines:</strong> Entidad de carácter religioso sin ánimo de lucro dedicada al desarrollo y fomento de actividades de culto, formación espiritual y ayuda social comunitaria.</li>
        <li><strong>N.I.F. / Registro:</strong> Entidad debidamente inscrita en el Registro de Entidades Religiosas del Ministerio de la Presidencia, Relaciones con las Cortes y Memoria Democrática de España.</li>
        <li><strong>Email de Contacto:</strong> contacto@mensajedevida.org</li>
        <li><strong>Teléfono de Atención:</strong> +34 93 123 45 67</li>
      </ul>

      <h3 className="text-xl font-bold text-white pt-4 mb-2">2. Términos y Condiciones de Uso</h3>
      <p>
        El acceso y/o uso de este portal le atribuye la condición de USUARIO, que acepta de forma plena y sin reservas los presentes términos de uso. El usuario se compromete a hacer un uso adecuado de los contenidos que la Iglesia ofrece a través de su portal, comprometiéndose a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe, diseminar propaganda de carácter discriminatorio, pornográfico o que atente contra los derechos humanos.
      </p>

      <h3 className="text-xl font-bold text-white pt-4 mb-2">3. Propiedad Intelectual e Industrial</h3>
      <p>
        La Asociación es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, audios, vídeos, textos, marcas, logotipos o combinaciones de colores). Queda expresamente prohibida la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de esta página web con fines comerciales sin la autorización expresa de la entidad.
      </p>

      <h3 className="text-xl font-bold text-white pt-4 mb-2">4. Exclusión de Responsabilidad</h3>
      <p>
        Aunque nos esforzamos por mantener la información de este sitio web plenamente actualizada y correcta, la entidad no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos de forma involuntaria.
      </p>
    </div>
  );
}

function PrivacidadText() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-2">1. Política de Privacidad de Datos</h3>
      <p>
        De conformidad con lo establecido en el Reglamento General de Protección de Datos de la UE (RGPD 2016/679) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), garantizamos la absoluta privacidad y confidencialidad en el tratamiento de sus datos personales.
      </p>

      <h3 className="text-xl font-bold text-white pt-4 mb-2">2. Declaración de Responsabilidad</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Responsable del tratamiento:</strong> Asociación Iglesia Evangélica Mensaje de Vida · Sobre las Naciones</li>
        <li><strong>Dirección:</strong> Carrer de la Mina, 9, 08913 Santa Coloma de Gramenet, Barcelona, España</li>
        <li><strong>Contacto de Privacidad:</strong> privacidad@mensajedevida.org</li>
      </ul>

      <h3 className="text-xl font-bold text-white pt-4 mb-2">3. Finalidad del Tratamiento de Datos</h3>
      <p>
        Tratamos los datos personales facilitados por los usuarios u ofrendantes con los siguientes fines exclusivos:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Atender y canalizar las solicitudes de contacto, oración, consejería pastoral o información enviadas mediante nuestros formularios web.</li>
        <li>Gestionar las aportaciones, diezmos u ofrendas recibidos y la emisión del oportuno certificado fiscal de donaciones.</li>
        <li>Mantener informada a la congregación de los próximos eventos, cultos especiales y actividades misionales o de asistencia social desarrollados por la iglesia.</li>
      </ul>

      <h3 className="text-xl font-bold text-white pt-4 mb-2">4. Legitimación y Conservación</h3>
      <p>
        La base legal para el tratamiento de sus datos es el consentimiento explícito manifestado al rellenar el formulario de contacto o realizar la donación voluntaria. Los datos serán conservados únicamente durante el tiempo necesario para cumplir con la finalidad de su recogida o por imperativo de los plazos legales de auditoría y exigencias contables de donaciones.
      </p>

      <h3 className="text-xl font-bold text-white pt-4 mb-2">5. Derechos del Interesado</h3>
      <p>
        Usted tiene pleno derecho a acceder, rectificar o cancelar el tratamiento de sus datos, así como a revocar sus consentimientos previos enviando una solicitud por escrito firmada adjuntando copia de su documento identificativo a: <strong>privacidad@mensajedevida.org</strong>, señalando claramente en el asunto "Derechos de Privacidad". Asimismo, tiene derecho a interponer una reclamación ante la Agencia Española de Protección de Datos (AEPD).
      </p>
    </div>
  );
}

function CookiesText() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-2">1. ¿Qué son las Cookies?</h3>
      <p>
        Una cookie es un pequeño fichero de texto que se descarga en su navegador al acceder a la mayoría de páginas web. Permite recordar información sobre su visita (como idioma, navegación técnica o analíticas agregadas) para facilitarle su próxima navegación y mejorar significativamente la experiencia de usuario.
      </p>

      <h3 className="text-xl font-bold text-white pt-4 mb-2">2. Tipo de Cookies Utilizadas</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Cookies Obligatorias o Técnicas:</strong> Son esenciales para permitir el funcionamiento básico de la web, recordar el estado de aceptación de cookies del usuario y garantizar una carga correcta de las fuentes web y vídeos integrados.</li>
        <li><strong>Cookies de Análisis (Opcionales):</strong> Si son aceptadas por el usuario, analizan la navegación mediante herramientas agregadas (por ejemplo de forma puramente estadística) para entender el volumen de lectores o accesos populares, sin rastrear de forma personal al usuario.</li>
      </ul>

      <h3 className="text-xl font-bold text-white pt-4 mb-2">3. Desactivación o Configuración</h3>
      <p>
        El usuario puede restringir, bloquear o borrar las cookies de este portal o cualquier otro sitio web configurando las preferencias de su propio navegador de internet:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
        <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y Seguridad &gt; Historial / Cookies.</li>
        <li><strong>Apple Safari:</strong> Preferencias &gt; Privacidad &gt; Eliminar o gestionar datos de sitios.</li>
      </ul>
      <p className="pt-2">
        Al hacer clic en "Configurar" en nuestro banner de cookies inferior, podrá volver a cambiar, activar o desactivar las categorías opcionales de cookies en cualquier momento.
      </p>
    </div>
  );
}
