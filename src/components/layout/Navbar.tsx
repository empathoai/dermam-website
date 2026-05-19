import { useState, useEffect } from 'react';
import { navigationLinks } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/es" className="text-xl font-serif font-semibold tracking-tighter text-text-primary">
            DERMA.M
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => {
              const isHashLink = link.href.startsWith('#');
              const href = isHashLink && location.pathname !== '/es' ? `/es${link.href}` : link.href;
              
              if (isHashLink) {
                return (
                  <a
                    key={link.label}
                    href={href}
                    className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                );
              }
              
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.href ? 'text-prf font-semibold' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link to="/es/reservar">
              <Button variant="primary" className="px-6 py-2">
                Reservar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[70px] bg-white z-40 flex flex-col p-8 gap-6 animate-in fade-in slide-in-from-top-4 duration-300"
          role="dialog"
          aria-modal="true"
        >
          {navigationLinks.map((link) => {
            const isHashLink = link.href.startsWith('#');
            const href = isHashLink && location.pathname !== '/es' ? `/es${link.href}` : link.href;

            if (isHashLink) {
              return (
                <a
                  key={link.label}
                  href={href}
                  className="text-lg font-medium text-text-primary border-b border-border-soft pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-lg font-medium border-b border-border-soft pb-4 ${
                  location.pathname === link.href ? 'text-prf font-semibold' : 'text-text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/es/reservar" className="block w-full mt-4" onClick={() => setIsOpen(false)}>
            <Button variant="primary" className="w-full">
              Reservar
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
