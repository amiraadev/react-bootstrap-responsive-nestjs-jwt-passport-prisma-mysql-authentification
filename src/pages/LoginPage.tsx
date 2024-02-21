/** @format */

import { useCallback, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import userStatusService from "../stores/userStatusStore";

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

	const Toggle = useCallback(() => {
		navigate("/register");
	}, []);

	const formik = useFormik({
		initialValues: {
			email: "",
			passWord: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Required field"),
			passWord: Yup.string()
				.min(6, "Password must be at least 6 characters")
				.required("Required field"),
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
		<Container className='my-3 '>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Header className='text-center'>
							<h4>Login</h4>
						</Card.Header>
						<Card.Body>
							<Card.Title className='text-center'>
								<h1>Welcome back</h1>
							</Card.Title>
							<Card.Text className='text-center text-muted'>
								Login to your account
							</Card.Text>
							<Form className='px-5'onSubmit={formik.handleSubmit}>
								<fieldset>
									<Form.Group className='mb-3'>
										<Form.Control
											size='lg'
											type='email'
											className='form-control'
											placeholder='Enter email'
											id='email'
											name='email'
											onChange={formik.handleChange}
											value={formik.values.email}
										/>
									</Form.Group>
									{formik.touched.email && formik.errors.email ? (
										<div className='text-danger'>{formik.errors.email}</div>
									) : null}
									<Form.Group className='mb-3'>
										<Form.Select size='lg' id='disabledSelect'>
											<option>Disabled select</option>
										</Form.Select>
									</Form.Group>
									<Button type="submit" label='submit' onClick={() => {}} />
								</fieldset>
							</Form>
						</Card.Body>
						<Card.Footer className='text-muted'>
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
