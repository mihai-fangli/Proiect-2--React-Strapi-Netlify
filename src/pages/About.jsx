import { useState, useEffect } from 'react';
import { getAbout } from '../api/strapi';

function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await getAbout();
        setAbout(data.data);
      } catch (err) {
        setError('Nu am putut încărca informațiile');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  const defaultContent = {
    title: 'Povestea Noastră',
    subtitle: 'Tradiție și pasiune în fiecare preparat',
    story: `La Bunica s-a născut din dorința de a păstra vie tradiția culinară românească, așa cum o știm din copilărie. Totul a început cu rețetele bunicii noastre, Ana - o femeie modestă cu o inimă uriașă și darul de a transforma ingredientele simple în preparate memorabile.

Restaurantul nostru a fostfondat în 2010 în Timișoara, cu misiunea clară de a aduce pe mesele voastre gustul autentic al bucătăriei tradiționale românești. Fiecare preparat de pe meniul nostru are o poveste - rețete transmise din generație în generație, adaptate cu respect și preparate cu pasiune.

În 2026, continuăm această tradiție, păstrând viziunea inițială: mâncare gătită ca acasă, din ingrediente proaspete și locale, servită într-un cadru cald și primitor. La noi găsiți nu doar un restaurant, ci o parte din sufletul Timișoarei.`,
    values: [
      { title: 'Tradiție', description: 'Rețete autentice transmise din generație în generație' },
      { title: 'Calitate', description: 'Ingrediente proaspete, locale, verificate cu atenție' },
      { title: 'Pasiune', description: 'Fiecare preparat este gătit cu dragoste și dăruire' },
      { title: 'Comunitate', description: 'Suntem parte din viața Timișoarei de peste 16 ani' },
    ],
  };

  const content = about?.attributes || defaultContent;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[var(--color-primary-200)] border-t-[var(--color-primary-500)]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-50)] via-[var(--bg-secondary)] to-[var(--color-secondary-100)] opacity-50" />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary-100)] text-[var(--color-primary-600)] rounded-full text-sm font-medium mb-6">
            Despre Noi
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            {content.title || 'Povestea Noastră'}
          </h1>
          <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto">
            {content.subtitle || 'Tradiție și pasiune în fiecare preparat'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="La Bunica Restaurant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-primary-500)] rounded-2xl -z-10" />
            </div>

            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                  {content.story || defaultContent.story}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-primary-500)] font-medium text-sm uppercase tracking-wider">
              Valorile Noastre
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-3">
              Ce ne definește
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.values || defaultContent.values).map(({ title, description }) => (
              <div
                key={title}
                className="bg-[var(--bg-card)] rounded-2xl p-6 text-center border border-[var(--border-color)] hover:shadow-lg hover:border-[var(--color-primary-200)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-primary-600)] text-white font-display text-xl flex items-center justify-center mx-auto mb-4">
                  {title[0]}
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] rounded-3xl p-12 text-white">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Vino să ne cunoști
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Ușile noastre sunt mereu deschise pentru cei care caută gustul autentic și un loc cald alături de cei dragi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+40256123456"
                className="px-6 py-3 bg-white text-[var(--color-primary-600)] font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                Sună acum
              </a>
              <a
                href="mailto:contact@labunica.ro"
                className="px-6 py-3 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 transition-colors"
              >
                Scrie-ne
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
