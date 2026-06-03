const fs = require('fs');
const path = require('path');

const files = [
  'src/components/sections/about/AboutFounderStorySection.tsx',
  'src/components/sections/contact/ContactForm.tsx',
  'src/components/sections/contact/ContactMapSection.tsx',
  'src/components/sections/deep-facial/DeepFacialFinalCTA.tsx',
  'src/components/sections/hubs/HubFinalCTA.tsx',
  'src/components/sections/iv-therapy/IVTherapyFinalCTA.tsx',
  'src/components/sections/postop/PostOpFinalCTA.tsx',
  'src/components/sections/postop/PostOpFounderSection.tsx',
  'src/components/sections/postop/PostOpHeroSection.tsx',
  'src/components/sections/postop/PostOpProtocolSection.tsx',
  'src/components/sections/prf/PrfFinalCTA.tsx',
  'src/components/sections/tier3/Tier3FinalCTA.tsx',
  'src/components/sections/tier3/Tier3RelatedTreatments.tsx',
  'src/components/ui/BookingTreatmentRow.tsx',
  'src/components/ui/ChannelCard.tsx',
  'src/components/ui/ContactChannelCard.tsx',
  'src/components/ui/ExternalBookingButton.tsx',
  'src/components/ui/IVKitCard.tsx',
  'src/components/ui/MotionAvatar.tsx',
  'src/components/ui/SectionMedia.tsx',
  'src/components/ui/SpecialtyFilter.tsx',
  'src/components/ui/TreatmentBadge.tsx',
  'src/components/ui/WhatsAppFAB.tsx'
];

let modifiedCount = 0;

for (const relPath of files) {
  const absolutePath = path.join(__dirname, relPath);
  if (!fs.existsSync(absolutePath)) {
    console.log(`File not found: ${relPath}`);
    continue;
  }

  let content = fs.readFileSync(absolutePath, 'utf8');
  const original = content;

  // Exact replacement map (careful with ordering to avoid partial replacements)
  
  // shadow-lg shadow-sage/20 -> remove completely
  content = content.replace(/shadow-lg\s+shadow-sage\/20/g, '');
  // shadow-sage/20 -> remove completely
  content = content.replace(/shadow-sage\/20/g, '');
  
  // bg-sage/5 -> remove if decorative, bg-surface-soft if structural.
  // Wait, I saw it's not in the codebase anyway based on grep, but let's do:
  content = content.replace(/bg-sage\/5/g, 'bg-surface-soft');
  
  // bg-sage/10 -> bg-surface-soft
  content = content.replace(/bg-sage\/10/g, 'bg-surface-soft');
  
  // bg-sage-soft/30 -> bg-surface-soft
  content = content.replace(/bg-sage-soft\/30/g, 'bg-surface-soft');
  
  // hover:text-white paired with hover:bg-sage
  // e.g. "hover:bg-sage hover:text-white" -> "hover:bg-primary hover:text-text-inverse"
  content = content.replace(/hover:bg-sage\s+hover:text-white/g, 'hover:bg-primary hover:text-text-inverse');
  content = content.replace(/hover:text-white\s+hover:bg-sage/g, 'hover:text-text-inverse hover:bg-primary');
  
  // hover:bg-sage -> hover:bg-primary
  content = content.replace(/hover:bg-sage/g, 'hover:bg-primary');
  
  // hover:border-sage -> hover:border-border-strong
  content = content.replace(/hover:border-sage/g, 'hover:border-border-strong');
  
  // hover:text-sage -> hover:text-text-primary
  content = content.replace(/hover:text-sage/g, 'hover:text-text-primary');
  
  // ring-sage -> remove entirely
  content = content.replace(/\s*ring-sage/g, '');
  
  // prose-sage -> prose
  content = content.replace(/prose-sage/g, 'prose');
  
  // first-letter:text-sage -> remove first-letter color class only
  content = content.replace(/\s*first-letter:text-sage/g, '');
  
  // text-sage inside icon wrappers
  // Example: <ParkingCircle size={16} className="text-sage" />
  // Simple check: if text-sage is inside className="..." next to an icon like ParkingCircle, Clock, MapPin, etc.
  // Instead of complex AST, we can just look for text-sage. 
  // Let's do the other specific ones first
  content = content.replace(/bg-sage/g, 'bg-primary');
  content = content.replace(/border-sage/g, 'border-border-strong');
  content = content.replace(/fill-sage/g, 'fill-current');
  content = content.replace(/stroke-sage/g, 'stroke-current');
  
  // For text-sage inside icon wrappers, we can use a regex that matches JSX elements that look like icons:
  // e.g. <Clock ... className="... text-sage ..." />
  // We'll just replace text-sage with text-text-primary globally first,
  // then manually fix the known icon wrappers using regex.
  // Actually, wait, let's find text-sage first.
  content = content.replace(/text-sage/g, 'text-text-primary');
  
  // Now we need to fix icon wrappers: text-text-primary back to text-text-secondary for known icons
  // such as ParkingCircle, Clock, etc.
  content = content.replace(/(<(ParkingCircle|Clock|MapPin|Phone|Mail|Instagram|Facebook|Check|ArrowRight|Calendar)[^>]*className="[^"]*)text-text-primary([^"]*")/g, '$1text-text-secondary$3');

  // One special case in SpecialtyFilter.tsx: 'hover:border-sage-soft' -> 'hover:border-border-strong' (or whatever)
  // Wait, there was hover:border-sage-soft in SpecialtyFilter
  content = content.replace(/hover:border-sage-soft/g, 'hover:border-border-strong');

  // Clean up any double spaces created by removal
  content = content.replace(/className=" /g, 'className="');
  content = content.replace(/  +/g, ' ');

  if (content !== original) {
    fs.writeFileSync(absolutePath, content, 'utf8');
    modifiedCount++;
    console.log(`Modified: ${relPath}`);
  }
}

console.log(`Total files modified: ${modifiedCount}`);
