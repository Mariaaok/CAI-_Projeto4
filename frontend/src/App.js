import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Account from './components/Account';
import Message from './components/Message';
import Navbar from './components/Navbar';
import CadastrarUsuario from './components/CadastrarUsuario';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<CadastrarUsuario />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/message" element={<Message />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
    </div>
  ); 
}

export default App;
