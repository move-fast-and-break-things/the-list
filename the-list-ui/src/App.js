import logo from './logo.svg';
import './App.css';
import { postStudents } from './request-functions.js';

function App() {
  const backEndURL = process.env.REACT_APP_BACKEND_URL;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => postStudents(backEndURL, 'kto')}>Тыкалка</button>
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
