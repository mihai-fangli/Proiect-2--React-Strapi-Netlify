import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Adresă',
      value: 'Str. Mihai Eminescu nr. 12, Timișoara',
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+40 256 123 456',
      href: 'tel:+40256123456',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@labunica.ro',
      href: 'mailto:contact@labunica.ro',
    },
    {
      icon: Clock,
      label: 'Program',
      value: 'Luni-Duminică: 11:00 - 23:00',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <section className="bg-gradient-to-br from-[var(--color-primary-50)] via-[var(--bg-secondary)] to-[var(--color-secondary-100)] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary-100)] text-[var(--color-primary-600)] rounded-full text-sm font-medium mb-6">
            Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Hai la noi
          </h1>
          <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto">
            Rezervă o masă, cere informații sau doar salută-ne. Cu drag, echipa La Bunica.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8">
                Trimite-ne un mesaj
              </h2>

              {submitted ? (
                <div className="bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-950)] rounded-2xl p-8 text-center border border-[var(--color-primary-200)]">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-primary-500)] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-2">
                    Mesaj trimis!
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Îți mulțumim pentru mesaj. Te vom contacta în cel mai scurt timp.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-6 px-6 py-2 bg-[var(--color-primary-500)] text-white rounded-lg hover:bg-[var(--color-primary-600)] transition-colors"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Nume complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent outline-none transition-all text-[var(--text-primary)]"
                        placeholder="Numele tău"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent outline-none transition-all text-[var(--text-primary)]"
                        placeholder="email@exemplu.ro"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent outline-none transition-all text-[var(--text-primary)]"
                      placeholder="+40 7XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent outline-none transition-all resize-none text-[var(--text-primary)]"
                      placeholder="Spune-ne cum te putem ajuta..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] disabled:bg-[var(--color-primary-400)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {loading ? (
                      <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Trimite mesaj</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8">
                Informații de contact
              </h2>

              <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] p-8 mb-8">
                <div className="space-y-6">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-primary-200)] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[var(--color-primary-600)]" />
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)] text-sm">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-[var(--text-primary)] font-medium hover:text-[var(--color-primary-500)] transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-[var(--text-primary)] font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.0!2d21.2087!3d45.7489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ0JzU2LjAiTiAyMcKwMTInMzEuMiJF!5e0!3m2!1sen!2sro!4v1620000000000!5m2!1sen!2sro"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Bunica Timișoara"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
