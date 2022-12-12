import { useEffect, useState } from 'react';
import './Input.css';
import { useAddStudent } from '../apiHooks';

export default function Input() {
  const [name, setName] = useState('');
  const {
    mutate: addStudent,
    isLoading: isAddingStudent,
    isSuccess
  } = useAddStudent();
  const onAdd = event => {
    event.preventDefault();
    addStudent(name);
  };
  useEffect(() => {
    if (isSuccess) {
      setName('');
    }
  }, [isSuccess]);

  function activationInput() {
    let inputPerson = document.getElementById('input-person');
    let buttonPost = document.getElementById('button-post-user');
    inputPerson.focus();
    buttonPost.style.visibility = 'visible';
  }

  return (
    <form className="form-input" onSubmit={onAdd}>
      <button
        className="button-add-user"
        onClick={activationInput}
        type="button"
      ></button>
      <input
        onClick={activationInput}
        className="input-person"
        id="input-person"
        value={name}
        onChange={event => setName(event.target.value)}
        disabled={isAddingStudent}
      />
      <button
        className="button-post-user"
        type="submit"
        id="button-post-user"
        disabled={isAddingStudent}
      ></button>
    </form>
  );
}
