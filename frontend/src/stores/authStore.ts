import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface AuthState {
  isLoggedIn: boolean;
  user: null | object;
  token: string | null;
}

export interface AuthActions {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: AuthState['user']) => void;
  setToken: (token: AuthState['token']) => void;
  loginTestUser: () => void; // Add the method to the interface
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
        loginTestUser: () => {
            set({
              isLoggedIn: false,
              user: { id: 'testUserId', fullname: 'Test User' },
              token: 'testToken',
            });
          },
      }),
      {
        name: "auth-storage",
      }
    )
  )
);
