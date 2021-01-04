import {
	ALERT_MESSAGE,
	HIDE_ALERT_MESSAGE,
	SHOW_MODAL,
	HIDE_MODAL,
} from '../types'

let initialState = {
	alert: null,
	modal: false,
}

export const alertReducer = (state = initialState, action) => {
	switch (action.type) {
		case ALERT_MESSAGE:
			return { ...state, alert: action.payload }

		case HIDE_ALERT_MESSAGE: {
			return { ...state, alert: null }
		}

		case SHOW_MODAL:
			return { ...state, modal: true }

		case HIDE_MODAL: {
			return { ...state, modal: false }
		}

		default:
			return state
	}
}
