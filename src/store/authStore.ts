import { INIT_USER } from "@/constant";
import { User } from "@/types";
import { create } from "zustand";

export type AuthStore = {
  payload: User | null;
  onAuthSuccess: (payload: { payload: User }) => void;
  onLogout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  payload: INIT_USER,
  onAuthSuccess: (payload) => {
    set(() => payload);
  },
  onLogout: () => {
    set(() => ({
      payload: INIT_USER,
    }));
  },
}));
