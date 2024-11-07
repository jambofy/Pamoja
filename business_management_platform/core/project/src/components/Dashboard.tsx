import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, Activity, Users, Receipt } from 'lucide-react';
import StatCard from './StatCard';
import TransactionList from './TransactionList';
import { useBusinessStore } from '../hooks/useBusinessStore';
import Chart from './Chart';

interface DashboardProps {
  businessId: string;
}

export default function Dashboard({ businessId }: DashboardProps) {
  const transactions = useBusinessStore((state) => state.transactions);

  const stats = {
    revenue: 124500,
    expenses: 67800,
    profit: 56700,
    pending: 12,
    customers: 156,
    invoices: 34
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Revenue"
          value={stats.revenue}
          icon={DollarSign}
          trend={{ value: '+12.5%', isPositive: true }}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
          trendColor="text-green-600"
        />
        <StatCard
          title="Expenses"
          value={stats.expenses}
          icon={TrendingDown}
          trend={{ value: '+8.2%', isPositive: false }}
          iconBgColor="bg-red-100"
          iconColor="text-red-600"
          trendColor="text-red-600"
        />
        <StatCard
          title="Net Profit"
          value={stats.profit}
          icon={TrendingUp}
          trend={{ value: '+15.3%', isPositive: true }}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
          trendColor="text-blue-600"
        />
        <StatCard
          title="Active Customers"
          value={stats.customers}
          icon={Users}
          trend={{ value: '+5 this month', isPositive: true }}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
          trendColor="text-purple-600"
        />
        <StatCard
          title="Pending Invoices"
          value={stats.invoices}
          icon={Receipt}
          trend={{ value: '8 overdue', isPositive: false }}
          iconBgColor="bg-yellow-100"
          iconColor="text-yellow-600"
          trendColor="text-yellow-600"
        />
        <StatCard
          title="Pending Transactions"
          value={stats.pending}
          icon={Activity}
          trend={{ value: 'Requires attention', isPositive: false }}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
          trendColor="text-orange-600"
        />
      </div>

      <div className="chart-container">
        <Chart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <TransactionList transactions={transactions} />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Outstanding Invoices</h3>
          <TransactionList 
            transactions={transactions.filter(t => t.status === 'pending')} 
          />
        </div>
      </div>
    </div>
  );
}