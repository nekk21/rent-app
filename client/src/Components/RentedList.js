import React from 'react'
import ElementBicyclie from './ElementBicycle'

import { useSelector } from 'react-redux'

function RentedList() {
	const rent = 'RENT_LIST'

	const bicyclieData = useSelector(state => state.bikes.bikes)

	//////////////////////////////////
	let sum = 0

	return (
		<div>
			{bicyclieData.map(elem => {
				if (elem.status) {
					sum += elem.price
					return (
						<ElementBicyclie
							key={elem._id}
							statusRent={rent}
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
			<div> Total money from rented bikes per hour : {sum}€ </div>
		</div>
	)
}

export default RentedList
