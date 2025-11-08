import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { ITEMS_TO_MOVE, ITEMS_TO_SKIP } from './move-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function moveToRoot() {
  console.log('🚀 Moving app files to root directory...');

  for (const item of ITEMS_TO_MOVE) {
    const source = path.join(__dirname, '..', 'app', item);
    const destination = path.join(__dirname, '..', item);

    try {
      // Проверяем существование
      await fs.access(source);

      const stat = await fs.stat(source);

      if (stat.isDirectory()) {
        await copyFolderSync(source, destination);
      } else {
        await fs.copyFile(source, destination);
      }
      console.log(`✅ Copied ${item}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`⚠️  ${item} not found, skipping`);
      } else {
        console.error(`❌ Failed to copy ${item}:`, error.message);
      }
    }
  }

  console.log('🎉 Move completed!');
}

async function copyFolderSync(source, target) {
  try {
    await fs.mkdir(target, { recursive: true });
    const files = await fs.readdir(source);

    for (const file of files) {
      if (ITEMS_TO_SKIP.includes(file)) continue;

      const sourcePath = path.join(source, file);
      const targetPath = path.join(target, file);

      const stat = await fs.stat(sourcePath);
      if (stat.isDirectory()) {
        await copyFolderSync(sourcePath, targetPath);
      } else {
        await fs.copyFile(sourcePath, targetPath);
      }
    }
  } catch (error) {
    console.error(`❌ Error copying ${source} to ${target}:`, error.message);
  }
}

moveToRoot().catch(console.error);
