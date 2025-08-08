const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', 'package.json');
const destDir = path.resolve(__dirname, '..', 'build', 'app');
const dest = path.join(destDir, 'package.json');

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);
