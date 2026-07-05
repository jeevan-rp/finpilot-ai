import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, PieChart, Target, Zap, Settings, CreditCard, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/coach', icon: MessageSquare, label: 'AI Coach' },
  { path: '/insights', icon: PieChart, label: 'Insights' },
  { path: '/goals', icon: Target, label: 'Goals' },
  { path: '/services', icon: Zap, label: 'Digital Services' },
  { path: '/transactions', icon: CreditCard, label: 'Transactions' },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 260 : 80 }}
      className="hidden md:flex flex-col bg-white dark:bg-gray-900 border-r dark:border-gray-800 z-20 h-screen sticky top-0"
    >
      <div className="h-16 flex items-center justify-between px-4 border-b dark:border-gray-800 shrink-0">
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-lg leading-none">F</span>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-bold text-xl dark:text-white"
              >
                FinPilot AI
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2 px-3 overflow-y-auto">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
          {isOpen ? 'Main Menu' : '•••'}
        </div>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
              isActive 
                ? "bg-blue-50 dark:bg-blue-900/20 text-primary" 
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
            )}
            title={item.label}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="font-medium whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t dark:border-gray-800">
        <NavLink
          to="/settings"
          className={({ isActive }) => cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
            isActive ? "bg-blue-50 dark:bg-blue-900/20 text-primary" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
          )}
        >
          <Settings className="w-5 h-5 shrink-0" />
          {isOpen && <span className="font-medium whitespace-nowrap">Settings</span>}
        </NavLink>
      </div>
    </motion.aside>
  );
}