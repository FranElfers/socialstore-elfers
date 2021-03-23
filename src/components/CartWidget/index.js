import { NavLink } from "react-router-dom";

export default function CartWidget() {
	return <NavLink title='Carrito' id='carrito' to="/cart" activeClassName="current-nav">🛒</NavLink>
}