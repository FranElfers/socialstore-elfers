import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCategories, { getCategory } from "../../services/getData";
import ItemList from "../ItemList";
import './ItemListContainer.css'

export default function ItemListContainer() {
	const [ loading, setLoading ] = useState(false);
	const [ categories, setCategories ] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		setLoading(true);
		if (name) {
			// Renderizar categoria por nombre
			getCategory(name)
				.then(res => {
					setCategories([res])
					setLoading(false);
				})
		} else {
			// Renderizar todas las categorias
			getCategories()
				.then(res => {
					setCategories(res)
					setLoading(false);
				});
		}
	}, [name])

	if (loading) return <h1 className="loading">🕛</h1>

	return categories.map(category => <>
		<p>{category.icon} {category.name}</p>
		<div key={category.name} className="item-list-container">
			<ItemList items={category.items} />
		</div>
	</>)
}