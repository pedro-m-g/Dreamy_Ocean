import { Zip } from 'zip-lib';
import { access, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const buildDir = path.join(projectRoot, 'build');

const outputZip = path.join(buildDir, 'Dreamy_Ocean.ReaperThemeZip');

/**
 * Asynchronously checks whether a given file or directory exists.
 * @param {string} filePath - The path to the file or directory to check.
 * @return {Promise<boolean>} Resolves to true if the path exists, or false if it does not.
 */
function checkPathExists(filePath) {
  return access(filePath)
    .then(() => true)
    .catch(() => false);
}

/**
 * Packages the theme file and its resources into a zip archive in the build directory.
 *
 * Throws an error if the required theme file or resources directory is missing.
 * The resulting zip archive contains both the theme file and resources directory with their original names.
 */
async function buildThemeZip() {
  const reaperThemeFile = 'Dreamy_Ocean.ReaperTheme';
  const reaperResourcesDir = 'Dreamy_Ocean_resources';

  try {
    const themeFilePath = path.join(projectRoot, reaperThemeFile);
    const resourcesDirPath = path.join(projectRoot, reaperResourcesDir);
    if (!await checkPathExists(themeFilePath)) {
      throw new Error(`Theme file not found: ${reaperThemeFile}`);
    }
    if (!await checkPathExists(resourcesDirPath)) {
      throw new Error(`Resources directory not found: ${reaperResourcesDir}`);
    }

    await mkdir(buildDir, { recursive: true });

    const zip = new Zip();
    zip.addFile(path.join(projectRoot, reaperThemeFile), reaperThemeFile);
    zip.addFolder(path.join(projectRoot, reaperResourcesDir), reaperResourcesDir);
    await zip.archive(outputZip);

    console.log('✅ Theme packaged successfully at:', outputZip);
  } catch (err) {
    console.error('❌ Failed to create zip:', err);
  }
}

buildThemeZip();