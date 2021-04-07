import React from 'react'

const MyContext = React.createContext()


export const Provider = ({children}) => {
	const [ products, setProducts ] = React.useState([])
	// [{item, quantity},{item, quantity},{item, quantity}]

	const isInCart = id => products.find(e => e.item.id === id) !== undefined;
	
	const clear = () => { setProducts([]) };
	
	const cartSize = () => products.reduce((acc,cur) => acc + cur.quantity, 0)
	
	const removeItem = id => {
		setProducts(products.filter(e => e.item.id !== id))
	}
	
	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			// busca el producto en la lista y solo reemplaza el valor 'quantity'
			setProducts(products.map(i => {
				if (i.item.id === item.id) i.quantity = i.quantity + quantity
				return i
			}))
		} else {
			// agrega el producto nuevo
			setProducts([...products, {item, quantity}])
		}
	}

	React.useEffect(() => {
		console.log('cart',products)
	},[products])

	return <MyContext.Provider value={{
		products, 
		addItem, 
		isInCart, 
		removeItem,
		clear,
		cartSize
	}}>
		{children}
	</MyContext.Provider>
}

export default MyContext