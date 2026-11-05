const fs = require('fs');
const path = require('path');

const icoHeader = Buffer.from([
  0x00, 0x00,
  0x01, 0x00,
  0x01, 0x00,
  0x10,
  0x10,
  0x00,
  0x00,
  0x01, 0x00,
  0x20, 0x00,
  0x40, 0x00, 0x00, 0x00,
  0x16, 0x00, 0x00, 0x00
]);

const bmpHeader = Buffer.alloc(64, 0);
bmpHeader.writeUInt32LE(40, 0);
bmpHeader.writeInt32LE(16, 4);
bmpHeader.writeInt32LE(32, 8);
bmpHeader.writeUInt16LE(1, 12);
bmpHeader.writeUInt16LE(32, 14);

const ico = Buffer.concat([icoHeader, bmpHeader]);
fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), ico);

const png1x1 = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);
const ogPngPath = path.join(__dirname, '../public/assets/og-image.png');
if (!fs.existsSync(ogPngPath)) {
  fs.writeFileSync(ogPngPath, png1x1);
}

console.log('Assets created successfully!');
