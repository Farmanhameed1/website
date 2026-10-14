import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const docsDir = path.resolve('docs');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

// 1. Generate 404.html in dist
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('Successfully generated dist/404.html for GitHub Pages fallback.');
}

// 2. Synchronize dist into docs/ so users can deploy via GitHub Pages "Folder: /docs"
if (fs.existsSync(distDir)) {
  if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true, force: true });
  }
  fs.cpSync(distDir, docsDir, { recursive: true });
  console.log('Successfully mirrored dist/ to docs/ for easy GitHub Pages (/docs) hosting.');
}
