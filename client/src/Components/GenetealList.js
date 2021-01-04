import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
//
import ModalWindow from './ModalWindow'
import CreateFormRedux from './CreateForm'
import BicycliesList from './BicycliesList'
import RentedList from './RentedList'
import { postBike } from '../Redux/Actions/fetchActions'
import { showAlert } from '../Redux/Actions/alertAction'

const GeneralStyle = styled.div`
	border: 1px solid;
	position: relative;
	width: 60%;

	margin: 20px auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	border-radius: 20px;
	background: ghostwhite;
	font-family: cursive;

	.nameWrap {
		display: flex;
		justify-content: space-between;
		position: relative;
		width: 85%;
		align-items: baseline;
		padding: 0 20px;
	}
`

function GenetealList() {
	const [activatorMod1, setActivatorMod1] = useState(false)
	const dispatch = useDispatch()

	const onClose = () => {
		setActivatorMod1(false)
	}

	const Submit = formData => {
		if (formData.name && formData.type && formData.price) {
			dispatch(postBike(formData))
			setActivatorMod1(false)
			window.location.reload()
		} else if (
			(formData.name && formData.name.length < 2) ||
			(formData.name && formData.name.length > 15)
		) {
			dispatch(showAlert('Name should be > 2 and < 15 characters'))
		} else if (formData.price && formData.price > 9999) {
			dispatch(showAlert('Price cant be more then 9999 € per hour'))
		} else {
			dispatch(showAlert('All fields are required!'))
		}
	}

	const child = <CreateFormRedux onSubmit={Submit} close={onClose} />

	return (
		<GeneralStyle>
			<div className='nameWrap'>
				<h2>Rented Bikes</h2>
				<button
					className='btn  waves-effect waves-light #1e88e5 blue darken-1'
					onClick={() => {
						setActivatorMod1(true)
					}}>
					Add new Bike
					<i className='material-icons right'>add_box</i>
				</button>
			</div>
			<RentedList />

			<div className='nameWrap'>
				<h2>All Bikes</h2>
			</div>
			<BicycliesList />
			<ModalWindow
				active={activatorMod1}
				setActive={setActivatorMod1}
				children={child}
			/>
		</GeneralStyle>
	)
}

export default GenetealList
