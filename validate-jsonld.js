import { readFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
let match;
let i = 1;

while ((match = regex.exec(html)) !== null) {
  try {
    const json = match[1].trim();
    const parsed = JSON.parse(json);
    console.log(`Schema ${i} (${parsed['@type'] || 'unknown'}): VALIDO`);
  } catch (e) {
    console.log(`Schema ${i}: ERROR - ${e.message}`);
  }
  i++;
}
console.log(`\nTotal schemas found: ${i - 1}`);
