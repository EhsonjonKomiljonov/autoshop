import { createContext, useEffect, useState } from 'react';

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [ token, setToken ] = useState(localStorage.getItem("token") || '');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <RegisterContext.Provider value={{ token, setToken }}>
      {children}
    </RegisterContext.Provider>
  );
};
