module.exports = eleventyConfig => {

    // // Pass through static assets
    eleventyConfig.addPassthroughCopy('src/assets');

    return {
        // Input directory
        dir: {
            input: 'src/'
        },
        passthroughFileCopy: true
    };

};
