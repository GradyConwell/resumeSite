const fs = require('fs');
const path = require('path');

module.exports = function() {
    // Path to the photos directory relative to this file
    const photosDir = path.join(__dirname, '../assets/photos');
    const categories = {};

    try {
        if (fs.existsSync(photosDir)) {
            // Get all subdirectories (categories)
            const folders = fs.readdirSync(photosDir).filter(file => {
                return fs.statSync(path.join(photosDir, file)).isDirectory();
            });

            folders.forEach(folder => {
                const folderPath = path.join(photosDir, folder);
                // Get all image files in the category folder
                const files = fs.readdirSync(folderPath).filter(file => {
                    return /\.(jpg|jpeg|png|gif|webp)$/i.test(file);
                });
                
                // Only add category if it has images
                if (files.length > 0) {
                    categories[folder] = files.map(file => `/assets/photos/${folder}/${file}`);
                }
            });
        }
    } catch (e) {
        console.error("Error loading photos:", e);
    }

    return categories;
};
