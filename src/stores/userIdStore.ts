import { create } from "zustand";
import { persist } from "zustand/middleware";

type ID = {
  id: string;
};
const initialState: ID = {
  id: "",
};

export const userIDStore = create<ID>()(
  persist(() => initialState, { name: "userIDStore" })
);

export default function useIDService() {
  const { id } = userIDStore();

  return {
    saveUserId: (id: string) => {
      userIDStore.setState({ id });
    },
  };
}
