import { useState, useEffect } from 'react';
import { getArticles } from '../api/strapi';
import ArticleCard from '../components/ArticleCard';

function Articles() {
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

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <section className="bg-gradient-to-br from-[var(--color-primary-50)] via-[var(--bg-secondary)] to-[var(--color-secondary-100)] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary-100)] text-[var(--color-primary-600)] rounded-full text-sm font-medium mb-6">
            Blog
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Articole
          </h1>
          <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto">
            Descoperă povești din bucătăria noastră, rețete tradiționale și noutăți despre preparatele care transformă mesele în amintiri.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-[var(--color-primary-200)] border-t-[var(--color-primary-500)]" />
            </div>
          )}

          {error && (
            <div className="text-center py-20 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)]">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-[var(--color-primary-500)] text-white rounded-lg hover:bg-[var(--color-primary-600)] transition-colors"
              >
                Încearcă din nou
              </button>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-20 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)]">
              <div className="w-20 h-20 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-2">
                Nu există articole
              </h3>
              <p className="text-[var(--text-muted)]">
                Momentan nu am publicat niciun articol. Verifică din nou în curând!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Articles;
