import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFAB from '../ui/WhatsAppFAB';
import SEO from './SEO';

interface PageShellProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
}

export default function PageShell({ 
  children, 
  title, 
  description, 
  ogImage, 
  ogType 
}: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col pt-[var(--header-height)]">
      <SEO 
        title={title} 
        description={description} 
        ogImage={ogImage} 
        ogType={ogType} 
      />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-base-900 focus:px-4 focus:py-2 focus:border-[2px] focus:border-base-900 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-base-900 focus:ring-offset-2 transition-all duration-200"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
