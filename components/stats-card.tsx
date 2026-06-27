'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { AnimatedNumber } from './animated-number';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  trend?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

export function StatsCard({
  icon: Icon,
  label,
  value,
  trend,
  prefix = '',
  suffix = '',
  delay = 0,
}: StatsCardProps) {
  const isTrendingUp = trend && trend > 0;
  const isTrendingDown = trend && trend < 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.3 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-colors">
            <Icon className="w-5 h-5 text-cyan-400" />
          </div>
          {(isTrendingUp || isTrendingDown) && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay * 0.1 + 0.2 }}
              className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md ${
                isTrendingUp
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {isTrendingUp ? (
                <ArrowUp className="w-3 h-3" />
              ) : (
                <ArrowDown className="w-3 h-3" />
              )}
              {Math.abs(trend!)}%
            </motion.div>
          )}
        </div>

        <p className="text-sm text-slate-400 mb-2">{label}</p>
        <div className="text-3xl font-bold text-white mb-4">
          {prefix}
          <AnimatedNumber
            value={value}
            decimals={suffix === '%' ? 0 : 2}
            duration={0.8}
          />
          {suffix}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-600/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-600/5 group-hover:to-cyan-500/5 transition-all duration-300" />
    </motion.div>
  );
}
