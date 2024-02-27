/** @format */

import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { User } from "../actions/getCurrentUser";

export interface AuthState {
	isLoggedIn: boolean;
	user: null | User;
	token: string | null;
}

export interface AuthActions {
	setIsLoggedIn: (isLoggedIn: boolean) => void;
	setUser: (user: AuthState["user"]) => void;
	setToken: (token: AuthState["token"]) => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
	devtools(
		persist(
			(set) => ({
				isLoggedIn: false,
				user: null,
				token: null,
				setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
				setUser: (user) => set({ user }),
				setToken: (token) => set({ token }),
			}),
			{
				name: "auth-storage",
			}
		)
	)
);
