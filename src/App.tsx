import React from "react";
import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import Navbar1 from "./components/Navbar1";
import Profil from "./pages/Profil";
import axios from "axios";
import PageContainer from "./components/PageContainer";

/* withCredentials:true :==> to allow this request to get credentials from that API Endpoint.
 Exp: (when we register a user==>getting back a cookie from backend url) ==>it will be saved in the 
 frontend to know this user is loggedIn */
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Navbar1 />
      {/* <Navbar/> */}
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={<PageContainer />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
        </Route>
        /
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
