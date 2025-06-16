import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Eye, BarChart3 } from 'lucide-react';

const EmailAgent: React.FC = () => {
  const [campaign, setCampaign] = useState({
    subject: '',
    preview: '',
    content: '',
    cta: '',
    audience: ''
  });
  const [isPreview, setIsPreview] = useState(false);

  const templates = [
    { id: 'newsletter', name: 'Newsletter', preview: 'Weekly updates and insights' },
    { id: 'promotion', name: 'Promotional', preview: 'Special offers and discounts' },
    { id: 'welcome', name: 'Welcome Series', preview: 'Onboard new subscribers' },
    { id: 'abandoned', name: 'Abandoned Cart', preview: 'Recover lost sales' },
  ];

  const audienceSegments = [
    'All Subscribers', 'New Subscribers', 'Active Users', 'Inactive Users', 'VIP Customers'
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
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Email Specialist</h1>
            <p className="text-white/60">Design and send effective email campaigns</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Email Builder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            {/* Template Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Email Templates</h3>
              <div className="grid grid-cols-2 gap-3">
                {templates.map((template) => (
                  <motion.div
                    key={template.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <h4 className="text-white font-medium text-sm">{template.name}</h4>
                    <p className="text-white/60 text-xs">{template.preview}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Email Content */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Subject Line</label>
                  <input
                    type="text"
                    value={campaign.subject}
                    onChange={(e) => setCampaign({ ...campaign, subject: e.target.value })}
                    placeholder="Your compelling subject line"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Preview Text</label>
                  <input
                    type="text"
                    value={campaign.preview}
                    onChange={(e) => setCampaign({ ...campaign, preview: e.target.value })}
                    placeholder="Preview text shown in inbox"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Email Content</label>
                <textarea
                  value={campaign.content}
                  onChange={(e) => setCampaign({ ...campaign, content: e.target.value })}
                  rows={8}
                  placeholder="Write your email content here..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Call-to-Action</label>
                  <input
                    type="text"
                    value={campaign.cta}
                    onChange={(e) => setCampaign({ ...campaign, cta: e.target.value })}
                    placeholder="Get Started Now"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Audience</label>
                  <select
                    value={campaign.audience}
                    onChange={(e) => setCampaign({ ...campaign, audience: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="">Select audience</option>
                    {audienceSegments.map((segment) => (
                      <option key={segment} value={segment}>{segment}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsPreview(!isPreview)}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-indigo-600 hover:to-blue-600 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Campaign</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Email Preview */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Email Preview</h3>
              <div className="bg-white rounded-lg p-4 text-black">
                <div className="border-b border-gray-200 pb-2 mb-3">
                  <div className="font-semibold text-sm">
                    {campaign.subject || "Subject line will appear here"}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {campaign.preview || "Preview text will appear here"}
                  </div>
                </div>
                <div className="text-sm leading-relaxed mb-4">
                  {campaign.content || "Email content will appear here..."}
                </div>
                {campaign.cta && (
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded text-sm font-medium">
                    {campaign.cta}
                  </button>
                )}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Expected Performance
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Open Rate</span>
                  <span className="text-green-400 font-medium">24-28%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Click Rate</span>
                  <span className="text-blue-400 font-medium">3-5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Conversion Rate</span>
                  <span className="text-purple-400 font-medium">1.5-2.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Deliverability</span>
                  <span className="text-green-400 font-medium">96-98%</span>
                </div>
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">AI Suggestions</h3>
              <div className="space-y-3">
                {[
                  'Add personalization to increase open rates',
                  'Include urgency in your subject line',
                  'Test different CTA button colors',
                  'Segment your audience for better targeting',
                  'A/B test subject lines'
                ].map((suggestion, index) => (
                  <div key={index} className="flex items-start text-white/70 text-sm">
                    <span className="w-1 h-1 bg-indigo-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Campaigns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Recent Campaigns</h2>
          <div className="space-y-4">
            {[
              { name: 'Weekly Newsletter #12', sent: '1,247 recipients', open: '28.3%', click: '4.1%', status: 'sent' },
              { name: 'Black Friday Promotion', sent: '3,456 recipients', open: '31.2%', click: '6.8%', status: 'sent' },
              { name: 'Product Launch Announcement', sent: 'Draft', open: '-', click: '-', status: 'draft' },
            ].map((campaign, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">{campaign.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'sent' ? 'bg-green-400/10 text-green-400' : 'bg-yellow-400/10 text-yellow-400'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-white/60">Sent: </span>
                    <span className="text-white">{campaign.sent}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Open Rate: </span>
                    <span className="text-white">{campaign.open}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Click Rate: </span>
                    <span className="text-white">{campaign.click}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmailAgent;