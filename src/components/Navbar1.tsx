/** @format */



import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const Navbar1 = () => {
	return (
		<Navbar
			bg='light '
			variant={"light"}
			expand='lg'
			className='justify-content-between'>
			<Container className='justify-content-between'>
				<div >
					<img src='./roundesk-logo.png' className='logo-img' />
				</div>
				<div >
					<Button variant='outline-success' className='m-2'>Search</Button>
					<Button variant='success' className='m-2'>Search</Button>
				</div>
				
			</Container>
		</Navbar>
	);
};

export default Navbar1;
