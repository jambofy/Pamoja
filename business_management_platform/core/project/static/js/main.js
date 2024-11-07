// Initialize Lucide icons
lucide.createIcons();

// State management
let currentBusiness = null;
let businesses = [];
let transactions = [];
let accounts = [];

// Fetch businesses from API
async function fetchBusinesses() {
    const response = await fetch('/api/businesses');
    businesses = await response.json();
    renderBusinessList();
}

// Render business list in sidebar
function renderBusinessList() {
    const businessList = document.getElementById('business-list');
    businessList.innerHTML = businesses.map(business => `
        <div class="p-2 rounded cursor-pointer hover:bg-gray-800 ${currentBusiness?.id === business.id ? 'bg-blue-600' : ''}"
             onclick="selectBusiness('${business.id}')">
            ${business.name}
        </div>
    `).join('');
}

// Handle business selection
async function selectBusiness(businessId) {
    currentBusiness = businesses.find(b => b.id === businessId);
    renderBusinessList();
    await updateDashboard();
}

// Update dashboard data
async function updateDashboard() {
    // In a real app, this would fetch data from the server
    const mockData = {
        revenue: 124500,
        expenses: 67800,
        profit: 56700,
        pending: 12,
        transactions: [
            { id: 1, description: 'Client Payment', amount: 1200, date: '2h ago', type: 'income' },
            { id: 2, description: 'Office Supplies', amount: -450, date: '5h ago', type: 'expense' },
            { id: 3, description: 'Consulting Fee', amount: 2500, date: '1d ago', type: 'income' }
        ],
        invoices: [
            { id: 101, amount: 2400, dueIn: '3 days', client: 'ABC Corp' },
            { id: 102, amount: 1800, dueIn: '5 days', client: 'XYZ Ltd' },
            { id: 103, amount: 3200, dueIn: '7 days', client: '123 Industries' }
        ]
    };

    document.getElementById('revenue').textContent = `$${mockData.revenue.toLocaleString()}`;
    document.getElementById('expenses').textContent = `$${mockData.expenses.toLocaleString()}`;
    document.getElementById('profit').textContent = `$${mockData.profit.toLocaleString()}`;
    document.getElementById('pending').textContent = mockData.pending;

    renderTransactions(mockData.transactions);
    renderInvoices(mockData.invoices);
}

// Render transactions list
function renderTransactions(transactions) {
    const container = document.getElementById('recent-transactions');
    container.innerHTML = transactions.map(t => `
        <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
                <p class="font-medium">${t.description}</p>
                <p class="text-sm text-gray-600">${t.date}</p>
            </div>
            <div class="text-right">
                <p class="font-medium ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}">
                    ${t.type === 'income' ? '+' : '-'}$${Math.abs(t.amount).toLocaleString()}
                </p>
            </div>
        </div>
    `).join('');
}

// Render invoices list
function renderInvoices(invoices) {
    const container = document.getElementById('outstanding-invoices');
    container.innerHTML = invoices.map(i => `
        <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
                <p class="font-medium">Invoice #${i.id}</p>
                <p class="text-sm text-gray-600">Due in ${i.dueIn}</p>
            </div>
            <div class="text-right">
                <p class="font-medium text-red-600">$${i.amount.toLocaleString()}</p>
                <p class="text-sm text-gray-600">${i.client}</p>
            </div>
        </div>
    `).join('');
}

// Initialize the application
async function init() {
    await fetchBusinesses();
    if (businesses.length > 0) {
        await selectBusiness(businesses[0].id);
    }
}

// Start the application
init();