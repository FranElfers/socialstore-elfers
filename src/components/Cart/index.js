import React from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './Cart.css'

export default function Cart() {
	const { products, removeProducts, cartSize, clear } = React.useContext(CartContext)

	return <>
		<div className="cart">
			{ cartSize > 0 ?
				products.map((product,i) => <div key={i}>
					<img src={product.item.pictureUrl} alt={product.item.title} />
					<h3>{product.item.title}</h3>
					<h3>{product.quantity}</h3>
					<h3>$ {product.item.price}</h3>
					<button onClick={() => removeProducts(product.item.id, 1)}>Sacar uno</button>
				</div> )
			:
				<Link to="/" >No hay productos, <u>volver a inicio</u></Link>
			}
		</div>
		{cartSize > 0 ? 
			<div className="total">
				<button onClick={() => clear()}>Borrar carrito</button>
				<h3>
					$ &nbsp;
					{products.reduce((acc,cur) => (cur.item.price * cur.quantity) + acc, 0)}
				</h3>
			</div>
		:
			<div className="total">
				<div></div>
				<h3>$ 0</h3>
			</div>
		}
	</>
}






// WANS