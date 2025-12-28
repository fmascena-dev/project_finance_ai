import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { SummaryCardProps } from "@/app/models/finance.interface";

export default function SummaryCard({
  icon,
  title,
  amount,
  size = "small",
  highlighted = false,
}: SummaryCardProps) {
  return (
    <Card className={highlighted ? "bg-white bg-opacity-5" : ""}>
      <CardHeader className="flex-row items-center gap-2">
        {icon}
        <p
          className={`${size === "small" ? "text-lg text-muted-foreground" : "text-lg text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && <AddTransactionButton variant="default" />}
      </CardContent>
    </Card>
  );
}
