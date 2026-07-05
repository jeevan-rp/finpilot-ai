import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="glass-card p-4 flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-primary">FinPilot AI</h1>
      <div className="flex gap-4">
        <Link to="/dashboard" className="text-darkBlue hover:text-primary">Dashboard</Link>
        <Link to="/coach" className="text-darkBlue hover:text-primary">AI Coach</Link>
      </div>
    </nav>
  );
}