import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import './assets/css/index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';

function App() {
  const token = false;
  if (!token) {
    return (
      <>
        <Routes>
          <Route index element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
