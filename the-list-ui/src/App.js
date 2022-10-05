import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { getStudents } from './request-functions.js';

function App() {
  const backEndURL = process.env.REACT_APP_BACKEND_URL;
=======
import {getStudents} from "./request-functions.js";

function App() {
  const backEndURL = "http://localhost:4000";
>>>>>>> ad97b5d (Добавил не все файлы в предыдущем коммите)
  const students = getStudents(backEndURL);
  console.log(students);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          
        </p>
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
