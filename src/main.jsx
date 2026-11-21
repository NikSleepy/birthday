import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/pacifico/latin-400.css';
import '@fontsource/dancing-script/latin-600.css';
import '@fontsource/dancing-script/latin-700.css';
import '@fontsource/nunito/latin-400.css';
import '@fontsource/nunito/latin-600.css';
import '@fontsource/nunito/latin-700.css';
import '@fontsource/nunito/latin-800.css';
import './styles/global.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
