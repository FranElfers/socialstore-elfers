import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../services/getData";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer() {
	const [ item, setItem ] = useState({});
	const { id } = useParams();
	
	useEffect(() => {
		getProductById(id)
			.then(res => {
				setItem({id: res.id, ...res.data()})
			})
			.catch(err => {
				setItem(undefined)
			})
	},[id])

	if (item === undefined) return <p>Este producto no existe. <Link to="/"><u>Volver</u></Link> </p>

	return <ItemDetail {...item} />
}