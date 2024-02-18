/** @format */

import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

	const Toggle = useCallback(() => {
		navigate("/login");
	}, []);
	return (
		<div className='container d-flex justify-content-center align-items-center min-vh-100'>
			<div className='row border rounded-5 p-3 bg-white shadow box-area g-5'>
				<form>
					<div className='mb-4 d-flex justify-content-center align-items-center '>
						<div>
							<h6>Register</h6>
						</div>
					</div>
					<hr />
                    <div className='mb-4 d-flex justify-content-center align-items-center '>
						<div>
							<h4 >Welcome back</h4>
						</div>
					</div>
					<div className='m-3'>
						<label className='mb-2'>Email address</label>
						<input
							type='email'
							className='form-control'
							placeholder='Enter email'
						/>
					</div>
					<div className='m-3'>
						<label className='mb-2'>Password</label>
						<input
							type='password'
							className='form-control'
							placeholder='Enter password'
						/>
					</div>
					<div className='m-3'>
						<div className='custom-control custom-checkbox'>
							<input
								type='checkbox'
								className='custom-control-input'
								id='customCheck1'
							/>
							<label className='custom-control-label' htmlFor='customCheck1'>
								Remember me
							</label>
						</div>
					</div>
					<div className='d-grid'>
						<button type='submit' className='btn btn-success'>
							Submit
						</button>
					</div>
					<hr />
                    <div className='m-3 d-flex justify-content-center align-items-center '>
						
							<div> Already have an account? </div>
							<div onClick={Toggle} className='fw-light pointer-on-hover p-1 div-on-hover'>
                            Login
							</div>
						
					</div>
				
				</form>
			</div>
		</div>
	);
};

export default Register;
