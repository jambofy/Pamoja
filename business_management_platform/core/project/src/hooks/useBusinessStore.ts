import { create } from 'zustand';
import { Business, Transaction } from '../types';

interface BusinessStore {
  businesses: Business[];
  activeBusiness: string;
  setActiveBusiness: (id: string) => void;
  transactions: Transaction[];
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    businessId: '1',
    date: '2h ago',
    type: 'income',
    amount: 1200,
    category: 'Sales',
    description: 'Client Payment',
    status: 'completed'
  },
  {
    id: '2',
    businessId: '1',
    date: '5h ago',
    type: 'expense',
    amount: 450,
    category: 'Office',
    description: 'Office Supplies',
    status: 'completed'
  }
];

export const useBusinessStore = create<BusinessStore>((set) => ({
  businesses: [
    { id: '1', name: 'Personal Finance', type: 'personal', currency: 'USD', fiscalYear: '2024' },
    { id: '2', name: 'Construction LLC', type: 'construction', currency: 'USD', fiscalYear: '2024' },
    { id: '3', name: 'Retail Store', type: 'retail', currency: 'USD', fiscalYear: '2024' }
  ],
  activeBusiness: '1',
  setActiveBusiness: (id) => set({ activeBusiness: id }),
  transactions: mockTransactions
}));