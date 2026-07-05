import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="glass-card p-4 flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded shrink-0 flex items-center justify-center overflow-hidden">
          <img src="/fintech.png" alt="FinPilot Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-2xl font-bold text-primary">FinPilot AI</h1>
      </div>
      <div className="flex gap-4">
        <Link to="/dashboard" className="text-darkBlue hover:text-primary">Dashboard</Link>
        <Link to="/coach" className="text-darkBlue hover:text-primary">AI Coach</Link>
      </div>
    </nav>
  );
}