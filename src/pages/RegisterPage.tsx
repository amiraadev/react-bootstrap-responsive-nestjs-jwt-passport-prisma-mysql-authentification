/** @format */

import { useCallback, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import userStatusService from "../stores/userStatusStore";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "../components/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RegisterPage() {
	const [ok, setOk] = useState(false);
	const navigate = useNavigate();
	const { saveUserStatus } = userStatusService();

	const Toggle = useCallback(() => {
		navigate("/login");
	}, []);

	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			passWord: "",
			confirmPassWord: "",
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.required("Required field"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Required field"),
			passWord: Yup.string()
				.min(6, "Password must be at least 6 characters")
				.required("Required field"),
			confirmPassWord: Yup.string()
				.label("confirm password")
				.required()
				.oneOf([Yup.ref("passWord")], "Passwords must match"),
		}),
		onSubmit: async (values) => {
			console.log("hello");

			const { email, passWord } = values;
			try {
				const response = await axios.post(
					"http://localhost:5000/auth/signin",
					{ email, passWord }
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
		<Container className='my-3'>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card >
						<Card.Header className='text-center'>
							<h4>Register</h4>
						</Card.Header>
						<Card.Body>
							<Card.Title className='text-center'>
								<h1>Welcome </h1>
							</Card.Title>
							<Card.Text className='text-muted text-center'>Create an account!</Card.Text>
							<Form className='px-5' onSubmit={formik.handleSubmit}>
								<fieldset>
									<Form.Group className='mt-3'>
										<Form.Control size='lg' placeholder='Username' required/>
									</Form.Group>
									{formik.touched.username && formik.errors.username ? (
										<div className='text-danger px-2'>
											{formik.errors.username}
										</div>
									) : null}
									<Form.Group className='mt-3'>
										<Form.Control size='lg' placeholder='Email' type='email' required/>
									</Form.Group>
									{formik.touched.email && formik.errors.email ? (
										<div className='text-danger px-2'>
											{formik.errors.email}
										</div>
									) : null}
									<Form.Group className='mt-3'>
										<Form.Control size='lg' placeholder='Password' required/>
									</Form.Group>
									{formik.touched.passWord && formik.errors.passWord ? (
										<div className='text-danger px-2'>
											{formik.errors.passWord}
										</div>
									) : null}
									<Form.Group className='mt-3'>
										<Form.Control size='lg' placeholder='Confirm Password' required/>
									</Form.Group>
									{formik.touched.confirmPassWord && formik.errors.confirmPassWord ? (
										<div className='text-danger px-2'>
											{formik.errors.confirmPassWord}
										</div>
									) : null}

									<Button type='submit' label='submit' onClick={() => {}} />
								</fieldset>
							</Form>
						</Card.Body>
						<Card.Footer className='text-muted'>
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
