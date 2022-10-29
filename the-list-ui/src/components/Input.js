import { useState } from 'react';
import { postStudents } from '../request-functions';

export default function Input() {
  const [name, setName] = useState('');
  const onAdd = event => {
    event.preventDefault();
    postStudents(name);
    setName('');
  };
  return (
    <form onSubmit={onAdd}>
      <input
        placeholder="Введите имя студента"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
