import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, Heart, Users } from 'lucide-react';
import { getArticles } from '../api/strapi';
import ArticleCard from '../components/ArticleCard';

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles();
        setArticles(data.data || []);
      } catch (err) {
        setError('Nu am putut încărca articolele');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const features = [
    {
      icon: UtensilsCrossed,
      title: 'Rețete Tradiționale',
      description: 'Gustul autentic al bucătăriei românești, preparat după rețete transmise din generație în generație.',
    },
    {
      icon: Heart,
      title: 'Ingrediente Proaspete',
      description: 'Folosim doar ingrediente locale și de sezon, selectate cu grijă pentru preparatele noastre.',
    },
    {
      icon: Users,
      title: 'Atmosferă Caldă',
      description: 'Un spațiu primitor, perfect pentru momente speciale alături de cei dragi.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            Din inima Timișoarei
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            La Bunica
          </h1>
          <p className="font-accent text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Bucătărie tradițională românească din inima Timișoarei
          </p>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            <span>Descoperă meniul</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[var(--color-primary-500)] font-medium text-sm uppercase tracking-wider">
            Despre noi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-3 mb-6">
            Mai mult decât mâncare
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            La Bunica nu este doar un restaurant, ci o călătorie în tradiția culinară românească. Fiecare preparat este o poveste, fiecare gust o amintire din copilărie, pregătită cu dragoste și respect pentru rețetele străbune.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-color)] hover:shadow-xl hover:border-[var(--color-primary-200)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-primary-200)] flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-[var(--color-primary-600)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[var(--color-primary-500)] font-medium text-sm uppercase tracking-wider">
              Noutăți
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-3">
              Ultimele articole
            </h2>
          </div>

          {loading && (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-[var(--color-primary-200)] border-t-[var(--color-primary-500)]" />
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-500">{error}</p>
              <Link to="/articles" className="mt-4 inline-flex items-center gap-2 text-[var(--color-primary-500)]">
                Vezi toate articolele <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-20 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)]">
              <p className="text-[var(--text-muted)]">Nu există articole momentan.</p>
            </div>
          )}

          {articles.length > 3 && (
            <div className="text-center mt-12">
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white font-semibold rounded-full transition-colors duration-200"
              >
                Vezi toate articolele
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 bg-[var(--bg-card)]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[var(--color-primary-500)] font-medium text-sm uppercase tracking-wider">
            Rezervări
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-3 mb-6">
            Rezervă o masă
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto">
            Pentru o experiență de neuitat, rezervă din timp locul tău la mesele noastre. Te așteptăm cu drag!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contactează-ne
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
