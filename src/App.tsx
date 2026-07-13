import { useState } from 'react';
import { 
  Building2, CreditCard, DollarSign, Wallet, 
  ArrowUpRight, Activity,
  ShieldCheck, LayoutDashboard, History
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

const incomeData = [
  { month: 'Jan', amount: 4200 },
  { month: 'Feb', amount: 4200 },
  { month: 'Mar', amount: 4500 },
  { month: 'Apr', amount: 4500 },
  { month: 'May', amount: 4800 },
  { month: 'Jun', amount: 4800 },
];

const spendingData = [
  { category: 'Housing', amount: 1500 },
  { category: 'Food', amount: 600 },
  { category: 'Transport', amount: 400 },
  { category: 'Utilities', amount: 300 },
  { category: 'Entertainment', amount: 200 },
];

const transactions = [
  { id: 1, date: '2026-09-24', merchant: 'Whole Foods', amount: -120.50, category: 'Groceries', account: 'Chase Checking' },
  { id: 2, date: '2026-09-23', merchant: 'Netflix', amount: -15.99, category: 'Entertainment', account: 'Amex Platinum' },
  { id: 3, date: '2026-09-22', merchant: 'Tech Corp Salary', amount: 2400.00, category: 'Income', account: 'Chase Checking' },
  { id: 4, date: '2026-09-20', merchant: 'Uber', amount: -24.50, category: 'Transport', account: 'Amex Platinum' },
  { id: 5, date: '2026-09-18', merchant: 'ConEd', amount: -145.20, category: 'Utilities', account: 'Chase Checking' },
];

const accounts = [
  { id: 'acc1', name: 'Chase Checking', balance: 4520.50, type: 'checking', institution: 'JPMorgan Chase' },
  { id: 'acc2', name: 'Amex Platinum', balance: -1250.00, type: 'credit', institution: 'American Express' },
  { id: 'acc3', name: 'Fidelity Savings', balance: 15000.00, type: 'savings', institution: 'Fidelity' },
];

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showConsent, setShowConsent] = useState(false);

  const totalAssets = accounts.filter(a => a.balance > 0).reduce((sum, a) => sum + a.balance, 0);
  const totalLiabilities = accounts.filter(a => a.balance < 0).reduce((sum, a) => sum + Math.abs(a.balance), 0);
  const netWorth = totalAssets - totalLiabilities;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-8 text-indigo-600">
          <Activity className="w-8 h-8" />
          <span className="text-xl font-bold">OpenFi Insights</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('transactions')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'transactions' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <History className="w-5 h-5" />
            Transactions
          </button>
          <button 
            onClick={() => setActiveTab('accounts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'accounts' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Building2 className="w-5 h-5" />
            Accounts
          </button>
        </nav>

        <div className="mt-auto">
          <button 
            onClick={() => setShowConsent(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            Connect Account
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-slate-800">
            {activeTab === 'dashboard' && 'Financial Overview'}
            {activeTab === 'transactions' && 'All Transactions'}
            {activeTab === 'accounts' && 'Connected Accounts'}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">Last updated: Just now</span>
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-medium">
              JD
            </div>
          </div>
        </header>

        <main className="p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 font-medium">Net Worth</span>
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <DollarSign className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-800">${netWorth.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
                  <div className="mt-2 flex items-center text-sm text-emerald-600">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    <span>+2.4% this month</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 font-medium">Total Assets</span>
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                      <Building2 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-800">${totalAssets.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 font-medium">Total Liabilities</span>
                    <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
                      <CreditCard className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-800">${totalLiabilities.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-6">Income Trend</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={incomeData}>
                        <defs>
                          <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                        <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                        <Area type="monotone" dataKey="amount" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#colorAmount)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-6">Spending by Category</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={spendingData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                        <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                        <YAxis dataKey="category" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} width={100} />
                        <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                        <Bar dataKey="amount" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Merchant</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Account</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {transactions.map(tx => (
                    <tr key={tx.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-sm text-slate-600">{tx.date}</td>
                      <td className="py-4 px-6 text-sm font-medium text-slate-900">{tx.merchant}</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                          {tx.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-500">{tx.account}</td>
                      <td className={`py-4 px-6 text-sm font-semibold text-right ${tx.amount > 0 ? 'text-emerald-600' : 'text-slate-900'}`}>
                        {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'accounts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accounts.map(acc => (
                <div key={acc.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                        {acc.type === 'credit' ? <CreditCard className="w-5 h-5 text-slate-600" /> : <Wallet className="w-5 h-5 text-slate-600" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{acc.institution}</h3>
                        <p className="text-sm text-slate-500">{acc.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="text-sm text-slate-500 mb-1">Balance</div>
                    <div className="text-2xl font-bold text-slate-900">
                      ${Math.abs(acc.balance).toLocaleString('en-US', {minimumFractionDigits: 2})}
                      {acc.type === 'credit' && <span className="text-sm text-slate-500 ml-1 font-normal">(Owed)</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Consent Modal Overlay */}
      {showConsent && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">Connect Your Bank</h2>
            <p className="text-center text-slate-500 mb-6">
              OpenFi uses secure open banking APIs to access your financial data. We never store your login credentials.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 mb-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">We will have access to:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Account balances and details</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Transaction history (up to 24 months)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Account holder name</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowConsent(false)}
                className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowConsent(false)}
                className="flex-1 px-4 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Agree & Continue
              </button>
            </div>
            <p className="text-xs text-center text-slate-400 mt-4">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
