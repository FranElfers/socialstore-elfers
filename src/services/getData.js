import { getFirestore } from '../firebase'

const firestore = getFirestore()
const collectCategories = firestore.collection('categories')
const collectProducts = firestore.collection('products')
const collectSingleProduct = id => firestore.collection('products').doc(id).get()

// Retorna objeto 'category'
export function getCategory(name) {
	return collectCategories.where('name','==',name).get()
	.then(res => {
		if (res) return res
		throw new Error(`No '${name}' category.`)
	})
}

// Retorna objeto 'product'
export function getProductById(id) {
	return collectSingleProduct(id).then(res => {
		if (res) return res
		throw new Error(`No '${id}' item results.`)
	})
}

const listCallback = res =>
	res.docs.map(doc => {
		return {id:doc.id, ...doc.data()}
	})

// Retorna productos de cierta categoria
export function getProductsOfCategory(id) {
	return collectProducts.where('categoryId','==',id).get().then(listCallback)
}

// Retorna lista de objetos 'categories'
export default function getCategories() {
	return collectCategories.get().then(listCallback)
}

