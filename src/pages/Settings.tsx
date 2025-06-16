import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Database } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'integrations', label: 'Integrations', icon: Database },
  ];

  const integrations = [
    { name: 'Google Analytics', status: 'connected', color: 'green' },
    { name: 'Facebook Ads', status: 'disconnected', color: 'red' },
    { name: 'Mailchimp', status: 'connected', color: 'green' },
    { name: 'Slack', status: 'connected', color: 'green' },
    { name: 'Zapier', status: 'disconnected', color: 'red' },
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
          <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-700 rounded-xl flex items-center justify-center mr-4">
            <SettingsIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-white/60">Manage your account and preferences</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    whileHover={{ x: 4 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                      activeTab === tab.id
                        ? 'bg-white/10 text-white border border-white/20'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Profile Settings</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    defaultValue="Acme Corp"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Save Changes
                </motion.button>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Notification Preferences</h2>
                
                <div className="space-y-4">
                  {[
                    { label: 'Email notifications for campaign updates', enabled: true },
                    { label: 'Push notifications for performance alerts', enabled: false },
                    { label: 'Weekly performance summary', enabled: true },
                    { label: 'New feature announcements', enabled: true },
                    { label: 'Marketing tips and insights', enabled: false },
                  ].map((notification, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <span className="text-white">{notification.label}</span>
                      <div className={`w-12 h-6 rounded-full p-1 transition-colors ${
                        notification.enabled ? 'bg-green-500' : 'bg-gray-600'
                      }`}>
                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          notification.enabled ? 'translate-x-6' : 'translate-x-0'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Security Settings</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <div className="text-white font-medium">Enable 2FA</div>
                      <div className="text-white/60 text-sm">Add an extra layer of security to your account</div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      Enable
                    </motion.button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Appearance Settings</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-3">Theme</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { name: 'Dark', active: true, preview: 'bg-gray-900' },
                        { name: 'Light', active: false, preview: 'bg-white' },
                        { name: 'Auto', active: false, preview: 'bg-gradient-to-r from-gray-900 to-white' },
                      ].map((theme, index) => (
                        <div key={index} className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                          theme.active ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5'
                        }`}>
                          <div className={`w-full h-16 rounded mb-2 ${theme.preview}`}></div>
                          <div className="text-white text-center font-medium">{theme.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-3">Accent Color</label>
                    <div className="flex space-x-3">
                      {[
                        'bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500', 'bg-pink-500', 'bg-teal-500'
                      ].map((color, index) => (
                        <div key={index} className={`w-8 h-8 rounded-full ${color} cursor-pointer border-2 ${
                          index === 0 ? 'border-white' : 'border-transparent'
                        }`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Platform Integrations</h2>
                
                <div className="space-y-4">
                  {integrations.map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          integration.status === 'connected' ? 'bg-green-400' : 'bg-red-400'
                        }`}></div>
                        <span className="text-white font-medium">{integration.name}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          integration.status === 'connected'
                            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                            : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                        }`}
                      >
                        {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
                      </motion.button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">API Access</h3>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-medium">API Key</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded text-sm font-medium"
                      >
                        Generate New
                      </motion.button>
                    </div>
                    <div className="bg-black/20 rounded p-3 font-mono text-sm text-white/70">
                      sk-1234567890abcdef1234567890abcdef
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;