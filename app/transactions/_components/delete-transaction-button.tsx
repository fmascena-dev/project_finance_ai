"use client";

import { Button } from "@/app/_components/ui/button";
import DeleteTransactionDialog from "@/app/_components/delete-transaction-dialog";
import { Transaction } from "@prisma/client";
import { TrashIcon } from "lucide-react";
import { useState } from "react";

interface DeleteTransactionButtonProps {
  transaction: Transaction;
}

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
