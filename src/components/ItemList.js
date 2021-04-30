import React from "react";
import { Link } from "react-router-dom";
import { getProductsOfCategory } from "../services/getData";
import Item from "./Item";

export default function ItemList({categoryId, categoryName, render}) {
	const [ items, setItems ] = React.useState([])
	const [ virtualItems, setVirtualItems ] = React.useState([])
	
	
	React.useEffect(() => {
		getProductsOfCategory(categoryId)
		.then(res => {
			!!res[0].id ? setItems(res) : new Error('Error')
		})
		.catch(res => {console.error(res)})
	},[categoryId])

	
	React.useEffect(() => {
		// Si 'render' es un numero, solo renderiza los primeros <render> productos de la lista
		setVirtualItems(render === true ? items : items.slice(0,render))
	}, [render,items])
	
	
	return <>
		{virtualItems.map(item => <Item key={item.id} {...item} />)}
		{virtualItems.length !== items.length && <Link to={"/category/" + categoryName} >Ver mas...</Link>}
	</>
}