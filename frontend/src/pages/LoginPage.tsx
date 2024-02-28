/** @format */

import { useCallback, useRef, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import useThemeStore from "../stores/themeStore";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "../components/Button";
import { useAuthStore } from "../stores/authStore";

import Cookies from "js-cookie";
import { useConfettiStore } from "../hooks/useConfettiStore";
import toast from "react-hot-toast";

function LoginPage() {
	const form = useRef<HTMLFormElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null); // Ref for email input
	const passwordInputRef = useRef<HTMLInputElement>(null);

	const navigate = useNavigate();

	const { setIsLoggedIn } = useAuthStore();
	const { isDarkMode } = useThemeStore();
	const confetti = useConfettiStore();

	const Toggle = useCallback(() => {
		navigate("/register");
	}, []);

	const setOTP = useCallback(() => {
		const OTP = Math.floor(Math.random() * 9000 + 1000);
		console.log(OTP);
		axios.post("http://localhost:5000/auth/sendRecoveryEmail", {
			OTP,
		}).then(()=>{
			navigate("/resetPassword");
		});

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
			const { email, password } = values;
			try {
				const response = await axios.post("http://localhost:5000/auth/login", {
					email,
					password,
				});
				setIsLoggedIn(true);
				// document.cookie = `jwt=${response.data}; path=/;`;

				Cookies.set("jwt", response.data, { expires: 1 });
				toast.success("Logged in successfully");
				navigate("/profile");
				confetti.onOpen();

				return response.data;
			} catch (error) {
				console.log(error);
				toast.error("Invalid Credentials");

				// setError("Invalid Credentials");
				// emailInputRef.current!.focus();
				// passwordInputRef.current!.focus();
				form.current!.reset();
			}
		},
	});

	return (
		<Container className={` my-3 `}>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className={`${isDarkMode ? "bg-dark" : "bg-light"} `}>
						<Card.Header
							className={`${isDarkMode && "dark-header-style"} text-center`}>
							<h4>Login</h4>
						</Card.Header>
						<Card.Body
							className={`${isDarkMode ? "bg-dark dark-modal" : "bg-light"} `}>
							<Card.Title className='text-center'>
								<h1>Welcome back</h1>
							</Card.Title>
							<Card.Text
								className={`${
									isDarkMode
										? "bg-dark dark-modal text-center"
										: "text-muted bg-light text-center"
								} `}>
								Login to your account
							</Card.Text>
							<Form ref={form} className='px-5' onSubmit={formik.handleSubmit}>
								<fieldset>
									<Form.Group className='mt-3'>
										<Form.Control
											ref={emailInputRef}
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
											ref={passwordInputRef}
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
						<Card.Footer
							className={`${
								isDarkMode ? "dark-header-style" : "text-muted"
							} text-center `}>
							<div className='m-3 d-flex justify-content-center align-items-center '>
								<div>First Time using roundstack? </div>
								<div
									onClick={Toggle}
									className='fw-light pointer-on-hover p-1 div-on-hover'>
									Create an account
								</div>
							</div>
							<div className='m-3 d-flex justify-content-center align-items-center '>
								<div
									onClick={setOTP}
									className='fw-light pointer-on-hover p-1 div-on-hover'>
									Forget Password
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
