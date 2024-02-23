/** @format */

import "./footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import useThemeStore from "../../stores/themeStore";

const Footer = () => {
	const { isDarkMode } = useThemeStore();
	return (
		<>
			<Container fluid className={`${isDarkMode ? "bg-dark" : "bg-light "}`}>
				<Row className='py-3'>
					<Col sm className='text-center ft-1'>
						<h3>
							<span className='title-span'>amira</span>dev
						</h3>
						<div className='px-3'>
							<span className='text-justify '>
								Amiradev Technologies, a new startup specializing in web
								development, where we transform ideas into digital success
								stories
							</span>
						</div>
					</Col>
					<Col sm className='d-flex justify-content-center align-items-center'>
						<div>
							<Link
								to='https://github.com/amiraadev'
								target='_blank'
								rel='noopener noreferrer'>
								<MdEmail className='react-icon-class' />
							</Link>
							<Link
								to='https://github.com/amiraadev'
								target='_blank'
								rel='noopener noreferrer'>
								<FaGithub className='react-icon-class' />
							</Link>
							<Link
								to='https://www.linkedin.com/in/amiraa-mohammed/'
								target='_blank'
								rel='noopener noreferrer'>
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
				<Row className='Last-footer'>
					<p>Designed By Amira</p>
				</Row>
			</Container>
		</>
	);
};

export default Footer;
