import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { RegisterProvider } from './context/RegisterContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
