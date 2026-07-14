import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'public', 'images', 'cosmosfoundation');

// Create directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  'https://cosmosfoundation.org/wp-content/uploads/2021/11/A33I0091-min-scaled.jpg',
  'https://cosmosfoundation.org/wp-content/uploads/2021/11/3-2-min.jpg',
  'https://cosmosfoundation.org/wp-content/uploads/2021/11/cosmos-gallery-300x86.png',
  'https://cosmosfoundation.org/wp-content/uploads/2021/11/a71.png',
  'https://cosmosfoundation.org/wp-content/uploads/2021/11/wt.png',
  'https://cosmosfoundation.org/wp-content/uploads/2025/02/Bay-of-Bengal-Institute-Logo.png',
  'https://cosmosfoundation.org/wp-content/uploads/2021/12/e09f08c5-6cf4-465d-b71f-c37a8acd1ff6.jpg',
  'https://cosmosfoundation.org/wp-content/uploads/2021/12/d89877c4-b41f-4272-8f24-9e0150bf9347.jpg',
  'https://cosmosfoundation.org/wp-content/uploads/2022/01/cg-everest.jpg',
  'https://cosmosfoundation.org/wp-content/uploads/2022/01/new.jpg'
];

async function downloadImage(url) {
  const filename = path.basename(url);
  const destination = path.join(targetDir, filename);

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(destination);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.error(`Failed to download ${filename}: ${response.statusCode}`);
        reject(new Error(`Failed to download ${filename}`));
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${filename}:`, err);
      reject(err);
    });
  });
}

async function run() {
  for (const url of images) {
    try {
      await downloadImage(url);
    } catch (e) {
      console.error(e);
    }
  }
  console.log('All downloads finished.');
}

run();
