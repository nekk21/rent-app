import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deleteBike, rentBike } from '../Redux/Actions/fetchActions'

const StyledElement = styled.div`
	position: relative;
	justify-content: space-around;
	text-align: center;
	display: flex;
	border: 2px solid;
	border-radius: 20px;
	margin: 20px auto;
	width: 50vw;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
	font-family: cursive;
	font-size: larger;

	.wrapper {
		display: flex;
		flex: inherit;
		justify-content: space-between;
		position: relative;
		margin: 20px;
		width: 85%;
	}
	button {
		margin-left: 15px;
	}
	.element {
		width: 26%;
		display: flex;
		justify-content: flex-start;
	}
`

function ElementBicycle(props) {
	let content = ''

	const dispatch = useDispatch()

	const deleteHandler = () => {
		const confirm = window.confirm(
			`Are u sure? You want to delete bike - ${props.name}?`
		)
		if (confirm) {
			dispatch(deleteBike(props.id))
			window.location.reload()
		}
	}

	const rentHandler = () => {
		const confirm = window.confirm(`You want to rent bike - ${props.name}?`)
		const bodyTrue = { ...props, status: true }
		if (confirm) {
			dispatch(rentBike(bodyTrue))
			window.location.reload()
		}
	}

	const cancelHandler = () => {
		const confirm = window.confirm(
			`You want to cancel rent bike - ${props.name}?`
		)
		const bodyFalse = { ...props, status: false }
		///////////////////////////
		const startTime = Date.parse(props.time)
		const endTime = Date.now()
		const result = endTime - startTime
		const hours = Math.floor(result / (1000 * 60 * 60))

		////////////////////////
		if (confirm) {
			dispatch(rentBike(bodyFalse))

			if (hours > 20) {
				alert(
					`Pay ${
						(props.price / 2) * hours
					} € coz you rented a bike more then 20 hours! Time of rent ${hours} : hours`
				)
			} else if (hours < 1) {
				alert(`Pay 0 € you rented a bike for less than 1 hour`)
			} else {
				alert(
					`Pay ${
						props.price * hours
					} for rent! Time of rent ${hours} : hours`
				)
			}

			window.location.reload()
		}
	}

	switch (props.statusRent) {
		case 'RENT_LIST':
			content = (
				<button
					className='btn waves-effect waves-light #ffb300 amber darken-1'
					onClick={cancelHandler}>
					Cancel Rent
				</button>
			)
			break

		case 'ALL_LIST':
			content = (
				<>
					<button
						className='btn  waves-effect waves-light #43a047 green darken-1'
						onClick={rentHandler}>
						Rent
					</button>

					<button
						className='btn waves-effect waves-light #f44336 red'
						onClick={deleteHandler}>
						Delete
					</button>
				</>
			)
			break
		default:
			content = ''
	}

	return (
		<StyledElement>
			<div className='wrapper'>
				<div className='element'>Name : {props.name} </div>

				<div className='element'>Type : {props.type}</div>

				<div className='element'>Price : {props.price} €</div>

				<div className='buttons'>{content}</div>
			</div>
		</StyledElement>
	)
}

export default ElementBicycle
