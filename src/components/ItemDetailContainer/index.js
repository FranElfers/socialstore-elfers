import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/getData";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer() {
	const [ item, setItem ] = useState({});
	const { id } = useParams();
	
	useEffect(() => {
		getProductById(id).then(res => {
			setItem({id: res.id, ...res.data()})
		})

	},[id])

	return <ItemDetail {...item} />
}