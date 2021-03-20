export default function ItemDetail({ title, price, pictureUrl }) {
	return <div className="item-detail">
		<p>Detalle</p>
		<img src={pictureUrl} alt={title}/>
		<h3>{title}</h3>
		<p style={{color:'#f90'}} >ARS {price}</p>
	</div>
}