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
    <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-10">
        <Icon className="w-full h-full" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`${iconBgColor} p-3 rounded-2xl shadow-lg`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {title}
          </h3>
        </div>
        
        <div className="mb-4">
          <p className="text-3xl font-bold text-gray-900 tracking-tight">
            {typeof value === 'number' ? `$${value.toLocaleString()}` : value}
          </p>
        </div>
        
        {trend && (
          <div className={`flex items-center space-x-2 ${trendColor}`}>
            <div className={`h-1.5 w-1.5 rounded-full ${trendColor.replace('text-', 'bg-')}`} />
            <span className="text-sm font-medium">{trend.value}</span>
          </div>
        )}
      </div>
      
      <div className={`h-1 w-full ${iconBgColor}`} />
    </div>
  );
}