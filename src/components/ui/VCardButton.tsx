import { QrCode, Download } from 'lucide-react';

interface VCardButtonProps {
  memberId: string;
  vcardUrl?: string;
  qrImage?: string;
  disabled?: boolean;
}

export default function VCardButton({ vcardUrl, qrImage, disabled }: VCardButtonProps) {
  const isPlaceholder = !vcardUrl || vcardUrl === '#';

  return (
    <div className={`flex items-center gap-3 p-3 rounded-[1rem] border transition-all duration-300 ${disabled ? 'opacity-50 grayscale cursor-not-allowed' : 'bg-white border-border-soft hover:border-sage-soft shadow-sm group-hover:shadow-md'}`}>
      <div className="w-10 h-10 rounded-lg bg-canvas border border-border-soft flex items-center justify-center flex-shrink-0">
        {qrImage ? (
          <img src={qrImage} alt="QR Contacto" className="w-8 h-8 object-contain" />
        ) : (
          <QrCode size={18} className="text-text-secondary opacity-40" />
        )}
      </div>
      
      <div className="flex-grow min-w-0">
        <span className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mb-0.5">vCard</span>
        <span className="block text-[9px] text-text-secondary truncate">
          {disabled ? 'Contacto no disponible' : 'Guardar contacto'}
        </span>
      </div>

      <a 
        href={disabled || isPlaceholder ? undefined : vcardUrl}
        download={!isPlaceholder}
        onClick={(e) => {
            if (disabled || isPlaceholder) e.preventDefault();
        }}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${disabled || isPlaceholder ? 'bg-canvas text-text-secondary/30' : 'bg-sage/10 text-sage hover:bg-sage hover:text-white'}`}
        aria-label="Descargar vCard"
      >
        <Download size={14} />
      </a>
    </div>
  );
}
