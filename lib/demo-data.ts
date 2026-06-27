import { Brain, Sparkles, Bot, Globe } from 'lucide-react';

export const PROVIDERS = {
  claude: { name: 'Claude', color: '#d97706', icon: Sparkles },
  opencode: { name: 'OpenCode Zen', color: '#06b6d4', icon: Brain },
  openai: { name: 'OpenAI', color: '#10b981', icon: Bot },
  openrouter: { name: 'OpenRouter', color: '#8b5cf6', icon: Globe },
};

export const dailyCostData = [
  { date: 'Jun 1', cost: 14.2, requests: 162 },
  { date: 'Jun 2', cost: 16.5, requests: 188 },
  { date: 'Jun 3', cost: 19.8, requests: 215 },
  { date: 'Jun 4', cost: 15.1, requests: 172 },
  { date: 'Jun 5', cost: 23.4, requests: 258 },
  { date: 'Jun 6', cost: 20.2, requests: 228 },
  { date: 'Jun 7', cost: 22.5, requests: 245 },
  { date: 'Jun 8', cost: 26.8, requests: 295 },
  { date: 'Jun 9', cost: 19.6, requests: 205 },
  { date: 'Jun 10', cost: 24.1, requests: 275 },
  { date: 'Jun 11', cost: 27.5, requests: 308 },
  { date: 'Jun 12', cost: 21.3, requests: 235 },
  { date: 'Jun 13', cost: 25.2, requests: 285 },
  { date: 'Jun 14', cost: 20.5, requests: 225 },
  { date: 'Jun 15', cost: 29.1, requests: 325 },
  { date: 'Jun 16', cost: 23.3, requests: 255 },
  { date: 'Jun 17', cost: 26.7, requests: 295 },
  { date: 'Jun 18', cost: 22.1, requests: 245 },
  { date: 'Jun 19', cost: 27.6, requests: 305 },
  { date: 'Jun 20', cost: 24.2, requests: 275 },
  { date: 'Jun 21', cost: 25.5, requests: 285 },
  { date: 'Jun 22', cost: 28.1, requests: 315 },
  { date: 'Jun 23', cost: 20.1, requests: 215 },
  { date: 'Jun 24', cost: 16.3, requests: 175 },
  { date: 'Jun 25', cost: 13.5, requests: 145 },
  { date: 'Jun 26', cost: 19.6, requests: 225 },
  { date: 'Jun 27', cost: 23.2, requests: 265 },
  { date: 'Jun 28', cost: 25.1, requests: 285 },
  { date: 'Jun 29', cost: 27.3, requests: 305 },
  { date: 'Jun 30', cost: 24.5, requests: 275 },
];

export const providerBreakdown = [
  { name: 'Claude', value: 98.5, percentage: 40, color: '#d97706' },
  { name: 'OpenAI', value: 74.2, percentage: 30, color: '#10b981' },
  { name: 'OpenRouter', value: 49.5, percentage: 20, color: '#8b5cf6' },
  { name: 'OpenCode Zen', value: 24.6, percentage: 10, color: '#06b6d4' },
];

export const topModels = [
  { name: 'claude-3-opus', requests: 3245, cost: 45.6 },
  { name: 'gpt-4-turbo', requests: 2158, cost: 38.2 },
  { name: 'claude-3-sonnet', requests: 1876, cost: 22.4 },
  { name: 'gpt-3.5-turbo', requests: 2945, cost: 18.6 },
  { name: 'openrouter-auto', requests: 1234, cost: 14.7 },
];

