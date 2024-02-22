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
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

axios.defaults.withCredentials = true;

function App() {
	return (
		<Router>
			<Navbar1 />
			{/* <Container fluid className="min-vh-100 d-flex  flex-column justify-content-between"> */}
			{/* <Container> */}
				{/* <Row> */}
					<Routes>
						{/* <Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} /> */}
						<Route element={<ProtectedRoutes />}>
							<Route path='/' element={<Home />} />
							<Route path='/profile' element={<Profile />} />
						</Route>
						/
					</Routes>
				{/* </Row> */}
				{/* <Row fluid> */}
					{/* <Footer /> */}
				{/* </Row> */}
			{/* </Container> */}
		</Router>
	);
}

export default App;
