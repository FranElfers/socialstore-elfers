import { useState } from 'react'
import './ItemCount.css'

export default function ItemCount({ virtualStock, initial, onAdd}) {
	const [ counter, setCounter ] = useState(initial);

	const contar = val => {
		if ((virtualStock >= val) && (val >= 0)) {
			setCounter(val)
		}
	}

	return <div className="counter">
		<div>
			<button onClick={() => contar(counter - 1)}>-</button>
			<span>{counter}</span>
			<button onClick={() => contar(counter + 1)}>+</button>
		</div>
		<button onClick={() => onAdd(counter)}>Agregar</button>
	</div>
}