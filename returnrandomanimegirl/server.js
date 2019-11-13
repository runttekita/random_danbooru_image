const Danbooru = require('danbooru')
const express = require('express')
const app = express()
const port = 5000

let animeGirlsILike = [
  'sakura_futaba',
  'shiodome_miuna',
  'kousaka_reina',
  'akemi_homura',
  'makise_kurisu',
  'tezuka_rin',
  'hikawa_hina',
  'hikawa_sayo',
  'minato_yukina',
  'shirasagi_chisato',
  'chiyoda_momo',
  'shinomiya_kaguya'
]

// Perform a search for popular image posts
function search(res, tag, random) {
  const booru = new Danbooru()
  if (random === 'true' && !tag) {
    tag = animeGirlsILike[Math.floor(Math.random() * animeGirlsILike.length)]
  } else if (random != 'true' && !tag) {
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
  search(res, req.query.tag, req.query.random)
})

app.listen(port, () => console.log(`Running!`))
