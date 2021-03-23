import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './NavBar.css';

export default function NavBar() {
	return <nav>
		<Link className="brand" to="/">SocialStore</Link>
		<div>
			<CartWidget />
			<NavLink activeClassName="current-nav" title='Comidas' to="/category/Hamburguesas" >🍔</NavLink>
			<NavLink activeClassName="current-nav" title='Bebidas' to="/category/Bebidas" >🍾</NavLink>
			<NavLink title='Ropa' to="/" >👔</NavLink>
			<NavLink title='Bicicletas' to="/" >🚲</NavLink>
			<NavLink title='Musica' to="/" >🎸</NavLink>
		</div>
	</nav>
}