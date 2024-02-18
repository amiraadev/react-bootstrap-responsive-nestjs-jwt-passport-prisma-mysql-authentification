/** @format */

import React from "react";

const Navbar = () => {
	return (
		<>
			{/* <nav className='d-flex justify-content-between navbar navbar-expand-lg navbar-dark bg-success'> */}
            <nav className='d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light'>

				<div className='p-2'>
                    <img src=''/>
                </div>
				<div className='p-2'>
					<button type='button' className='btn btn-outline-success'>
						sign up
					</button>
					<button type='button' className='m-1 btn btn btn-success'>
						login
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
