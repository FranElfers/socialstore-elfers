export default function ItemListContainer({greeting}) {
	return <div className="title">
		<h1>{greeting}</h1>
		<p>Hecho con React por Francisco Elfers</p>
	</div>
}

// Tiene que tener una prop 'greeting' y debe mostrar el mensaje con esa prop