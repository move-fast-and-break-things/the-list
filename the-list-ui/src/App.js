import {useState} from "react"
import IconAdd from './img/add.png'
import Ok from './img/ok.png'
import Cancel from './img/cancel.png'
import Ok_be from './img/ok_be.png'
import './App.css';

const App = () => {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]); {/* если добавлять юзеров в масив*/}
  
  const addUser = () => {         {/* добавление юзеров в масив*/}
    if (user!== "") {
      setUsers([...users, user]);
      setUser("");
    }
  };

  const deleteUser = (text) => {
    const newUsers = users.filter((user) => {
      return (user !== text);
    });
    setUsers(newUsers);
  };

  return (
    <div className="App">
      <head className="App-header">
        <title>The List</title>
      </head>
      <body>
        <header>
          <div className="Сalendar"></div>
        </header>
        <section className="input-wrapper">  {/* оболочка ввода*/}
          <input 
            type="text" 
            id="name" 
            name="student" 
            required 
            minlength="4" 
            size="17"
            onChange={(e) => {
              setUser(e.target.value); {/*Записывает прошедшее сейчас изменение*/}
            }}
          />
          <button className="Icon-add" onClick={addUser}>Add</button>      {/*Добавляем пользователя в массив*/}
          {/*<img className="Icon-add" src={IconAdd} alt="Icon_add"/>*/}
          {/*<hr className="Line" align="left"/>*/} {/*Подчеркивающая линия*/}
        </section>

        <ol className="user-list">           {/*список всех пользователей*/}
            {users.map((user,index) => (
              <div className="user">
                <li key={index}> {user} 
                  <button 
                    className="delete-button"
                    onClick={() => {
                      deleteUser(user);
                    }}
                    >
                      Delete
                    </button>
                  </li>
                <hr width="100%" align="left"/>
              </div>
            ))}
        </ol>


        {/*<div className="Ok-cancel">
          <div id="oval"></div>
          <img className="Icon-ok" src={Ok} alt="Icon_ok"/>
          <img className="Icon-cancel" src={Cancel} alt="Icon_cancel"/>
          <div id="circle"></div>
        </div>*/}


        {/*<img className="Icon-ok-be" src={Ok_be} alt="Icon_ok_be"/> */}  {/*галочка отметки пользователя*/}
      </body>
    </div>
  );

};

export default App;
