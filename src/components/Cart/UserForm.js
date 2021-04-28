import React, { useRef } from 'react'

export default function UserForm({setComprarButtonClass, setUser}) {
	const nameRef = {ref: useRef(), id: 'name', title: 'Nombre', type: 'text'}
	const lastNameRef = {ref: useRef(), id: 'lastName', title: 'Apellido', type: 'text'}
	const phoneRef = {ref: useRef(), id: 'phone', title: 'Numero', type: 'phone'}
	const emailRef = {ref: useRef(), id: 'email', title: 'E-mail', type: 'email'}
	const email2Ref = {ref: useRef(), id: 'email2', title: 'Confirmar E-mail', type: 'email'}

	const fields = [nameRef,lastNameRef,phoneRef,emailRef,email2Ref]

	const checkUser = () => {
		// Email confirmado ?
		if (emailRef.ref.current.value !== email2Ref.ref.current.value) return false

		const data = {
			name: nameRef.ref.current.value,
			lastName: lastNameRef.ref.current.value,
			phone: phoneRef.ref.current.value,
			email: emailRef.ref.current.value
		}
		setUser(data)
		
		// Mi forma medio extraña para comprobar si los datos estan completos
		return Object.values(data).filter(e => e === '').length === 0
	}
	
	const handleChange = () => {
		setComprarButtonClass(checkUser() ? 'active' : '')
	}

	return <form target="_self">
		{fields.map(({ref, id, title, type}) => 
			<div className="field">
				<label htmlFor={id}>{title}</label>
				<input type={type} id={id} ref={ref} onChange={handleChange} />
			</div>
		)}
	</form>
}