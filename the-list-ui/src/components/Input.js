import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postStudents } from '../request-functions';
import './Input.css';
import Students from './Students';

export default function Input() {
  const [name, setName] = useState('');
  const onAdd = event => {
    event.preventDefault();
    postStudents(name);
    setName('');
  };
  function activationInput() {
    let inputPerson = document.getElementById('input-person');
    let buttonPost = document.getElementById('button-post-user');
    inputPerson.focus();
    buttonPost.style.visibility = 'visible';
  }
  const queryClient = useQueryClient();
  const mutation = useMutation(postStudents, {
    onSuccess: () => {
      // Инвалидация и обновление
      queryClient.invalidateQueries('students');
    },
  });

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
      />
      <button
        className="button-post-user"
        type="submit"
        id="button-post-user"
      ></button>
    </form>
  );
}
