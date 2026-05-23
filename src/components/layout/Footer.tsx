import { siteConfig } from '../../data/siteConfig';
import { footerLinks } from '../../data/navigation';
import Container from '../ui/Container';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-800 border-t border-white/10 text-base-100 pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div>
            <img
              src="/assets/logos/logo_dermam_footer.svg"
              alt="DERMA.M"
              className="mb-6 h-20 w-auto object-contain"
            />
            <p className="text-sm text-base-300 leading-relaxed mb-8">
              Salud profesional para tu piel. Tratamientos estéticos personalizados en West Palm Beach.
            </p>
            <div className="flex gap-4">
              <a 
                href={siteConfig.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-base-300 hover:text-base-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-800 focus:ring-base-100 focus:rounded-md p-1"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href={siteConfig.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-base-300 hover:text-base-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-800 focus:ring-base-100 focus:rounded-md p-1"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Treatments Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-base-100 mb-6">Tratamientos</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.treatments.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-base-300 hover:text-base-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-800 focus:ring-base-100 focus:rounded-md px-1 py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-base-100 mb-6">Empresa</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-base-300 hover:text-base-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-800 focus:ring-base-100 focus:rounded-md px-1 py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-base-100 mb-6">Centro</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3">
                <MapPin size={18} className="text-base-100 flex-shrink-0" />
                <span className="text-sm text-base-300">{siteConfig.address}, {siteConfig.city}, {siteConfig.state} {siteConfig.zip}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-base-100 flex-shrink-0" />
                <span className="text-sm text-base-300">{siteConfig.phone}</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-base-100 flex-shrink-0" />
                <span className="text-sm text-base-300">{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-base-300">
            © {currentYear} {siteConfig.businessName} · Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <button className="text-xs font-medium text-base-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-800 focus:ring-base-100 focus:rounded-md px-2 py-1">ES</button>
            <button className="text-xs font-medium text-base-300 hover:text-base-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-800 focus:ring-base-100 focus:rounded-md px-2 py-1">EN</button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
