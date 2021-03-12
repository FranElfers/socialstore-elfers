import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting="SocialStore app" />
      	<ItemCount stock={7} initial={1} onAdd={alert} />
      </header>
    </div>
  );
}

export default App;
