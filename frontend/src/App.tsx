/** @format */

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";

import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import EmailContact from "./pages/EmailContact";

import ToasterProvider from "./providers/ToasterProvider";
import { ConfettiProvider } from "./providers/ConfettiProvider";
import OneTimePassword from "./pages/OneTimePassword";
import ResetPassword from "./pages/ResetPassword";

// axios.defaults.withCredentials = true;

function App() {
	return (
		// <>hello</>
		<Router>
			<Navbar />
			<ConfettiProvider />
			<ToasterProvider />
			<Container
				fluid
				className='min-vh-100 d-flex  flex-column justify-content-between'>
				<Row>
					<Routes>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/email' element={<EmailContact />} />
						<Route path='/otp' element={<OneTimePassword />} />
						<Route path='/resetPassword' element={<ResetPassword />} />
						<Route element={<ProtectedRoutes />}>
							<Route path='/' element={<Home />} />
							<Route path='/profile' element={<Profile />} />
						</Route>
					</Routes>
				</Row>
				<Row fluid>
					<Footer />
				</Row>
			</Container>
		</Router>
	);
}

export default App;
