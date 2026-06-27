'use client';

import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { topModels } from '@/lib/demo-data';

const colors = ['#06b6d4', '#8b5cf6', '#d97706', '#10b981', '#f59e0b'];

export function TopModels() {
  const data = topModels.map((model) => ({
    ...model,
    shortName: model.name.substring(0, 16),
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >
      <h3 className="text-lg font-bold text-white mb-6">Top Models</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.1)"
          />
          <XAxis
            dataKey="shortName"
            stroke="rgba(255,255,255,0.3)"
            angle={-45}
            textAnchor="end"
            height={80}
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="rgba(255,255,255,0.3)"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)',
            }}
            formatter={(value: number) => value.toLocaleString()}
            labelStyle={{ color: '#e2e8f0' }}
          />
          <Bar
            dataKey="requests"
            isAnimationActive={true}
            animationDuration={500}
            radius={[8, 8, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 space-y-2">
        {topModels.map((model, index) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 + index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-cyan-400 w-6">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-slate-200">
                  {model.name}
                </p>
                <p className="text-xs text-slate-500">
                  ${model.cost.toFixed(2)} total spend
                </p>
              </div>
            </div>
            <span className="text-sm font-bold text-purple-400">
              {model.requests.toLocaleString()}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
