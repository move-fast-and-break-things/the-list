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
  return (
    <form className="form-input" onSubmit={onAdd}>
      <input
        className="input-person"
        placeholder="Введите имя студента"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button className="button-add-user" type="submit"></button>
    </form>
  );
}
