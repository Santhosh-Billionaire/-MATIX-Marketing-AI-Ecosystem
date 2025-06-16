import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Target, 
  PenTool, 
  Palette, 
  Share2, 
  Search, 
  Megaphone, 
  Mail, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const agents = [
    {
      id: 'strategy',
      name: 'Strategy Agent',
      description: 'Generate comprehensive marketing strategies and campaigns',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      route: '/agents/strategy'
    },
    {
      id: 'content',
      name: 'Content Writer',
      description: 'Create engaging content for blogs, ads, and social media',
      icon: PenTool,
      color: 'from-green-500 to-emerald-500',
      route: '/agents/content'
    },
    {
      id: 'design',
      name: 'Design Agent',
      description: 'Generate stunning visuals and marketing materials',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      route: '/agents/design'
    },
    {
      id: 'social',
      name: 'Social Media Manager',
      description: 'Schedule posts and optimize social media presence',
      icon: Share2,
      color: 'from-orange-500 to-red-500',
      route: '/agents/social'
    },
    {
      id: 'seo',
      name: 'SEO Specialist',
      description: 'Optimize content for search engines and rankings',
      icon: Search,
      color: 'from-teal-500 to-green-500',
      route: '/agents/seo'
    },
    {
      id: 'ads',
      name: 'Ad Manager',
      description: 'Create and optimize advertising campaigns',
      icon: Megaphone,
      color: 'from-yellow-500 to-orange-500',
      route: '/agents/ads'
    },
    {
      id: 'email',
      name: 'Email Specialist',
      description: 'Design and send effective email campaigns',
      icon: Mail,
      color: 'from-indigo-500 to-blue-500',
      route: '/agents/email'
    },
    {
      id: 'analyst',
      name: 'Market Analyst',
      description: 'Analyze market trends and competitive intelligence',
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-500',
      route: '/agents/analyst'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Your AI Marketing Team
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your marketing strategy. 
            Each AI agent specializes in a different aspect of marketing to help your business grow.
          </p>
        </motion.div>

        {/* Agent Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {agents.map((agent) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(agent.route)}
                className="group relative cursor-pointer"
              >
                {/* Card */}
                <div className="relative h-64 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-colors">
                    {agent.description}
                  </p>

                  {/* Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${agent.color} flex items-center justify-center`}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Active Campaigns', value: '24', change: '+12%' },
            { label: 'Total Conversions', value: '1,847', change: '+23%' },
            { label: 'Revenue Generated', value: '$12.4K', change: '+18%' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm mb-2">{stat.label}</div>
              <div className="text-green-400 text-xs font-medium">{stat.change}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;