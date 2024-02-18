import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoutes from './ProtectedRoutes';
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />


        <Route element={<ProtectedRoutes/>}>
            <Route path='/' element={<Home/>} />
        </Route>/
    </Routes>
</Router>
  );
}

export default App;
