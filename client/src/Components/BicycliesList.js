import React, { useEffect } from 'react'
import { fetchBikes } from '../Redux/Actions/fetchActions'
import { useDispatch, useSelector } from 'react-redux'
import ElementBicyclie from './ElementBicycle'

function BicycliesList(props) {
	const all = 'ALL_LIST'
	const dispatch = useDispatch()
	const bicyclieData = useSelector(state => state.bikes.bikes)

	useEffect(() => {
		dispatch(fetchBikes())
	}, [])
	/////////////////
	let count = 0
	return (
		<>
			<div>
				{bicyclieData.map(elem => {
					if (!elem.status) {
						count++
						return (
							<ElementBicyclie
								key={elem._id}
								statusRent={all}
								name={elem.name}
								type={elem.type}
								price={elem.price}
								id={elem._id}
								status={elem.status}
								time={elem.rentStart}
							/>
						)
					}
					return null
				})}
				<div> Тow available {count} bikes for rent :)</div>
			</div>
		</>
	)
}

export default BicycliesList
