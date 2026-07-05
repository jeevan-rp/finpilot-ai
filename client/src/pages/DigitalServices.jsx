import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, CreditCard, Landmark, Plane, Smartphone, TrendingUp, PiggyBank } from 'lucide-react';

const services = [
  { id: 1, title: 'Enable UPI', desc: 'Fast, secure, and instant payments anywhere.', icon: Zap, color: 'text-primary', bg: 'bg-primary' },
  { id: 2, title: 'Start SIP', desc: 'Invest regularly and build long-term wealth.', icon: TrendingUp, color: 'text-success', bg: 'bg-success' },
  { id: 3, title: 'Open FD', desc: 'Secure your savings with guaranteed returns.', icon: PiggyBank, color: 'text-warning', bg: 'bg-warning' },
  { id: 4, title: 'Credit Card', desc: 'Apply for a premium lifestyle credit card.', icon: CreditCard, color: 'text-purple-500', bg: 'bg-purple-500' },
  { id: 5, title: 'Insurance', desc: 'Protect your family with life & health coverage.', icon: Shield, color: 'text-error', bg: 'bg-error' },
  { id: 6, title: 'Personal Loan', desc: 'Instant funds with minimal documentation.', icon: Landmark, color: 'text-indigo-500', bg: 'bg-indigo-500' },
  { id: 7, title: 'Travel Forex', desc: 'Get multi-currency cards for your next trip.', icon: Plane, color: 'text-teal-500', bg: 'bg-teal-500' },
  { id: 8, title: 'Recharge & Bills', desc: 'Pay utilities and recharge mobile instantly.', icon: Smartphone, color: 'text-pink-500', bg: 'bg-pink-500' },
];

export default function DigitalServices() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold dark:text-white">Digital Services</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Explore our range of premium banking products.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.bg} bg-opacity-10 dark:bg-opacity-20 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-lg font-bold dark:text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                {service.desc}
              </p>
              <button className={`w-full py-2.5 rounded-xl text-sm font-semibold ${service.color} bg-gray-50 dark:bg-gray-700 group-hover:${service.bg} group-hover:text-white transition-colors`}>
                Explore Now
              </button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
