/** @format */

import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthStore } from "../stores/authStore";

export default function Profile() {
	const { setUser, user } = useAuthStore();

	useEffect(() => {
    console.log({user});
	const jwt = Cookies.get('jwt');

		const headers = jwt ? { Authorization: `Bearer ${jwt}` } : {};

		const fetch = async () => {
			try {
				const response = await axios.get("http://localhost:5000/auth/status", {
					headers,
				});
				 console.log("===>", response);
				 setUser(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, []);


	return (
		<>
			<div>Hello {user?.username} ,Welcome back!</div>
		</>
	);
}
