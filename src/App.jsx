import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import './assets/css/index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AddVacancy } from './pages/AddVacancy/AddVacancy';

const queryClient = new QueryClient();

function App() {
  const token = true;

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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vacancy" element={<AddVacancy />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
