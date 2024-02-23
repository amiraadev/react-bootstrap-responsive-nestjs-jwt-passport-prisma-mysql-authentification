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

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import useSendEmail from "../hooks/useSendEmail ";

interface emailjsProperties {
	username: string;
	email: string;
	message: string;
}
function EmailContact() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const navigate = useNavigate();
	const { saveUserStatus } = userStatusService();
	const { isDarkMode } = useThemeStore();

	const Toggle = useCallback(() => {
		navigate("/register");
	}, []);

	const formik = useFormik({
		initialValues: {
			user_name: "",
			email: "",
			message: "",
		},
		validationSchema: Yup.object({
			user_name: Yup.string().required("Required field"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Required field"),
			message: Yup.string().required("Required field"),
		}),
		onSubmit: async (values) => {
			console.log("hello");
			// await sendEmail(values)
			// const {  user_name, email, message } = values;
			// try {
			// 	const response = await axios.post(
			// 		"http://localhost:5000/auth/signin",
			// 		{  user_name, email, message }
			// 		//withCredentials:true :==> to allow this request to get credentials from that API Endpoint.
			// 		// { withCredentials: true }
			// 	);
			// 	console.log("===>", response);
			// 	console.log("i===>", response.data.id);
			// 	saveUserStatus(true);
			// 	setOk(true);
			// 	navigate("/profile");
			// 	return response.data;
			// } catch (error) {
			// 	console.log(error);
			// }
		},
	});

	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const YOUR_SERVICE_ID = "service_ow2tgpc";
		const YOUR_TEMPLATE_ID = "template_7cnckpx";
		const YOUR_PUBLIC_KEY = "0RyfDRxda55zTmthL";

		if (form.current) {
			emailjs
				.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
					publicKey: YOUR_PUBLIC_KEY,
				})
				.then(() => {
					console.log("Email sent successfully!");
                    form.current!.reset();
				})
				.catch((error: any) => {
					console.error("Error sending email:", error.text);
				});
		}
	};

	return (
		<Container className={` my-3 `}>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className={`${isDarkMode ? "bg-dark" : "bg-light"} `}>
						<Card.Header
							className={`${isDarkMode && "dark-header-style"} text-center`}>
							<h4>Contact</h4>
						</Card.Header>
						<Card.Body
							className={`${isDarkMode ? "bg-dark dark-modal" : "bg-light"} `}>
							<Card.Title className='text-center'>
								<h1>Send email</h1>
							</Card.Title>
							<Card.Text
								className={`${
									isDarkMode
										? "bg-dark dark-modal text-center"
										: "text-muted bg-light text-center"
								} `}>
								Login to your account
							</Card.Text>
							<Form className='px-5' ref={form} onSubmit={sendEmail}>
								<fieldset>
									<Form.Group className='mt-3 mb-4'>
										<Form.Control
											size='lg'
											className='form-control'
											placeholder='username'
											name='user_name'
											required
										/>
									</Form.Group>
									<Form.Group className='mt-3'>
										<Form.Control
											size='lg'
											type='email'
											className='form-control'
											placeholder='Enter email'
											name='email'
											required
										/>
									</Form.Group>
									{formik.touched.email && formik.errors.email ? (
										<div className='text-danger px-2'>
											{formik.errors.email}
										</div>
									) : null}
									<Form.Group className='mt-3 mb-3'>
										<Form.Control
											as='textarea'
											size='lg'
											className='form-control'
											placeholder='Enter message'
											name='message'
											required
											rows={3}
										/>
									</Form.Group>
									{formik.touched.message && formik.errors.message ? (
										<div className='text-danger px-2'>
											{formik.errors.message}
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
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default EmailContact;
