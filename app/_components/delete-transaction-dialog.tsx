"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { deleteTransaction } from "../_actions/delete-transaction";
import { DeleteTransactionDialogProps } from "../models/finance.interface";

export default function DeleteTransactionDialog({
  isOpen,
  setIsOpen,
  transactionId,
  transactionName,
}: DeleteTransactionDialogProps) {
  const handleDelete = async () => {
    try {
      await deleteTransaction(transactionId);
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja excluir a transação{" "}
            <span className="text-primary">{transactionName}</span> ? Esta ação
            não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-full font-bold">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="rounded-full border border-red-700 bg-transparent font-bold text-destructive-foreground hover:bg-red-950"
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
