import logo from './logo.svg';
import './App.css';
//import { getStudents } from './request-functions.js';
//import {useState} from "react"

function App() {

  
  // const backEndURL = process.env.REACT_APP_BACKEND_URL;
  // const [students, setStudents] = useState ([]);
  // let stud = getStudents(backEndURL);
  // console.log(stud);
  
  //setStudents(stud);
  const students = [
    {
       id: '1',
       name: 'Остапцов Артем'
    },
    {
       id: '2',
       name: 'Белый Данил'
    },
    {
       id: '3',
       name: 'Шарапатов Никита'
    },
 ];


const rendStud = [];
  for (let i = 0; i < students.length; i++)
  {
    rendStud.push(<div>
      <li className ='user' key={students[i].id} >{students[i].name}
      {/* <hr className ='Line'> </hr> */}
      <p></p>
      </li>
      </div>)
  }
  console.log(students);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{rendStud}</div>
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
