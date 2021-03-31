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

	const categoriesList = categories.map(category => 
	<div key={category.name} className="category flx-clmn-ctr">
		<p>{category.icon} {category.name}</p>
		<div className="item-list-container">
			<ItemList items={category.items} />
		</div>
	</div>)

	return <div className="categories">{categoriesList}</div>
}