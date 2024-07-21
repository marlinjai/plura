"use client";

import {
  deleteSubAccount,
  getSubaccountDetails,
  saveActivityLogsNotification,
} from "@/lib/queries";
import { useRouter } from "next/navigation";

type Props = {
  subaccountId: string;
};

const DeleteButton = ({ subaccountId }: Props) => {
  const router = useRouter();

  return (
    <div
      onClick={async () => {
        const response = await getSubaccountDetails(subaccountId);
        await saveActivityLogsNotification({
          agencyId: undefined,
          description: `deleted sub account | ${response?.name}`,
          subaccountId: subaccountId,
        });
        await deleteSubAccount(subaccountId);
        router.refresh();
      }}
    >
      Delete Sub Account
    </div>
  );
};

export default DeleteButton;
