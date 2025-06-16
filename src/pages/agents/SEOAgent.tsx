import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const SEOAgent: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const analyzeUrl = async () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysis({
        overall_score: 78,
        issues: [
          { type: 'error', message: 'Missing meta description', impact: 'high' },
          { type: 'warning', message: 'Title tag too long (62 characters)', impact: 'medium' },
          { type: 'info', message: 'Good use of H1 tags', impact: 'positive' }
        ],
        keywords: [
          { keyword: 'AI marketing', density: 2.3, ranking: 'good' },
          { keyword: 'automation', density: 1.8, ranking: 'fair' },
          { keyword: 'digital strategy', density: 0.9, ranking: 'low' }
        ],
        technical: {
          loading_speed: 2.3,
          mobile_friendly: true,
          ssl_certificate: true,
          structured_data: false
        },
        suggestions: [
          'Add a compelling meta description (150-160 characters)',
          'Optimize title tag length to under 60 characters',
          'Increase keyword density for "digital strategy"',
          'Implement structured data markup',
          'Optimize images with alt text'
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
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
          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
            <Search className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">SEO Specialist</h1>
            <p className="text-white/60">Optimize your content for search engines</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* URL Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6">SEO Analysis</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Website URL</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={analyzeUrl}
                disabled={isAnalyzing || !url.trim()}
                className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-teal-600 hover:to-green-600 transition-all disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Analyze SEO</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Quick Tips */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">SEO Quick Tips</h3>
              <div className="space-y-2 text-sm">
                {[
                  'Use descriptive, keyword-rich titles',
                  'Write compelling meta descriptions',
                  'Optimize images with alt text',
                  'Create quality, relevant content',
                  'Build authoritative backlinks'
                ].map((tip, index) => (
                  <div key={index} className="flex items-start text-white/70">
                    <span className="w-1 h-1 bg-teal-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Analysis Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {!analysis ? (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center py-12">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white/40" />
                </div>
                <p className="text-white/60">Enter a URL to start your SEO analysis</p>
              </div>
            ) : (
              <>
                {/* Overall Score */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">SEO Score</h3>
                    <div className={`text-3xl font-bold ${getScoreColor(analysis.overall_score)}`}>
                      {analysis.overall_score}/100
                    </div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${
                        analysis.overall_score >= 80 ? 'from-green-500 to-emerald-500' :
                        analysis.overall_score >= 60 ? 'from-yellow-500 to-orange-500' :
                        'from-red-500 to-pink-500'
                      }`}
                      style={{ width: `${analysis.overall_score}%` }}
                    ></div>
                  </div>
                </div>

                {/* Issues */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Issues & Recommendations</h3>
                  <div className="space-y-3">
                    {analysis.issues.map((issue: any, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                        {issue.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />}
                        {issue.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />}
                        {issue.type === 'info' && <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />}
                        <div className="flex-1">
                          <p className="text-white text-sm">{issue.message}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            issue.impact === 'high' ? 'bg-red-400/10 text-red-400' :
                            issue.impact === 'medium' ? 'bg-yellow-400/10 text-yellow-400' :
                            'bg-green-400/10 text-green-400'
                          }`}>
                            {issue.impact === 'positive' ? 'Good' : `${issue.impact} impact`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Keywords */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Keyword Analysis</h3>
                  <div className="space-y-3">
                    {analysis.keywords.map((keyword: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div>
                          <span className="text-white font-medium">{keyword.keyword}</span>
                          <p className="text-white/60 text-sm">{keyword.density}% density</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          keyword.ranking === 'good' ? 'bg-green-400/10 text-green-400' :
                          keyword.ranking === 'fair' ? 'bg-yellow-400/10 text-yellow-400' :
                          'bg-red-400/10 text-red-400'
                        }`}>
                          {keyword.ranking}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical SEO */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Technical SEO</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">Loading Speed</span>
                        <span className="text-white">{analysis.technical.loading_speed}s</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">Mobile Friendly</span>
                        {analysis.technical.mobile_friendly ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">SSL Certificate</span>
                        {analysis.technical.ssl_certificate ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">Structured Data</span>
                        {analysis.technical.structured_data ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SEOAgent;