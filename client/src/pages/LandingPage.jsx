import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, ShieldCheck, Zap, LineChart, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F8FC] dark:bg-gray-900 text-gray-900 dark:text-white font-sans selection:bg-primary/30 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center overflow-hidden">
            <img src="/fintech.png" alt="FinPilot Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-xl tracking-tight">FinPilot</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
          <a href="#security" className="hover:text-primary transition-colors">Security</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Sign In</Link>
          <Link to="/dashboard" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20 pb-32 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
            <SparklesIcon className="w-4 h-4 text-warning" />
            <span className="text-sm font-medium">Built for the SBI Hackathon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            The Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Banking Assistant</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the future of finance. FinPilot analyzes your spending, executes intelligent actions, and grows your wealth—completely autonomously.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-[0_8px_30px_rgb(0,173,239,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Try Demo <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/coach" className="w-full sm:w-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2 shadow-sm">
              <Bot className="w-5 h-5 text-primary" /> Talk to AI
            </Link>
          </div>
        </motion.div>

        {/* Dashboard Preview Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F8FC] dark:from-gray-900 to-transparent z-10 bottom-0 h-32 top-auto"></div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl shadow-2xl overflow-hidden p-2">
            <div className="rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50 dark:bg-gray-900 flex">
               {/* Mock Sidebar */}
               <div className="w-48 hidden md:block border-r border-gray-100 dark:border-gray-800 p-4 space-y-4 bg-white dark:bg-gray-900">
                 <div className="flex items-center gap-2 mb-8 px-2">
                   <div className="w-6 h-6 rounded shrink-0 flex items-center justify-center overflow-hidden">
                     <img src="/fintech.png" alt="Logo" className="w-full h-full object-contain" />
                   </div>
                   <span className="font-bold text-sm dark:text-white">FinPilot</span>
                 </div>
                 <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-lg text-sm font-medium">
                   <LineChart className="w-4 h-4" /> Dashboard
                 </div>
                 <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium">
                   <Bot className="w-4 h-4" /> AI Coach
                 </div>
                 <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium">
                   <ShieldCheck className="w-4 h-4" /> Security
                 </div>
               </div>
               
               {/* Mock Content */}
               <div className="flex-1 p-6 space-y-6 bg-gray-50/50 dark:bg-gray-900/50">
                 {/* Header */}
                 <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-bold dark:text-white">Welcome back, Demo!</h2>
                      <p className="text-xs text-gray-500">Here's your financial summary.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-600 border-2 border-white dark:border-gray-800 shadow-sm overflow-hidden">
                      <img src="https://ui-avatars.com/api/?name=Demo&background=00ADEF&color=fff" alt="User" />
                    </div>
                 </div>
                 
                 {/* KPI Cards */}
                 <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <p className="text-xs text-gray-500 mb-1">Total Balance</p>
                      <p className="text-lg font-bold dark:text-white">₹1,24,500</p>
                      <span className="text-[10px] text-success font-medium flex items-center mt-1">↑ 12% vs last month</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <p className="text-xs text-gray-500 mb-1">Monthly Spend</p>
                      <p className="text-lg font-bold dark:text-white">₹32,450</p>
                      <span className="text-[10px] text-error font-medium flex items-center mt-1">↓ 5% vs last month</span>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl shadow-sm text-white relative overflow-hidden">
                      <div className="relative z-10">
                        <p className="text-xs text-gray-300 mb-1 flex items-center gap-1"><Bot className="w-3 h-3 text-primary" /> AI Insight</p>
                        <p className="text-xs font-medium mt-2 leading-relaxed">You're on track to save ₹15k this month. Great job!</p>
                      </div>
                      <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
                    </div>
                 </div>
                 
                 {/* Chart Area */}
                 <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-40 flex flex-col">
                   <div className="flex justify-between items-center mb-4">
                     <h3 className="text-sm font-bold dark:text-white">Spending Analytics</h3>
                     <div className="flex gap-1">
                       <div className="w-2 h-2 rounded-full bg-primary"></div>
                       <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                       <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                     </div>
                   </div>
                   <div className="flex-1 flex items-end justify-between gap-2 px-2">
                     <div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-sm h-[40%]"></div>
                     <div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-sm h-[60%]"></div>
                     <div className="w-full bg-primary rounded-t-sm h-[85%]"></div>
                     <div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-sm h-[50%]"></div>
                     <div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-sm h-[70%]"></div>
                     <div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-sm h-[30%]"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white dark:bg-gray-800 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Banking, Reimagined</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to manage your money efficiently, powered by state-of-the-art AI.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard 
              icon={Bot} 
              title="Agentic AI Coach" 
              desc="Not just a chatbot. FinPilot analyzes your spending and autonomously executes actions like creating FDs."
            />
            <FeatureCard 
              icon={LineChart} 
              title="Smart Analytics" 
              desc="Beautiful, actionable insights into your spending habits with categorized breakdowns and trend predictions."
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="Bank-Grade Security" 
              desc="Your data is encrypted and secure. AI actions require explicit confirmation before execution."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const SparklesIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22C12 22 11.2 16.2 7 12C11.2 7.8 12 2 12 2C12 2 12.8 7.8 17 12C12.8 16.2 12 22 12 22ZM5 18C5 18 4.6 15.1 2.5 13C4.6 10.9 5 8 5 8C5 8 5.4 10.9 7.5 13C5.4 15.1 5 18 5 18ZM19 8C19 8 18.6 5.1 16.5 3C18.6 5.1 19 8 19 8C19 8 19.4 5.1 21.5 3C19.4 5.1 19 8 19 8Z" />
  </svg>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow group">
    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{desc}</p>
  </div>
);