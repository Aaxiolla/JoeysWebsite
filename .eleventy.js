const blogCard = require("./src/_includes/components/blogCard")
module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('src/css/');
    eleventyConfig.addPassthroughCopy('src/assets/');
    eleventyConfig.addWatchTarget("css/style.css");
    eleventyConfig.addShortcode("blogCard", blogCard)
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            site: '_site'
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}