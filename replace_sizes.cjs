const fs = require('fs');
const path = require('path');

const files = [
  'src/components/sections/about/AboutFounderStorySection.tsx',
  'src/components/sections/about/CertificationsSection.tsx',
  'src/components/sections/about/TeamMemberCard.tsx',
  'src/components/sections/booking/BookingInfoSection.tsx',
  'src/components/sections/contact/ContactForm.tsx',
  'src/components/ui/StatItem.tsx',
  'src/components/ui/TextareaField.tsx',
  'src/components/ui/VCardButton.tsx'
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
  content = content.replace(/text-\[9px\]/g, 'text-label-2xs');

  if (content !== original) {
    fs.writeFileSync(absolutePath, content, 'utf8');
    modifiedCount++;
    console.log(`Modified: ${relPath}`);
  }
}

console.log(`Total files modified: ${modifiedCount}`);
