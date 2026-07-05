import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Briefcase, Camera, Edit2 } from 'lucide-react';

export default function Profile() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-6">
      
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary to-blue-600"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-6 mt-12 md:mt-16">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-white">
              <img src="https://ui-avatars.com/api/?name=Demo+User&background=00ADEF&color=fff&size=128" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-2 right-2 p-2 bg-gray-900 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 shadow-lg">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold dark:text-white">Demo User</h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium">demo.user@finpilot.ai</p>
          </div>
          
          <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-5 py-2.5 rounded-xl font-semibold transition-colors">
            <Edit2 className="w-4 h-4" /> Edit Profile
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Email Address</p>
                  <p className="font-medium dark:text-white">demo.user@finpilot.ai</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Phone Number</p>
                  <p className="font-medium dark:text-white">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium dark:text-white">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Profile */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Financial Profile</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Occupation</span>
                </div>
                <p className="font-bold dark:text-white text-lg">Software Engineer</p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-5 h-5 text-success" />
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Account Status</span>
                </div>
                <p className="font-bold text-success text-lg flex items-center gap-2">Verified <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span></p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Monthly Income</span>
                </div>
                <p className="font-bold dark:text-white text-lg">₹80,000</p>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Target Savings Goal</span>
                </div>
                <p className="font-bold dark:text-white text-lg">₹20,000 / month</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
