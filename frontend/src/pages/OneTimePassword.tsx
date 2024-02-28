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
import { useResetPasswordStore } from "../stores/resetPasswordStore";
import axios from "axios";
import toast from "react-hot-toast";
const OneTimePassword = () => {
    const navigate = useNavigate();
	const { isDarkMode } = useThemeStore();
    const { setOTP } = useResetPasswordStore();

    const verifyOTP = useCallback((values:any) => {
        const {email} = values;
		const OTP = Math.floor(Math.random() * 9000 + 1000);
        setOTP(OTP.toString());
		console.log(OTP);
		axios.post("http://localhost:5000/auth/verifyOTP", {
			OTP,
            email
		}).then(()=>{
			navigate("/resetPassword");
		}).catch((error: any) => {
            console.error("Error sending email:", error.text);
            toast.error("That address is either invalid, not a verified primary email or is not associated with a personal user account.")
        });;

	}, []);

	const form = useRef<HTMLFormElement>(null);
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
								<h1>Email Verification</h1>
							</Card.Title>
							<Card.Text
								className={`${
									isDarkMode
										? "bg-dark dark-modal text-center"
										: "text-muted bg-light text-center"
								} `}>
								We have sent a code to your email {}
							</Card.Text>
							<Form className='px-5' ref={form} onSubmit={verifyOTP}>
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
  )
}

export default OneTimePassword