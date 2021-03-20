import React from 'react'
import './App.css';
import NavBar from './components/NavBar/';
import ItemListContainer from './components/ItemListContainer/';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer />
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;

// consigna
// Crea los componentes item.js e itemlist.js para mostrar algunosproductos en tu itemlistcontainer.js
// Los items deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segs para emular retrasos de red

// Aspectos a incluir en el entregable
// Item.js: es un componente destinado a mostrar informacion breve del producto que el user clikceara luego para acceder a los detalles (los desarrollaremos mas adelante) 
// ItemList.js: es un agrupador de un set de componentes imet.js (deberias incluirlo dentro de itemlistcontainer del desafio 3)
// implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincronico a un mock estatico de datos que devuelva un conjungo de item {id, title, description, price, pictureUrl} en dos segundos, para emular retrasos en la red
// Ejemplo inicial
