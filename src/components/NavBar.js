import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import getCategories from '../services/getData'
import CartWidget from './CartWidget';
import './styles/NavBar.css';

export default function NavBar() {
	const [ categories, setCategories ] = useState([])
	useEffect(() => {
		getCategories().then(res => setCategories(res))
	},[])

	return <nav>
		<Link className="brand" to="/">SocialStore</Link>
		<div>
			<NavLink activeClassName="current-nav" to={'/loadproduct'}><small>Sube tu mercancia</small></NavLink>
			{categories.map(cat => <NavLink 
				key={cat.name}
				activeClassName="current-nav" 
				title={cat.name} 
				to={"/category/" + cat.name} 
				>{cat.icon}</NavLink>
			)}
			<CartWidget />
		</div>
	</nav>
}