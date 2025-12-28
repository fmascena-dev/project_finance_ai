import { Transaction } from "@prisma/client";
import type {
  TransactionType,
  TransactionCategory,
  TransactionPaymentMethod,
} from "@prisma/client";
import { ReactNode } from "react";
import { SelectSingleEventHandler } from "react-day-picker";
import { TransactionPercentagePerType } from "../_data/get-dashboard/types";

export interface SummaryCards {
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

export interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
  highlighted?: boolean;
}

export interface DeleteTransactionDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  transactionId: string;
  transactionName: string;
}

export interface DatePickerProps {
  value?: Date;
  onChange?: SelectSingleEventHandler;
}

export interface DeleteTransactionButtonProps {
  transaction: Transaction;
}

export interface EditTransactionButtonProps {
  transaction: Transaction;
}

export interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

export interface FormSchema {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export interface UpsertTransactionDialogProps {
  isOpen: boolean;
  defaultValues?: FormSchema;
  transactionId?: string;
  setIsOpen: (isOpen: boolean) => void;
}

export interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export interface TransactionsPieChartProps {
  typesPercentage: TransactionPercentagePerType;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

export interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
}
