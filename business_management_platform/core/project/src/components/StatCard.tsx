import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  iconBgColor: string;
  iconColor: string;
  trendColor: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  iconBgColor,
  iconColor,
  trendColor,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">
            {typeof value === 'number' ? `$${value.toLocaleString()}` : value}
          </p>
        </div>
        <div className={`${iconBgColor} p-3 rounded-full`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
      {trend && (
        <div className={`mt-4 flex items-center text-sm ${trendColor}`}>
          <span>{trend.value}</span>
        </div>
      )}
    </div>
  );
}