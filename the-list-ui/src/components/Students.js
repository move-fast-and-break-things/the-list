import { useEffect, useState } from 'react';
import { getStudents } from '../request-functions';

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
    for (let i = 0; i < students?.length; i++) {
      divStudents.push(<div key={students[i]._id}>{students[i].name}</div>);
    }

    return <div className="Students">{divStudents}</div>;
  }
}
