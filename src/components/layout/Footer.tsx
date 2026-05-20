import { siteConfig } from '../../data/siteConfig';
import { footerLinks } from '../../data/navigation';
import Container from '../ui/Container';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-canvas border-t border-border-soft pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div>
            <h2 className="text-xl font-serif font-bold mb-6">DERMA.M</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-8">
              Salud profesional para tu piel. Tratamientos médico-estéticos personalizados en West Palm Beach.
            </p>
            <div className="flex gap-4">
              <a 
                href={siteConfig.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-base-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md p-1"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href={siteConfig.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-base-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md p-1"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Treatments Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-primary mb-6">Tratamientos</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.treatments.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-text-secondary hover:text-base-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md px-1 py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-primary mb-6">Empresa</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-text-secondary hover:text-base-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md px-1 py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-primary mb-6">Clínica</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3">
                <MapPin size={18} className="text-base-900 flex-shrink-0" />
                <span className="text-sm text-text-secondary">{siteConfig.address}, {siteConfig.city}, {siteConfig.state} {siteConfig.zip}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-base-900 flex-shrink-0" />
                <span className="text-sm text-text-secondary">{siteConfig.phone}</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-base-900 flex-shrink-0" />
                <span className="text-sm text-text-secondary">{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-soft pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-secondary">
            © {currentYear} {siteConfig.businessName} · Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <button className="text-xs font-medium text-base-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md px-2 py-1">ES</button>
            <button className="text-xs font-medium text-text-secondary hover:text-base-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 focus:rounded-md px-2 py-1">EN</button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
