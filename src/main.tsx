import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import { AppStateProvide } from './contexts/AppStateContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppStateProvide>
      <App />
    </AppStateProvide>
  </StrictMode>,
);
