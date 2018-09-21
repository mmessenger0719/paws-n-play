import { createStore, combineReducers, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import activitiesTrainings from './activitiesTrainings'

const reducer = combineReducers({ activitiesTrainings })

const store = createStore(reducer, applyMiddleware(loggingMiddleware, thunkMiddleware))

export default store
