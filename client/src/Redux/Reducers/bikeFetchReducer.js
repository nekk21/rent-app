import { ALL_BIKES_LOADER } from '../types'

let initialState = {
	bikes: [],
}

export const bikeFetchReducer = (state = initialState, action) => {
	switch (action.type) {
		case ALL_BIKES_LOADER: {
			return { ...state, bikes: action.payload }
		}

		default:
			return state
	}
}