export const recentActivity = [
  {
    id: '1',
    timestamp: '2026-06-27 14:32:15',
    provider: 'claude',
    model: 'claude-3-opus',
    inputTokens: 1250,
    outputTokens: 456,
    cost: 0.84,
    latencyMs: 1234,
    status: 'success',
  },
  {
    id: '2',
    timestamp: '2026-06-27 14:31:42',
    provider: 'openai',
    model: 'gpt-4-turbo',
    inputTokens: 892,
    outputTokens: 234,
    cost: 0.56,
    latencyMs: 856,
    status: 'success',
  },
  {
    id: '3',
    timestamp: '2026-06-27 14:30:18',
    provider: 'openrouter',
    model: 'openrouter-auto',
    inputTokens: 654,
    outputTokens: 189,
    cost: 0.12,
    latencyMs: 2145,
    status: 'success',
  },
  {
    id: '4',
    timestamp: '2026-06-27 14:29:05',
    provider: 'opencode',
    model: 'opencode-zen-1',
    inputTokens: 2145,
    outputTokens: 567,
    cost: 0.45,
    latencyMs: 1567,
    status: 'error',
  },
  {
    id: '5',
    timestamp: '2026-06-27 14:27:32',
    provider: 'claude',
    model: 'claude-3-sonnet',
    inputTokens: 1456,
    outputTokens: 378,
    cost: 0.34,
    latencyMs: 1123,
    status: 'success',
  },
  {
    id: '6',
    timestamp: '2026-06-27 14:25:18',
    provider: 'openai',
    model: 'gpt-3.5-turbo',
    inputTokens: 756,
    outputTokens: 145,
    cost: 0.08,
    latencyMs: 634,
    status: 'success',
  },
  {
    id: '7',
    timestamp: '2026-06-27 14:23:45',
    provider: 'claude',
    model: 'claude-3-opus',
    inputTokens: 2234,
    outputTokens: 678,
    cost: 1.12,
    latencyMs: 1856,
    status: 'success',
  },
  {
    id: '8',
    timestamp: '2026-06-27 14:21:12',
    provider: 'openrouter',
    model: 'openrouter-auto',
    inputTokens: 543,
    outputTokens: 156,
    cost: 0.09,
    latencyMs: 1945,
    status: 'success',
  },
  {
    id: '9',
    timestamp: '2026-06-27 14:19:38',
    provider: 'openai',
    model: 'gpt-4-turbo',
    inputTokens: 1123,
    outputTokens: 289,
    cost: 0.67,
    latencyMs: 923,
    status: 'error',
  },
  {
    id: '10',
    timestamp: '2026-06-27 14:17:05',
    provider: 'claude',
    model: 'claude-3-sonnet',
    inputTokens: 892,
    outputTokens: 234,
    cost: 0.25,
    latencyMs: 1234,
    status: 'success',
  },
];

export const getDashboardStats = () => {
  const totalSpent = dailyCostData.reduce((sum, day) => sum + day.cost, 0);
  const totalRequests = dailyCostData.reduce((sum, day) => sum + day.requests, 0);
  const avgLatency = Math.round(
    recentActivity.reduce((sum, act) => sum + act.latencyMs, 0) / recentActivity.length
  );
  const monthlyBudget = 500;
  const percentageUsed = Math.round((totalSpent / monthlyBudget) * 100);
  const monthlyTrend = 12;

  return {
    totalSpent,
    totalRequests,
    avgLatency,
    activeProviders: Object.keys(PROVIDERS).length,
    monthlyBudget,
    percentageUsed,
    monthlyTrend,
  };
};

export const analyticsData = [
  ...recentActivity,
  {
    id: '11',
    timestamp: '2026-06-27 14:15:32',
    provider: 'opencode',
    model: 'opencode-zen-1',
    inputTokens: 1654,
    outputTokens: 423,
    cost: 0.32,
    latencyMs: 1834,
    status: 'success',
  },
  {
    id: '12',
    timestamp: '2026-06-27 14:13:18',
    provider: 'openai',
    model: 'gpt-3.5-turbo',
    inputTokens: 523,
    outputTokens: 98,
    cost: 0.05,
    latencyMs: 512,
    status: 'success',
  },
  {
    id: '13',
    timestamp: '2026-06-27 14:11:45',
    provider: 'claude',
    model: 'claude-3-opus',
    inputTokens: 3456,
    outputTokens: 789,
    cost: 1.45,
    latencyMs: 2234,
    status: 'success',
  },
  {
    id: '14',
    timestamp: '2026-06-27 14:09:22',
    provider: 'openrouter',
    model: 'openrouter-auto',
    inputTokens: 234,
    outputTokens: 56,
    cost: 0.04,
    latencyMs: 1567,
    status: 'success',
  },
  {
    id: '15',
    timestamp: '2026-06-27 14:07:05',
    provider: 'openai',
    model: 'gpt-4-turbo',
    inputTokens: 1234,
    outputTokens: 345,
    cost: 0.78,
    latencyMs: 1023,
    status: 'error',
  },
];

export const featureGridData = [
  {
    icon: '💰',
    title: 'Cost Tracking',
    description: 'Real-time monitoring across all AI providers with detailed breakdowns',
  },
  {
    icon: '🤖',
    title: 'Smart Routing',
    description: 'Automatically route requests to the cheapest models for your workload',
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Beautiful dashboards with actionable insights into spending patterns',
  },
  {
    icon: '🔐',
    title: 'Compliance',
    description: 'EU AI Act ready audit logs and compliance reporting',
  },
  {
    icon: '⚡',
    title: 'Alerts',
    description: 'Get notified when you&apos;re approaching budget limits',
  },
  {
    icon: '🔌',
    title: 'Any Provider',
    description: 'Integrate with OpenAI, Claude, Groq, OpenRouter, and more',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for personal projects',
    features: [
      'Track up to 10k API calls/month',
      'Basic analytics',
      'Email reports',
      'Community support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: 29,
    description: 'For growing teams',
    features: [
      'Unlimited API calls',
      'Advanced analytics',
      'Real-time alerts',
      'Team collaboration',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'For large scale operations',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
      'Advanced compliance reporting',
    ],
    cta: 'Contact Sales',
  },
];
