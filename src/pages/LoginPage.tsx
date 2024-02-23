/** @format */

import { useCallback, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import userStatusService from "../stores/userStatusStore";
import useThemeStore from "../stores/themeStore";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "../components/Button";

function LoginPage() {
	const [ok, setOk] = useState(false);
	const navigate = useNavigate();
	const { saveUserStatus } = userStatusService();
	const { isDarkMode } = useThemeStore();

	const Toggle = useCallback(() => {
		navigate("/register");
	}, []);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Required field"),
			password: Yup.string()
				.min(6, "Password must be at least 6 characters")
				.required("Required field"),
		}),
		onSubmit: async (values) => {
			console.log("hello");

			const { email, password } = values;
			try {
				const response = await axios.post(
					"http://localhost:5000/auth/signin",
					{ email, password }
					//withCredentials:true :==> to allow this request to get credentials from that API Endpoint.
					// { withCredentials: true }
				);
				console.log("===>", response);
				console.log("i===>", response.data.id);
				saveUserStatus(true);
				setOk(true);
				navigate("/profile");
				return response.data;
			} catch (error) {
				console.log(error);
			}
		},
	});

	return (
		<Container className={` my-3 `}>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className={`${isDarkMode ? "bg-dark" : "bg-light"} `}>
						<Card.Header className={`${isDarkMode && "dark-header-style"} text-center`}>
							<h4>Login</h4>
						</Card.Header>
						<Card.Body className={`${isDarkMode ? "bg-dark dark-modal" : "bg-light"} `}>
							<Card.Title className='text-center'>
								<h1>Welcome back</h1>
							</Card.Title>
							<Card.Text className={`${isDarkMode ? "bg-dark dark-modal text-center" : "text-muted bg-light text-center"} `} >
								Login to your account
							</Card.Text>
							<Form className='px-5' onSubmit={formik.handleSubmit}>
								<fieldset>
									<Form.Group className='mt-3'>
										<Form.Control
											size='lg'
											type='email'
											className='form-control'
											placeholder='Enter email'
											id='email'
											name='email'
											onChange={formik.handleChange}
											value={formik.values.email}
											required
										/>
									</Form.Group>
									{formik.touched.email && formik.errors.email ? (
										<div className='text-danger px-2'>
											{formik.errors.email}
										</div>
									) : null}
									<Form.Group className='mt-3 mb-4'>
										<Form.Control
											size='lg'
											type='password'
											className='form-control'
											placeholder='Enter password'
											id='password'
											name='password'
											onChange={formik.handleChange}
											value={formik.values.password}
											required
										/>
									</Form.Group>
									{formik.touched.password && formik.errors.password ? (
										<div className='text-danger px-2'>
											{formik.errors.password}
										</div>
									) : null}
									<Button type='submit' label='submit' onClick={() => {}} />
								</fieldset>
							</Form>
						</Card.Body>
						<Card.Footer  className={`${isDarkMode && "dark-header-style"} text-center text-muted`}>
							<div className='m-3 d-flex justify-content-center align-items-center '>
								<div>First Time using roundstack? </div>
								<div
									onClick={Toggle}
									className='fw-light pointer-on-hover p-1 div-on-hover'>
									Create an account
								</div>
							</div>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default LoginPage;
