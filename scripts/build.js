// scripts/build.js
import { zip } from 'bestzip';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// 🧭 Utilidades para obtener la ruta del proyecto
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const buildDir = path.join(projectRoot, 'build');

const outputZip = path.join(buildDir, 'Dreamy_Ocean.ReaperThemeZip');

async function buildThemeZip() {
  try {
    // Asegura que la carpeta build/ exista
    await mkdir(buildDir, { recursive: true });

    // Crea el zip desde la raíz del proyecto
    await zip({
      source: [
        'Dreamy_Ocean.ReaperTheme',
        'Dreamy_Ocean_resources'
      ],
      destination: outputZip,
      cwd: projectRoot
    });

    console.log('✅ Theme packaged successfully at:', outputZip);
  } catch (err) {
    console.error('❌ Failed to create zip:', err);
  }
}

buildThemeZip();