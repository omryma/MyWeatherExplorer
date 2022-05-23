import { combineReducers } from 'redux'

import moviesReducer from './movies'
import weatherReducer from './weather';
import { weatherAPI } from "./weatherApiSlice";

const rootReducer = combineReducers({
    movies: moviesReducer,
    weather: weatherReducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer
})

const RTKMiddleware = {
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherAPI.middleware),
}

const storeConfig = { reducer: rootReducer, ...RTKMiddleware };

export default storeConfig;
