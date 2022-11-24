import { useState } from 'react';
import { postStudents } from '../request-functions';
import './Input.css';

export default function Input() {
  const [name, setName] = useState('');
  const onAdd = event => {
    event.preventDefault();
    postStudents(name);
    setName('');
  };
  function activationInput() {
    var el = document.getElementById('input-person');
    var buttonPost = document.getElementById('button-post-user');
    buttonPost.style.visibility = 'visible';
    el.focus();
  }
  return (
    <form className="form-input" onSubmit={onAdd}>
      <button
        className="button-add-user"
        onClick={activationInput}
        type="button"
      ></button>
      <input
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
