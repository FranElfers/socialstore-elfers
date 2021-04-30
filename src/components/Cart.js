import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import CartContext from './../context/CartContext'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from './../firebase'
import './styles/Cart.css'
import UserForm from './UserForm'

export default function Cart() {
	const { products, removeProducts, addItem, cartSize, clear } = React.useContext(CartContext)
	const [ comprarButtonClass, setComprarButtonClass ] = React.useState('')
	const [ user, setUser ] = React.useState({})
	const history = useHistory()
	const totalPrecio = products.reduce((acc,cur) => (cur.item.price * cur.quantity) + acc, 0)
	
	const generarOrden = () => {
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
	const listaDeProductos = products.map(product => <div key={product.item.id}>
		{/* <img src={product.item.pictureUrl} alt={product.item.title} /> */}
		<span className="title"><Link to={"/item/" + product.item.id}>{product.item.title}</Link></span>

		<div className="data">
			<div className="info">
				<span>&times; {product.quantity}</span>
				<span className="price">$ {product.item.price}</span>
			</div>
			<div className="cart-product-buttons">
				<button style={{background:'#880'}} title="Remover 1" onClick={() => removeProducts(product.item.id, 1)}>-</button>
				<button style={{background:'#080'}} title="Agregar 1" onClick={() => addItem(product.item, 1)}>+</button>
				<button style={{background:'#800'}} title="Quitar del carrito" onClick={() => removeProducts(product.item.id, product.quantity)}>&times;</button>
			</div>
		</div>
	</div> )


	// Formulario y boton para comprar para el render
	const formularioDeCompra = <>
		<div className="total">
			<button onClick={clear}>Borrar carrito</button>
			<span>
				$ &nbsp;
				{totalPrecio}
			</span>
		</div>
		<div className="total" style={{height:'auto'}}>
			<UserForm setButtonClass={setComprarButtonClass} setUser={setUser} />
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
		<div className="🛒">
			{ cartSize > 0 ? listaDeProductos : <Link to="/" >No hay productos, <u>volver a inicio</u></Link> }
		</div>
		{cartSize > 0 && formularioDeCompra }
	</>
}