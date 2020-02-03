const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const sassPlugin = require("eleventy-plugin-sass");

module.exports = eleventyConfig => {

    // Pass through static assets
    eleventyConfig.addPassthroughCopy('src/assets');
    // eleventyConfig.addPassthroughCopy('src/styles');

    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(sassPlugin, {
        watch: ['src/styles/**/*.scss']
    });

    eleventyConfig.addLiquidFilter("toUTCString", (value) => (
        value.toISOString().slice(0, 16).replace('T', ' ')
    ));

    return {
        // Input directory
        dir: {
            input: 'src/'
        },
        passthroughFileCopy: true
    };

};
