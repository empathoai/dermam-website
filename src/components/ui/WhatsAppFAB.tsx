import { siteConfig } from '../../data/siteConfig';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function WhatsAppFAB() {
  const location = useLocation();
  const isPrfPage = location.pathname.includes('plasma-rico-en-plaquetas');
  const isPostOpPage = location.pathname.includes('postoperatorio');
  const isDeepFacialPage = location.pathname.includes('limpieza-facial-profunda');

  let message = siteConfig.whatsappMessage;
  if (isPrfPage) message = siteConfig.whatsappMessagePrf;
  if (isPostOpPage) message = siteConfig.whatsappMessagePostOp;
  if (isDeepFacialPage) message = siteConfig.whatsappMessageDeepFacial;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-sage rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
