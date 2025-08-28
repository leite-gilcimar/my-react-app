import logo from './logo.svg';
import './App.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-teal/theme.css";
import { Button } from 'primereact/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Agora sim <b>;)</b>
        </p>
        <Button label="Enviar" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
