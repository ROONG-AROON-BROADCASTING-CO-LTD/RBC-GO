import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RBCProvider } from '@stackbuild/ui';
import './styles/globals.css';
import App from './App';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RBCProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RBCProvider>
  </StrictMode>,
);
