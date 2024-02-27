import axios from 'axios';
import React,{useEffect} from 'react'

const TestAxios = () => {
    useEffect(() => {
	
	
		const fetchData = async () => {
			const options = {
			  method: 'GET',
			//   url: 'https://jsonplaceholder.typicode.com/users',
			//   url: 'http://localhost:5005/api/questions',
			//   url:'https://api.publicapis.org/entries',
			  url:'http://localhost:5000/auth/test',
			  headers: {
				'Accept': 'application/json',
			  },
			};
	  
			try {
			  const response = await axios.request(options);
			  console.log(response.status); // Log the HTTP status code
			  console.log(response.data);   // Log the response data
			} catch (error) {
			  console.error(error);
			}
		  };
	  
		  fetchData();
	  }, []);
  return (
    <div>TestAxios</div>
  )
}

export default TestAxios