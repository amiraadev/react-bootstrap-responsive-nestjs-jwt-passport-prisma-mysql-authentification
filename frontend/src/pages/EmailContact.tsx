/** @format */

import React, { useRef ,useCallback} from "react";
import emailjs from "@emailjs/browser";

import { useNavigate } from "react-router-dom";

import useThemeStore from "../stores/themeStore";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "../components/Button";


function EmailContact() {

	const navigate = useNavigate();
	const { isDarkMode } = useThemeStore();


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
								<h1>Send us a message</h1>
							</Card.Title>
							<Card.Text
								className={`${
									isDarkMode
										? "bg-dark dark-modal text-center"
										: "text-muted bg-light text-center"
								} `}>
								We'd love to hear from you!
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
									<Button type='submit' label='submit' onClick={() => {}} />
								</fieldset>
							</Form>
						</Card.Body>
                        <Card.Footer
							className={`${
								isDarkMode ? "dark-header-style" : "text-muted"
							} text-center `}>
							<div className='m-3 d-flex justify-content-center align-items-center '>
								<div>Help us improve by leaving your feedback </div>
							</div>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default EmailContact;
