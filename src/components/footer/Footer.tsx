/** @format */

import React from "react";
import "./footer.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = () => {
	return (
		<>
			<Navbar bg='light ' variant={"light"} expand='lg'>
				<Container className='justify-content-between'>
					<div className='col-md-6 col-lg-5 col-12 ft-1'>
						<h3>
							<span>round</span>desk
						</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
							ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.
						</p>
						<div className='footer-icons'>
							<i className='fa-brands fa-facebook'></i>
							<i className='fa-brands fa-twitter'></i>
							<i className='fa-brands fa-instagram'></i>
							<i className='fa-brands fa-linkedin-in'></i>
						</div>
					</div>
					<div className='col-md-6 col-lg-3 col-12 ft-2'>
						<h5>Quick Links</h5>
						<ul>
							<li className='nav-item'>
								<a className='' href='/'>
									Services
								</a>
							</li>
							<li className='nav-item'>
								<a className='' href='/'>
									Portfolio
								</a>
							</li>
							<li className='nav-item'>
								<a className='' href='/'>
									Contact Us
								</a>
							</li>
							<li className='nav-item'>
								<a className='' href='/'>
									Services
								</a>
							</li>
							<li className='nav-item'>
								<a className='' href='/'>
									Portfolio
								</a>
							</li>
						</ul>
					</div>
					<div className='col-md-6 col-lg-4 col-12 ft-3'>
						<h5>Quick Links</h5>
						<p>
							<i className='fa-solid fa-phone-volume'></i> +92 3121324083
						</p>
						<p>
							<i className='fa-solid fa-envelope'></i> allaguiamira@gmail.com
						</p>
						<p>
							<i className='fa-solid fa-paper-plane'></i> Allagui, Tunisia.
						</p>
					</div>
				</Container>
				<div className='Footer'>
					<div className='container'>
						<div className='row'></div>
					</div>
				</div>
			</Navbar>
			<div className='Last-footer'>
				<p>Designed By Amira</p>
			</div>
		</>
	);
};

export default Footer;
