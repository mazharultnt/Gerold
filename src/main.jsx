import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import RootLayout from './RootLayout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootLayout>
      <Home />
    </RootLayout>
  </StrictMode>
);