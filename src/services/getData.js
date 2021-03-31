const svg = 'https://www.svgrepo.com/show/115503/burger.svg';

const categories = [
	{
		name: 'comidas',
		icon: '🍔',
		items: [
			{ id:1, title:'Hamburguesa', description: 'hamburguesa simple', price:280.00, stock:1, pictureUrl:svg},
			{ id:2, title:'Hamburguesa doble', description: 'hamburguesa compleja', price:300.00, stock:19, pictureUrl:svg},
			{ id:3, title:'Hamburguesa doble con cheddar', description: 'hamburguesa atrevida', price:340.00, stock:4, pictureUrl:svg},
			{ id:4, title:'Hamburguesa doble con cheddar y bacon', description: 'hamburguesa irrespetuosa', price:360.00, stock:9, pictureUrl:svg}
		]
	},
	{
		name: 'bebidas',
		icon: '🍾',
		items: [
			{ id: 5, title:'Coca-Cola 1 litro', description: 'La famosa coca cola', price: 100.00, stock:2, pictureUrl:'https://www.svgrepo.com/show/251524/coke.svg'},
			{ id: 6, title:'Manaos 1 litro', description: 'El conveniente manaos', price: 80.00, stock:2, pictureUrl:'https://www.svgrepo.com/show/251524/coke.svg'},
			{ id: 7, title:'Baggio 1 litro', description: 'Naranjas?', price: 80.00, stock:2, pictureUrl:'https://www.svgrepo.com/show/251524/coke.svg'}
		]
	},
	{
		name: 'ropa',
		icon: '👔',
		items: [
			{ id: 8, title:'Supreme Velour L/S Polo', description: 'Supreme Velour L/S Polo is a cotton blend velour longsleeve shirt with self collar and button placket. Top stitch details on the front panel', price: 50000.00, stock:2, pictureUrl:'https://www.svgrepo.com/show/95402/clothes.svg'},
		]
	},
	{
		name: 'relojes',
		icon: '⌚',
		items: [
			{ id: 9, title:'Frédérique Constant', description: 'Vintage Healey Automatic limited-edition 40mm', price: 475000.00, stock:1, pictureUrl:'https://www.svgrepo.com/show/50150/watch.svg'},
			{ id: 10, title:'Skmei 1270 S Shock', description: 'Reloj deportivo personalizado LED, aspecto increíble, apto para muchas ocasiones, diseño unisex.', price: 2000.00, stock:1, pictureUrl:'https://www.svgrepo.com/show/50150/watch.svg'},
		]
	}
]

const allProducts = () => categories.reduce((acc,cat) => [...acc, ...cat.items], []);

function getDelayed(items) {
	return new Promise((res, rej) => {
		setTimeout(() => res(items), 1000)
	})
}

// Retorna lista de 'products'
export function getAllProducts() {
	return getDelayed(allProducts())
	.then(res => {
		if (res) return res
		throw new Error('No items results')
	})
}

// Retorna objeto 'category'
export function getCategory(name) {
	return getDelayed(categories.find(e => e.name === name))
	.then(res => {
		if (res) return res
		throw new Error(`No '${name}' category.`)
	})
}

// Retorna objeto 'product'
export function getProductById(id) {
	return getDelayed(allProducts().find(e => e.id === id))
	.then(res => {
		if (res) return res
		throw new Error(`No '${id}' item results.`)
	})
}

// Retorna lista de objetos 'categories'
export default function getCategories() {
	return getDelayed(categories)
}