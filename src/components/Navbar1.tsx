/** @format */

import useThemeStore from "../stores/themeStore";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "./Button";

import DarkMode from "./DarkMode/DarkMode";

function CollapsibleExample() {
	const navigate = useNavigate();
	const { isDarkMode } = useThemeStore();
	return (
		<Navbar
			bg={`${isDarkMode ? "dark" : "light"}`}
			variant={`${isDarkMode ? "dark" : "light"}`}
			className={`justify-content-between `}
			collapseOnSelect
			expand='lg'>
			<Container>
				<Navbar.Brand href='#home'>
					<img
						src='./roundesk-logo.png'
						alt='alt'
						className='logo-img'
						onClick={() => {
							navigate("/");
						}}
					/>
				</Navbar.Brand>
				<DarkMode />

				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'></Nav>
					<Nav>
						<Nav.Link eventKey={2} href='#memes'></Nav.Link>
						<Nav.Link href='#deets'>
							<Button
								outline={true}
								type='submit'
								label='submit'
								onClick={() => {}}
							/>
						</Nav.Link>
						<Nav.Link eventKey={2} href='#memes'>
							<Button type='submit' label='submit' onClick={() => {}} />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleExample;
