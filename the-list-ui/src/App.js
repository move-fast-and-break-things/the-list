import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Input from './components/Input';
import Students from './components/Students';

export const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Students />
        <Input />
      </QueryClientProvider>
    </div>
  );
}

export default App;
