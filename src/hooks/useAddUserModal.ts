import { create } from "zustand";

interface AddAdminModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddUserModal = create<AddAdminModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddUserModal;
