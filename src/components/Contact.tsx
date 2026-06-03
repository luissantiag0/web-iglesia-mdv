import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle, MessageSquare } from 'lucide-react';
import { CHURCH_INFO, LOCATIONS, INSTAGRAM_URL, YOUTUBE_URL, WHATSAPP_URL } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMess, setErrorMess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMess('');

    // Basic Validations
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMess('Por favor, completa todos los campos requeridos (*).');
      return;
    }

    setIsSubmitting(true);

    // Simulate Server Request API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Auto clear success label after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-surface-alt text-main scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-red-600 tracking-wider uppercase font-mono">
            ¿Hablamos?
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-main">
            Ponte en Contacto
          </p>
          <p className="mt-4 text-muted text-lg">
            ¿Tienes alguna petición de oración, duda teológica, o quieres participar en algún ministerio? Escríbenos, queremos escucharte.
          </p>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Split Form and Info/Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details and Map Right Side (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Direct details cards group */}
            <div className="bg-card border border-surface p-8 rounded-2xl space-y-6 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-main mb-6">Nuestras Sedes</h3>

              {LOCATIONS.map((loc) => (
                <div key={loc.name} className="flex items-start">
                  <div className="p-3 bg-red-600/10 rounded-xl text-red-600 mr-4 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-secondary uppercase tracking-widest">{loc.name}</h4>
                    <p className="text-main font-medium text-base mt-1">{loc.address}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start">
                <div className="p-3 bg-red-600/10 rounded-xl text-red-600 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-secondary uppercase tracking-widest">Llámanos</h4>
                  <p className="text-main font-medium text-base mt-1">{CHURCH_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-red-600/10 rounded-xl text-red-600 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-secondary uppercase tracking-widest">Envíanos un Correo</h4>
                  <p className="text-main font-medium text-base mt-1">{CHURCH_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Google Map block wrapper container */}
            <div className="relative overflow-hidden rounded-2xl border border-surface shadow-sm grow min-h-[250px] bg-neutral-200">
              <iframe
                src={LOCATIONS[0].mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Google Maps Iglesia Mensaje de Vida"
                className="absolute inset-0"
              />
            </div>

          </div>

          {/* Contact Form Left Side (7 cols) */}
          <div className="lg:col-span-7 bg-card border border-surface p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-main mb-2">Envíanos un mensaje directo</h3>
              <p className="text-sm text-muted font-light mb-8">Todos los campos marcados con un asterisco (*) son obligatorios.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inputs block inline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-input border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-main"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="correo@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-input border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-main"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">
                    Teléfono de Contacto (Opcional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="ej. +34 600 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 bg-input border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-main"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">
                    Tu Mensaje o Petición *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Escribe aquí tu petición de oración, comentario o consulta..."
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 bg-input border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-main resize-none"
                  />
                </div>

                {/* Error status warning */}
                {errorMess && (
                  <div className="flex items-center space-x-2 text-sm text-amber-600 bg-amber-50 p-3.5 rounded-xl border border-amber-200">
                    <AlertTriangle className="h-4 w-4 shrink-0" />
                    <span>{errorMess}</span>
                  </div>
                )}

                {/* Success feedback */}
                {isSuccess && (
                  <div className="flex items-center space-x-2 text-sm text-green-700 bg-green-50 p-3.5 rounded-xl border border-green-200">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>¡Tu mensaje ha sido enviado correctamente! Nos pondremos en contacto contigo a la brevedad. Dios te bendiga.</span>
                  </div>
                )}

                {/* Submit button trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto py-4 px-8 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-red-600/10 cursor-pointer flex items-center justify-center space-x-2 select-none hover:scale-105 transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</span>
                </button>

              </form>
            </div>

            {/* Alternative quick WhatsApp trigger coordinates */}
            <div className="mt-8 pt-8 border-t border-surface flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-card-alt p-5 rounded-2xl border border-surface">
              <div>
                <h4 className="font-bold text-sm text-main">¿Prefieres chatear de inmediato?</h4>
                <p className="text-xs text-muted mt-1">Conecta directamente con nuestro equipo de secretaría por WhatsApp.</p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm py-2.5 px-5 rounded-xl transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
