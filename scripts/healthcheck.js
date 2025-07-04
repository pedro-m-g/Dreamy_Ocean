import { execSync } from 'child_process';

try {
  const version = execSync('zip --version', { encoding: 'utf-8' });
  console.log('✅ zip is available:\n' + version);
} catch (err) {
  console.error('❌ zip not found or not accessible from Node.js');
  console.error('🔍 Details:', err.message);
  process.exit(1);
}