"use client";

import React from "react";
import UploadMediaForm from "../forms/upload-media";
import CustomModal from "../global/custom-modal";
import { Button } from "../ui/button";
import { useModal } from "@/providers/modal-provider";

type Props = {
  subaccountId: string;
};

const MediaUploadButton = ({ subaccountId }: Props) => {
  const { isOpen, setOpen, setClose } = useModal();

  return (
    <Button
      onClick={() => {
        setOpen(
          <CustomModal
            title="Upload Media"
            subHeading="Upload a file to your media bucket"
          >
            <UploadMediaForm subaccountId={subaccountId}></UploadMediaForm>
          </CustomModal>
        );
      }}
    >
      Upload
    </Button>
  );
};

export default MediaUploadButton;
