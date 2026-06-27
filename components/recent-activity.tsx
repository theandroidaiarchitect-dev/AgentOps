'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { PROVIDERS, recentActivity } from '@/lib/demo-data';

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.3 }}
      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >
      <h2 className="text-lg font-semibold text-slate-50 mb-6">Recent Activity</h2>

      <div className="space-y-2">
        {recentActivity.slice(0, 8).map((activity, i) => {
          const provider = PROVIDERS[activity.provider as keyof typeof PROVIDERS];
          const ProviderIcon = provider.icon;

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-white/5"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <ProviderIcon className="w-4 h-4" style={{ color: provider.color }} />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-50 truncate">
                  {activity.model}
                </p>
                <p className="text-xs text-slate-400">{activity.timestamp}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-50">
                    ${activity.cost.toFixed(2)}
                  </p>
                  <p className="text-xs text-slate-400">
                    {(activity.inputTokens + activity.outputTokens).toLocaleString()} tokens
                  </p>
                </div>

                {activity.status === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
