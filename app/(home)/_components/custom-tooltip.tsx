import { CustomTooltipProps } from "@/app/models/finance.interface";
import { TransactionType } from "@prisma/client";

export default function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  const data = payload[0];
  const label =
    data.name === TransactionType.DEPOSIT
      ? "Receita"
      : data.name === TransactionType.EXPENSE
        ? "Despesas"
        : "Investido";

  return (
    <div className="rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      <div className="flex items-center gap-2">
        <div
          className="h-2.5 w-2.5 rounded-[2px]"
          style={{ backgroundColor: data.payload.fill }}
        />
        <span className="text-muted-foreground">{label}</span>
        <span className="ml-2 font-mono font-medium tabular-nums text-foreground">
          {data.value.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
