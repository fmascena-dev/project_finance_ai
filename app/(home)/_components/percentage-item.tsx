import { PercentageItemProps } from "@/app/models/finance.interface";

export default function PercentageItem({
  icon,
  title,
  value,
}: PercentageItemProps) {
  return (
    <div className="flex items-center justify-between">
      {/* Icone */}
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-lg text-muted-foreground">{title}</p>
      </div>
      <p className="text-lg font-bold text-muted-foreground">{value}%</p>
    </div>
  );
}
