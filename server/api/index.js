const router = require('express').Router()
module.exports = router

router.use('/dogActivities', require('./dogActivities'))
router.use('./dogTraining', require('./dogTraining'))
