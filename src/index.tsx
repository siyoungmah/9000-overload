import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


const rootElement = document.getElementById('root');
if(!rootElement) throw new Error('Fail to get root element');
const root = createRoot(rootElement);

root.render(
  <App />
);