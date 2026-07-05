import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ArrowDownRight, TrendingUp, AlertTriangle, ShieldCheck, Check } from 'lucide-react';
import { cn } from '../lib/utils';

const notifications = [
  { id: 1, title: 'Salary Credited', message: '₹1,25,000 has been credited to your account from ACME Corp.', time: '2 hours ago', icon: ArrowDownRight, color: 'text-success', bg: 'bg-green-100 dark:bg-green-900/30', unread: true },
  { id: 2, title: 'Suspicious Activity Detected', message: 'A transaction of ₹4,999 was attempted at a new merchant. Please verify.', time: '5 hours ago', icon: AlertTriangle, color: 'text-error', bg: 'bg-red-100 dark:bg-red-900/30', unread: true },
  { id: 3, title: 'SIP Investment Successful', message: 'Your monthly SIP of ₹15,000 in Nifty 50 Index Fund was successfully processed.', time: 'Yesterday', icon: TrendingUp, color: 'text-primary', bg: 'bg-blue-100 dark:bg-blue-900/30', unread: false },
  { id: 4, title: 'Account Verified', message: 'Your KYC documents have been successfully verified.', time: 'Oct 24', icon: ShieldCheck, color: 'text-gray-600 dark:text-gray-300', bg: 'bg-gray-100 dark:bg-gray-800', unread: false },
];

export default function Notifications() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-6">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-white flex items-center gap-3">
            Notifications 
            <span className="bg-error text-white text-xs px-2 py-0.5 rounded-full">2 New</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Stay updated with your account activity.</p>
        </div>
        <button className="text-sm font-semibold text-primary hover:text-blue-600 transition-colors flex items-center gap-2">
          <Check className="w-4 h-4" /> Mark all as read
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
          {notifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div 
                key={notif.id} 
                className={cn(
                  "p-5 flex items-start gap-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/30 cursor-pointer relative",
                  notif.unread ? "bg-blue-50/30 dark:bg-blue-900/10" : ""
                )}
              >
                {notif.unread && (
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-12 bg-primary rounded-r-full"></div>
                )}
                
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5", notif.bg, notif.color)}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={cn("font-bold", notif.unread ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300")}>
                      {notif.title}
                    </h3>
                    <span className="text-xs font-medium text-gray-400 whitespace-nowrap ml-4">{notif.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {notif.message}
                  </p>
                  
                  {notif.title === 'Suspicious Activity Detected' && (
                    <div className="mt-3 flex gap-2">
                      <button className="px-4 py-1.5 bg-error text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors">Block Card</button>
                      <button className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">It was me</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
