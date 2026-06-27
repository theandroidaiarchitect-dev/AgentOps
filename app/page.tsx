'use client'

import Link from 'next/link'
import { TrendingUp, Zap, BarChart3, Shield, Bell, Plug } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Cost Tracking',
    description: 'Real-time monitoring across all AI providers',
  },
  {
    icon: Zap,
    title: 'Smart Routing',
    description: 'Auto-route to the cheapest model for your use case',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Beautiful dashboards and detailed insights',
  },
  {
    icon: Shield,
    title: 'Compliance',
    description: 'EU AI Act ready audit logs',
  },
  {
    icon: Bell,
    title: 'Alerts',
    description: 'Budget notifications and cost anomalies',
  },
  {
    icon: Plug,
    title: 'Any Provider',
    description: 'Works with OpenAI, Claude, and more',
  },
]

const pricing = [
  {
    name: 'Free',
    price: '$0',
    description: 'For getting started',
    features: [
      'Up to 1,000 API calls/month',
      'Basic cost tracking',
      'Email support',
      'Standard dashboard',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For scaling teams',
    features: [
      'Unlimited API calls',
      'Advanced analytics',
      'Team management',
      'Priority support',
      'Custom alerts',
      'Cost optimization recommendations',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom integrations',
      'SSO/SAML',
      'Advanced compliance',
      'SLA guarantee',
    ],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">AgentOps</span>
          </div>
          <Link
            href="/dashboard"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            Go to Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-600/5 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Track Every API Penny Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Agents Spend
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            AgentOps is the complete cost & compliance hub for AI agents. Monitor your spending across all providers in real-time, optimize your infrastructure, and stay compliant with regulations.
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <Link
              href="/dashboard"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 animate-pulse-glow"
            >
              Start Tracking
            </Link>
            <button className="px-8 py-4 rounded-lg border border-white/20 text-white font-bold hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-16">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-cyan-400">10K+</p>
              <p className="text-sm text-slate-400">Active Users</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-purple-400">$50M+</p>
              <p className="text-sm text-slate-400">Tracked Spend</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-cyan-400">99.9%</p>
              <p className="text-sm text-slate-400">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything You Need to Control Your AI Spend
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/50 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 w-fit mb-4 group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Simple, Transparent Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl border p-8 transition-all animate-fadeInUp ${
                  plan.highlight
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 scale-105 ring-2 ring-cyan-500/50'
                    : 'border-white/10 bg-white/5'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.highlight && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-slate-200 transition">Features</a></li>
                <li><a href="#" className="hover:text-slate-200 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-200 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-slate-200 transition">About</a></li>
                <li><a href="#" className="hover:text-slate-200 transition">Blog</a></li>
                <li><a href="#" className="hover:text-slate-200 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-slate-200 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-slate-200 transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-slate-200 transition">Support</a></li>
                <li><a href="#" className="hover:text-slate-200 transition">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <p className="text-sm text-slate-400">© 2026 AgentOps. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-slate-400">
              <a href="#" className="hover:text-slate-200 transition">Status</a>
              <a href="#" className="hover:text-slate-200 transition">API Docs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
