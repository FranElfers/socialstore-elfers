import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail";

const getItems = () => {
	return new Promise((res,rej) => {
		setTimeout(() => res({ id:1, title:'Hamburguesa', price:280.00, stock:1, pictureUrl:'svg'}), 2000);
	})
}

export default function ItemDetailContainer() {
	const [ item, setItem ] = useState({});

	useEffect(() => {
		getItems().then(res => setItem(res))
	},[])

	return <ItemDetail item={item} />
}