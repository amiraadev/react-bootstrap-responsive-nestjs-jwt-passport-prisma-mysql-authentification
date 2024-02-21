/** @format */

import { useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "../components/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RegisterPage() {
	const navigate = useNavigate();
	const Toggle = useCallback(() => {
		navigate("/login");
	}, []);
	return (
		<Container className='my-3'>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className='text-center'>
						<Card.Header>
							<h4>Register</h4>
						</Card.Header>
						<Card.Body>
							<Card.Title>
								<h1>Welcome </h1>
							</Card.Title>
							<Card.Text className='text-muted'>Create an account!</Card.Text>
							<Form className='px-5'>
								<fieldset>
									<Form.Group className='mb-3'>
										<Form.Control size='lg' placeholder='Username' />
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Control size='lg' placeholder='Email' />
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Control size='lg' placeholder='Password' />
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Control size='lg' placeholder='Confirm Password' />
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Select size='lg'>
											<option>Disabled select</option>
										</Form.Select>
									</Form.Group>
									<Button label='submit' onClick={() => {}} />
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
