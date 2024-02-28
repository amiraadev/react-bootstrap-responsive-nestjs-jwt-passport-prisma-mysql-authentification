/** @format */

// /** @format */

// import React, { useRef, useCallback, useState } from "react";
// import emailjs from "@emailjs/browser";

// import { useNavigate } from "react-router-dom";

// import useThemeStore from "../stores/themeStore";

// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import Button from "../components/Button";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useResetPasswordStore } from "../stores/resetPasswordStore";
// const ResetPassword = () => {
// 	const [email, setEmail] = useState("");
// 	const navigate = useNavigate();
// 	const { isDarkMode } = useThemeStore();
// 	const { setOTP } = useResetPasswordStore();

// 	const form = useRef<HTMLFormElement>(null);

// 	const sendRecoveryEmail = () => {
//         console.log("hhh");

// 		// const OTP = Math.floor(Math.random() * 9000 + 1000);
// 		// setOTP(OTP.toString());
// 		// console.log(OTP);
// 		// axios
// 		// 	.post("http://localhost:5000/auth/sendRecoveryEmail", {
// 		// 		OTP,
// 		// 		email,
// 		// 	})
// 		// 	.then(() => {
// 		// 		navigate("/otp");
// 		// 	})
// 		// 	.catch((error: any) => {
// 		// 		console.error("Error sending email:", error.text);
// 		// 		// toast.error(
// 		// 		// 	"That address is either invalid, not a verified primary email or is not associated with a personal user account."
// 		// 		// );
// 		// 		// navigate("/otp");
// 		// 	});
// 	};
// 	return (
// 		<Container className={` my-3 `}>
// 			<Row>
// 				<Col md={{ span: 6, offset: 3 }}>
// 					<Card className={`${isDarkMode ? "bg-dark" : "bg-light"} `}>
// 						<Card.Body
// 							className={`${isDarkMode ? "bg-dark dark-modal" : "bg-light"} `}>
// 							<Card.Title className='text-center'>
// 								<h1>Reset your password</h1>
// 							</Card.Title>
// 							<Card.Text
// 								className={`${
// 									isDarkMode
// 										? "bg-dark dark-modal text-center"
// 										: "text-muted bg-light text-center"
// 								} `}>
// 								Enter your user account's email address and we will send you a
// 								one time password.
// 							</Card.Text>
// 							<Form className='px-5' ref={form} onSubmit={sendRecoveryEmail}>
// 								<fieldset>
// 									<Form.Group className='my-3'>
// 										<Form.Control
// 											size='lg'
// 											type='email'
// 											className='form-control'
// 											placeholder='Enter email'
// 											name='email'
// 											value={email} // Use local state variable
// 											onChange={(e) => setEmail(e.target.value)}
// 											required
// 										/>
// 									</Form.Group>
// 									<Button
// 										type='submit'
// 										label='send password reset email'
// 										onClick={() => {}}
// 									/>
// 								</fieldset>
// 							</Form>
// 						</Card.Body>
// 					</Card>
// 				</Col>
// 			</Row>
// 		</Container>
// 	);
// };

// export default ResetPassword;

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
import { useResetPasswordStore } from "../stores/resetPasswordStore";

function LoginPage() {
	const form = useRef<HTMLFormElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null); // Ref for email input
	const passwordInputRef = useRef<HTMLInputElement>(null);

	const navigate = useNavigate();

	const { setIsLoggedIn } = useAuthStore();
	const { isDarkMode } = useThemeStore();
	const confetti = useConfettiStore();
    const { setOTP } = useResetPasswordStore();
	const Toggle = useCallback(() => {
		navigate("/register");
	}, []);

	const resetPassword = useCallback(() => {
		navigate("/resetPassword");
	}, []);



    // 		// const OTP = Math.floor(Math.random() * 9000 + 1000);
    // 		// setOTP(OTP.toString());
    // 		// console.log(OTP);
    // 		// axios
    // 		// 	.post("http://localhost:5000/auth/sendRecoveryEmail", {
    // 		// 		OTP,
    // 		// 		email,
    // 		// 	})
    // 		// 	.then(() => {
    // 		// 		navigate("/otp");
    // 		// 	})
    // 		// 	.catch((error: any) => {
    // 		// 		console.error("Error sending email:", error.text);
    // 		// 		// toast.error(
    // 		// 		// 	"That address is either invalid, not a verified primary email or is not associated with a personal user account."
    // 		// 		// );
    // 		// 		// navigate("/otp");
    // 		// 	});


	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Required field"),
		}),
		onSubmit: async (values) => {
			const { email } = values;
            const OTP = Math.floor(Math.random() * 9000 + 1000);
            setOTP(OTP.toString());
            console.log(OTP);
			try {
				const response = await axios.post("http://localhost:5000/auth/sendRecoveryEmail", {
					email,
					OTP,
				});
              
				toast.success("an OTP was sent successfully to the provided email address");
				navigate("/otp");
				confetti.onOpen();

				return response.data;
			} catch (error) {
				toast.error("That address is either invalid, not a verified primary email or is not associated with a personal user account.");
			}
		},
	});

	return (
		<Container className={` my-3 `}>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className={`${isDarkMode ? "bg-dark" : "bg-light"} `}>
						<Card.Body
							className={`${isDarkMode ? "bg-dark dark-modal" : "bg-light"} `}>
							<Card.Title className='text-center'>
								<h1>Reset your password</h1>
							</Card.Title>
							<Card.Text
								className={`${
									isDarkMode
										? "bg-dark dark-modal text-center"
										: "text-muted bg-light text-center"
								} `}>
								Enter your user account's email address and we will send you a
								one time password.
							</Card.Text>
							<Form ref={form} className='px-5' onSubmit={formik.handleSubmit}>
								<fieldset>
									<Form.Group className='my-3'>
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

									<Button type='submit' label='submit' onClick={() => {}} />
								</fieldset>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default LoginPage;
