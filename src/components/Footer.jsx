import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, UtensilsCrossed } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center shadow-md">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-[var(--text-primary)]">
                La Bunica
              </span>
            </Link>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Bucătărie tradițională românească din inima Timișoarei. Gustul autentic al rețetelor vechi, transmis din generație în generație.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-4">
              Navigare
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Acasă' },
                { to: '/about', label: 'Despre Noi' },
                { to: '/articles', label: 'Articole' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[var(--text-muted)] hover:text-[var(--color-primary-500)] transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                <MapPin className="w-4 h-4 text-[var(--color-primary-500)] flex-shrink-0 mt-0.5" />
                <span>Str. Mihai Eminescu nr. 12, Timișoara</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Phone className="w-4 h-4 text-[var(--color-primary-500)] flex-shrink-0" />
                <span>+40 256 123 456</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Mail className="w-4 h-4 text-[var(--color-primary-500)] flex-shrink-0" />
                <span>contact@labunica.ro</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-4">
              Program
            </h3>
            <div className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
              <Clock className="w-4 h-4 text-[var(--color-primary-500)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[var(--text-secondary)]">Luni - Duminică</p>
                <p>11:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-color)] text-center">
          <p className="text-[var(--text-muted)] text-sm">
            © 2026 La Bunica. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
