export interface Business {
  id: string;
  name: string;
  type: string;
  currency: string;
  fiscalYear: string;
}

export interface Transaction {
  id: string;
  businessId: string;
  date: string;
  type: 'income' | 'expense' | 'transfer';
  amount: number;
  category: string;
  description: string;
  status: 'pending' | 'completed' | 'void';
}

export interface Account {
  id: string;
  businessId: string;
  name: string;
  type: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
  balance: number;
}