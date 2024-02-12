const {html} = require("common-tags");

function blogCard({title, image, url, description}){
    return html`
    <div class="blog-card"><a href="${url}">
            ${image ? `<img src="${image}">`: ""}    
            <h2>${title}</h2>
            ${description ? `<p>${description}<p>`: ""}
    </a></div>
    `;
}

module.exports = blogCard;