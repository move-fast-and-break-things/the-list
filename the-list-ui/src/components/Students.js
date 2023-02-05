import {
  useStudents,
  useUpdateStudent,
  useDeleteStudent,
  useStudentsAttendance,
  useAddStudentAttendance,
  useRemoveStudentAttendance
} from '../apiHooks';
import './Students.css';
import deleteIcon from './images/delete.svg';
import editIcon from './images/edit.svg';
import ok from './images/ok.svg';
import cancel from './images/cancel.svg';
import { useState } from 'react';
import mark from './images/checkmark.svg';

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

export default function Students() {
  const [editStudentID, setEditStudentId] = useState('');
  const [editStudentName, setEditStudentName] = useState('');
  const { data: students, error: studentsLoadingError } = useStudents();
  const { mutate: deleteStudent, isLoading: isDeletingStudent } =
    useDeleteStudent();
  const { mutate: updateStudent, isLoading: isUpdatingStudent } =
    useUpdateStudent();

  const date = formatDate(new Date());
  const { data: attendance } = useStudentsAttendance(date);
  const { mutate: addStudentAttendance, isLoading: isAddingStudentAttendance } =
    useAddStudentAttendance();
  const {
    mutate: removeStudentAttendance,
    isLoading: isRemoveStudentAttendance
  } = useRemoveStudentAttendance();

  const divStudents = [];

  if (studentsLoadingError) {
    return <p>{studentsLoadingError.toString()}</p>;
  } else if (students) {
    for (let i = 0; i < students.length; i++) {
      divStudents.push(
        <div
          className="one-student"
          key={students[i]._id}
          onClick={() => addStudentAttendance({ id: students[i]._id, date })}
        >
          <div className="number">{i + 1}</div>
          {editStudentID === students[i]._id ? (
            <>
              <input
                disabled={isUpdatingStudent}
                value={editStudentName}
                onChange={event => setEditStudentName(event.target.value)}
              />
              <button
                disabled={isUpdatingStudent}
                className="icon"
                onClick={() => {
                  updateStudent(
                    { id: editStudentID, name: editStudentName.trim() },
                    {
                      onSuccess: () => {
                        setEditStudentId('');
                        setEditStudentName('');
                      }
                    }
                  );
                }}
              >
                <img src={ok} alt="ok icon" />
              </button>
              <button
                className="icon"
                onClick={() => {
                  setEditStudentId('');
                  setEditStudentName('');
                }}
              >
                <img src={cancel} alt="cancel icon" />
              </button>
            </>
          ) : (
            <>
              <div className="name-one-student">{students[i].name}</div>
              <button
                className="icon"
                onClick={() => {
                  setEditStudentId(students[i]._id);
                  setEditStudentName(students[i].name);
                }}
              >
                <img src={editIcon} alt="edit icon" />
              </button>
              <button
                disabled={isDeletingStudent}
                className="icon"
                onClick={() => deleteStudent(students[i]._id)}
              >
                <img src={deleteIcon} alt="delete icon" />
              </button>{' '}
            </>
          )}
          {attendance?.students.includes(students[i]._id) && <img src={mark} />}
        </div>
      );
    }
    return <div className="Students">{divStudents}</div>;
  }
}
