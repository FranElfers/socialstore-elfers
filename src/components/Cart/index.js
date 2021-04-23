import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../../firebase'
import './Cart.css'

export default function Cart() {
	const { products, removeProducts, addItem, cartSize, clear } = React.useContext(CartContext)
	const [ user, setUser ] = React.useState({})
	const history = useHistory()
	const totalPrecio = products.reduce((acc,cur) => (cur.item.price * cur.quantity) + acc, 0)
	
	const generarOrden = () => {
		if (!checkUser()) return alert('Datos de usuario incompletos')
		const db = getFirestore()
		let orderId = ''
		
		
		// Arma la orden de compra con el usuario y los productos del carrito
		const ordersCol = db.collection('orders')

		let orden = {}
		orden.date = firebase.firestore.Timestamp.fromDate(new Date())
		orden.buyer = user
		orden.total = totalPrecio
		orden.items = products.map(({item, quantity}) => {
			let { id, title, price } = item
			price = price * quantity
			return { id, title, price, quantity }
		})


		// Agrega un nuevo documento de orden de compra con los productos
		ordersCol.add(orden)
		.then(({id}) => {orderId = id})
		.catch(err => {console.err(err)})
		.finally(() => {console.log('termino')})


		// Actualiza el stock de los items comprados
		const batch = db.batch()

		products.map(product => {
			const docRef = db.collection('products').doc(product.item.id)

			batch.update(docRef,{
				'stock': product.item.stock - product.quantity
			})
			return product
		})


		// Sube la orden y redirige a una pantalla de resumen
		batch.commit().then(() => {
			history.push('checkout/' + orderId)
		})

	}

	// Lista de productos para el render
	const listaDeProductos = products.map((product,i) => <div key={i}>
		<img src={product.item.pictureUrl} alt={product.item.title} />
		<span><Link to={"/item/" + product.item.id}>{product.item.title}</Link></span>
		<span>{product.quantity}</span>
		<span>$ {product.item.price}</span>
		<div className="cart-product-buttons">
			<button onClick={() => removeProducts(product.item.id, 1)}>-</button>
			<button onClick={() => addItem(product.item, 1)}>+</button>
			<button onClick={() => removeProducts(product.item.id, product.quantity)}>&times;</button>
		</div>
	</div> )


	// Datos del formulario
	const nameRef = React.useRef()
	const phoneRef = React.useRef()
	const emailRef = React.useRef()
	const [ comprarButtonClass, setComprarButtonClass ] = React.useState('')
	const checkUser = () => {
		const data = {
			name: nameRef.current.value,
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
	

	// Formulario y boton para comprar para el render
	const formularioDeCompra = <>
		<div className="total">
			<button onClick={() => clear()}>Borrar carrito</button>
			<span>
				$ &nbsp;
				{totalPrecio}
			</span>
		</div>
		<div className="total" style={{height:'auto'}}>
			<form target="_self">
				<div className="field">
					<label htmlFor="name">Nombre</label>
					<input type="text" id="name" ref={nameRef} onChange={handleChange} />
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
		</div>
		<div className="total">
			<button 
				className={"completar-compra "+comprarButtonClass} 
				disabled={comprarButtonClass.length === 0}
				onClick={generarOrden}
			>Completar compra</button>
		</div>
	</>
	

	// Render
	return <>
		<div className="cart">
			{ cartSize > 0 ? listaDeProductos : <Link to="/" >No hay productos, <u>volver a inicio</u></Link> }
		</div>
		{cartSize > 0 && formularioDeCompra }
	</>
}