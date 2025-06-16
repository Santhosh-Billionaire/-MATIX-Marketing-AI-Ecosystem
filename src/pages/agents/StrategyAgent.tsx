import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Download, Send, Lightbulb, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

const StrategyAgent: React.FC = () => {
  const [formData, setFormData] = useState({
    productType: '',
    companySize: '',
    marketingGoals: '',
    targetAudience: '',
    budget: '',
    timeline: '',
    currentChannels: [],
    competitors: '',
    uniqueValue: '',
    painPoints: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [strategy, setStrategy] = useState<any>(null);
  const [analysisStep, setAnalysisStep] = useState(0);

  const channels = [
    'Social Media', 'Email Marketing', 'Content Marketing', 'SEO', 'Paid Ads', 
    'Influencer Marketing', 'PR', 'Events', 'Partnerships', 'Direct Sales'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChannelToggle = (channel: string) => {
    const currentChannels = formData.currentChannels;
    const updatedChannels = currentChannels.includes(channel)
      ? currentChannels.filter(c => c !== channel)
      : [...currentChannels, channel];
    setFormData({ ...formData, currentChannels: updatedChannels });
  };

  const generateStrategy = async () => {
    setIsGenerating(true);
    setAnalysisStep(0);
    
    // Simulate multi-step analysis
    const steps = [
      'Analyzing market conditions...',
      'Evaluating competitive landscape...',
      'Identifying target personas...',
      'Optimizing channel mix...',
      'Calculating budget allocation...',
      'Generating strategic roadmap...'
    ];

    for (let i = 0; i < steps.length; i++) {
      setAnalysisStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Generate comprehensive strategy
    setStrategy({
      overview: `Based on comprehensive analysis of your ${formData.productType} business targeting ${formData.targetAudience}, we've developed a data-driven marketing strategy optimized for ${formData.timeline}-month execution with a ${formData.budget} budget.`,
      
      marketAnalysis: {
        marketSize: '$2.4B',
        growthRate: '12.3%',
        competitiveIntensity: 'Medium-High',
        opportunityScore: 8.2
      },

      targetPersonas: [
        {
          name: 'Primary Decision Maker',
          demographics: '35-50 years, $75K+ income',
          painPoints: ['Time constraints', 'Budget optimization', 'ROI measurement'],
          channels: ['LinkedIn', 'Email', 'Industry publications'],
          messageAngle: 'Efficiency and proven results'
        },
        {
          name: 'Technical Evaluator',
          demographics: '28-40 years, Tech-savvy',
          painPoints: ['Integration complexity', 'Feature comparison', 'Security concerns'],
          channels: ['Technical blogs', 'Webinars', 'Product demos'],
          messageAngle: 'Technical superiority and ease of use'
        }
      ],

      phases: [
        {
          phase: "Month 1-2: Foundation & Research",
          budget: "25%",
          goals: ["Market research and competitive analysis", "Brand positioning refinement", "Content audit and planning", "Marketing infrastructure setup"],
          tactics: [
            "Conduct 50+ customer interviews and surveys",
            "Analyze top 10 competitors' strategies and positioning",
            "Set up advanced tracking and attribution systems",
            "Create comprehensive content calendar and style guide",
            "Establish KPI dashboard and reporting framework"
          ],
          deliverables: ["Market research report", "Competitive analysis", "Brand guidelines", "Content strategy"],
          kpis: ["Research completion: 100%", "Brand awareness baseline", "Content calendar: 3 months"]
        },
        {
          phase: "Month 3-4: Content & Engagement",
          budget: "35%",
          goals: ["Launch content marketing initiative", "Build social media presence", "Email list building", "SEO foundation"],
          tactics: [
            "Publish 16 high-quality blog posts with SEO optimization",
            "Create and distribute 8 lead magnets across different personas",
            "Launch social media campaigns on 3 primary platforms",
            "Implement email nurture sequences for each persona",
            "Start guest posting and thought leadership initiatives"
          ],
          deliverables: ["Content library", "Lead magnets", "Email sequences", "Social media presence"],
          kpis: ["Website traffic: +150%", "Email subscribers: 500+", "Social followers: +200%"]
        },
        {
          phase: "Month 5-6: Optimization & Scale",
          budget: "40%",
          goals: ["Optimize based on data", "Scale successful campaigns", "Launch paid advertising", "Partnership development"],
          tactics: [
            "A/B test all content and campaigns for optimization",
            "Launch targeted paid advertising on Google and LinkedIn",
            "Implement retargeting campaigns for website visitors",
            "Develop strategic partnerships and co-marketing opportunities",
            "Create case studies and customer success stories"
          ],
          deliverables: ["Optimized campaigns", "Paid ad campaigns", "Partnership agreements", "Case studies"],
          kpis: ["Lead generation: 300+ qualified leads", "Cost per lead: <$50", "Conversion rate: 3.5%+"]
        }
      ],

      channelStrategy: {
        primary: [
          { channel: 'Content Marketing', allocation: '30%', rationale: 'High-intent audience, long-term SEO benefits' },
          { channel: 'LinkedIn Ads', allocation: '25%', rationale: 'Direct access to B2B decision makers' },
          { channel: 'Email Marketing', allocation: '20%', rationale: 'Highest ROI, direct communication channel' }
        ],
        secondary: [
          { channel: 'SEO', allocation: '15%', rationale: 'Long-term organic growth' },
          { channel: 'Partnerships', allocation: '10%', rationale: 'Leverage existing networks' }
        ]
      },

      budgetBreakdown: {
        total: formData.budget === '5000' ? '$5,000-15,000' : formData.budget === '15000' ? '$15,000-50,000' : '$50,000+',
        allocation: [
          { category: 'Paid Advertising', percentage: 40, amount: '$2,000-6,000' },
          { category: 'Content Creation', percentage: 25, amount: '$1,250-3,750' },
          { category: 'Tools & Software', percentage: 15, amount: '$750-2,250' },
          { category: 'Design & Creative', percentage: 10, amount: '$500-1,500' },
          { category: 'Analytics & Testing', percentage: 10, amount: '$500-1,500' }
        ]
      },

      kpis: [
        { metric: 'Website Traffic', target: '+200%', timeframe: '6 months' },
        { metric: 'Qualified Leads', target: '500+ leads', timeframe: '6 months' },
        { metric: 'Cost per Lead', target: '<$45', timeframe: 'Month 6' },
        { metric: 'Email List Growth', target: '2,000 subscribers', timeframe: '6 months' },
        { metric: 'Social Media Engagement', target: '+300%', timeframe: '6 months' },
        { metric: 'Brand Awareness', target: '+150%', timeframe: '6 months' }
      ],

      riskMitigation: [
        'Diversify traffic sources to reduce platform dependency',
        'Implement robust tracking to measure true ROI',
        'Create content calendar buffer for consistent publishing',
        'Establish backup advertising accounts and payment methods',
        'Regular competitive monitoring and strategy adjustments'
      ],

      nextSteps: [
        'Approve strategy and budget allocation',
        'Set up tracking and analytics infrastructure',
        'Begin market research and competitor analysis',
        'Create content production workflow',
        'Establish team roles and responsibilities'
      ]
    });
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mb-8"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Strategic Marketing Planner</h1>
            <p className="text-white/60">AI-powered comprehensive marketing strategy development</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2" />
              Business Intelligence Input
            </h2>

            <div className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white/90">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Product/Service Type</label>
                    <input
                      type="text"
                      name="productType"
                      value={formData.productType}
                      onChange={handleInputChange}
                      placeholder="e.g., B2B SaaS, E-commerce, Consulting"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Company Size</label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select size</option>
                      <option value="startup">Startup (1-10 employees)</option>
                      <option value="small">Small Business (11-50 employees)</option>
                      <option value="medium">Medium Business (51-200 employees)</option>
                      <option value="large">Large Enterprise (200+ employees)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Strategic Goals */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white/90">Strategic Objectives</h3>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Primary Marketing Goals</label>
                  <textarea
                    name="marketingGoals"
                    value={formData.marketingGoals}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="e.g., Increase brand awareness by 150%, generate 500 qualified leads monthly, improve conversion rates to 3.5%"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Unique Value Proposition</label>
                  <textarea
                    name="uniqueValue"
                    value={formData.uniqueValue}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="What makes your product/service unique? What's your competitive advantage?"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Market Intelligence */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white/90">Market Intelligence</h3>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Target Audience</label>
                  <textarea
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="e.g., Small business owners, ages 25-45, tech-savvy, $50K-100K income, struggling with manual processes"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Main Competitors</label>
                  <input
                    type="text"
                    name="competitors"
                    value={formData.competitors}
                    onChange={handleInputChange}
                    placeholder="e.g., HubSpot, Salesforce, Mailchimp"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Customer Pain Points</label>
                  <textarea
                    name="painPoints"
                    value={formData.painPoints}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="What problems does your target audience face? What keeps them up at night?"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Current Marketing Channels */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white/90">Current Marketing Channels</h3>
                <div className="grid grid-cols-2 gap-2">
                  {channels.map((channel) => (
                    <motion.button
                      key={channel}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleChannelToggle(channel)}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        formData.currentChannels.includes(channel)
                          ? 'border-blue-500 bg-blue-500/10 text-white'
                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {channel}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Monthly Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select budget</option>
                    <option value="5000">$5,000 - $15,000</option>
                    <option value="15000">$15,000 - $50,000</option>
                    <option value="50000">$50,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Strategy Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="3">3 months (Quick wins)</option>
                    <option value="6">6 months (Balanced growth)</option>
                    <option value="12">12 months (Long-term strategy)</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateStrategy}
                disabled={isGenerating || !formData.productType || !formData.marketingGoals}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-cyan-600 transition-all disabled:opacity-50"
              >
                {isGenerating ? (
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing... Step {analysisStep + 1}/6</span>
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Generate Comprehensive Strategy</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {!strategy ? (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white/40" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Strategy Generator Ready</h3>
                <p className="text-white/60 mb-6">Provide your business details to generate a comprehensive, data-driven marketing strategy tailored to your specific goals and market conditions.</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-blue-400 font-semibold">Market Analysis</div>
                    <div className="text-white/60">Competitive intelligence & opportunities</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-green-400 font-semibold">Channel Strategy</div>
                    <div className="text-white/60">Optimized budget allocation</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-purple-400 font-semibold">Persona Mapping</div>
                    <div className="text-white/60">Detailed customer profiles</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-orange-400 font-semibold">KPI Framework</div>
                    <div className="text-white/60">Measurable success metrics</div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Strategy Header */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-white">Strategic Marketing Plan</h2>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium"
                    >
                      <Download className="w-4 h-4" />
                      <span>Export Strategy</span>
                    </motion.button>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{strategy.overview}</p>
                </div>

                {/* Market Analysis */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Market Analysis
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(strategy.marketAnalysis).map(([key, value]) => (
                      <div key={key} className="bg-white/5 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-white/60 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Personas */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Target Personas
                  </h3>
                  <div className="space-y-4">
                    {strategy.targetPersonas.map((persona: any, index: number) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-2">{persona.name}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-white/60">Demographics: </span>
                            <span className="text-white">{persona.demographics}</span>
                          </div>
                          <div>
                            <span className="text-white/60">Message: </span>
                            <span className="text-white">{persona.messageAngle}</span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="text-white/60 text-sm">Pain Points: </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {persona.painPoints.map((pain: string, i: number) => (
                              <span key={i} className="bg-red-500/20 text-red-300 px-2 py-1 rounded-full text-xs">
                                {pain}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategy Phases */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Strategic Roadmap
                  </h3>
                  <div className="space-y-6">
                    {strategy.phases.map((phase: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-white font-medium">{phase.phase}</h4>
                          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                            {phase.budget} Budget
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-white/60 text-sm font-medium mb-2">Goals:</p>
                            <ul className="text-white/70 text-sm space-y-1">
                              {phase.goals.map((goal: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {goal}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-white/60 text-sm font-medium mb-2">Key Tactics:</p>
                            <ul className="text-white/70 text-sm space-y-1">
                              {phase.tactics.slice(0, 3).map((tactic: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {tactic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {phase.kpis.map((kpi: string, i: number) => (
                            <div key={i} className="bg-white/5 rounded p-2 text-center">
                              <div className="text-green-400 text-sm font-medium">{kpi}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Budget Allocation */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Budget Allocation
                  </h3>
                  <div className="space-y-3">
                    {strategy.budgetBreakdown.allocation.map((item: any, index: number) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
                          <span className="text-white font-medium">{item.category}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">{item.percentage}%</div>
                          <div className="text-white/60 text-sm">{item.amount}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* KPIs and Success Metrics */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Success Metrics & KPIs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {strategy.kpis.map((kpi: any, index: number) => (
                      <div key={index} className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white font-medium text-sm">{kpi.metric}</span>
                          <span className="text-green-400 font-bold">{kpi.target}</span>
                        </div>
                        <div className="text-white/60 text-xs">{kpi.timeframe}</div>
                      </div>
                    ))}
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

export default StrategyAgent;