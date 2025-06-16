import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Calendar, BarChart3, Clock } from 'lucide-react';

const SocialAgent: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [postContent, setPostContent] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const platforms = [
    { id: 'instagram', name: 'Instagram', color: 'from-pink-500 to-orange-500' },
    { id: 'twitter', name: 'Twitter', color: 'from-blue-400 to-blue-600' },
    { id: 'linkedin', name: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
    { id: 'facebook', name: 'Facebook', color: 'from-blue-500 to-blue-700' },
  ];

  const scheduledPosts = [
    { platform: 'Instagram', content: 'New product launch coming soon! 🚀', date: '2024-01-15', time: '10:00 AM', engagement: 85 },
    { platform: 'Twitter', content: 'Check out our latest blog post on AI trends', date: '2024-01-16', time: '2:00 PM', engagement: 92 },
    { platform: 'LinkedIn', content: 'Industry insights from our CEO', date: '2024-01-17', time: '9:00 AM', engagement: 78 },
  ];

  const bestTimes = {
    instagram: ['9:00 AM', '1:00 PM', '5:00 PM'],
    twitter: ['8:00 AM', '12:00 PM', '6:00 PM'],
    linkedin: ['9:00 AM', '2:00 PM', '4:00 PM'],
    facebook: ['10:00 AM', '3:00 PM', '7:00 PM'],
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
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Social Media Manager</h1>
            <p className="text-white/60">Schedule and optimize your social media presence</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Post Creation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6">Create Post</h2>

            {/* Platform Selection */}
            <div className="flex flex-wrap gap-3 mb-6">
              {platforms.map((platform) => (
                <motion.button
                  key={platform.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedPlatform === platform.id
                      ? `bg-gradient-to-r ${platform.color} text-white`
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {platform.name}
                </motion.button>
              ))}
            </div>

            {/* Content Input */}
            <div className="mb-6">
              <label className="block text-white/70 text-sm font-medium mb-2">Post Content</label>
              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                rows={6}
                placeholder="What's happening? Share your thoughts..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
              <div className="text-right text-white/40 text-sm mt-1">
                {postContent.length}/280 characters
              </div>
            </div>

            {/* Scheduling */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Time</label>
                <select
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select time</option>
                  {bestTimes[selectedPlatform as keyof typeof bestTimes].map((time) => (
                    <option key={time} value={time}>{time} (Recommended)</option>
                  ))}
                  <option value="custom">Custom time...</option>
                </select>
              </div>
            </div>

            {/* Post Preview */}
            <div className="mb-6">
              <label className="block text-white/70 text-sm font-medium mb-2">Preview</label>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white font-medium text-sm">Your Business</div>
                    <div className="text-white/40 text-xs">@yourbusiness</div>
                  </div>
                </div>
                <div className="text-white/80 text-sm">
                  {postContent || "Your post content will appear here..."}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"
              >
                Schedule Post
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Save Draft
              </motion.button>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Best Times */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Best Times
              </h3>
              <div className="space-y-2">
                {bestTimes[selectedPlatform as keyof typeof bestTimes].map((time, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-3 bg-white/5 rounded-lg">
                    <span className="text-white/70 text-sm">{time}</span>
                    <span className="text-green-400 text-xs">High engagement</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Prediction */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Engagement Prediction
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Likes</span>
                    <span className="text-white">120-180</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Comments</span>
                    <span className="text-white">15-25</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Shares</span>
                    <span className="text-white">8-15</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scheduled Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Scheduled Posts
            </h2>
            <span className="text-white/60 text-sm">{scheduledPosts.length} posts scheduled</span>
          </div>

          <div className="space-y-4">
            {scheduledPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-medium text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full">
                      {post.platform}
                    </span>
                    <span className="text-white/60 text-sm">{post.date} at {post.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">{post.engagement}% predicted</span>
                  </div>
                </div>
                <p className="text-white/80 text-sm">{post.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialAgent;