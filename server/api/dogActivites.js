const router = require('express').Router()
const DogActivities = require('../db/models/dogActivities')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const activities = await DogActivities.findAll()
    res.json(activities)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const activityId = req.params.id
    const activity = await DogActivities.findAll({
      where: {
        id: activityId
      }
    })
    res.json(activity)
  } catch (err) {
    next(err)
  }
})

router.get('/:category', async (req, res, next) => {
  try {
    const category = req.params.category
    const activities = await DogActivities.findAll({
      where: {
        category: category
      }
    })
    res.json(activities)
  } catch (err) {
    next(err)
  }
})
