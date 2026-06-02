import { useState, useEffect } from 'react';
import { Heart, Landmark, Smartphone, PiggyBank, Copy, Check, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { DONATIONS, IMAGES } from '../data';

export default function Donations() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handler = () => setShowModal(true);
    window.addEventListener('open-donation-modal', handler);
    return () => window.removeEventListener('open-donation-modal', handler);
  }, []);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [paymentType, setPaymentType] = useState<'bizum' | 'card'>('bizum');

  const handleCopy = (text: string, index: number) => {
    // Strip descriptive texts to copy pure numerical value if index is 0 or 1
    let cleanText = text;
    if (index === 0) cleanText = "01345";
    else if (index === 1) cleanText = "ES8821000456121234567890";

    navigator.clipboard.writeText(cleanText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const resetForm = () => {
    setStep(1);
    setSelectedAmount(50);
    setCustomAmount('');
    setDonorName('');
    setPaymentType('bizum');
    setShowModal(false);
  };

  const getFinalAmount = () => {
    if (selectedAmount === 'custom') {
      return customAmount ? `${customAmount}€` : '0€';
    }
    return `${selectedAmount}€`;
  };

  return (
    <section id="donaciones" className="py-24 bg-surface text-main scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-red-600 tracking-wider uppercase font-mono">
            Generosidad y Servicio
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-main">
            Apoya la Obra de Dios
          </p>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Major Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and visual Left (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Inspirational verse card */}
            <blockquote className="border-l-4 border-red-600 pl-6 py-2">
              <p className="text-xl italic font-serif text-secondary leading-relaxed">
                "{DONATIONS.quote}"
              </p>
              <cite className="block mt-2 text-sm font-bold text-red-600 uppercase tracking-widest font-mono">
                — {DONATIONS.verseRef}
              </cite>
            </blockquote>

            <p className="text-secondary font-light leading-relaxed text-lg">
              {DONATIONS.whyDonate}
            </p>

            {/* Methods Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {DONATIONS.methods.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-card-alt border border-surface p-5 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    {idx === 0 ? (
                      <Smartphone className="h-6 w-6 text-red-600 mb-3" />
                    ) : idx === 1 ? (
                      <Landmark className="h-6 w-6 text-red-600 mb-3" />
                    ) : (
                      <PiggyBank className="h-6 w-6 text-red-600 mb-3" />
                    )}
                    <h4 className="font-bold text-base text-main">{method.title}</h4>
                    <p className="text-xs text-muted font-mono mt-2 break-all font-medium leading-relaxed bg-card p-2 rounded border border-surface-light">
                      {method.details}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-surface">
                    <span className="block text-[10px] uppercase font-bold text-muted">
                      {method.highlight}
                    </span>
                    {(idx === 0 || idx === 1) && (
                      <button
                        onClick={() => handleCopy(method.details, idx)}
                        className="mt-2 text-xs font-bold text-red-600 hover:text-red-700 flex items-center space-x-1 border-0 bg-transparent cursor-pointer p-0"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-green-600" />
                            <span className="text-green-600 font-semibold select-none">¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copiar código</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt card and Image Right (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-2 bg-neutral-950 border border-neutral-900 rounded-3xl shadow-2xl relative overflow-hidden text-white">
              
              {/* Background cover image placeholder */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-900">
                <img
                  src={IMAGES.donation}
                  alt="Generosidad compartida"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              </div>

              {/* Action details */}
              <div className="p-6 relative z-10 text-center">
                <h4 className="text-xl font-bold">Ofrendar en línea de forma segura</h4>
                <p className="text-xs text-gray-400 mt-2 font-light">
                  Ofrenda tu diezmo u ofrenda voluntaria utilizando tu tarjeta de crédito/débito o Bizum directamente en nuestra plataforma de simulación segura.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full mt-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Iniciar ofrenda digital
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Donation Flow Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-white text-neutral-900 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-neutral-200">
            {/* Header */}
            <div className="bg-neutral-900 text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-white">Ofrenda en Línea Securizada</h3>
                <p className="text-xs text-red-400 leading-relaxed font-light mt-1">Iglesia Mensaje de Vida • Pasarela de Ofrenda</p>
              </div>
              <button onClick={resetForm} className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* STEP 1: Select Amount and details */}
            {step === 1 && (
              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                    Selecciona o ingresa un monto
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {[10, 20, 50, 100].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setSelectedAmount(amt)}
                        className={`py-3 rounded-lg font-bold text-center border cursor-pointer text-sm ${
                          selectedAmount === amt
                            ? 'bg-red-600 border-red-600 text-white shadow-md'
                            : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-900'
                        }`}
                      >
                        {amt}€
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedAmount('custom')}
                    className={`w-full text-center py-2.5 rounded-lg font-bold border mt-3 text-sm cursor-pointer ${
                      selectedAmount === 'custom'
                        ? 'bg-red-600 border-red-600 text-white'
                        : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-900'
                    }`}
                  >
                    Otro monto
                  </button>

                  {/* Custom input */}
                  {selectedAmount === 'custom' && (
                    <div className="mt-3 relative rounded-lg shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 text-sm font-bold">€</span>
                      </div>
                      <input
                        type="number"
                        placeholder="Ingresa valor en euros (ej. 35)"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="block w-full pl-8 pr-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        min="1"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Tu nombre (Opcional, dejas en blanco para anónimo)
                  </label>
                  <input
                    type="text"
                    placeholder="ej. Juan Pérez"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="block w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Método de Pago
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setPaymentType('bizum')}
                      className={`py-3 px-4 rounded-xl border font-bold text-sm tracking-wide cursor-pointer flex items-center justify-center space-x-2 ${
                        paymentType === 'bizum'
                          ? 'border-red-600 bg-red-50 text-red-600'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      <Smartphone className="h-4 w-4" />
                      <span>Bizum</span>
                    </button>
                    <button
                      onClick={() => setPaymentType('card')}
                      className={`py-3 px-4 rounded-xl border font-bold text-sm tracking-wide cursor-pointer flex items-center justify-center space-x-2 ${
                        paymentType === 'card'
                          ? 'border-red-600 bg-red-50 text-red-600'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      <Landmark className="h-4 w-4" />
                      <span>Tarjeta</span>
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setStep(2)}
                    disabled={selectedAmount === 'custom' && !customAmount}
                    className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold rounded-xl flex items-center justify-center space-x-2 cursor-pointer shadow-md select-none"
                  >
                    <span>Proceder a ofrendar {getFinalAmount()}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: simulated receipt / thank you */}
            {step === 2 && (
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 mx-auto rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-neutral-950">¡Ofrenda procesada con éxito!</h4>
                  <p className="text-sm text-gray-500 mt-2 font-light">
                    Socio generoso: <span className="font-semibold text-neutral-900">{donorName || 'Anónimo'}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1 font-light">
                    Importe total: <span className="font-bold text-neutral-950">{getFinalAmount()}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1 font-mono">
                    Canal: {paymentType === 'bizum' ? 'Pasarela de Enlace Bizum Móvil' : 'Pasarela Tarjeta Visa/Mastercard'}
                  </p>
                </div>

                <div className="bg-neutral-50 px-4 py-3 rounded-xl text-xs text-gray-600 border border-neutral-100 leading-relaxed font-light">
                  "Dios proveerá y multiplicará vuestra sementera, y aumentará los frutos de vuestra justicia." <br />
                  <span className="font-semibold text-red-600 block mt-1 font-mono">2 Corintios 9:10</span>
                </div>

                <button
                  onClick={resetForm}
                  className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl cursor-pointer"
                >
                  Cerrar ventana
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
