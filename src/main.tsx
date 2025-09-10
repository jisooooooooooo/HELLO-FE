import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { OverlayProvider } from 'overlay-kit';

import './styles/global.css.ts';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OverlayProvider>
      <App />
    </OverlayProvider>
  </StrictMode>,
);
