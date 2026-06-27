'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { StatsCard } from '@/components/stats-card';
import { CostChart } from '@/components/cost-chart';
import { ProviderChart } from '@/components/provider-chart';
import { RecentActivity } from '@/components/recent-activity';
import { BudgetGauge } from '@/components/budget-gauge';
import { TopModels } from '@/components/top-models';
import { getDashboardStats } from '@/lib/demo-data';
import { TrendingUp, Users, Zap, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const stats = getDashboardStats();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-8 border-b border-white/10"
        >
          <h1 className="text-3xl font-bold text-slate-50 mb-2">Dashboard</h1>
          <p className="text-slate-400">Welcome back! Here&apos;s your AI cost overview.</p>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto px-6 py-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <StatsCard
                icon={TrendingUp}
                label="Total Spent"
                value={`$${stats.totalSpent.toFixed(2)}`}
                trend={stats.monthlyTrend}
                delay={0}
              />
              <StatsCard
                icon={Activity}
                label="Total Requests"
                value={stats.totalRequests.toLocaleString()}
                delay={1}
              />
              <StatsCard
                icon={Users}
                label="Active Providers"
                value={stats.activeProviders}
                delay={2}
              />
              <StatsCard
                icon={Zap}
                label="Avg Latency"
                value={`${stats.avgLatency}ms`}
                delay={3}
              />
            </motion.div>

            {/* Charts Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              <div className="lg:col-span-2">
                <CostChart />
              </div>
              <div>
                <BudgetGauge />
              </div>
            </motion.div>

            {/* Second Row Charts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <ProviderChart />
              <TopModels />
            </motion.div>

            {/* Recent Activity */}
            <RecentActivity />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
