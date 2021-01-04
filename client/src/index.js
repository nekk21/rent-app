import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './Redux/Reducers/rootReducer'
import { Provider } from 'react-redux'

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

reportWebVitals()
