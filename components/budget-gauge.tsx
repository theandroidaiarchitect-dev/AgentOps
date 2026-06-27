'use client';

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { getDashboardStats } from '@/lib/demo-data';

export function BudgetGauge() {
  const stats = getDashboardStats();
  const percentage = stats.percentageUsed;

  const getStatusLabel = () => {
    if (percentage < 50) return 'On Track';
    if (percentage < 80) return 'Caution';
    return 'Over Budget';
  };

  const isWarning = percentage >= 80;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.3 }}
      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >
      <h3 className="text-lg font-bold text-white mb-6">Monthly Budget</h3>

      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
            />
            <motion.circle
              initial={{ strokeDashoffset: 314 }}
              animate={{ strokeDashoffset: 314 * (1 - percentage / 100) }}
              transition={{ delay: 0.7, duration: 0.8 }}
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="8"
              strokeDasharray="314"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gaugeGradient">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl font-bold text-slate-50"
            >
              {percentage}%
            </motion.p>
            <p className="text-xs text-slate-400">Used</p>
          </div>
        </div>

        <div className="w-full space-y-3 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
          >
            <p
              className={`text-sm font-semibold ${
                percentage < 50
                  ? 'text-green-400'
                  : percentage < 80
                  ? 'text-yellow-400'
                  : 'text-red-400'
              }`}
            >
              {getStatusLabel()}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="space-y-1"
          >
            <p className="text-sm text-slate-50 font-semibold">
              ${stats.totalSpent.toFixed(2)} / ${stats.monthlyBudget}
            </p>
            <p className="text-xs text-slate-400">
              ${(stats.monthlyBudget - stats.totalSpent).toFixed(2)} remaining
            </p>
          </motion.div>
        </div>
      </div>

      {isWarning && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="mt-6 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-start gap-3"
        >
          <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-yellow-200">
            {percentage >= 100
              ? 'Budget exceeded! Take action to control spending.'
              : 'Approaching budget limit. Consider optimizing your API usage.'}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
