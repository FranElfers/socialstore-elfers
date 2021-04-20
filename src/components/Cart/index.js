import React from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './Cart.css'

export default function Cart() {
	const { products, removeProducts, addItem, cartSize, clear } = React.useContext(CartContext)

	return <>
		<div className="cart">
			{ cartSize > 0 ?
				products.map((product,i) => <div key={i}>
					<img src={product.item.pictureUrl} alt={product.item.title} />
					<span><Link to={"/item/" + product.item.id}>{product.item.title}</Link></span>
					<span>{product.quantity}</span>
					<span>$ {product.item.price}</span>
					<div className="cartProductButtons">
						<button onClick={() => removeProducts(product.item.id, 1)}>-</button>
						<button onClick={() => addItem(product.item, 1)}>+</button>
					</div>
				</div> )
			:
				<Link to="/" >No hay productos, <u>volver a inicio</u></Link>
			}
		</div>
		{cartSize > 0 ? 
			<div className="total">
				<button onClick={() => clear()}>Borrar carrito</button>
				{console.log(products)}
				<span>
					$ &nbsp;
					{products.reduce((acc,cur) => (cur.item.price * cur.quantity) + acc, 0)}
				</span>
			</div>
		:
			<div className="total">
				<div></div>
				<span>$ 0</span>
			</div>
		}
	</>
}






// WANS