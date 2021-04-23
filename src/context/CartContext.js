import React from 'react'

const MyContext = React.createContext()


export const Provider = ({children}) => {
	const [ products, setProducts ] = React.useState([])
	// [{item, quantity},{item, quantity},{item, quantity}]

	const getProduct = id => products.find(e => e.item.id === id)

	const isInCart = id => getProduct(id) !== undefined;
	
	const clear = () => { setProducts([]) };
	
	const cartSize = products.length > 0 ? 
		products.reduce((acc,cur) => acc + cur.quantity, 0) : 0;
	
	const removeProducts = (id,ammount) => {
		// si la cantidad de el producto es mayor a 'ammount' (generalmente 1),
		// le resta 'ammount' a esa cantidad
		if (getProduct(id).quantity > ammount) {
			setProducts(products.map(e => {
				if (e.item.id === id) e.quantity -= ammount 
				return e
			}))
		} 
		
		// si la cantidad del producto no llega a 'ammount', lo elimna entero
		else {
			removeItem(id)
		}
	}

	const removeItem = id => {
		setProducts(products.filter(e => e.item.id !== id))
	}
	
	const addItem = (item, quantity) => {
		// busca el producto en la lista y solo reemplaza el valor 'quantity'
		if (isInCart(item.id)) {
			setProducts(products.map(i => {
				// Agrega solo si hay stock disponible
				const stockControl = i.item.stock - i.quantity - quantity >= 0
				if (i.item.id === item.id && stockControl) i.quantity += quantity
				return i
			}))
		} 
		
		// agrega el producto nuevo
		else {
			setProducts([...products, {item, quantity}])
		}
	}

	return <MyContext.Provider value={{
		products, 
		addItem, 
		isInCart,
		getProduct, 
		removeItem,
		clear,
		cartSize,
		removeProducts
	}}>
		{children}
	</MyContext.Provider>
}

export default MyContext