import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getCategories, { getProductsOfCategory } from "../../services/getData";
import ItemList from "../ItemList";
import './ItemListContainer.css'

export default function ItemListContainer() {
	const [ itemlist, setItemlist ] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		console.log(id);
		if (id) {
			getProductsOfCategory(id).then(res => setItemlist(res));
		} else {
			getCategories('Hamburguesas').then(res => setItemlist(res));
		}
	}, [id])

	return <div className="item-list-container">
		<ItemList items={itemlist} />
	</div>
}