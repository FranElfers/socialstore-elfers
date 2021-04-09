import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import { Provider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <NavBar />
          <header className="App-header">
            <Switch>
                <Route path="/item/:id" >
                  <ItemDetailContainer />
                </Route>
                <Route path="/category/:name" >
                  <ItemListContainer />
                </Route>
                <Route path="/cart" >
                  <Cart />
                </Route>
                <Route exact path="/">
                  <ItemListContainer />
                </Route>
            </Switch>
          </header>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;