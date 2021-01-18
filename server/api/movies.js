const router = require('express').Router()
const axios = require('axios').default
const {Movie} = require('../db/models')

router.get('/liked/:imdbId', async (req, res, next) => {
  try {
    const movie = await Movie.findOne({
      where: {
        imdbId: req.params.imdbId
      }
    })
    res.status(200).send(movie)
  } catch (error) {
    next(error)
  }
})

router.post(`/liked/:imdbId`, async (req, res, next) => {
  try {
    console.log(req.body)
    const newMovie = {
      title: req.body.movie.Title,
      imdbId: req.body.movie.imdbID,
      likes: 0,
      dislikes: 0
    }

    const [movie] = await Movie.findOrCreate({
      where: {
        imdbId: req.body.movie.imdbID
      },
      defaults: newMovie
    })

    if (req.body.like) {
      await movie.increment(['likes'], {by: 1})
    }
    if (req.body.dislike) {
      await movie.increment(['dislikes'], {by: 1})
    }
    res.json(movie)
  } catch (error) {
    console.error({error})
    next(error)
  }
})

module.exports = router
