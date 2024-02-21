/** @format */

import React, { useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "../components/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LoginPage() {
	const navigate = useNavigate();
	const Toggle = useCallback(() => {
		navigate("/register");
	}, []);
	return (
		<Container className='my-3 '>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className='text-center'>
						<Card.Header>
							<h4>Login</h4>
						</Card.Header>
						<Card.Body>
							<Card.Title>
								<h1>Welcome back</h1>
							</Card.Title>
							<Card.Text className='text-muted'>
								Login to your account
							</Card.Text>
							<Form className='px-5'>
								<fieldset>
									<Form.Group className='mb-3'>
										<Form.Control
											size='lg'
											id='disabledTextInput'
											placeholder='Disabled input'
										/>
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Select size='lg' id='disabledSelect'>
											<option>Disabled select</option>
										</Form.Select>
									</Form.Group>
									<Button label='submit' onClick={() => {}} />
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
