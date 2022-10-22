import {useState} from "react"
import IconAdd from './img/add.png'
import Ok from './img/ok.png'
import Cancel from './img/cancel.png'
import Ok_be from './img/ok_be.png'
import Calendar from './img/calendar.png'
import './App.css';

const App = () => {
  const [user, setUser] = useState(""); {/*для хранения значения одного юзера*/}
  const [users, setUsers] = useState([]); {/* для хранения всех юзеров*/}
  
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

  const clickAdd = () => {
    {users.map((user,index) => (
      <div className="user">
        <li key={index}> {user} 
          <hr className="Line"/>
          <p></p>
        </li>
      </div>
    ))}

  }

  const StudentList = () => {

  }

  return (
    <div className="App">
      <head className="App-header">
        <title>The List</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <header>
        <div className="Сalendar">
          <div className="day">22</div>
          <div className="month">Nov</div>
          <div className="year">2022</div>
        </div>
        </header>
        <section className="Add-user">  {/*добавление пользователя*/}
          <input className="Img-add" type="image" onClick={StudentList} alt="Add student" src={IconAdd}></input>
          <hr className="Line"/>
        </section>
        {/*
        <section className="input-wrapper">  
          <input 
            type="text" 
            id="name" 
            name="student" 
            required 
            minlength="4" 
            size="17"
            onChange={(e) => {
              setUser(e.target.value); {/*Записывает прошедшее сейчас изменение
            }}
          />
          <button className="Icon-add" onClick={addUser}>Add</button>    {/*Добавляем нового пользователя в массив
        </section>*/}

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
                  <hr className="Line"/>
                  <p></p>
                </li>
              </div>
            ))}
        </ol>
      </body>
    </div>
  );

};

export default App;
