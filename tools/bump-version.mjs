// Automatically bumps TERMS_VERSION (starts at 1.1000) and updates TERMS_DATE in src/meta-ui.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const metaFile = path.join(root, 'src/meta-ui.js');

const content = fs.readFileSync(metaFile, 'utf8');

// Match: export const TERMS_VERSION = '1.1000', TERMS_DATE = '05/10/2026'; (or numbers)
const versionMatch = content.match(/export const TERMS_VERSION = ['"]?([0-9.]+)['"]?, TERMS_DATE = ['"]([^'"]+)['"]/);

if (!versionMatch) {
  console.error('Could not find TERMS_VERSION and TERMS_DATE in src/meta-ui.js');
  process.exit(1);
}

const currentVersion = versionMatch[1];
const parts = currentVersion.split('.');
let nextVersion;

if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
  const major = parts[0];
  const minor = parseInt(parts[1], 10) + 1;
  nextVersion = `${major}.${minor}`;
} else {
  nextVersion = '1.1000';
}

const now = new Date();
const dd = String(now.getDate()).padStart(2, '0');
const mm = String(now.getMonth() + 1).padStart(2, '0');
const yyyy = now.getFullYear();
const nextDate = `${dd}/${mm}/${yyyy}`;

const updated = content.replace(
  /export const TERMS_VERSION = ['"]?[0-9.]+['"]?, TERMS_DATE = ['"][^'"]+['"]/,
  `export const TERMS_VERSION = '${nextVersion}', TERMS_DATE = '${nextDate}'`
);

fs.writeFileSync(metaFile, updated, 'utf8');
console.log(`Bumped TERMS to version ${nextVersion} (${nextDate})`);
