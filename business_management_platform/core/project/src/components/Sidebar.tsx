import React from 'react';
import { 
  Building2, 
  LayoutDashboard, 
  Receipt, 
  Users, 
  FileText, 
  PiggyBank, 
  Settings,
  ChevronDown
} from 'lucide-react';

interface SidebarProps {
  activeBusiness: string;
  setActiveBusiness: (id: string) => void;
}

const businesses = [
  { id: '1', name: 'Personal Finance', type: 'personal' },
  { id: '2', name: 'Construction LLC', type: 'construction' },
  { id: '3', name: 'Retail Store', type: 'retail' }
];

export default function Sidebar({ activeBusiness, setActiveBusiness }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Building2 className="w-6 h-6 text-blue-400" />
          <span className="font-bold text-xl">FinanceHub</span>
        </div>
      </div>

      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between cursor-pointer hover:bg-gray-800 p-2 rounded">
          <span className="font-medium">Select Business</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="mt-2 space-y-1">
          {businesses.map((business) => (
            <div
              key={business.id}
              onClick={() => setActiveBusiness(business.id)}
              className={`p-2 rounded cursor-pointer ${
                activeBusiness === business.id
                  ? 'bg-blue-600'
                  : 'hover:bg-gray-800'
              }`}
            >
              {business.name}
            </div>
          ))}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
          <Receipt className="w-5 h-5" />
          <span>Transactions</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
          <Users className="w-5 h-5" />
          <span>Customers</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
          <FileText className="w-5 h-5" />
          <span>Reports</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
          <PiggyBank className="w-5 h-5" />
          <span>Banking</span>
        </a>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </a>
      </div>
    </div>
  );
}