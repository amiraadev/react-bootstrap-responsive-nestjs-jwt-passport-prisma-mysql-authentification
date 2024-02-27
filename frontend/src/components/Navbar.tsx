/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, getCurrentUser } from "../../src/actions/getCurrentUser";
import useThemeStore from "../stores/themeStore";
import { userStatusStore } from "../stores/userStatusStore";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import Button from "./Button";

import DarkMode from "./DarkMode/DarkMode";
import { useAuthStore } from "../stores/authStore";

function CollapsibleExample() {
	const navigate = useNavigate();
	const { isDarkMode } = useThemeStore();
	const [displayedUser, setDisplayedUser] = useState<User | null>(null);
	const { setIsLoggedIn, setUser, setToken, token } = useAuthStore();

	const user = getCurrentUser(token);

	const handleLogout = () => {
		setIsLoggedIn(false);
		setUser(null);
		setToken(null);
	};
	useEffect(() => {
		setDisplayedUser(user);
	}, [token]);
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
						{displayedUser ? (
							<>
								<Nav.Link href='#profile'>{displayedUser.username}</Nav.Link>
								<Button
									type='submit'
									label='Logout'
									onClick={() => {
										handleLogout();
									}}
								/>
							</>
						) : (
							<>
								<Nav.Link href='#deets'>
									<Button
										outline={true}
										type='submit'
										label='Sign Up'
										onClick={() => {
											navigate("/register");
										}}
									/>
								</Nav.Link>
								<Nav.Link eventKey={2} href='#memes'>
									<Button
										type='submit'
										label='Sign In'
										onClick={() => {
											navigate("/login");
										}}
									/>
								</Nav.Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleExample;
