import { create } from 'zustand';
import { Business, Transaction } from '../types';
import { api } from '../services/api';

interface BusinessStore {
  businesses: Business[];
  activeBusiness: string;
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
  fetchBusinesses: () => Promise<void>;
  fetchTransactions: (businessId: string) => Promise<void>;
  setActiveBusiness: (id: string) => void;
}

export const useBusinessStore = create<BusinessStore>((set) => ({
  businesses: [],
  activeBusiness: '',
  transactions: [],
  isLoading: false,
  error: null,

  fetchBusinesses: async () => {
    set({ isLoading: true, error: null });
    try {
      const businesses = await api.businesses.getAll();
      set({ 
        businesses,
        activeBusiness: businesses[0]?.id || '',
        isLoading: false 
      });
    } catch (error) {
      set({ error: 'Failed to fetch businesses', isLoading: false });
    }
  },

  fetchTransactions: async (businessId: string) => {
    set({ isLoading: true, error: null });
    try {
      const transactions = await api.transactions.getAll(businessId);
      set({ transactions, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch transactions', isLoading: false });
    }
  },

  setActiveBusiness: (id: string) => {
    set({ activeBusiness: id });
  },
}));