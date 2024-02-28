/** @format */

import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface ResetPasswordState {
	email: string | null;
	OTP: string | null;
}

export interface ResetPasswordActions {
	setEmail: (email: ResetPasswordState["email"]) => void;
	setOTP: (OTP: ResetPasswordState["OTP"]) => void;
}

export const useResetPasswordStore = create<ResetPasswordState & ResetPasswordActions>()(
	devtools(
		persist(
			(set) => ({
				email: null,
				OTP: null,
				setEmail: (email) => set({ email }),
				setOTP: (OTP) => set({ OTP }),
			}),
			{
				name: "ResetPassword-storage",
			}
		)
	)
);
