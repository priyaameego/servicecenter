const fs = require('fs');

const files = [
  'src/components/Footer.tsx',
  'src/components/Header.tsx',
  'src/components/TopBar.tsx',
  'src/components/ui/ServiceCard.tsx',
  'src/layouts/MainLayout.tsx',
  'src/routes/__root.tsx',
  'src/routes/about-us.tsx',
  'src/routes/blog.tsx',
  'src/routes/contact-us.tsx',
  'src/routes/faq.tsx',
  'src/routes/index.tsx',
  'src/routes/quality-standards.tsx',
  'src/routes/services.tsx',
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  
  content = content.replace(/import React(?:, \{[^}]+\})? from 'react';?\n?/g, '');
  content = content.replace(/import React from 'react'\n?/g, '');
  
  content = content.replace(/to=\"(\/[^\"]+)\"/g, 'to={\"$1\" as any}');
  
  content = content.replace(/import \{ Link \} from '@tanstack\/react-router'\n?/g, '');
  
  if (['src/components/Footer.tsx', 'src/components/Header.tsx', 'src/components/ui/ServiceCard.tsx', 'src/components/ui/Button.tsx', 'src/routes/blog.tsx'].includes(f)) {
    content = "import { Link } from '@tanstack/react-router';\n" + content;
  }

  content = content.replace(/import \{ TanStackRouterDevtools \} from '@tanstack\/router-devtools'\n?/g, '');
  content = content.replace(/, Users/g, '');

  fs.writeFileSync(f, content);
});

console.log('Fixed TS issues');
