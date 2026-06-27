'use client';

import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { providerBreakdown } from '@/lib/demo-data';

export function ProviderChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >
      <h3 className="text-lg font-bold text-white mb-6">Cost by Provider</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={providerBreakdown}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percentage }) => `${name} ${percentage}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            animationDuration={800}
            animationBegin={200}
          >
            {providerBreakdown.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)',
            }}
            formatter={(value: number) => `$${value.toFixed(2)}`}
            labelStyle={{ color: '#e2e8f0' }}
          />
          <Legend
            wrapperStyle={{
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
            }}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {providerBreakdown.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="text-sm font-medium text-slate-200">{item.name}</p>
              <p className="text-xs text-slate-400">${item.value.toFixed(2)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
