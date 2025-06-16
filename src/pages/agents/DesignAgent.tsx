import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Download, Image, Wand2, Layers, Zap, Eye, Settings } from 'lucide-react';

const DesignAgent: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesigns, setGeneratedDesigns] = useState<any[]>([]);
  const [designStyle, setDesignStyle] = useState('modern');
  const [colorScheme, setColorScheme] = useState('blue-white');
  const [brandElements, setBrandElements] = useState({
    logo: false,
    brandColors: false,
    typography: false
  });
  const [designAnalysis, setDesignAnalysis] = useState<any>(null);

  const templates = [
    { 
      id: 'social-post', 
      name: 'Social Media Post', 
      size: '1080x1080',
      description: 'Square format for Instagram, Facebook',
      category: 'Social Media'
    },
    { 
      id: 'story', 
      name: 'Instagram Story', 
      size: '1080x1920',
      description: 'Vertical format for stories',
      category: 'Social Media'
    },
    { 
      id: 'banner', 
      name: 'Web Banner', 
      size: '1200x400',
      description: 'Header banners for websites',
      category: 'Web'
    },
    { 
      id: 'linkedin-post', 
      name: 'LinkedIn Post', 
      size: '1200x627',
      description: 'Professional social media format',
      category: 'Social Media'
    },
    { 
      id: 'flyer', 
      name: 'Marketing Flyer', 
      size: '8.5x11',
      description: 'Print-ready promotional material',
      category: 'Print'
    },
    { 
      id: 'logo', 
      name: 'Logo Design', 
      size: '512x512',
      description: 'Brand identity and logos',
      category: 'Branding'
    },
    { 
      id: 'thumbnail', 
      name: 'Video Thumbnail', 
      size: '1280x720',
      description: 'YouTube and video thumbnails',
      category: 'Video'
    },
    { 
      id: 'email-header', 
      name: 'Email Header', 
      size: '600x200',
      description: 'Email campaign headers',
      category: 'Email'
    }
  ];

  const designStyles = [
    { id: 'modern', name: 'Modern', description: 'Clean, minimalist, contemporary' },
    { id: 'bold', name: 'Bold', description: 'High contrast, striking visuals' },
    { id: 'corporate', name: 'Corporate', description: 'Professional, trustworthy' },
    { id: 'creative', name: 'Creative', description: 'Artistic, unique, experimental' },
    { id: 'minimalist', name: 'Minimalist', description: 'Simple, clean, focused' },
    { id: 'vintage', name: 'Vintage', description: 'Retro, classic, nostalgic' }
  ];

  const colorSchemes = [
    { id: 'blue-white', name: 'Blue & White', colors: ['#3B82F6', '#FFFFFF'] },
    { id: 'purple-pink', name: 'Purple & Pink', colors: ['#8B5CF6', '#EC4899'] },
    { id: 'green-teal', name: 'Green & Teal', colors: ['#10B981', '#14B8A6'] },
    { id: 'orange-red', name: 'Orange & Red', colors: ['#F97316', '#EF4444'] },
    { id: 'black-gold', name: 'Black & Gold', colors: ['#000000', '#F59E0B'] },
    { id: 'monochrome', name: 'Monochrome', colors: ['#000000', '#FFFFFF'] }
  ];

  const generateDesign = async () => {
    setIsGenerating(true);
    
    // Simulate AI design generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const sampleDesigns = [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Design Variation 1',
        style: designStyle,
        colorScheme: colorScheme,
        analysis: {
          visualImpact: 9.2,
          brandAlignment: 8.7,
          readability: 9.5,
          engagement: 8.9
        }
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Design Variation 2',
        style: designStyle,
        colorScheme: colorScheme,
        analysis: {
          visualImpact: 8.8,
          brandAlignment: 9.1,
          readability: 8.9,
          engagement: 9.3
        }
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Design Variation 3',
        style: designStyle,
        colorScheme: colorScheme,
        analysis: {
          visualImpact: 9.0,
          brandAlignment: 8.5,
          readability: 9.2,
          engagement: 8.7
        }
      }
    ];
    
    setGeneratedDesigns(sampleDesigns);
    
    // Generate overall design analysis
    setDesignAnalysis({
      overallScore: 9.1,
      strengths: [
        'Strong visual hierarchy and composition',
        'Excellent color contrast and readability',
        'Professional and modern aesthetic',
        'Effective use of whitespace'
      ],
      improvements: [
        'Consider adding more brand elements',
        'Experiment with different typography weights',
        'Test alternative color combinations',
        'Add subtle animation elements for digital use'
      ],
      brandConsistency: 8.8,
      marketAppeal: 9.2,
      technicalQuality: 9.5
    });
    
    setIsGenerating(false);
  };

  const handleBrandElementToggle = (element: string) => {
    setBrandElements(prev => ({
      ...prev,
      [element]: !prev[element as keyof typeof prev]
    }));
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
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">AI Design Studio</h1>
            <p className="text-white/60">Create stunning visuals with intelligent design assistance</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Template Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Layers className="w-5 h-5 mr-2" />
              Templates
            </h2>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedTemplate === template.id
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                      : 'bg-white/5 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">{template.name}</h3>
                    <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs mb-1">{template.description}</p>
                  <p className="text-white/40 text-xs">{template.size}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Design Configuration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Wand2 className="w-5 h-5 mr-2" />
              Design Configuration
            </h2>

            <div className="space-y-6">
              {/* Design Prompt */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Design Brief
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  placeholder="e.g., Create a modern social media post for a tech startup launching a new app. Use blue and white colors with clean typography. Include space for product screenshot and compelling headline."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              {/* Style and Color Configuration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-3">Design Style</label>
                  <div className="space-y-2">
                    {designStyles.map((style) => (
                      <motion.button
                        key={style.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setDesignStyle(style.id)}
                        className={`w-full p-3 rounded-lg text-left transition-all ${
                          designStyle === style.id
                            ? 'bg-purple-500/20 border border-purple-500/30 text-white'
                            : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <div className="font-medium text-sm">{style.name}</div>
                        <div className="text-xs opacity-70">{style.description}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-3">Color Scheme</label>
                  <div className="space-y-2">
                    {colorSchemes.map((scheme) => (
                      <motion.button
                        key={scheme.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setColorScheme(scheme.id)}
                        className={`w-full p-3 rounded-lg text-left transition-all ${
                          colorScheme === scheme.id
                            ? 'bg-purple-500/20 border border-purple-500/30 text-white'
                            : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{scheme.name}</span>
                          <div className="flex space-x-1">
                            {scheme.colors.map((color, index) => (
                              <div
                                key={index}
                                className="w-4 h-4 rounded-full border border-white/20"
                                style={{ backgroundColor: color }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brand Elements */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-3">Brand Elements</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(brandElements).map(([key, value]) => (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleBrandElementToggle(key)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all ${
                        value
                          ? 'bg-purple-500/20 border border-purple-500/30 text-white'
                          : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Advanced Options */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Image Quality</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors">
                    <option>High (4K)</option>
                    <option>Standard (HD)</option>
                    <option>Web Optimized</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Output Format</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors">
                    <option>PNG (Transparent)</option>
                    <option>JPG (Compressed)</option>
                    <option>SVG (Vector)</option>
                    <option>PDF (Print)</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateDesign}
                disabled={isGenerating || !selectedTemplate || !prompt.trim()}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50"
              >
                {isGenerating ? (
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Generating Designs...</span>
                  </div>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    <span>Generate AI Designs</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Generated Designs & Analysis */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Design Output */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Generated Designs
              </h2>

              {generatedDesigns.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-white/40" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Design Studio Ready</h3>
                  <p className="text-white/60 text-sm">Configure your design and generate stunning visuals</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {generatedDesigns.map((design, index) => (
                    <motion.div
                      key={design.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <img
                        src={design.url}
                        alt={design.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg"
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg"
                        >
                          <Settings className="w-4 h-4" />
                        </motion.button>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-white font-medium text-sm">{design.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-green-400 text-xs">Impact: {design.analysis.visualImpact}/10</span>
                          <span className="text-blue-400 text-xs">Engagement: {design.analysis.engagement}/10</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Design Analysis */}
            {designAnalysis && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Design Analysis</h3>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1">{designAnalysis.overallScore}/10</div>
                    <div className="text-white/60 text-sm">Overall Design Score</div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-green-400">{designAnalysis.brandConsistency}/10</div>
                      <div className="text-white/60 text-xs">Brand Consistency</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-400">{designAnalysis.marketAppeal}/10</div>
                      <div className="text-white/60 text-xs">Market Appeal</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-orange-400">{designAnalysis.technicalQuality}/10</div>
                      <div className="text-white/60 text-xs">Technical Quality</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium text-sm mb-2">Strengths</h4>
                    <div className="space-y-1">
                      {designAnalysis.strengths.map((strength: string, index: number) => (
                        <div key={index} className="flex items-start text-green-400 text-xs">
                          <span className="w-1 h-1 bg-green-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {strength}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium text-sm mb-2">Improvements</h4>
                    <div className="space-y-1">
                      {designAnalysis.improvements.map((improvement: string, index: number) => (
                        <div key={index} className="flex items-start text-orange-400 text-xs">
                          <span className="w-1 h-1 bg-orange-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {improvement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Recent Designs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Recent Creations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { url: 'https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=400', type: 'Social Post', performance: '9.2/10' },
              { url: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=400', type: 'Banner', performance: '8.7/10' },
              { url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400', type: 'Flyer', performance: '9.1/10' },
              { url: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=400', type: 'Logo', performance: '8.9/10' },
              { url: 'https://images.pexels.com/photos/3184467/pexels-photo-3184467.jpeg?auto=compress&cs=tinysrgb&w=400', type: 'Story', performance: '9.0/10' },
              { url: 'https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg?auto=compress&cs=tinysrgb&w=400', type: 'Thumbnail', performance: '8.8/10' }
            ].map((design, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <img
                  src={design.url}
                  alt={`Recent design ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col items-center justify-center">
                  <div className="text-white text-xs font-medium">{design.type}</div>
                  <div className="text-purple-400 text-xs">{design.performance}</div>
                  <Download className="w-4 h-4 text-white mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignAgent;