import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import getCategories from '../../services/getData';
import CartWidget from '../CartWidget';
import './NavBar.css';

export default function NavBar() {
	const [ categories, setCategories ] = useState([])
	useEffect(() => {
		getCategories().then(res => setCategories(res))
	},[categories])

	return <nav>
		<Link className="brand" to="/">SocialStore</Link>
		<div>
			<CartWidget />
			{categories.map(cat => <NavLink 
					key={cat.name}
					activeClassName="current-nav" 
					title={cat.name} 
					to={"/category/" + cat.name} 
				>{cat.icon}</NavLink>
			)}
			<NavLink title='Bicicletas' to="/bicicletas" >🚲</NavLink>
			<NavLink title='Musica' to="/musica" >🎸</NavLink>
		</div>
	</nav>
}