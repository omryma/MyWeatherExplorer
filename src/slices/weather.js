import { createSlice } from '@reduxjs/toolkit';
import { weatherAPI } from "./weatherApiSlice";

export const initialState = {
    location: localStorage.location ? JSON.parse(localStorage.location) : {},
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherLocation: (state, { payload }) => {
            state.location = payload
        }
    },
    // extraReducers: (builder) => {
    //     builder.addMatcher(weatherAPI.endpoints.getWeatherByLocation.matchFulfilled, (state, { payload }) => {
    //         console.log('matcher payload', payload)
    //         const weatherObj = { temperature: payload[0].Temperature.Metric.Value,
    //             weatherIcon: payload[0].WeatherIcon,
    //             realFeel: payload[0].RealFeelTemperature.Metric.Value,
    //             humid: payload[0].RelativeHumidity
    //         };
    //     })
    // }
})

export const { setWeatherLocation } = weatherSlice.actions

export const weatherSelector = (state) => state.weather

export default weatherSlice.reducer

// export const fetchWeather = (location) => async dispatch => {
//     dispatch(getWeather())
//     try {
//         const apiKey = 'hqXB1f6tFcH2FG9ngBOOhroEyG8BKrJ6'
//         const weatherRes = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${location.locationKey}?apikey=${apiKey}&details=true`)
//         const weatherJSON = await weatherRes.json()
//         const weatherObj = { temperature: weatherJSON[0].Temperature.Metric.Value,
//             weatherIcon: weatherJSON[0].WeatherIcon,
//             realFeel: weatherJSON[0].RealFeelTemperature.Metric.Value,
//             humid: weatherJSON[0].RelativeHumidity
//         }
//
//         dispatch(getWeatherSuccess({ weatherObj, location }))
//     } catch (e) {
//         console.log(e)
//         dispatch(getWeatherFailure())
//     }
// }
