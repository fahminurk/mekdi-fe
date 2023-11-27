import DeleteModal from "@/components/modal/DeleteModal";
import { useState, useEffect } from "react";
import AddUserModal from "@/components/modal/AddUserModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DeleteModal />
      <AddUserModal />
    </>
  );
};

export default ModalProvider;
