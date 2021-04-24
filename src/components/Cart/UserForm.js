import React, { useRef } from 'react'

export default function UserForm({setComprarButtonClass, setUser}) {
	const nameRef = useRef()
	const lastNameRef = useRef()
	const phoneRef = useRef()
	const emailRef = useRef()
	const checkUser = () => {
		const data = {
			name: nameRef.current.value,
			lastName: lastNameRef.current.value,
			phone: phoneRef.current.value,
			email: emailRef.current.value,
		}
		setUser(data)
		
		// Mi forma medio extraña para comprobar si los datos estan completos
		return Object.values(data).filter(e => e === '').length === 0
	}
	
	const handleChange = () => {
		setComprarButtonClass(checkUser() ? 'active' : '')
	}

	return <form target="_self">
		<div className="field">
			<label htmlFor="name">Nombre</label>
			<input type="text" id="name" ref={nameRef} onChange={handleChange} />
		</div>
		<div className="field">
			<label htmlFor="lastName">Apellido</label>
			<input type="text" id="lastName" ref={lastNameRef} onChange={handleChange} />
		</div>
		<div className="field">
			<label htmlFor="phone">Numero</label>
			<input type="tel" id="phone" ref={phoneRef} onChange={handleChange} />
		</div>
		<div className="field">
			<label htmlFor="email">E-mail</label>
			<input type="email" id="email" ref={emailRef} onChange={handleChange} />
		</div>
	</form>
}