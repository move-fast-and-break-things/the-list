import logo from './logo.svg';
import './App.css';
import {getStudents, postStudents} from "./request-functions.js";

function App() {
  const backEndURL = "http://localhost:4000";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button 
// @ts-ignore
        onClick={postStudents(backEndURL, "Button")}> Тыкалка </button>
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
