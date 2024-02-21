/** @format */


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";

import Footer from "./components/footer/Footer";
import Navbar1 from "./components/Navbar1";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";


axios.defaults.withCredentials = true;

function App() {
	return (
		<Router>
			<Navbar1 />
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route element={<ProtectedRoutes />}>
					<Route path='/' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
				</Route>
				/
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
