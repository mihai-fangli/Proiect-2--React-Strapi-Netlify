import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

function ArticleCard({ article }) {
  const { title, description, slug, publishedAt, image } = article.attributes || article;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const imageUrl = image?.data?.attributes?.url
    ? `${import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337'}${image.data.attributes.url}`
    : null;

  return (
    <Link
      to={`/articles/${slug}`}
      className="group block bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border-color)] hover:shadow-xl hover:border-[var(--color-primary-300)] transition-all duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary-200)] to-[var(--color-secondary-300)] flex items-center justify-center">
            <span className="text-[var(--text-muted)] text-sm"></span>
          </div>
        )}
      </div>

      <div className="p-5">
        {publishedAt && (
          <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formatDate(publishedAt)}</span>
          </div>
        )}

        <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary-500)] transition-colors line-clamp-2">
          {title}
        </h3>

        {description && (
          <p className="text-[var(--text-muted)] text-sm line-clamp-3 mb-4">
            {description}
          </p>
        )}

        <div className="flex items-center gap-2 text-[var(--color-primary-500)] text-sm font-medium group-hover:gap-3 transition-all">
          <span>Citește mai mult</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
