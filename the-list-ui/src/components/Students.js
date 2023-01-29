import { useStudents } from '../apiHooks';
import './Students.css';
import deleteIcon from './images/delete.svg';
import { useDeleteStudent } from '../apiHooks';

export default function Students() {
  const { data: students, error: studentsLoadingError } = useStudents();
  const { mutate: deleteStudent, isLoading: isDeletingStudent } =
    useDeleteStudent();

  const divStudents = [];

  if (studentsLoadingError) {
    return <p>{studentsLoadingError.toString()}</p>;
  } else if (students) {
    for (let i = 0; i < students.length; i++) {
      divStudents.push(
        <div className="one-student" key={students[i]._id}>
          <div className="number">{i + 1}</div>
          <div className="name-one-student">{students[i].name}</div>
          <button
            disabled={isDeletingStudent}
            className="delete-icon"
            onClick={() => deleteStudent(students[i]._id)}
          >
            <img src={deleteIcon} alt="delete icon" />
          </button>
        </div>
      );
    }
    return <div className="Students">{divStudents}</div>;
  }
}
