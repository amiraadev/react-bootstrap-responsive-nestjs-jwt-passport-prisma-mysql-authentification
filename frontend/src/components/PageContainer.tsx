/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GlobalForm from "../pages/LoginPage";

const PageContainer = () => {
	return (
		<Container className='my-3 px-5'>
			<Row className="justify-content-md-center">
				<Col md="auto" className=' px-5'>
					<GlobalForm />
				</Col>
			</Row>
		</Container>
	);
};

export default PageContainer;
