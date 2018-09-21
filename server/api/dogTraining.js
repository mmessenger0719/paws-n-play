const router = require('express').Router()
const DogTraining = require('../db/models/dogTraining')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const trainings = await DogTraining.findAll()
    res.json(trainings)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const trainingId = req.params.id
    const training = await DogTraining.findAll({
      where: {
        id: trainingId
      }
    })
    res.json(training)
  } catch (err) {
    next(err)
  }
})
