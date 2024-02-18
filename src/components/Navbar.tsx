/** @format */

import React from "react";

const Navbar = () => {
	return (
		<>
			{/* <nav classNameNameName='d-flex justify-content-between navbar navbar-expand-lg navbar-dark bg-success'> */}
			{/* <nav classNameName='d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light'>

				<div className='p-2'>
                    <img src='./roundesk-logo.png' className='logo-img'/>
                </div>
				<div className='p-2'>
					<button type='button' className='btn btn-outline-success'>
						sign up
					</button>
					<button type='button' className='m-1 btn btn btn-success'>
						login
					</button>
				</div>
			</nav> */}


			{/* <nav className='navbar bg-body-tertiary fixed-top'> */}
			<nav className='navbar bg-body-tertiary fixed-top'>
				<div className='container-fluid'>
				<img src='./roundesk-logo.png' className='logo-img'/>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='offcanvas'
						data-bs-target='#offcanvasNavbar'
						aria-controls='offcanvasNavbar'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='offcanvas offcanvas-end'
						id='offcanvasNavbar'
						aria-labelledby='offcanvasNavbarLabel'>
						<div className='offcanvas-header'>
							<h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
								Offcanvas
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='offcanvas'
								aria-label='Close'></button>
						</div>
						<div className='offcanvas-body'>
							<ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
								<li className='nav-item'>
									<a className='nav-link active' aria-current='page' href='#'>
										Home
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Link
									</a>
								</li>
							</ul>
							
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
