import ItemCount from "../ItemCount";

export default function Item({ title, price, stock, pictureUrl }) {
	return <div className="item">
		<div>
			<img src={pictureUrl} alt={title} />
			<p>{title} <span>$ {price}</span></p>
		</div>
		<ItemCount stock={stock} initial={0} onAdd={alert} />
	</div>
}