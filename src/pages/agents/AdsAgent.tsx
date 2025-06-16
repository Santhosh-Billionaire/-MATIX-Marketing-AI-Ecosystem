import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Target, DollarSign, BarChart3 } from 'lucide-react';

const AdsAgent: React.FC = () => {
  const [campaign, setCampaign] = useState({
    objective: '',
    platform: '',
    budget: '',
    audience: '',
    adCopy: '',
    headline: ''
  });
  const [predictions, setPredictions] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const objectives = [
    'Brand Awareness', 'Lead Generation', 'Website Traffic', 'Conversions', 'App Installs'
  ];

  const platforms = [
    { id: 'google', name: 'Google Ads', icon: '🔍' },
    { id: 'facebook', name: 'Facebook Ads', icon: '📘' },
    { id: 'instagram', name: 'Instagram Ads', icon: '📸' },
    { id: 'linkedin', name: 'LinkedIn Ads', icon: '💼' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setCampaign({ ...campaign, [field]: value });
  };

  const generateCampaign = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setPredictions({
        ctr: 3.2,
        cpc: 1.85,
        impressions: 12500,
        clicks: 400,
        conversions: 32,
        cost: 740,
        roas: 4.2
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mb-8"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
            <Megaphone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Ad Manager</h1>
            <p className="text-white/60">Create and optimize advertising campaigns</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Campaign Setup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Campaign Setup
            </h2>

            <div className="space-y-4">
              {/* Campaign Objective */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Campaign Objective</label>
                <select
                  value={campaign.objective}
                  onChange={(e) => handleInputChange('objective', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                >
                  <option value="">Select objective</option>
                  {objectives.map((obj) => (
                    <option key={obj} value={obj}>{obj}</option>
                  ))}
                </select>
              </div>

              {/* Platform Selection */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Platform</label>
                <div className="grid grid-cols-2 gap-2">
                  {platforms.map((platform) => (
                    <motion.button
                      key={platform.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleInputChange('platform', platform.id)}
                      className={`p-3 rounded-lg border transition-all ${
                        campaign.platform === platform.id
                          ? 'border-yellow-500 bg-yellow-500/10 text-white'
                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-2xl mb-1">{platform.icon}</div>
                      <div className="text-sm font-medium">{platform.name}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Daily Budget</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="number"
                    value={campaign.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    placeholder="50"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Target Audience</label>
                <textarea
                  value={campaign.audience}
                  onChange={(e) => handleInputChange('audience', e.target.value)}
                  rows={3}
                  placeholder="e.g., Small business owners, ages 25-45, interested in marketing automation"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                />
              </div>

              {/* Ad Copy */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Ad Headline</label>
                <input
                  type="text"
                  value={campaign.headline}
                  onChange={(e) => handleInputChange('headline', e.target.value)}
                  placeholder="Compelling headline for your ad"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Ad Description</label>
                <textarea
                  value={campaign.adCopy}
                  onChange={(e) => handleInputChange('adCopy', e.target.value)}
                  rows={3}
                  placeholder="Write compelling ad copy that drives action..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateCampaign}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-yellow-600 hover:to-orange-600 transition-all disabled:opacity-50"
              >
                {isGenerating ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <BarChart3 className="w-4 h-4" />
                    <span>Generate Predictions</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Predictions & Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Ad Preview */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Ad Preview</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-sm text-green-400 mb-1">Sponsored</div>
                <h4 className="text-white font-semibold mb-2">
                  {campaign.headline || "Your ad headline will appear here"}
                </h4>
                <p className="text-white/70 text-sm mb-3">
                  {campaign.adCopy || "Your ad description will appear here..."}
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium">
                  Learn More
                </button>
                <div className="text-xs text-white/40 mt-2">yourwebsite.com</div>
              </div>
            </div>

            {/* Performance Predictions */}
            {predictions && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Performance Predictions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">{predictions.ctr}%</div>
                    <div className="text-white/60 text-sm">Click-through Rate</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">${predictions.cpc}</div>
                    <div className="text-white/60 text-sm">Cost per Click</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">{predictions.impressions.toLocaleString()}</div>
                    <div className="text-white/60 text-sm">Impressions</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-orange-400">{predictions.clicks}</div>
                    <div className="text-white/60 text-sm">Clicks</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-pink-400">{predictions.conversions}</div>
                    <div className="text-white/60 text-sm">Conversions</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{predictions.roas}x</div>
                    <div className="text-white/60 text-sm">ROAS</div>
                  </div>
                </div>
              </div>
            )}

            {/* Optimization Tips */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Optimization Tips</h3>
              <div className="space-y-3">
                {[
                  'Test multiple ad variations to find the best performer',
                  'Use negative keywords to improve targeting',
                  'Set up conversion tracking for better optimization',
                  'Monitor performance daily and adjust bids accordingly',
                  'Create compelling landing pages that match your ad copy'
                ].map((tip, index) => (
                  <div key={index} className="flex items-start text-white/70 text-sm">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdsAgent;