import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/getData";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer() {
	const [ item, setItem ] = useState({});
	const { id } = useParams();
	
	useEffect(() => {
		console.log({id});
		getProductById(id).then(res => setItem(res))
	},[])

	return <ItemDetail {...item} />
}