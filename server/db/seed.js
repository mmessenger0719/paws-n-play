'use strict'

const { db, DogActivities, DogTraining } = require('./index')

const dogTraining = [
  {
    name: 'Sit',
    instructions: '1. Sit'
  }
]

const dogActivities = [
  {
    name: 'Dog Park',
    location: '123 Main St',
    category: 'Dog Park'
  }
]

const seed = async () => {
  try {
    await db.sync({ force: true })
    const dbDogTraining = await DogTraining.bulkCreate(dogTraining)
    const dbDogActivities = await DogActivities.bulkCreate(dogActivities)
  } catch (err) {
    console.log(err)
  } finally {
    db.close()
  }
}

seed()
