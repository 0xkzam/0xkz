
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/kasun/Documents/dev_env/blog/0xkz/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/kasun/Documents/dev_env/blog/0xkz/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kasun/Documents/dev_env/blog/0xkz/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/kasun/Documents/dev_env/blog/0xkz/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/kasun/Documents/dev_env/blog/0xkz/src/templates/blog-post.js"))
}

