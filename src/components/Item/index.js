import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

export default function Item({ id, title, price, stock, pictureUrl }) {
	return <div className="item">
		<Link to={"/item/" + id} >
			<img src={pictureUrl} alt={title} />
			<p>{title} <span>$ {price}</span></p>
		</Link>
		<ItemCount stock={stock} initial={0} onAdd={alert} />
	</div>
}