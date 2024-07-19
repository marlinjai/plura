import { useModal } from "@/providers/modal-provider";
import { DialogDescription } from "@radix-ui/react-dialog";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

type Props = {
  title: string;
  subHeading: string;
  children: React.ReactNode;
  defaultOpen: boolean;
};

const CustomModal = ({ title, subHeading, children, defaultOpen }: Props) => {
  const { isOpen, setClose } = useModal();

  return (
    <Dialog open={isOpen} onOpenChange={setClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subHeading}</DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
