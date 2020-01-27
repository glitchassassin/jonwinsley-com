module.exports = eleventyConfig => {

    // Pass through static assets
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/styles');

    eleventyConfig.setDataDeepMerge(true);

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
