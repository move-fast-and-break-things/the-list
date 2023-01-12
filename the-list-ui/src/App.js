import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Input from './components/Input';
<<<<<<< HEAD
import Students from './components/Students';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Students />
        <Input />
      </div>
    </QueryClientProvider>
=======
import { deleteStudents } from './request-functions.js';

function App() {
  return (
    <div className="App">
      <Input />
      <button onClick={() => deleteStudents("635ed6938590391013135b66")}>Тыкалка тест для удаления</button>
    </div>
>>>>>>> 39d83be (Начал работать над функцией удаления студентов для фронтенда)
  );
}

export default App;
