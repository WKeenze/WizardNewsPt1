const timeAgo = require('node-time-ago');
const html = require("html-template-tag");

const postDetails = (post) => {
    return `<!DOCTYPE html>
    <html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list">
        <header><img src="/logo.png"/>Wizard News</header>
   
          <div class='news-item'>
            <p>
           ${post.title}
              <small>(by ${post.name})</small>
            </p>
            <small class="news-info=">
              ${post.content}  |Posted: ${timeAgo(`${post.date}`)}
            </small>
          </div>
        
      </div>
    </body>
  </html>`
}

module.exports = postDetails