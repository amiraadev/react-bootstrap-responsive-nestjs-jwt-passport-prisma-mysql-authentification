/** @format */

import { useCallback, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import useThemeStore from "../stores/themeStore";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "../components/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RegisterPage() {
	const { isDarkMode } = useThemeStore();
	const navigate = useNavigate();

	const Toggle = useCallback(() => {
		navigate("/login");
	}, []);

	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required("Required field"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Required field"),
			password: Yup.string()
				.min(6, "Password must be at least 6 characters")
				.required("Required field"),
			confirmPassword: Yup.string()
				.label("confirm password")
				.required()
				.oneOf([Yup.ref("password")], "Passwords must match"),
		}),
		onSubmit: async (values) => {
			const {username, email, password } = values;
			try {
				const response = await axios.post(
					"http://localhost:5000/auth/register",
					{ username,email, password }
				);
				return response.data;
			} catch (error) {
				console.log(error);
			}
		},
	});
	return (
		<Container className='my-3'>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Header
							className={`${isDarkMode && "dark-header-style"} text-center`}>
							<h4>Register</h4>
						</Card.Header>
						<Card.Body className={`${isDarkMode ? "bg-dark dark-modal" : "bg-light"} `}>
							<Card.Title className='text-center'>
								<h1>Welcome </h1>
							</Card.Title>
							<Card.Text  className={`${isDarkMode ? "bg-dark dark-modal text-center" : "text-muted bg-light text-center"} `} >
								Create an account!
							</Card.Text>
							<Form className='px-5' onSubmit={formik.handleSubmit}>
								<fieldset>
									<Form.Group className='mt-3'>
										<Form.Control
											size='lg'
											placeholder='Username'
											name='username'
											required
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
									</Form.Group>
									{formik.touched.username && formik.errors.username ? (
										<div className='text-danger px-2'>
											{formik.errors.username}
										</div>
									) : null}
									<Form.Group className='mt-3'>
										<Form.Control
											size='lg'
											placeholder='Email'
											type='email'
											name='email'
											required
											onChange={formik.handleChange}
										/>
									</Form.Group>
									{formik.touched.email && formik.errors.email ? (
										<div className='text-danger px-2'>
											{formik.errors.email}
										</div>
									) : null}
									<Form.Group className='mt-3'>
										<Form.Control
											size='lg'
											type='password'
											name='password'
											placeholder='Password'
											required
											onChange={formik.handleChange}
										/>
									</Form.Group>
									{formik.touched.password && formik.errors.password ? (
										<div className='text-danger px-2'>
											{formik.errors.password}
										</div>
									) : null}
									<Form.Group className='mt-3 mb-3'>
										<Form.Control
											size='lg'
											type='password'
											name='confirmPassword'
											placeholder='Confirm Password'
											required
											onChange={formik.handleChange}
											value={formik.values.confirmPassword}
										/>
									</Form.Group>
									{formik.touched.confirmPassword &&
									formik.errors.confirmPassword ? (
										<div className='text-danger px-2'>
											{formik.errors.confirmPassword}
										</div>
									) : null}

									<Button type='submit' label='submit' onClick={() => {}} />
								</fieldset>
							</Form>
						</Card.Body>
						<Card.Footer className={`${isDarkMode ? "dark-header-style" : "text-muted"} text-center `}>
							<div className='m-3 d-flex justify-content-center align-items-center '>
								<div>Already have an account? </div>
								<div
									onClick={Toggle}
									className='fw-light pointer-on-hover p-1 div-on-hover'>
									Login
								</div>
							</div>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default RegisterPage;
