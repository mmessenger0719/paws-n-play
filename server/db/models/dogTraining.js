const db = require('../db')
const Sequelize = require('sequelize')

const DogTraining = db.define('dogTraining', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  instructions: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = DogTraining
