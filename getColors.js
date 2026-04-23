const Jimp = require('jimp');

async function getColors() {
  const images = [
    'media__1776946143035.jpg',
    'media__1776946143460.jpg',
    'media__1776946143615.jpg',
    'media__1776946143676.jpg'
  ];

  const dir = 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\eb3b0346-bd3c-4bd8-84cc-8f446ae86876\\';

  let colors = new Set();
  
  for (const imgName of images) {
    try {
      const image = await Jimp.read(dir + imgName);
      console.log(`\n--- Analyzing ${imgName} ---`);
      
      const width = image.bitmap.width;
      const height = image.bitmap.height;
      
      // Sample 100 points vertically down the center
      const x = Math.floor(width / 2);
      
      let localColors = {};
      for (let y = 0; y < height; y += Math.floor(height / 100)) {
        const hex = image.getPixelColor(x, y).toString(16).padStart(8, '0').substring(0, 6);
        localColors[hex] = (localColors[hex] || 0) + 1;
        colors.add(hex);
      }
      
      // Print top 3 most common colors on the center vertical line
      const sorted = Object.entries(localColors).sort((a,b) => b[1] - a[1]);
      console.log("Top colors (center scanline):");
      sorted.slice(0, 5).forEach(([c, count]) => {
        console.log(`#${c} (count: ${count})`);
      });

    } catch (e) {
      // ignore
    }
  }
}

getColors();
