import React from "react";
import { getProductsOfCategory } from "../../services/getData";
import Item from "../Item";

export default function ItemList({categoryId}) {
	const [ items, setItems ] = React.useState([])

	
	React.useEffect(() => {
		getProductsOfCategory(categoryId)
		.then(res => {
			!!res[0].id ? setItems(res) : new Error('Error')
		})
		.catch(res => {console.error(res)})

	},[categoryId])

	return items.map(item => <Item key={item.id} {...item} />)
}