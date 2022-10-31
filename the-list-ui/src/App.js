import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import { getStudents } from './request-functions';

function App() {
  const [students, setStudents] = useState([{"_id": "", "name":""}]);
  const [studentsLoadingError, setStudentsLoadingError] = useState();

  const divStudents = [];
  if (!studentsLoadingError) {
    for (let i = 0; i < students?.length; i++) {
      divStudents.push(<div key={students[i]._id}>{students[i].name}</div>);
    }
  }

  console.log(students);

  useEffect(() => {
    getStudents().then(setStudents).catch(setStudentsLoadingError);
  }, []);
  return (
    <div className="App">
      {studentsLoadingError || divStudents}
      <Input />
    </div>
  );
}

export default App;
