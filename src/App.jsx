import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AddVacancy } from './pages/AddVacancy/AddVacancy';
import { useContext } from 'react';
import { RegisterContext } from './context/RegisterContext';
import './assets/css/index.css';

const queryClient = new QueryClient();

function App() {
  const { token } = useContext(RegisterContext);

  if (!token) {
    return (
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </QueryClientProvider>
    );
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vacancy" element={<AddVacancy />} />
          </Routes>
        </main>
      </QueryClientProvider>
    </>
  );
}

export default App;
