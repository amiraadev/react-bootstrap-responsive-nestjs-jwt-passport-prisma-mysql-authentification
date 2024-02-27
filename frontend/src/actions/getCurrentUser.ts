/** @format */

import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "../stores/authStore";

export interface User {
	id: string;
	username: string;
	email: string;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	iat?: number | undefined;
	exp?: number | undefined;
}
export const getCurrentUser = (token:string|null): User | null => {
	
	if (!token) {
		return null;
	}

	try {
        const decodedToken = jwtDecode<User>(token);

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
