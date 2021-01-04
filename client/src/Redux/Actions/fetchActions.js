import { ALL_BIKES_LOADER } from '../types'
import { showAlert } from './alertAction'

const url = 'http://localhost:5000/api/bikes/'

///////////////////////////////////////// Post new bike
export function postBike(formData) {
	return async dispatch => {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (response.status > 300) {
			dispatch(showAlert(response.message))
		}
	}
}

///////////////////////////////////////// get Btkes To LIST

export function getAllBikes(data) {
	return { type: ALL_BIKES_LOADER, payload: data }
}

export function fetchBikes() {
	return async dispatch => {
		const response = await fetch(url)
		const result = await response.json()

		dispatch(getAllBikes(result))
	}
}

//////////////////////////////////////////// Delete Bike

export function deleteBike(id) {
	return async dispatch => {
		const response = await fetch(url, {
			method: 'DELETE',
			body: JSON.stringify({ id }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const result = await response.json()
	}
}

////////////////////////////////////////////update status bikes

export function rentBike(body) {
	return async dispatch => {
		const response = await fetch(`${url}status`, {
			method: 'POST',
			body: JSON.stringify({ id: body.id, status: body.status }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const result = await response.json()
	}
}
