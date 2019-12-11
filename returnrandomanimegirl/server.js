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
  'shinomiya_kaguya',
  'yuuki_yuuna'
]

function search(res, tag, random) {
  const booru = new Danbooru()
  if (random === 'true' && !tag) {
    tag = animeGirlsILike[Math.floor(Math.random() * animeGirlsILike.length)]
  } else if (random != 'true' && !tag) {
    tag = ''
  }
  booru.posts({ tags: 'rating:safe ' + tag}).then(posts => {
    const index = Math.floor(Math.random() * posts.length)
    const post = posts[index]
    const url = booru.url(post.file_url)
    res.redirect(url.href)
  })
}

app.get('/', (req, res) => {
  search(res, req.query.tag, req.query.random)
})

app.listen(port, () => console.log(`Running!`))
