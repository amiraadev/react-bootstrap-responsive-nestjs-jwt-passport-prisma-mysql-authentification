/** @format */



import Container from "react-bootstrap/Container";
import Button from './Button';
import Navbar from 'react-bootstrap/Navbar';
import DarkMode from "./DarkMode/DarkMode";

import useThemeStore from "../stores/themeStore";
const Navbar1 = () => {
	const { isDarkMode} = useThemeStore();
	return (
		<Navbar
			bg={`${isDarkMode ? 'dark' : 'light'}`}
			variant={`${isDarkMode ? 'dark' : 'light'}`}
			expand='lg'
			className='justify-content-between'

			
			>
			<Container className='justify-content-between'>
				<div >
					<img src='./roundesk-logo.png' className='logo-img' />
				</div>
				<div >
				<DarkMode />
					{/* <Button label="hello" onClick={()=>{console.log("test")}}/> */}
		
				</div>
				
			</Container>
		</Navbar>
	);
};

export default Navbar1;
