const fs = require('fs');
const path = require('path');

module.exports = function() {
    // Path to the photos directory relative to this file
    const photosDir = path.join(__dirname, '../assets/photos');
    const photos = [];

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
                
                // Add all images with their modification time
                files.forEach(file => {
                    const filePath = path.join(folderPath, file);
                    const stats = fs.statSync(filePath);
                    photos.push({
                        src: `/assets/photos/${folder}/${file}`,
                        category: folder,
                        mtime: stats.mtime.getTime() // Modification time in ms
                    });
                });
            });
        }
    } catch (e) {
        console.error("Error loading sidebar photos:", e);
    }

    // Return all photos - shuffling happens client-side
    return photos;
};
