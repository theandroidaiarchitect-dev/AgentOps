'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Trash2, Plus, Copy, Check } from 'lucide-react';
import { storage } from '@/lib/storage';

type Tab = 'keys' | 'budget' | 'team';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>('keys');
  const [apiKeys, setApiKeys] = useState(storage.getApiKeys());
  const [showNewKeyForm, setShowNewKeyForm] = useState(false);
  const [newKey, setNewKey] = useState({ provider: '', label: '', key: '' });
  const [copied, setCopied] = useState<string | null>(null);
  const [budgetConfig, setBudgetConfig] = useState(storage.getBudgetConfig());
  const [teamMembers] = useState(storage.getTeamMembers());

  const handleAddKey = () => {
    if (newKey.provider && newKey.label && newKey.key) {
      const id = Math.random().toString(36).substring(7);
      const maskedKey = newKey.key.substring(0, 7) + '...' + newKey.key.substring(-4);
      const keyObj = { id, ...newKey, prefix: maskedKey };
      const updated = [...apiKeys, keyObj];
      setApiKeys(updated);
      storage.setApiKeys(updated);
      setNewKey({ provider: '', label: '', key: '' });
      setShowNewKeyForm(false);
    }
  };

  const handleDeleteKey = (id: string) => {
    const updated = apiKeys.filter((k) => k.id !== id);
    setApiKeys(updated);
    storage.setApiKeys(updated);
  };

  const handleCopyKey = (key: string, id: string) => {
    navigator.clipboard.writeText(key);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleBudgetChange = (config: typeof budgetConfig) => {
    setBudgetConfig(config);
    storage.setBudgetConfig(config);
  };

  const tabs: Array<{ id: Tab; label: string }> = [
    { id: 'keys', label: 'API Keys' },
    { id: 'budget', label: 'Budget & Alerts' },
    { id: 'team', label: 'Team Members' },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="px-6 py-8 border-b border-white/10"
      >
        <h1 className="text-3xl font-bold text-slate-50 mb-2">Settings</h1>
        <p className="text-slate-400">Manage your account, API keys, and preferences.</p>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-4 border-b border-white/10"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'border-cyan-500 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'keys' && (
              <motion.div
                key="keys"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-slate-50">API Keys</h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowNewKeyForm(!showNewKeyForm)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Key
                  </motion.button>
                </div>

                {showNewKeyForm && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 rounded-lg border border-white/10 bg-white/5"
                  >
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">
                          Provider
                        </label>
                        <select
                          value={newKey.provider}
                          onChange={(e) =>
                            setNewKey({ ...newKey, provider: e.target.value })
                          }
                          className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-50 focus:border-cyan-500/50 transition-all"
                        >
                          <option value="">Select provider...</option>
                          <option value="openai">OpenAI</option>
                          <option value="claude">Claude</option>
                          <option value="groq">Groq</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">
                          Label
                        </label>
                        <input
                          type="text"
                          value={newKey.label}
                          onChange={(e) =>
                            setNewKey({ ...newKey, label: e.target.value })
                          }
                          placeholder="e.g., Production"
                          className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-50 placeholder-slate-500 focus:border-cyan-500/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">
                          API Key
                        </label>
                        <input
                          type="password"
                          value={newKey.key}
                          onChange={(e) =>
                            setNewKey({ ...newKey, key: e.target.value })
                          }
                          placeholder="Enter your API key"
                          className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-50 placeholder-slate-500 focus:border-cyan-500/50 transition-all"
                        />
                      </div>
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={handleAddKey}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold"
                        >
                          Save Key
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setShowNewKeyForm(false)}
                          className="px-4 py-2 rounded-lg border border-white/20 text-slate-300 hover:bg-white/10"
                        >
                          Cancel
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-3">
                  {apiKeys.map((key, i) => (
                    <motion.div
                      key={key.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-4 rounded-lg border border-white/10 bg-white/5 flex items-center justify-between hover:bg-white/10 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-slate-50">{key.label}</p>
                        <p className="text-xs text-slate-400 font-mono">
                          {key.prefix}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={() => handleCopyKey(key.key, key.id)}
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          {copied === key.id ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-slate-400" />
                          )}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={() => handleDeleteKey(key.id)}
                          className="p-2 rounded-lg hover:bg-red-500/20 transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'budget' && (
              <motion.div
                key="budget"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                  <h3 className="font-semibold text-slate-50 mb-4">Monthly Budget</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        Monthly Limit ($)
                      </label>
                      <input
                        type="number"
                        value={budgetConfig.monthlyLimit}
                        onChange={(e) =>
                          handleBudgetChange({
                            ...budgetConfig,
                            monthlyLimit: parseFloat(e.target.value),
                          })
                        }
                        className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        Alert at {budgetConfig.alertThreshold}% of budget
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={budgetConfig.alertThreshold}
                        onChange={(e) =>
                          handleBudgetChange({
                            ...budgetConfig,
                            alertThreshold: parseInt(e.target.value),
                          })
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={budgetConfig.enabled}
                          onChange={(e) =>
                            handleBudgetChange({
                              ...budgetConfig,
                              enabled: e.target.checked,
                            })
                          }
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-slate-400">Enable budget alerts</span>
                      </label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'team' && (
              <motion.div
                key="team"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  {teamMembers.map((member: any, i: number) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-4 rounded-lg border border-white/10 bg-white/5 flex items-center justify-between hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <p className="font-semibold text-slate-50">{member.email}</p>
                        <p className="text-xs text-slate-400">
                          {member.status === 'active' ? '✓ Active' : '⧗ Pending'}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          member.role === 'admin'
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {member.role}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
