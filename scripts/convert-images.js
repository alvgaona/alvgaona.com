import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = './public';
const TARGET_SIZE_KB = 30; // Convert images larger than 30KB

async function convertImage(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 85, effort: 6 })
            .toFile(outputPath);

        const inputStats = await stat(inputPath);
        const outputStats = await stat(outputPath);
        const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

        console.log(`✓ Converted: ${basename(inputPath)}`);
        console.log(`  ${(inputStats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB (${savings}% smaller)`);
    } catch (error) {
        console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    }
}

async function findLargePNGs(dir) {
    const files = await readdir(dir, { withFileTypes: true });
    const largePNGs = [];

    for (const file of files) {
        const fullPath = join(dir, file.name);

        if (file.isDirectory()) {
            // Skip node_modules and hidden directories
            if (!file.name.startsWith('.') && file.name !== 'node_modules') {
                largePNGs.push(...await findLargePNGs(fullPath));
            }
        } else if (extname(file.name).toLowerCase() === '.png') {
            const stats = await stat(fullPath);
            const sizeKB = stats.size / 1024;

            if (sizeKB > TARGET_SIZE_KB) {
                largePNGs.push({ path: fullPath, size: sizeKB });
            }
        }
    }

    return largePNGs;
}

async function main() {
    console.log('🔍 Finding PNG images larger than 30KB...\n');

    const largePNGs = await findLargePNGs(PUBLIC_DIR);

    if (largePNGs.length === 0) {
        console.log('No large PNG images found.');
        return;
    }

    console.log(`Found ${largePNGs.length} large PNG image(s):\n`);

    for (const { path, size } of largePNGs) {
        console.log(`  ${basename(path)} (${size.toFixed(1)}KB)`);
    }

    console.log('\n🔄 Converting to WebP...\n');

    for (const { path } of largePNGs) {
        const outputPath = path.replace(/\.png$/i, '.webp');
        await convertImage(path, outputPath);
    }

    console.log('\n✅ Conversion complete!');
    console.log('\n⚠️  Note: Update your code to use .webp files instead of .png');
}

main().catch(console.error);
