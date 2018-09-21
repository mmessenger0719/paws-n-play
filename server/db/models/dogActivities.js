const db = require('../db')
const Sequelize = require('sequelize')

const DogActivities = db.define('dogActivities', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: Sequelize.ENUM('Dog Park', 'Dog-Friendly Events', 'Dog-Friendly Restaurants', 'Dog-Friendly Activities'),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = DogActivities
