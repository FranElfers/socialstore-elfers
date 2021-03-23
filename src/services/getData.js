const svg = 'https://www.svgrepo.com/show/115503/burger.svg';

const categories = [
	{
		name: 'Hamburguesas',
		items: [
			{ id:1, title:'Hamburguesa', price:280.00, stock:1, pictureUrl:svg},
			{ id:2, title:'Hamburguesa doble', price:300.00, stock:19, pictureUrl:svg},
			{ id:3, title:'Hamburguesa doble con cheddar', price:340.00, stock:4, pictureUrl:svg},
			{ id:4, title:'Hamburguesa doble con cheddar y bacon', price:360.00, stock:9, pictureUrl:svg}
		]
	},
	{
		name: 'Bebidas',
		items: [
			{ id: 5, title:'Coca-Cola', price: 100.00, stock:2, pictureUrl:svg}
		]
	}
]

const allProducts = () => categories.reduce((acc,cat) => [...acc, ...cat.items], []);

function getDelayed(items) {
	return new Promise((res, rej) => {
		setTimeout(() => res(items), 1000)
	})
}

export function getAllProducts() {
	return getDelayed(allProducts())
	.then(res => {
		if (res) return res
		throw new Error('No items results')
	})
}

export function getProductsOfCategory(name) {
	console.log(name);
	return getDelayed(categories.find(e => e.name == name).items)
	.then(res => {
		if (res) return res
		throw new Error('No items results')
	})
}

export function getProductById(id) {
	return getDelayed(allProducts().find(e => e.id == id))
	.then(res => {
		if (res) return res
		throw new Error('No item results by id=' + id)
	})
}

export default function getCategories() {
	return getDelayed(categories)
}