import { User } from "@/types";
import { create } from "zustand";

interface DeleteModalStore {
  isOpen: boolean;
  user: User;
  setUser: (user: User) => void;
  onOpen: () => void;
  onClose: () => void;
}

const useDeleteUserModal = create<DeleteModalStore>((set) => ({
  isOpen: false,
  user: {
    _id: "",
    fullname: "",
    email: "",
    isSuperAdmin: false,
  },
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setUser: (user) => set({ user }),
}));

export default useDeleteUserModal;
