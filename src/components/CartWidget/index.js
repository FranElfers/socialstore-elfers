import React from 'react'
import { NavLink } from "react-router-dom";
import CartContext from '../../context/CartContext'

export default function CartWidget() {
	const { cartSize } = React.useContext(CartContext)

	return cartSize === 0 || <NavLink title='Carrito' id='carrito' to="/cart" activeClassName="current-nav">
		🛒
		<span style={{marginRight: 5}}>
			{cartSize}
		</span>
	</NavLink>
}