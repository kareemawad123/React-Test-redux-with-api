import { combineReducers } from 'redux'
import moviesReducer from './movies'
import favoritesReducer from './favorite'

const rooteReducer = combineReducers({
    movies: moviesReducer,
    favorites: favoritesReducer
})

export default rooteReducer