/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GlobalForm from "../pages/GlobalForm";

const PageContainer = () => {
	return (
		<Container fluid='md' className='my-3 px-5'>
			<Row>
				<Col  className=' px-5'>
					<GlobalForm />
				</Col>
			</Row>
		</Container>
	);
};

export default PageContainer;
