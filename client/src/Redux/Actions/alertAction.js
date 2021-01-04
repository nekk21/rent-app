import { ALERT_MESSAGE, HIDE_ALERT_MESSAGE } from '../types'

export function showAlert(message) {
	return dispatch => {
		dispatch({ type: ALERT_MESSAGE, payload: message })
		setTimeout(() => {
			dispatch(hideAlert())
		}, 3000)
	}
}

export function hideAlert() {
	return { type: HIDE_ALERT_MESSAGE }
}
