const fs = require('fs');
const path = require('path');

const dir = 'src';

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Light Mode conversions
      content = content.replace(/bg-slate-900/g, 'bg-white');
      content = content.replace(/text-slate-100/g, 'text-slate-900');
      content = content.replace(/text-white/g, 'text-slate-900');
      content = content.replace(/bg-slate-800\/90/g, 'bg-slate-100/90');
      content = content.replace(/bg-slate-800\/80/g, 'bg-slate-100/80');
      content = content.replace(/bg-slate-800/g, 'bg-slate-100');
      content = content.replace(/hover:bg-slate-800/g, 'hover:bg-slate-100');
      content = content.replace(/hover:bg-slate-700/g, 'hover:bg-slate-200');
      content = content.replace(/bg-slate-700/g, 'bg-slate-200');
      content = content.replace(/border-slate-800/g, 'border-slate-200');
      content = content.replace(/border-slate-700/g, 'border-slate-300');
      content = content.replace(/text-slate-300/g, 'text-slate-600');
      content = content.replace(/text-slate-400/g, 'text-slate-500');
      content = content.replace(/text-slate-200/g, 'text-slate-800');
      content = content.replace(/bg-slate-950/g, 'bg-slate-50');
      
      // Vibrant Palette Colors
      // Red: #CD2E3A
      content = content.replace(/bg-rose-500/g, 'bg-[#CD2E3A]');
      content = content.replace(/bg-rose-600/g, 'bg-[#9a212a]');
      content = content.replace(/hover:bg-rose-600/g, 'hover:bg-[#9a212a]');
      content = content.replace(/text-rose-500/g, 'text-[#CD2E3A]');
      content = content.replace(/text-rose-400/g, 'text-[#CD2E3A]');
      content = content.replace(/text-rose-300/g, 'text-[#CD2E3A]');
      content = content.replace(/border-rose-500\/40/g, 'border-[#CD2E3A]/40');
      content = content.replace(/border-rose-500\/50/g, 'border-[#CD2E3A]/50');
      content = content.replace(/border-rose-500/g, 'border-[#CD2E3A]');
      
      // Deep Blue: #0047A0
      // Find buttons and other primary elements to use Deep Blue
      // For instance, let's change some button text or backgrounds to Deep Blue
      // This is a bit manual, but let's replace emerald or certain accents.
      content = content.replace(/text-emerald-400/g, 'text-[#0047A0]');
      content = content.replace(/bg-emerald-500/g, 'bg-[#0047A0]');
      
      // Buttons
      // Change 'rounded-xl', 'rounded-2xl', 'rounded-3xl' to 'rounded-3xl' for containers, but 'rounded-full' for primary CTA buttons.
      // Easiest is to manually update specific buttons later, but let's apply typography changes.
      content = content.replace(/font-extrabold/g, 'font-black tracking-tighter');
      content = content.replace(/font-bold text-3xl/g, 'font-black tracking-tighter text-3xl');
      content = content.replace(/font-bold text-4xl/g, 'font-black tracking-tighter text-4xl');
      content = content.replace(/font-bold text-5xl/g, 'font-black tracking-tighter text-5xl');
      content = content.replace(/text-4xl md:text-5xl lg:text-6xl font-bold/g, 'text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter');

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(dir);
console.log('Done');
