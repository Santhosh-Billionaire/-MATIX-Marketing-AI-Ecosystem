import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Users, Target } from 'lucide-react';

const AnalystAgent: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('technology');
  const [selectedMetric, setSelectedMetric] = useState('engagement');

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'Real Estate'
  ];

  const metrics = [
    { id: 'engagement', label: 'Engagement Rate', value: '4.2%', trend: '+12%' },
    { id: 'conversion', label: 'Conversion Rate', value: '2.8%', trend: '+8%' },
    { id: 'reach', label: 'Organic Reach', value: '15.3K', trend: '+24%' },
    { id: 'cac', label: 'Customer Acquisition Cost', value: '$45', trend: '-15%' },
  ];

  const competitorData = [
    { name: 'Competitor A', market_share: 32, growth: '+15%', color: 'from-red-500 to-pink-500' },
    { name: 'Competitor B', market_share: 28, growth: '+8%', color: 'from-blue-500 to-cyan-500' },
    { name: 'Your Brand', market_share: 18, growth: '+22%', color: 'from-green-500 to-emerald-500' },
    { name: 'Competitor C', market_share: 22, growth: '+5%', color: 'from-yellow-500 to-orange-500' },
  ];

  const personas = [
    {
      name: 'Tech Enthusiast',
      age: '25-35',
      income: '$60K-$90K',
      interests: ['Technology', 'Innovation', 'Startups'],
      percentage: 35
    },
    {
      name: 'Business Professional',
      age: '35-50',
      income: '$80K-$150K',
      interests: ['Productivity', 'Leadership', 'Networking'],
      percentage: 45
    },
    {
      name: 'Creative Professional',
      age: '28-40',
      income: '$50K-$80K',
      interests: ['Design', 'Marketing', 'Branding'],
      percentage: 20
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mb-8"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mr-4">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Market Analyst</h1>
            <p className="text-white/60">Analyze market trends and competitive intelligence</p>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Industry</label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry.toLowerCase()}>{industry}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Primary Metric</label>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
              >
                {metrics.map((metric) => (
                  <option key={metric.id} value={metric.id}>{metric.label}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Key Metrics
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg ${
                    selectedMetric === metric.id ? 'bg-pink-500/20 border border-pink-500/30' : 'bg-white/5'
                  }`}
                >
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-white/60 text-sm mb-2">{metric.label}</div>
                  <div className={`text-xs font-medium ${
                    metric.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.trend} vs last month
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Market Share */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <PieChart className="w-5 h-5 mr-2" />
              Market Share Analysis
            </h2>
            <div className="space-y-4">
              {competitorData.map((competitor, index) => (
                <motion.div
                  key={competitor.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${competitor.color}`}></div>
                    <span className="text-white font-medium">{competitor.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">{competitor.market_share}%</div>
                    <div className={`text-xs ${
                      competitor.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {competitor.growth}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6">
              <div className="flex h-3 rounded-full overflow-hidden">
                {competitorData.map((competitor, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${competitor.color}`}
                    style={{ width: `${competitor.market_share}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Customer Personas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Customer Personas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((persona, index) => (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">{persona.name}</h3>
                  <span className="text-pink-400 font-bold">{persona.percentage}%</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-white/60">Age: </span>
                    <span className="text-white">{persona.age}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Income: </span>
                    <span className="text-white">{persona.income}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Interests: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {persona.interests.map((interest, i) => (
                        <span key={i} className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full text-xs">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trend Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Market Trends & Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-4">Emerging Trends</h3>
              <div className="space-y-3">
                {[
                  { trend: 'AI-Powered Personalization', impact: 'High', growth: '+45%' },
                  { trend: 'Voice Search Optimization', impact: 'Medium', growth: '+32%' },
                  { trend: 'Interactive Content', impact: 'High', growth: '+28%' },
                  { trend: 'Micro-Influencer Marketing', impact: 'Medium', growth: '+56%' },
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium text-sm">{item.trend}</span>
                      <span className="text-green-400 text-xs font-medium">{item.growth}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.impact === 'High' ? 'bg-red-400/10 text-red-400' : 'bg-yellow-400/10 text-yellow-400'
                    }`}>
                      {item.impact} Impact
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Recommendations</h3>
              <div className="space-y-3">
                {[
                  'Invest in AI-powered marketing automation tools',
                  'Optimize content for voice search queries',
                  'Create more interactive and engaging content formats',
                  'Partner with micro-influencers in your niche',
                  'Focus on first-party data collection strategies'
                ].map((recommendation, index) => (
                  <div key={index} className="flex items-start text-white/70 text-sm">
                    <span className="w-1 h-1 bg-pink-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {recommendation}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalystAgent;