import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useBusinessStore } from './hooks/useBusinessStore';

function App() {
  const [activeBusiness, setActiveBusiness] = useState('1');
  const businesses = useBusinessStore((state) => state.businesses);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar 
          activeBusiness={activeBusiness} 
          setActiveBusiness={setActiveBusiness}
        />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Building2 className="w-8 h-8 text-teal-600" />
                <h1 className="text-2xl font-bold text-gray-900">
                  {businesses.find(b => b.id === activeBusiness)?.name || 'Dashboard'}
                </h1>
              </div>
              <div className="flex space-x-4">
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                />
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                  Update Range
                </button>
              </div>
            </div>
            <Dashboard businessId={activeBusiness} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;