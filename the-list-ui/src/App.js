import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Input from './components/Input';
import Students from './components/Students';
import { deleteStudents } from './api.js';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Students />
        <Input />
        <form method="DELETE" >
        <button type="submit" name="delete_stud" onClick={() => deleteStudents("63c3d6708825941442769959")}>Тыкалка тест для удаления</button>
        </form>
      </div>
    </QueryClientProvider>
  );
}

export default App;
