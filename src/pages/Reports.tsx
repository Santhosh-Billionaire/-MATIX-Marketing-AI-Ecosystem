import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp } from 'lucide-react';

const Reports: React.FC = () => {
  const reports = [
    {
      id: 1,
      title: 'Monthly Marketing Performance',
      type: 'Performance Report',
      date: '2024-01-15',
      status: 'completed',
      metrics: { views: '12.5K', conversions: '234', roi: '340%' }
    },
    {
      id: 2,
      title: 'Social Media Analytics',
      type: 'Social Report',
      date: '2024-01-14',
      status: 'completed',
      metrics: { engagement: '4.2%', reach: '45.6K', followers: '+1.2K' }
    },
    {
      id: 3,
      title: 'Email Campaign Results',
      type: 'Email Report',
      date: '2024-01-13',
      status: 'completed',
      metrics: { open_rate: '28.3%', click_rate: '4.1%', conversions: '67' }
    },
    {
      id: 4,
      title: 'SEO Performance Analysis',
      type: 'SEO Report',
      date: '2024-01-12',
      status: 'processing',
      metrics: { keywords: '156', rankings: '+23', traffic: '+18%' }
    }
  ];

  const quickStats = [
    { label: 'Total Reports', value: '24', change: '+3 this month' },
    { label: 'Avg. Performance', value: '87%', change: '+5% vs last month' },
    { label: 'Data Points', value: '1.2M', change: '+12% growth' },
    { label: 'Insights Generated', value: '156', change: '+8 new insights' }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Campaign Reports</h1>
              <p className="text-white/60">Track performance and download insights</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Generate Report</span>
          </motion.button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm mb-2">{stat.label}</div>
              <div className="text-green-400 text-xs font-medium">{stat.change}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reports List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Recent Reports</h2>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{report.title}</h3>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="text-white/60 text-sm">{report.type}</span>
                        <span className="text-white/40">•</span>
                        <span className="text-white/60 text-sm">{report.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      report.status === 'completed' 
                        ? 'bg-green-400/10 text-green-400' 
                        : 'bg-yellow-400/10 text-yellow-400'
                    }`}>
                      {report.status}
                    </span>
                    {report.status === 'completed' && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <Download className="w-4 h-4 text-white" />
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(report.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-semibold text-white">{value}</div>
                      <div className="text-white/60 text-xs capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Performance Overview
            </h2>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 6 months</option>
            </select>
          </div>

          {/* Simplified Chart Representation */}
          <div className="space-y-4">
            {[
              { metric: 'Website Traffic', value: 85, color: 'from-blue-500 to-cyan-500' },
              { metric: 'Conversion Rate', value: 72, color: 'from-green-500 to-emerald-500' },
              { metric: 'Social Engagement', value: 91, color: 'from-purple-500 to-pink-500' },
              { metric: 'Email Performance', value: 68, color: 'from-orange-500 to-red-500' },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-32 text-white/70 text-sm">{item.metric}</div>
                <div className="flex-1 bg-white/10 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                    className={`h-3 rounded-full bg-gradient-to-r ${item.color}`}
                  />
                </div>
                <div className="w-12 text-white font-semibold text-sm">{item.value}%</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reports;