import './NavBar.css';

export default function NavBar() {
	return <nav>
		<p className="brand">SocialStore</p>
		<div>
			<p title='Comidas' onClick={()=>alert('Comidas')}>🍔</p>
			<p title='Bebidas' onClick={()=>alert('Bebidas')}>🍾</p>
			<p title='Ropa' onClick={()=>alert('Ropa')}>👔</p>
			<p title='Bicicletas' onClick={()=>alert('Bicicletas')}>🚲</p>
			<p title='Musica' onClick={()=>alert('Musica')}>🎸</p>
		</div>
	</nav>
}