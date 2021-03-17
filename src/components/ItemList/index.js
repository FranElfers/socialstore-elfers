import Item from "../Item";

export default function ItemList({items}) {
	console.log(items);
	return <div className="item-list">
		{items.map(item => <Item key={item.id} {...item} />)}
	</div>
}