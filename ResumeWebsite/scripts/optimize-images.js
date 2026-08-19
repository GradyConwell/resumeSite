const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceRoot = path.join(__dirname, '../src/assets/photos');
const outputRoot = path.join(__dirname, '../_site/assets/photos');
const imagePattern = /\.(jpg|jpeg|png|gif|webp)$/i;

async function optimizeImages() {
    if (!fs.existsSync(sourceRoot)) {
        return;
    }

    fs.rmSync(outputRoot, { recursive: true, force: true });

    const categories = fs.readdirSync(sourceRoot, { withFileTypes: true })
        .filter(entry => entry.isDirectory());

    for (const category of categories) {
        const sourceCategory = path.join(sourceRoot, category.name);
        const outputCategory = path.join(outputRoot, category.name);
        fs.mkdirSync(outputCategory, { recursive: true });

        const files = fs.readdirSync(sourceCategory)
            .filter(file => imagePattern.test(file));

        await Promise.all(files.map(async file => {
            const outputName = `${path.parse(file).name}.webp`;
            await sharp(path.join(sourceCategory, file))
                .rotate()
                .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
                .webp({ quality: 82, effort: 5 })
                .toFile(path.join(outputCategory, outputName));
        }));
    }
}

optimizeImages().catch(error => {
    console.error('Image optimization failed:', error);
    process.exitCode = 1;
});