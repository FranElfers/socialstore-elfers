import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar() {
	return <nav>
		<a className="brand">SocialStore</a>
		<div>
			<CartWidget />
			<a title='Comidas' href="#">🍔</a>
			<a title='Bebidas' href="#">🍾</a>
			<a title='Ropa' href="#">👔</a>
			<a title='Bicicletas' href="#">🚲</a>
			<a title='Musica' href="#">🎸</a>
		</div>
	</nav>
}