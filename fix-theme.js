const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace hardcoded white colors with CSS vars
      content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.0[1-4]\s*\)/g, 'var(--color-overlay-3)');
      content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.0[5-9]\s*\)/g, 'var(--color-overlay-5)');
      content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.1[0-4]?\s*\)/g, 'var(--color-overlay-10)');
      content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.[1-9][0-9]?\s*\)/g, 'var(--color-overlay-20)');
      content = content.replace(/color:\s*['"]#fff['"]/g, "color: 'var(--color-text-pure)'");
      content = content.replace(/color:\s*['"]#ffffff['"]/g, "color: 'var(--color-text-pure)'");
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}
processDir('./components');
processDir('./app');
