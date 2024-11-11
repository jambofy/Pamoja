import axios from 'axios';
import { Business, Transaction } from '../types';

const API_URL = 'http://localhost:8000/api';

export const api = {
  businesses: {
    getAll: async (): Promise<Business[]> => {
      const response = await axios.get(`${API_URL}/businesses/`);
      return response.data;
    },
    getById: async (id: string): Promise<Business> => {
      const response = await axios.get(`${API_URL}/businesses/${id}/`);
      return response.data;
    },
  },
  
  transactions: {
    getAll: async (businessId: string): Promise<Transaction[]> => {
      const response = await axios.get(`${API_URL}/transactions/`, {
        params: { business_id: businessId }
      });
      return response.data;
    },
    create: async (transaction: Partial<Transaction>): Promise<Transaction> => {
      const response = await axios.post(`${API_URL}/transactions/`, transaction);
      return response.data;
    },
    update: async (id: string, transaction: Partial<Transaction>): Promise<Transaction> => {
      const response = await axios.put(`${API_URL}/transactions/${id}/`, transaction);
      return response.data;
    },
  }
};