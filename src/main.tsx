import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('td-root') as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <h1>Todo</h1>
  </StrictMode>,
);
