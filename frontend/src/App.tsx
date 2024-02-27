/** @format */

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";

import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Container from "react-bootstrap/Container";
import {  Row } from "react-bootstrap";
import EmailContact from "./pages/EmailContact";
import TestAxios from "./pages/TestAxios";
import { useEffect } from "react";

// axios.defaults.withCredentials = true;

function App() {
	useEffect(() => {
	
	
		const fetchData = async () => {
			const options = {
			  method: 'GET',
			//   url: 'https://jsonplaceholder.typicode.com/users',
			//   url: 'http://localhost:5005/api/questions',
			//   url:'https://api.publicapis.org/entries',
			  url:'http://localhost:5000/auth/test',
			  headers: {
				'Accept': 'application/json',
			  },
			};
	  
			try {
			  const response = await axios.request(options);
			  console.log(response.status); // Log the HTTP status code
			  console.log(response.data);   // Log the response data
			} catch (error) {
			  console.error(error);
			}
		  };
	  
		  fetchData();
	  }, []);
	return (
		<>hello</>
		// <Router>
		// 	<Navbar />
		// 	<Container
		// 		fluid
		// 		className='min-vh-100 d-flex  flex-column justify-content-between'>
		// 		<Row>
		// 			<Routes>
		// 				<Route path='/test' element={<TestAxios />} />
		// 				<Route path='/login' element={<LoginPage />} />
		// 				<Route path='/register' element={<RegisterPage />} />
		// 				<Route path='/email' element={<EmailContact />} />
		// 				<Route element={<ProtectedRoutes />}>
		// 					<Route path='/' element={<Home />} />
		// 					<Route path='/profile' element={<Profile />} />
		// 				</Route>
						
		// 			</Routes>
		// 		</Row>
		// 		<Row fluid>
		// 			<Footer />
		// 		</Row>
		// 	</Container>
		// </Router>
	);
}

export default App;
