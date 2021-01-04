import { combineReducers } from 'redux'
import { alertReducer } from './alertReducer'
import { bikeFetchReducer } from './bikeFetchReducer'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
	items: alertReducer,
	bikes: bikeFetchReducer,
	form: formReducer,
})
