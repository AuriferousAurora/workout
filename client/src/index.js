import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ExerciseContextProvider } from './context/ExerciseContext';

ReactDOM.render(
  <React.StrictMode>
    <ExerciseContextProvider>
      <App />
    </ExerciseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);