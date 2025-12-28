import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import type { SummaryCards } from "@/app/models/finance.interface";

export default async function SummaryCards({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
}: SummaryCards) {
  return (
    <div className="space-y-6">
      {/* PRIMEIRO CARD */}

      <SummaryCard
        icon={
          <WalletIcon
            size={16}
            className="h-9 w-9 rounded-lg bg-muted-three p-2"
          />
        }
        title="Saldo"
        amount={balance}
        size="large"
        highlighted
      />

      {/* OUTROS CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={
            <PiggyBankIcon
              size={16}
              className="h-9 w-9 rounded-lg bg-investment p-2 text-muted-two"
            />
          }
          title="Investido"
          amount={investmentsTotal}
          highlighted
        />
        <SummaryCard
          icon={
            <TrendingUpIcon
              size={16}
              className="h-9 w-9 rounded-lg bg-deposit p-2 text-primary"
            />
          }
          title="Receita"
          amount={depositsTotal}
        />
        <SummaryCard
          icon={
            <TrendingDownIcon
              size={16}
              className="h-9 w-9 rounded-lg bg-expense p-2 text-red-500"
            />
          }
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
}
