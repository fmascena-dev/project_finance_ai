import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";
// import type { SummaryCards } from "@/app/models/finance.interface";

// {
//   balance,
//   depositsTotal,
//   expensesTotal,
//   investmentsTotal,
// }: SummaryCards

interface SummaryCards {
  month: string;
}

export default async function SummaryCards({ month }: SummaryCards) {
  // const currentYear = new Date().getFullYear();
  // const startDate = new Date(`${currentYear}-${month}-01`);

  // Calcula o primeiro dia do próximo mês para usar como limite superior
  // const nextMonth = new Date(currentYear, parseInt(month), 1);

  const where = {
    date: {
      gte: new Date(`2025-${month}-01`),
      lt: new Date(`2025-${month}-31`),
      // gte: startDate,
      // lt: nextMonth,
    },
  };
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      {/* Primeiro Card */}
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
        highlighted={true}
      />

      {/* Outros Cards */}
      <div className="grid grid-cols-3 gap-3">
        <SummaryCard
          icon={
            <PiggyBankIcon
              size={16}
              className="h-9 w-9 rounded-lg bg-investment p-2 text-muted-two"
            />
          }
          title="Investido"
          amount={investmentsTotal}
          highlighted={true}
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
