'use client';

import { motion } from 'framer-motion';
import { analyticsData, getDashboardStats, PROVIDERS } from '@/lib/demo-data';
import { useState, useMemo } from 'react';
import { Download, ChevronUp, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';

type SortKey = 'timestamp' | 'provider' | 'cost' | 'status';
type SortOrder = 'asc' | 'desc';

export default function Analytics() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('timestamp');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const stats = getDashboardStats();

  const filteredData = useMemo(() => {
    return analyticsData.filter(
      (item) =>
        item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.provider.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const sortedData = useMemo(() => {
    const sorted = [...filteredData].sort((a, b) => {
      let aVal = a[sortKey as keyof typeof a];
      let bVal = b[sortKey as keyof typeof b];

      if (typeof aVal === 'string') {
        return sortOrder === 'asc'
          ? (aVal as string).localeCompare(String(bVal))
          : String(bVal).localeCompare(aVal as string);
      }

      const numA = typeof aVal === 'number' ? aVal : 0;
      const numB = typeof bVal === 'number' ? bVal : 0;
      return sortOrder === 'asc' ? numA - numB : numB - numA;
    });
    return sorted;
  }, [filteredData, sortKey, sortOrder]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const totalCost = sortedData.reduce((sum, item) => sum + item.cost, 0);
  const avgCost = (totalCost / sortedData.length).toFixed(2);
  const totalTokens = sortedData.reduce(
    (sum, item) => sum + (item.inputTokens + item.outputTokens),
    0
  );

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return <div className="w-4 h-4" />;
    return sortOrder === 'asc' ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="px-6 py-8 border-b border-white/10"
      >
        <h1 className="text-3xl font-bold text-slate-50 mb-2">Analytics</h1>
        <p className="text-slate-400">Detailed breakdown of all API calls and usage.</p>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-sm text-slate-400 mb-2">Total Cost</p>
              <p className="text-2xl font-bold text-slate-50">
                ${totalCost.toFixed(2)}
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-sm text-slate-400 mb-2">Total Requests</p>
              <p className="text-2xl font-bold text-slate-50">
                {sortedData.length}
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-sm text-slate-400 mb-2">Avg Cost/Request</p>
              <p className="text-2xl font-bold text-slate-50">
                ${avgCost}
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-sm text-slate-400 mb-2">Success Rate</p>
              <p className="text-2xl font-bold text-emerald-400">98.5%</p>
            </div>
          </motion.div>

          {/* Search and Export */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 items-center"
          >
            <input
              type="text"
              placeholder="Search by model or provider..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="flex-1 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </motion.button>
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-slate-400">
                      <button
                        onClick={() => handleSort('timestamp')}
                        className="flex items-center gap-2 hover:text-slate-200 transition"
                      >
                        Timestamp
                        <SortIcon column="timestamp" />
                      </button>
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-slate-400">
                      <button
                        onClick={() => handleSort('provider')}
                        className="flex items-center gap-2 hover:text-slate-200 transition"
                      >
                        Provider
                        <SortIcon column="provider" />
                      </button>
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-slate-400">
                      Model
                    </th>
                    <th className="text-right px-6 py-4 font-semibold text-slate-400">
                      Tokens
                    </th>
                    <th className="text-right px-6 py-4 font-semibold text-slate-400">
                      <button
                        onClick={() => handleSort('cost')}
                        className="flex items-center justify-end gap-2 hover:text-slate-200 transition"
                      >
                        Cost
                        <SortIcon column="cost" />
                      </button>
                    </th>
                    <th className="text-center px-6 py-4 font-semibold text-slate-400">
                      <button
                        onClick={() => handleSort('status')}
                        className="flex items-center justify-center gap-2 hover:text-slate-200 transition"
                      >
                        Status
                        <SortIcon column="status" />
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {paginatedData.map((item, i) => {
                    const provider = PROVIDERS[item.provider as keyof typeof PROVIDERS];
                    return (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 + i * 0.01 }}
                        className="hover:bg-white/5 transition-colors"
                      >
                        <td className="px-6 py-4 text-slate-300">
                          {item.timestamp}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200">
                            {provider.name}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-300 font-mono text-xs">
                          {item.model}
                        </td>
                        <td className="px-6 py-4 text-right text-slate-300">
                          {(item.inputTokens + item.outputTokens).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-cyan-400">
                          ${item.cost.toFixed(4)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.status === 'success' ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
              <p className="text-sm text-slate-400">
                Showing {filteredData.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} to{' '}
                {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length}{' '}
                results
              </p>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="px-4 py-2 rounded-lg border border-white/20 text-slate-300 hover:bg-white/10 disabled:opacity-50 transition"
                >
                  Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  className="px-4 py-2 rounded-lg border border-white/20 text-slate-300 hover:bg-white/10 disabled:opacity-50 transition"
                >
                  Next
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
