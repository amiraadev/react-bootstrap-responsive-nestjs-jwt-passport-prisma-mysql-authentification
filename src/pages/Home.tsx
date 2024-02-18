/** @format */

import React from "react";
import { useAuthStore } from "../stores/authStore";

const Home = () => {
	const { setIsLoggedIn } = useAuthStore();

	return (
		<>
			<div>Home</div>
			<button
				onClick={() => {
					setIsLoggedIn(false);
				}}>
				Logout
			</button>
		</>
	);
};

export default Home;
