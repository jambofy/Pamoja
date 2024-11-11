import React from 'react';
import { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="space-y-4">
      {transactions.map((t) => (
        <div key={t.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">{t.description}</p>
            <p className="text-sm text-gray-600">{t.date}</p>
          </div>
          <div className="text-right">
            <p className={`font-medium ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
              {t.type === 'income' ? '+' : '-'}${Math.abs(t.amount).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}