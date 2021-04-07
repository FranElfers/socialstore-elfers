import { Link } from "react-router-dom";

export default function Item({ id, title, price, stock, pictureUrl }) {
	return <div className="item">
		<Link to={"/item/" + id} >
			<img src={pictureUrl} alt={title} />
			<p>{title} </p>
			<span>$ {price}</span>
		</Link>
	</div>
}