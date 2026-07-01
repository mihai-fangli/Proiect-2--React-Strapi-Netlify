import { X, Home, UtensilsCrossed, Newspaper, Phone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function HamburgerMenu({ isOpen, onClose, darkMode, setDarkMode }) {
  if (!isOpen) return null;

  const navLinks = [
    { to: '/', label: 'Acasă', icon: Home },
    { to: '/about', label: 'Despre Noi', icon: UtensilsCrossed },
    { to: '/articles', label: 'Articole', icon: Newspaper },
    { to: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-72 bg-[var(--bg-card)] z-50 shadow-2xl transform transition-transform duration-300">
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
          <span className="font-display text-xl font-semibold text-[var(--text-primary)]">
            Meniu
          </span>
          <button onClick={onClose} className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
            <X className="w-5 h-5 text-[var(--text-secondary)]" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--color-primary-500)] transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[var(--border-color)]">
          <div className="flex items-center justify-between">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
              <Search className="w-5 h-5 text-[var(--text-secondary)]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;
