import { useEffect, useState } from 'react';
import { getStudents } from '../request-functions';
import './Students.css';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [studentsLoadingError, setStudentsLoadingError] = useState();

  const divStudents = [];

  useEffect(() => {
    getStudents().then(setStudents).catch(setStudentsLoadingError);
  }, []);

  if (studentsLoadingError) {
    return <p>{studentsLoadingError}</p>;
  } else {
    for (let i = 0; i < students.length; i++) {
      divStudents.push(
        <div className="one-student" key={students[i]._id}>
          <div className="number">{i + 1}</div>
          <div className="name-one-student">{students[i].name}</div>
        </div>
      );
    }
    return <div className="Students">{divStudents}</div>;
  }
}
