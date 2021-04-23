import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import CartContext from '../../context/CartContext'
import './ItemDetail.css'

export default function ItemDetail(item) {
	const [ selectedCount, setSelectedCount ] = React.useState(0)
	const { addItem, getProduct } = React.useContext(CartContext)
	const { id, title, description, price, pictureUrl, stock } = item

	const addHandler = quantity => {
		setSelectedCount(quantity)
	}

	// Cantidad de items seleccionados en el carrito
	const onCartQuantity = () => getProduct(id)?.quantity || 0

	// Stock virtual 
	const virtualStock = () => stock - onCartQuantity()
	
	return <div className="item-detail">
		<img src={pictureUrl} alt={title}/>
		<h3>{title || '🕛'}</h3>
		<p style={{color:'#f90'}} >ARS {price || '$$$'}</p>
		<p>{description}</p>

		{selectedCount > 0 ? 
			<Link 
				to="/cart" 
				className="btn1" 
				onClick={() => addItem(item, selectedCount)}
			>Agregar {selectedCount} al carrito</Link>
			:
			<ItemCount virtualStock={virtualStock()} initial={0} onAdd={addHandler} />
		}
	</div>
}