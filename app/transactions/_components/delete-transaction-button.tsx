"use client";

import { Button } from "@/app/_components/ui/button";
import DeleteTransactionDialog from "@/app/_components/delete-transaction-dialog";
import { TrashIcon } from "lucide-react";
import { useState } from "react";
import { DeleteTransactionButtonProps } from "@/app/models/finance.interface";

const DeleteTransactionButton = ({
  transaction,
}: DeleteTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghostThree"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <TrashIcon />
      </Button>
      <DeleteTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        transactionId={transaction.id}
        transactionName={transaction.name}
      />
    </>
  );
};

export default DeleteTransactionButton;
