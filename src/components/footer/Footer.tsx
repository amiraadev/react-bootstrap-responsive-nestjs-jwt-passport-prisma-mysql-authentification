/** @format */

import React from "react";
import "./footer.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import useThemeStore from "../../stores/themeStore";

const Footer = () => {
	const { isDarkMode } = useThemeStore();
	return (
		<>
			<Container fluid className={`${isDarkMode ? "bg-dark" : "bg-light "} footer-class`}   style={{backgroundColor:"yellow"}}>
				<Row className='py-3' >
					<Col sm className='text-center ft-1'>
						<h3>
							<span className='title-span'>amira</span>dev
						</h3>
						<div className='px-3'>
							<span className='text-justify '>
								Roundesk Technologies is a new start-up that targets SMEs, ETIs
								and Large Enterprises through an omnichannel and cross-channel
								Customer Relationship Management tool.
							</span>
						</div>
					</Col>
					<Col sm className='d-flex justify-content-center align-items-center'>
						<div>
							<Link to='/about'>
								<FaSquareFacebook className='react-icon-class' />
							</Link>
							<Link to='/about'>
								<FaGithub className='react-icon-class' />
							</Link>
							<Link to='/about'>
								<FaLinkedin className='react-icon-class' />
							</Link>
						</div>
					</Col>
					<Col sm className='text-center  ft-1'>
						<div className='d-flex flex-column align-items-center justify-content-center'>
							<h5>Contact</h5>
							<ul>
								<li className='nav-item'>+92 3121324083</li>
								<li className='nav-item'>amiradev@gmail.com</li>
								<li className='nav-item'>Tunis, Tunisia.</li>
							</ul>
						</div>
					</Col>
				</Row>
				<Row className='Last-footer' >
					<p>Designed By Amira</p>
				</Row>
			</Container>
		</>
	);
};

export default Footer;
