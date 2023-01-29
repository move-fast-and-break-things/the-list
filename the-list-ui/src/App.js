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
        <button onClick={() => deleteStudents('63c3e076b1808d3a617391be')}>
          Тыкалка тест для удаления
        </button>
      </div>
    </QueryClientProvider>
  );
}

export default App;
