import {combineReducers} from 'redux'
import {ForecastReducer} from './forecastReducer';

export default combineReducers({forecast: ForecastReducer});
