/** @format */

import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export interface User {
	id: string;
	username: string;
	email: string;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	iat?: number | undefined;
	exp?: number | undefined;
}
export const getCurrentUser = (): User | null => {
	const jwt = Cookies.get('jwt');
	if (!jwt) {
		return null;
	}

	try {
        const decodedToken = jwtDecode<User>(jwt);

		const user: User = {
			id: decodedToken.id,
			username: decodedToken.username,
			email: decodedToken.email,
		};

		return user;
	} catch (error) {
		console.error("Error decoding token:", error);
		return null;
	}
};
