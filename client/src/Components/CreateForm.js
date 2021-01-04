import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { useSelector } from 'react-redux'
import Alert from './Alert'

const StyledForm = styled.div`
	.select {
		display: flex;
	}
`

function CreateForm(props) {
	const AlertState = useSelector(state => state.items.alert)

	const form = (
		<form onSubmit={props.handleSubmit}>
			<div className='input-field col s6'>
				<i className='material-icons prefix'>create</i>
				<Field
					name='name'
					component='input'
					id='icon_prefix'
					type='text'
					className='validate'
				/>
				<label htmlFor='icon_prefix'>Bike Name</label>
			</div>
			<div className='input-field col s6'>
				<i className='material-icons prefix'>euro_symbol</i>
				<Field
					name='price'
					component='input'
					id='icon_prefix'
					type='number'
					className='validate'
				/>
				<label htmlFor='icon_prefix'>Price in Euro per hour</label>
			</div>
			<div className='browser-default input-field col s6'>
				<Field className='select' name='type' component='select'>
					<option value='' disabled>
						Choose a bike type ...
					</option>

					<option value='Mountain'>Mountain</option>
					<option value='Road'>Road</option>
					<option value='Cyclocross'>Cyclocross</option>
				</Field>
			</div>

			<div className='buttons'>
				<button
					type='submit'
					className='submit btn waves-effect waves-light #43a047 green darken-1'>
					Submit
				</button>

				<button
					className='btn waves-effect waves-light #757575 grey darken-1'
					onClick={e => {
						e.preventDefault()
						props.close()
					}}>
					Cancel
				</button>
			</div>
		</form>
	)

	if (AlertState === null) {
		return <StyledForm>{form}</StyledForm>
	} else {
		return (
			<StyledForm>
				{form}
				<Alert />
			</StyledForm>
		)
	}
}

const CreateFormRedux = reduxForm({ form: 'CreateBikeForm' })(CreateForm)
export default CreateFormRedux
