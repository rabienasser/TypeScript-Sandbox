import { ThunkAction } from 'redux-thunk'
import { RootState } from '../index'
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_ERROR, SET_LOADING } from '../types'


export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            dispatch({type: SET_LOADING})

            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)

            if(!res.ok){
                const error: WeatherError = await res.json()
                throw new Error(error.message)
            }

            const weatherData: WeatherData = await res.json()

            dispatch({
                type: GET_WEATHER,
                payload: weatherData
            })

        } catch(err: any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}


export function setError(): WeatherAction {
    return {
        type: SET_ERROR,
        payload: ''
    }
}