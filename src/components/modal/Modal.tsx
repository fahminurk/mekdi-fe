import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onChange, children, title }) => {
  return (
    <Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <DialogContent className="bg-white ">
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <div>{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
