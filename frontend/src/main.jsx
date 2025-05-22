import './App.css';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// 
const QueryClientInstance = new QueryClient();
// 
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={QueryClientInstance}>
    <App />
  </QueryClientProvider>
);