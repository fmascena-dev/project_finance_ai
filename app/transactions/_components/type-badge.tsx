import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="select-none bg-deposit font-bold text-primary hover:bg-deposit">
        <CircleIcon className="mr-2 shrink-0 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="select-none bg-expense font-bold text-danger hover:bg-expense">
        <CircleIcon className="mr-2 shrink-0 fill-danger" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="select-none bg-investment font-bold text-muted-two hover:bg-investment">
      <CircleIcon className="mr-2 shrink-0 fill-muted-two" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
