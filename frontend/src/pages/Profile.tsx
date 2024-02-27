/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import userStatusService from "../stores/userStatusStore";
import { useAuthStore } from "../stores/authStore";

export default function Profile() {
	const { saveUserStatus } = userStatusService();
	const { setUser, token, user } = useAuthStore();

	useEffect(() => {
    console.log({user});
    
		const headers = token ? { Authorization: `Bearer ${token}` } : {};

		const fetch = async () => {
			try {
				const response = await axios.get("http://localhost:5000/auth/status", {
					headers,
				});
				// console.log("===>", response);
				 setUser(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, []);
	let test = Cookies.get("token");

	const logOut = async () => {
		try {
			const response = await axios.post("http://localhost:5000/auth/signout");

			saveUserStatus(false);
		} catch (error) {
			//   throw new Error(`Error making POST request: ${error}`);
			console.log(error);
		}
	};

	return (
		<>
			<div>Hello {user?.username} ,Welcome back!</div>
		</>
	);
}
