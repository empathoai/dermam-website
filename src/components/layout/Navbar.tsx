import { useState, useEffect } from 'react';
import { navigationLinks } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null);
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
          <Link 
            to="/es" 
            className="inline-flex items-center px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-base-900 focus-visible:rounded-md"
            aria-label="DERMA.M inicio"
          >
            <img
              src="/assets/logos/logo_dermam_nav.svg"
              alt="DERMA.M"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigationLinks.map((link) => {
              const hasSubmenu = !!link.submenu;
              
              if (hasSubmenu) {
                return (
                  <div key={link.label} className="relative group py-2">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <Link
                        to={link.href}
                        className={`text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md px-2 py-1 ${
                          location.pathname === link.href || link.submenu!.some(s => location.pathname === s.href)
                            ? 'text-text-primary font-bold'
                            : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <ChevronDown className="w-3.5 h-3.5 text-text-secondary transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                    </div>
                    
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg border border-border-soft py-3 min-w-[280px] flex flex-col z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                      {link.submenu!.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className={`text-sm px-4 py-2 hover:bg-canvas transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md mx-2 ${
                            location.pathname === subItem.href ? 'text-text-primary font-bold bg-canvas' : 'text-text-secondary hover:text-text-primary'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md px-2 py-1 ${
                    location.pathname === link.href ? 'text-text-primary font-bold' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Button variant="primary" to="/es/reservar" className="px-6 py-2">
              Reservar
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-text-primary p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md"
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
          className="lg:hidden fixed inset-0 top-[70px] bg-white z-40 flex flex-col p-8 gap-4 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300"
          role="dialog"
          aria-modal="true"
        >
          {navigationLinks.map((link) => {
            const hasSubmenu = !!link.submenu;
            const isExpanded = mobileActiveSubmenu === link.label;

            return (
              <div key={link.label} className="border-b border-border-soft pb-3 flex flex-col gap-2">
                <div className="flex items-between justify-between w-full">
                  <Link
                    to={link.href}
                    className={`text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md ${
                      location.pathname === link.href || (link.submenu && link.submenu.some(s => location.pathname === s.href))
                        ? 'text-text-primary font-bold'
                        : 'text-text-primary/70'
                    }`}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileActiveSubmenu(null);
                    }}
                  >
                    {link.label}
                  </Link>
                  {hasSubmenu && (
                    <button
                      onClick={() => setMobileActiveSubmenu(isExpanded ? null : link.label)}
                      className="p-2 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-base-900 focus:rounded-md"
                      aria-label={isExpanded ? `Cerrar submenú de ${link.label}` : `Abrir submenú de ${link.label}`}
                      aria-expanded={isExpanded}
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {hasSubmenu && isExpanded && (
                  <div className="flex flex-col pl-4 gap-3 mt-1 mb-2 animate-in slide-in-from-top-2 duration-200">
                    {link.submenu!.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className={`text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md py-1 ${
                          location.pathname === subItem.href ? 'text-text-primary font-bold' : 'text-text-secondary'
                        }`}
                        onClick={() => {
                          setIsOpen(false);
                          setMobileActiveSubmenu(null);
                        }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Button variant="primary" to="/es/reservar" className="w-full mt-4" onClick={() => { setIsOpen(false); setMobileActiveSubmenu(null); }}>
            Reservar
          </Button>
        </div>
      )}
    </header>
  );
}
