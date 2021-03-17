import { useEffect, useState } from "react";
import ItemList from "../ItemList";

const svg = 'https://www.svgrepo.com/show/115503/burger.svg';

const items = [
	{ id:1, title:'Hamburguesa', price:280.00, stock:1, pictureUrl:svg},
	{ id:2, title:'Hamburguesa doble', price:300.00, stock:19, pictureUrl:svg},
	{ id:3, title:'Hamburguesa doble con cheddar', price:340.00, stock:4, pictureUrl:svg},
	{ id:4, title:'Hamburguesa doble con cheddar y bacon', price:360.00, stock:9, pictureUrl:svg}
]

const task = new Promise((res, rej) => {
	setTimeout(() => res(items), 2000)
});

export default function ItemListContainer({greeting}) {
	const [ itemlist, setItemlist ] = useState([]);

	useEffect(()=>{
		task.then(res => setItemlist(res), err => setItemlist(err));
		console.log(itemlist);
	}, [itemlist])

	return <div className="item-list-container">
		<ItemList items={itemlist} />
	</div>
}
