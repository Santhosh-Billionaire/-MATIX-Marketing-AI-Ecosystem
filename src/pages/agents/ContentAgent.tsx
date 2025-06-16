import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Copy, RefreshCw, Sparkles, BookOpen, Hash, Zap, Target } from 'lucide-react';

const ContentAgent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('blog');
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState('professional');
  const [targetAudience, setTargetAudience] = useState('');
  const [keywords, setKeywords] = useState('');
  const [contentLength, setContentLength] = useState('medium');
  const [includeStats, setIncludeStats] = useState(false);
  const [includeCTA, setIncludeCTA] = useState(true);
  const [generatedContent, setGeneratedContent] = useState('');
  const [contentAnalysis, setContentAnalysis] = useState<any>(null);

  const contentTypes = [
    { id: 'blog', label: 'Blog Post', placeholder: 'Write a comprehensive blog post about...', icon: BookOpen },
    { id: 'social', label: 'Social Caption', placeholder: 'Create engaging social media content about...', icon: Hash },
    { id: 'email', label: 'Email Copy', placeholder: 'Write a compelling email about...', icon: Target },
    { id: 'ad', label: 'Ad Copy', placeholder: 'Create high-converting ad copy for...', icon: Zap }
  ];

  const tones = [
    'Professional', 'Casual', 'Friendly', 'Formal', 'Humorous', 'Inspirational', 'Authoritative', 'Conversational'
  ];

  const contentLengths = [
    { id: 'short', label: 'Short (300-500 words)', description: 'Quick reads, social posts' },
    { id: 'medium', label: 'Medium (800-1200 words)', description: 'Standard blog posts' },
    { id: 'long', label: 'Long (1500-2500 words)', description: 'In-depth guides, whitepapers' }
  ];

  const generateContent = async () => {
    setIsGenerating(true);
    
    // Simulate AI content generation with multiple steps
    await new Promise(resolve => setTimeout(resolve, 2000));

    const sampleContent = {
      blog: `# The Future of AI in Marketing: A Complete Guide for 2024

Artificial Intelligence is revolutionizing the marketing landscape at an unprecedented pace. As we move into 2024, businesses that fail to embrace AI-powered marketing solutions risk being left behind by more agile competitors.

## The Current State of AI Marketing

Recent studies show that 84% of marketing organizations are implementing or expanding AI and machine learning in 2024. This isn't just a trend—it's a fundamental shift in how businesses connect with their audiences.

### Key AI Marketing Applications:

**1. Predictive Analytics and Customer Behavior**
AI algorithms can now predict customer behavior with 89% accuracy, enabling marketers to:
- Anticipate customer needs before they arise
- Optimize product recommendations in real-time
- Reduce churn rates by up to 15%

**2. Personalization at Scale**
Modern AI systems can create personalized experiences for millions of customers simultaneously:
- Dynamic content optimization based on user behavior
- Personalized email subject lines that increase open rates by 26%
- Custom product recommendations that boost conversion rates by 35%

**3. Automated Content Creation**
AI-powered content generation is becoming increasingly sophisticated:
- Blog posts and articles tailored to specific audiences
- Social media content optimized for each platform
- Ad copy variations for A/B testing at scale

## Implementation Strategies for Success

### Phase 1: Foundation Building (Months 1-2)
- Audit existing data infrastructure
- Implement proper tracking and analytics
- Train team members on AI tools and concepts
- Establish clear KPIs and success metrics

### Phase 2: Pilot Programs (Months 3-4)
- Start with low-risk, high-impact applications
- Test AI-powered email personalization
- Implement chatbots for customer service
- Begin predictive analytics for lead scoring

### Phase 3: Scale and Optimize (Months 5-6)
- Expand successful pilot programs
- Integrate AI across all marketing channels
- Develop custom AI solutions for unique needs
- Continuously optimize based on performance data

## Measuring ROI and Success

The most successful AI marketing implementations focus on these key metrics:

- **Customer Lifetime Value (CLV)**: AI typically increases CLV by 20-30%
- **Conversion Rates**: Expect 15-25% improvement in conversion rates
- **Cost Per Acquisition**: AI can reduce CPA by 10-20%
- **Time Savings**: Marketing teams report 40% time savings on routine tasks

## Common Pitfalls to Avoid

1. **Data Quality Issues**: AI is only as good as the data it's trained on
2. **Over-automation**: Maintain human oversight and creativity
3. **Ignoring Privacy Concerns**: Ensure compliance with data protection regulations
4. **Lack of Integration**: AI tools should work together, not in silos

## The Road Ahead

As we look toward the future, several trends will shape AI marketing:

- **Conversational AI**: More sophisticated chatbots and voice assistants
- **Visual Recognition**: AI that can analyze and respond to images and videos
- **Emotional Intelligence**: AI systems that understand and respond to human emotions
- **Cross-platform Integration**: Seamless AI experiences across all touchpoints

## Getting Started Today

Ready to implement AI in your marketing strategy? Here's your action plan:

1. **Assess Your Current State**: Evaluate your data, tools, and team readiness
2. **Choose the Right Tools**: Start with user-friendly platforms that integrate with your existing stack
3. **Invest in Training**: Ensure your team has the skills to leverage AI effectively
4. **Start Small**: Begin with pilot projects that can demonstrate quick wins
5. **Measure and Iterate**: Continuously optimize based on performance data

The future of marketing is AI-powered, and that future is now. Companies that embrace these technologies today will have a significant competitive advantage tomorrow.

*Ready to transform your marketing with AI? Contact our team of experts to develop a customized AI marketing strategy for your business.*`,

      social: `🚀 The AI marketing revolution is HERE! 

Did you know that 84% of marketing teams are implementing AI in 2024? Here's why you can't afford to wait:

✨ 89% accuracy in predicting customer behavior
📈 35% boost in conversion rates through personalization  
⏰ 40% time savings on routine marketing tasks
💰 20-30% increase in customer lifetime value

The companies winning today aren't just using AI—they're mastering it.

What's your biggest AI marketing challenge? Drop a comment below! 👇

#AIMarketing #MarketingAutomation #DigitalTransformation #MarketingStrategy #AI2024 #MarketingTech #BusinessGrowth #Innovation

P.S. Swipe to see our complete AI implementation roadmap! 📊`,

      email: `Subject: Your competitors are using AI to steal your customers (here's how to fight back)

Hi [First Name],

I have some news that might surprise you...

While you've been perfecting your current marketing strategy, 84% of your competitors have already started implementing AI to:

→ Predict exactly what your customers want (with 89% accuracy)
→ Personalize experiences for thousands of customers simultaneously  
→ Reduce their customer acquisition costs by 20%
→ Increase conversion rates by 35%

But here's the thing—it's not too late to catch up.

In fact, businesses that implement AI marketing strategies in the next 90 days often see better results than early adopters because:

1. The technology is more mature and reliable
2. Best practices are now well-established  
3. Integration tools are more user-friendly
4. ROI data is proven and measurable

**The 3-Phase AI Marketing Transformation:**

**Phase 1 (Month 1):** Foundation - Set up proper data tracking and team training
**Phase 2 (Month 2):** Implementation - Launch AI-powered email personalization and chatbots  
**Phase 3 (Month 3):** Optimization - Scale successful programs and integrate across all channels

Companies following this exact roadmap typically see:
- 25% increase in email open rates
- 40% reduction in time spent on content creation
- 15% improvement in lead quality scores
- 30% boost in customer lifetime value

**Want to see how this would work for your specific business?**

I've created a free AI Marketing Readiness Assessment that takes just 5 minutes to complete. It will show you:

✓ Your current AI readiness score
✓ The biggest opportunities in your marketing stack
✓ A customized 90-day implementation plan
✓ Expected ROI based on your business model

[Take the Free Assessment Now →]

The assessment is completely free, and you'll get your personalized results immediately.

Don't let your competitors get too far ahead.

Best regards,
[Your Name]

P.S. The assessment also includes case studies from 3 companies in your industry who've successfully implemented AI marketing. You'll see their exact strategies and results.`,

      ad: `🎯 **Headline:** "Stop Losing Customers to AI-Powered Competitors"

**Primary Text:**
Your competitors are using AI to predict customer behavior with 89% accuracy while you're still guessing. 

In the time it takes you to read this ad, AI-powered businesses have:
→ Personalized 1,000+ customer experiences
→ Optimized 50+ marketing campaigns  
→ Generated 100+ qualified leads

**The result?** They're growing 3x faster than businesses still using traditional marketing.

But here's the good news: You can catch up in just 90 days.

Our AI Marketing Accelerator has helped 500+ businesses implement AI strategies that deliver:
✅ 35% higher conversion rates
✅ 40% time savings on marketing tasks
✅ 25% reduction in customer acquisition costs
✅ 30% increase in customer lifetime value

**Limited Time:** Get your free AI Marketing Readiness Assessment + personalized 90-day implementation plan.

**Call-to-Action:** "Get My Free AI Assessment"

**Display URL:** YourBusiness.com/ai-assessment

---

**Headline Variations for A/B Testing:**
1. "Your Competitors Are Using AI to Steal Your Customers"
2. "84% of Marketers Use AI. Do You?"  
3. "Stop Guessing. Start Predicting with AI Marketing"
4. "The AI Marketing Revolution: Join or Get Left Behind"
5. "How AI Increased Our Client's Revenue by 300%"

**Audience Targeting Suggestions:**
- Business owners, ages 30-55
- Marketing managers and directors
- Companies with 10-500 employees
- Annual revenue $1M-$50M
- Interests: Digital marketing, business growth, marketing automation

**Budget Recommendation:** $50-100/day for testing, scale to $200-500/day for winning variations`
    };

    setGeneratedContent(sampleContent[activeTab as keyof typeof sampleContent]);
    
    // Generate content analysis
    setContentAnalysis({
      readabilityScore: 8.2,
      seoScore: 85,
      engagementPrediction: 92,
      wordCount: activeTab === 'blog' ? 1247 : activeTab === 'email' ? 456 : activeTab === 'social' ? 89 : 234,
      readingTime: activeTab === 'blog' ? '5 min' : activeTab === 'email' ? '2 min' : '30 sec',
      keywordDensity: 2.3,
      sentimentScore: 'Positive',
      suggestions: [
        'Add more emotional triggers in the opening',
        'Include specific statistics for credibility',
        'Strengthen the call-to-action',
        'Add social proof elements'
      ]
    });
    
    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
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
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
            <PenTool className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">AI Content Creator</h1>
            <p className="text-white/60">Generate high-converting content with advanced AI assistance</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Content Generation Studio
            </h2>

            {/* Content Type Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {contentTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveTab(type.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === type.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{type.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content Prompt */}
            <div className="mb-4">
              <label className="block text-white/70 text-sm font-medium mb-2">Content Brief</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                placeholder={contentTypes.find(t => t.id === activeTab)?.placeholder}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-green-500 transition-colors resize-none"
              />
            </div>

            {/* Advanced Options */}
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Tone of Voice</label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                  >
                    {tones.map((t) => (
                      <option key={t} value={t.toLowerCase()}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Content Length</label>
                  <select
                    value={contentLength}
                    onChange={(e) => setContentLength(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                  >
                    {contentLengths.map((length) => (
                      <option key={length.id} value={length.id}>{length.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Target Audience</label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  placeholder="e.g., Small business owners, marketing managers, tech enthusiasts"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Target Keywords</label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g., AI marketing, automation, digital transformation"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeStats}
                    onChange={(e) => setIncludeStats(e.target.checked)}
                    className="w-4 h-4 text-green-500 bg-white/5 border-white/10 rounded focus:ring-green-500"
                  />
                  <span className="text-white/70 text-sm">Include statistics</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCTA}
                    onChange={(e) => setIncludeCTA(e.target.checked)}
                    className="w-4 h-4 text-green-500 bg-white/5 border-white/10 rounded focus:ring-green-500"
                  />
                  <span className="text-white/70 text-sm">Include call-to-action</span>
                </label>
              </div>
            </div>

            {/* Generate Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={generateContent}
              disabled={isGenerating || !prompt.trim()}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-green-600 hover:to-emerald-600 transition-all disabled:opacity-50"
            >
              {isGenerating ? (
                <div className="flex items-center space-x-3">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating Content...</span>
                </div>
              ) : (
                <>
                  <RefreshCw className="w-5 h-5" />
                  <span>Generate AI Content</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Enhanced Output Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Content Output */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Generated Content</h2>
                {generatedContent && (
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={copyToClipboard}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium"
                    >
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium hover:bg-white/10"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Regenerate</span>
                    </motion.button>
                  </div>
                )}
              </div>

              {!generatedContent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PenTool className="w-8 h-8 text-white/40" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Content Generator Ready</h3>
                  <p className="text-white/60">Enter your content brief and preferences to generate high-quality, optimized content</p>
                </div>
              ) : (
                <div className="bg-white/5 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <pre className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                    {generatedContent}
                  </pre>
                </div>
              )}
            </div>

            {/* Content Analysis */}
            {contentAnalysis && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Content Analysis</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">{contentAnalysis.readabilityScore}/10</div>
                    <div className="text-white/60 text-sm">Readability Score</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">{contentAnalysis.seoScore}%</div>
                    <div className="text-white/60 text-sm">SEO Score</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">{contentAnalysis.engagementPrediction}%</div>
                    <div className="text-white/60 text-sm">Engagement Prediction</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-orange-400">{contentAnalysis.wordCount}</div>
                    <div className="text-white/60 text-sm">Word Count</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Reading Time</span>
                    <span className="text-white font-medium">{contentAnalysis.readingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Keyword Density</span>
                    <span className="text-white font-medium">{contentAnalysis.keywordDensity}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Sentiment</span>
                    <span className="text-green-400 font-medium">{contentAnalysis.sentimentScore}</span>
                  </div>
                </div>
              </div>
            )}

            {/* AI Suggestions */}
            {contentAnalysis && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">AI Optimization Suggestions</h3>
                <div className="space-y-3">
                  {contentAnalysis.suggestions.map((suggestion: string, index: number) => (
                    <div key={index} className="flex items-start text-white/70 text-sm">
                      <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Content History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Recent Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { type: 'Blog Post', title: 'AI Marketing Trends 2024', date: '2 hours ago', performance: '92% engagement' },
              { type: 'Social Caption', title: 'Product Launch Announcement', date: '5 hours ago', performance: '156 shares' },
              { type: 'Email', title: 'Newsletter Template', date: '1 day ago', performance: '28% open rate' },
              { type: 'Ad Copy', title: 'Lead Generation Campaign', date: '2 days ago', performance: '3.2% CTR' },
              { type: 'Blog Post', title: 'Customer Success Story', date: '3 days ago', performance: '89% engagement' },
              { type: 'Social Caption', title: 'Behind the Scenes', date: '4 days ago', performance: '203 likes' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-xs text-white/40">{item.date}</span>
                </div>
                <h3 className="text-white font-medium text-sm mb-2">{item.title}</h3>
                <div className="text-xs text-white/60">{item.performance}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentAgent;