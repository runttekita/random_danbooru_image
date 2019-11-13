# random_danbooru_image
hosts a server that redirects you to a random danbooru image.

once you go to localhost:5000 it will redirect you to a random SFW image from all of danbooru.

you can add the optional queries `?tag` or `?random` to change the search parameters.

you can only add in one `tag`, and using `tag` will override `random`.

`random=true` will return one tag from an array at the top of `server.js` as your search tag. it comes shipped with a list of girls i like.

eg:

```
localhost:5000 //redirects you to a random image from all of danbooru.
localhost:5000/?tag=rin_tezuka //redirects you to a random image that has the tag rin_tezuka
localhost:5000/?random=true //redirects you to a random image that has one of the tags in the array animeGirlsILike
```

# owo?

```
git clone https://github.com/runttekita/random_danbooru_image.git
cd random_danbooru_image/returnrandomanimegirl
npm i
node server.js
```
