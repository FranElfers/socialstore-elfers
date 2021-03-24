import './ItemDetail.css'

export default function ItemDetail({ title, description, price, pictureUrl }) {
	return <div className="item-detail">
		<img src={pictureUrl} alt={title}/>
		<h3>{title || '🕛'}</h3>
		<p style={{color:'#f90'}} >ARS {price || '$$$'}</p>
		<p>{description}</p>
	</div>
}