'use client';

import { Search, Bell, LogOut } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function AppTopbar() {
  const handleLogout = () => {
    localStorage.removeItem('agentops_user');
    window.location.href = '/';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left: Search */}
        <div className="flex items-center gap-2 flex-1">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
            <motion.input
              type="text"
              placeholder="Search API calls..."
              whileFocus={{ scale: 1.02 }}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg hover:bg-white/10 transition-colors group"
          >
            <Bell className="w-5 h-5 text-slate-400 group-hover:text-slate-200" />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"
            />
          </motion.button>

          {/* User Menu */}
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-slate-200"
              title="Sign out"
            >
              <LogOut className="w-5 h-5" />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white"
            >
              DM
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
