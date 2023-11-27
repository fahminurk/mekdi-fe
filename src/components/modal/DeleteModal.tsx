import Modal from "./Modal";
import { Button } from "../ui/button";
import useDeleteModal from "@/hooks/useDeleteUserModal";
import { useDeleteUserMutation } from "@/action/useUser";

const DeleteModal = () => {
  const { isOpen, onClose, user } = useDeleteModal();
  const { mutateAsync, isPending } = useDeleteUserMutation();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const deleteUser = async () => {
    try {
      await mutateAsync(user._id);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal isOpen={isOpen} onChange={onChange} title="Delete user">
      <div className="flex flex-col gap-2">
        <h1 className="text-center">
          Are you sure want delete {user.fullname} ?
        </h1>
        <div className="flex justify-end gap-2">
          <Button
            variant={"destructive"}
            onClick={deleteUser}
            disabled={isPending}
          >
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
