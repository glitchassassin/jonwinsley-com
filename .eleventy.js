module.exports = eleventyConfig => {

    // Pass through static assets
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/styles');

    return {
        // Input directory
        dir: {
            input: 'src/'
        },
        passthroughFileCopy: true
    };

};
