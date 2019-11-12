const Danbooru = require('danbooru')
const express = require('express')
const app = express()
const port = 5000

// Perform a search for popular image posts
function search(res, tag) {
  const booru = new Danbooru()
  if (!tag) {
    tag = ''
  }
  booru.posts({ tags: 'rating:safe ' + tag}).then(posts => {
    // Select a random post from posts array
    const index = Math.floor(Math.random() * posts.length)
    const post = posts[index]

    // Get post's url and create a filename for it
    const url = booru.url(post.file_url)
    const name = `${post.md5}.${post.file_ext}`

    res.redirect(url.href)
  })
}


app.get('/', (req, res) => {
  search(res, req.query.tag)
})

app.listen(port, () => console.log(`dab`))
