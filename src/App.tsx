import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoutes from './ProtectedRoutes';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import Navbar1 from './components/Navbar1';


function App() {
  return (
    <Router>
      <Navbar1/>
      {/* <Navbar/> */}
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />


        <Route element={<ProtectedRoutes/>}>
            <Route path='/' element={<Home/>} />
        </Route>/
    </Routes>
    <Footer/>
</Router>
  );
}

export default App;
