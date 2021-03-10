import { useState } from 'react'

export default function ItemCount({stock,initial,onAdd}) {
	const [ counter, setCounter ] = useState(initial);

	const contar = val => {
		if (stock > counter && val) {
			setCounter(counter + 1)
		} else if (counter > 0 && !val) {
			setCounter(counter - 1)
		}
	}

	return <div id="counter">
		<div>
			<button onClick={() => contar(false)}>-</button>
			<span>{counter}</span>
			<button onClick={() => contar(true)}>+</button>
		</div>
		<button onClick={() => onAdd(counter)}>Agregar</button>
	</div>
}