import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/root.css';
import './styles/flex.css';
import './styles/containers.css';
import './styles/overrides.css';
import reportWebVitals from './reportWebVitals';
import Router from './pages/router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
