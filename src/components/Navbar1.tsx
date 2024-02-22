/** @format */

// /** @format */

import Button from "./Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import DarkMode from "./DarkMode/DarkMode";

import useThemeStore from "../stores/themeStore";
import { useNavigate } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navbar1 = () => {
	const navigate = useNavigate();
	const { isDarkMode } = useThemeStore();
	return (
		<Navbar
			bg={`${isDarkMode ? "dark" : "light"}`}
			variant={`${isDarkMode ? "dark" : "light"}`}
			className={`justify-content-between `}
			collapseOnSelect
			expand='lg'>
			<Form>
				<img
					src='./roundesk-logo.png'
					alt='alt'
					className='logo-img'
					onClick={() => {
						navigate("/");
					}}
				/>
			</Form>
			<Form>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<div className='d-flex justify-content-center'>
						<div className='d-flex align-items-center dark-mode-class'>
							<DarkMode />
						</div>
						<Button
							outline={true}
							type='submit'
							label='submit'
							onClick={() => {}}
						/>{" "}
						<Button type='submit' label='submit' onClick={() => {}} />
					</div>
				</Navbar.Collapse>
			</Form>
		</Navbar>
	);
};

export default Navbar1;
