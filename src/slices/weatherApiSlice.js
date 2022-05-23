import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setWeatherLocation } from "./weather";

const apiKey = 'hqXB1f6tFcH2FG9ngBOOhroEyG8BKrJ6';

export const weatherAPI = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://dataservice.accuweather.com/currentconditions/v1/' }),
    endpoints: (builder) => ({
        getWeatherByLocation: builder.query({
            query: (location) => `${location.locationKey}?apikey=${apiKey}&details=true`,
            transformResponse: (response) => {
                const weatherObj = { temperature: response[0].Temperature.Metric.Value,
                    weatherIcon: response[0].WeatherIcon,
                    realFeel: response[0].RealFeelTemperature.Metric.Value,
                    humid: response[0].RelativeHumidity
                };
                console.log(weatherObj)
                return weatherObj;
            },
            onQueryStarted(args, { dispatch }) {
                dispatch(setWeatherLocation(args))
            }
        }),
    }),
})

export const { useGetWeatherByLocationQuery } = weatherAPI;