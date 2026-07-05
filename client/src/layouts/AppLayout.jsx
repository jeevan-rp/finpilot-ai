import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Menu, Bell, Search, Bot } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { Link, Outlet } from 'react-router-dom';

export default function AppLayout() {
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        {/* Top Navbar */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 border-b dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 dark:text-white" />
            </button>
            <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 w-64 lg:w-96">
              <Search className="w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search everywhere (Ctrl+K)" 
                className="bg-transparent border-none outline-none ml-2 text-sm w-full dark:text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/notifications" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative">
              <Bell className="w-5 h-5 dark:text-white" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full animate-pulse"></span>
            </Link>
            <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              {theme === 'dark' ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            <Link to="/profile" className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-600 overflow-hidden ml-2 cursor-pointer border-2 border-white dark:border-gray-800 shadow-sm">
              <img src="https://ui-avatars.com/api/?name=Fin+Pilot&background=random" alt="Avatar" />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Floating Copilot Button */}
      <Link 
        to="/coach" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,173,239,0.4)] hover:scale-110 transition-transform z-50 animate-bounce"
      >
        <Bot className="w-6 h-6" />
      </Link>
    </div>
  );
}
