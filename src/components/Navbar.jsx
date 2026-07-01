import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import HamburgerMenu from './HamburgerMenu';


function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();


  const navLinks = [
    { to: '/', label: 'Acasă' },
    { to: '/about', label: 'Despre Noi' },
    { to: '/articles', label: 'Articole' },
    { to: '/contact', label: 'Contact' },
  ];


  const isActive = (path) => location.pathname === path;


  return (
    <>
      <nav className="sticky top-0 z-30 bg-[var(--bg-card)]/95 backdrop-blur-sm border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="La Bunica" className="w-10 h-10 rounded-full object-cover shadow-md group-hover:shadow-lg transition-shadow" />
              <span className="font-display text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary-500)] transition-colors">
                La Bunica
              </span>
            </Link>


            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(to)
                      ? 'text-[var(--color-primary-500)] bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-950)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>


            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors hidden md:block">
                <Search className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
              <div className="hidden md:block">
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6 text-[var(--text-primary)]" />
              </button>
            </div>
          </div>
        </div>
      </nav>


      <HamburgerMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </>
  );
}


export default Navbar;