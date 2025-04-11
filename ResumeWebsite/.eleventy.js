const fs = require("fs");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
    // Copy the entire 'assets' directory to the output
    eleventyConfig.addPassthroughCopy("src/assets");

    // Initialize Markdown-It
    const md = markdownIt({ html: true }).use(markdownItAttrs);

    // Add a shortcode to include and render Markdown files
    eleventyConfig.addShortcode("markdownInclude", function (filePath) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        return md.render(fileContent);
    });

    const markdownLib = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    });

    eleventyConfig.setLibrary("md", markdownLib);

    // Project Card Collection 
    eleventyConfig.addCollection("projects", function (collectionApi) {
        return collectionApi.getFilteredByGlob("./src/projects/*.md").sort((a, b) => {
            return a.data.priority - b.data.priority; // Sort by priority (ascending)
        });
    });

    return {
        dir: {
            input: "src",      // Input folder
            output: "_site",   // Output folder
            includes: "_includes", // Includes folder
            data: "_data",     // Data folder
        },
    };
};
