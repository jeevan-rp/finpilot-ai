import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Wallet, TrendingUp, PiggyBank, Target, Zap, ShieldCheck, Bot } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', balance: 4000 },
  { name: 'Feb', balance: 3000 },
  { name: 'Mar', balance: 2000 },
  { name: 'Apr', balance: 2780 },
  { name: 'May', balance: 1890 },
  { name: 'Jun', balance: 2390 },
  { name: 'Jul', balance: 3490 },
];

const StatCard = ({ title, amount, trend, icon: Icon, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-10 rounded-bl-full -mr-4 -mt-4`}></div>
    <div className="flex justify-between items-start mb-4 relative z-10">
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold dark:text-white mt-1">{amount}</h3>
      </div>
      <div className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className={`flex items-center text-sm font-medium ${trend >= 0 ? 'text-success' : 'text-error'}`}>
        {trend >= 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
        {Math.abs(trend)}%
      </span>
      <span className="text-gray-400 dark:text-gray-500 text-sm">vs last month</span>
    </div>
  </motion.div>
);

const ActionCard = ({ title, icon: Icon }) => (
  <motion.button 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary dark:hover:border-primary transition-colors group"
  >
    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
  </motion.button>
);

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-white">Good Morning, Demo User</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Here is your financial summary for today.</p>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <ShieldCheck className="w-5 h-5 text-success" />
          <span className="text-sm font-medium dark:text-gray-200">AI Health Score: <strong className="text-primary text-lg ml-1">85</strong></span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Balance" amount="₹1,50,420" trend={12.5} icon={Wallet} color="from-primary to-blue-600" />
        <StatCard title="Monthly Spending" amount="₹42,100" trend={-4.2} icon={TrendingUp} color="from-error to-red-500" />
        <StatCard title="Total Savings" amount="₹1,08,320" trend={8.1} icon={PiggyBank} color="from-success to-green-500" />
        <StatCard title="Active Goals" amount="3/5" trend={20.0} icon={Target} color="from-warning to-orange-500" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold dark:text-white">Balance Overview</h2>
            <select className="bg-gray-50 dark:bg-gray-700 border-none text-sm rounded-lg px-3 py-1.5 outline-none dark:text-white">
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00ADEF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00ADEF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" className="dark:opacity-20" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  cursor={{stroke: '#00ADEF', strokeWidth: 1, strokeDasharray: '4 4'}}
                />
                <Area type="monotone" dataKey="balance" stroke="#00ADEF" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Quick Actions & AI Recommendations */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-bold dark:text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <ActionCard title="Send Money" icon={Zap} />
              <ActionCard title="Add Goal" icon={Target} />
              <ActionCard title="Open FD" icon={Wallet} />
              <ActionCard title="Scan QR" icon={ShieldCheck} />
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-blue-700 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-xl"></div>
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Bot className="w-5 h-5" /> AI Insight
            </h2>
            <p className="text-sm text-blue-100 mb-4 leading-relaxed">
              Based on your recent spending, you could save ₹5,000 more this month by reducing dining expenses. Would you like me to set a limit?
            </p>
            <button className="bg-white text-primary w-full py-2.5 rounded-xl font-medium text-sm hover:shadow-md transition-shadow">
              Set Dining Limit
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
// Note: Bot is missing from lucide-react import in this snippet, will add it to lucide-react import list