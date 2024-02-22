/** @format */

import Container from "react-bootstrap/Container";
import Button from "./Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";
import DarkMode from "./DarkMode/DarkMode";

import useThemeStore from "../stores/themeStore";
import { Col, Row } from "react-bootstrap";
const Navbar1 = () => {
	const { isDarkMode } = useThemeStore();
	return (
		<Navbar className='bg-body-tertiary justify-content-between'>
			<Form>
			<img src='./roundesk-logo.png' className='logo-img' />
			</Form>
			<Form>
				<Row>
					<DarkMode />
					<Col>
						<Button type='submit' label='submit' onClick={() => {}} />
					</Col>
					<Col>
						<Button
							outline={true}
							type='submit'
							label='submit'
							onClick={() => {}}
						/>
					</Col>
				</Row>
			</Form>
		</Navbar>
		// <Navbar
		// 	bg={`${isDarkMode ? "dark" : "light"}`}
		// 	variant={`${isDarkMode ? "dark" : "light"}`}
		// 	className="justify-content-between"
		// 	>
		// 	<Container fluid style={{backgroundColor:"red"}}>
		// 		<Row fluid style={{backgroundColor:"yellow"}}>
		// 			<Col >her</Col>
		// 			<Col >vvv</Col>
		// 		</Row>
		// 	</Container>
		// 	<Container className='justify-content-between'>
		// 		<div >
		// 			<img src='./roundesk-logo.png' className='logo-img' />
		// 		</div>
		// 		<div >
		// 		<DarkMode />

		// 		</div>

		// 	</Container>
		// </Navbar>
	);
};

export default Navbar1;
