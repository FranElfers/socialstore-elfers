import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="title">
          <h1>SocialStore app</h1>
          <p>Hecho con React por Francisco Elfers</p>
        </div>
      </header>
    </div>
  );
}

export default App;
