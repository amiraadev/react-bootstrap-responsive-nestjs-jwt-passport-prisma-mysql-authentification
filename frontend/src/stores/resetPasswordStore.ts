/** @format */

import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { User } from "../actions/getCurrentUser";

export interface ResetPasswordState {
	isLoggedIn: boolean;
	user: null | User;
	token: string | null;
}

export interface ResetPasswordActions {
	setIsLoggedIn: (isLoggedIn: boolean) => void;
	setUser: (user: ResetPasswordState["user"]) => void;
	setToken: (token: ResetPasswordState["token"]) => void;
}

export const useResetPasswordStore = create<ResetPasswordState & ResetPasswordActions>()(
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
				name: "ResetPassword-storage",
			}
		)
	)
);
