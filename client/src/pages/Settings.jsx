import React from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Paintbrush, Globe, LogOut, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SettingGroup = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">{title}</h3>
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
      {children}
    </div>
  </div>
);

const SettingItem = ({ icon: Icon, label, description, rightElement }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-50 dark:border-gray-700/50 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">{label}</p>
        {description && <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{description}</p>}
      </div>
    </div>
    <div className="flex items-center">
      {rightElement || <ChevronRight className="w-5 h-5 text-gray-400" />}
    </div>
  </div>
);

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold dark:text-white">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Manage your account preferences and configurations.</p>
      </div>

      <div className="mt-8">
        <SettingGroup title="Account">
          <SettingItem icon={User} label="Personal Information" description="Update your name, email, and phone number" />
          <SettingItem icon={Shield} label="Security & Privacy" description="Change password and manage 2FA" />
        </SettingGroup>

        <SettingGroup title="Preferences">
          <SettingItem 
            icon={Paintbrush} 
            label="Appearance" 
            description="Toggle Dark/Light mode"
            rightElement={
              <button 
                onClick={toggleTheme}
                className="px-4 py-1.5 rounded-full text-xs font-bold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </button>
            }
          />
          <SettingItem icon={Bell} label="Notifications" description="Configure email and push alerts" />
          <SettingItem icon={Globe} label="Language & Region" description="English (US), INR (₹)" />
        </SettingGroup>

        <SettingGroup title="Other">
          <SettingItem icon={LogOut} label="Log Out" description="Securely sign out of your account" />
        </SettingGroup>
      </div>
    </motion.div>
  );
}
