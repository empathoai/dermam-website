const fs = require('fs');
const path = require('path');

const files = [
  'src/components/sections/deep-facial/DeepFacialRelatedTreatments.tsx',
  'src/components/sections/deep-facial/DeepFacialResultsSection.tsx',
  'src/components/sections/deep-facial/DeepFacialTestimonialsSection.tsx',
  'src/components/sections/home/FounderSection.tsx',
  'src/components/sections/hubs/HubIntroSection.tsx',
  'src/components/sections/hubs/HubSocialProofSection.tsx',
  'src/components/sections/postop/PostOpResultsSection.tsx',
  'src/components/sections/postop/PostOpTestimonialsSection.tsx',
  'src/components/sections/prf/PrfEducationSection.tsx',
  'src/components/sections/prf/PrfResultsSection.tsx',
  'src/components/sections/tier3/Tier3RelatedTreatments.tsx',
  'src/components/ui/BookingFeaturedCard.tsx',
  'src/components/ui/CompactTreatmentCard.tsx',
  'src/components/ui/ContactChannelCard.tsx',
  'src/components/ui/FormField.tsx',
  'src/components/ui/SelectField.tsx'
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

  content = content.replace(/text-\[10px\]/g, 'text-label-xs');
  content = content.replace(/text-\[0\.68rem\]/g, 'text-label-xs');
  content = content.replace(/text-\[0\.65rem\]/g, 'text-label-sm');
  content = content.replace(/text-\[11px\]/g, 'text-label-xs');

  if (content !== original) {
    fs.writeFileSync(absolutePath, content, 'utf8');
    modifiedCount++;
    console.log(`Modified: ${relPath}`);
  }
}

console.log(`Total files modified: ${modifiedCount}`);
