// scripts/build.js
import { zip } from 'bestzip';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

// 🧭 Utilidades para obtener la ruta del proyecto
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const buildDir = path.join(projectRoot, 'build');

const outputZip = path.join(buildDir, 'Dreamy_Ocean.ReaperThemeZip');

function checkPathExists(filePath) {
  return fs.access(filePath)
    .then(() => true)
    .catch(() => false);
}

async function buildThemeZip() {
  const reaperThemeFile = 'Dreamy_Ocean.ReaperTheme';
  const reaperResourcesDir = 'Dreamy_Ocean_resources';

  try {
    // Verifica si los archivos existen
    const themeFilePath = path.join(projectRoot, reaperThemeFile);
    const resourcesDirPath = path.join(projectRoot, reaperResourcesDir);
    if (!await checkPathExists(themeFilePath)) {
      throw new Error(`Theme file not found: ${reaperThemeFile}`);
    }
    if (!await checkPathExists(resourcesDirPath)) {
      throw new Error(`Resources directory not found: ${reaperResourcesDir}`);
    }

    // Asegura que la carpeta build/ exista
    await mkdir(buildDir, { recursive: true });

    // Crea el zip desde la raíz del proyecto
    await zip({
      source: [
        reaperThemeFile,
        reaperResourcesDir
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