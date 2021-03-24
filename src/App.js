import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <header className="App-header">
            <Switch>
              <Route path="/item/:id" >
                <ItemDetailContainer />
              </Route>
              <Route path="/category/:name" >
                <ItemListContainer />
              </Route>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route path="*">
                Comming soon
              </Route>
            </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;