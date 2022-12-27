import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Input from './components/Input';
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
  );
}

export default App;
