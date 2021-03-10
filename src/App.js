import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting="SocialStore app" />
      </header>
    </div>
  );
}

export default App;
