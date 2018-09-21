import axios from 'axios'
import Expo from 'expo'
// const { manifest } = Expo.Constants
//   ? manifest.debuggerHost.split(`:`).shift().concat(`:1337`)
//   : `localhost:1337`

const GOT_ACTIVITIES = 'GOT_ACTIVITIES'
const GOT_SINGLE_ACTIVITY = 'GOT_SINGLE_ACTIVITY'
const GOT_TRAININGS = 'GOT_TRAININGS'
const GOT_SINGLE_TRAINING = 'GOT_SINGLE_TRAINING'

export const gotActivities = activities => ({ type: GOT_ACTIVITIES, activities })
export const gotSingleActivity = activity => ({ type: GOT_SINGLE_ACTIVITY, activity })
export const gotTrainings = trainings => ({ type: GOT_TRAININGS, trainings })
export const gotSingleTraining = training => ({ type: GOT_SINGLE_TRAINING, training })


export const getActivities = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/dogActivities`)
      dispatch(gotActivities(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const getSingleActivity = (activityId) => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/dogActivities/${activityId}`)
      dispatch(gotSingleActivity(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const getActivitiesByCategory = (category) => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/dogActivities/${category}`)
      dispatch(gotActivities(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const getTrainings = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/dogTrainings`)
      dispatch(gotTrainings(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const getSingleTraining = (trainingId) => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/dogTrainings/${trainingId}`)
      dispatch(gotSingleTraining(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState ={
  activities: {},
  singleActivity: {},
  trainings: {},
  singleTraining: {}
}

const activitiesTrainingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ACTIVITIES:
      return {...state, activities: action.activities}
    case GOT_TRAININGS:
      return {...state, trainings: action.trainings}
    case GOT_SINGLE_ACTIVITY:
      return {...state, activity: action.activity}
    case GOT_SINGLE_TRAINING:
      return {...state, training: action.training}
    default:
      return state
  }
}

export default activitiesTrainingsReducer
