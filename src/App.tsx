import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import StrategyAgent from './pages/agents/StrategyAgent';
import ContentAgent from './pages/agents/ContentAgent';
import DesignAgent from './pages/agents/DesignAgent';
import SocialAgent from './pages/agents/SocialAgent';
import SEOAgent from './pages/agents/SEOAgent';
import AdsAgent from './pages/agents/AdsAgent';
import EmailAgent from './pages/agents/EmailAgent';
import AnalystAgent from './pages/agents/AnalystAgent';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/agents/strategy" element={<StrategyAgent />} />
          <Route path="/agents/content" element={<ContentAgent />} />
          <Route path="/agents/design" element={<DesignAgent />} />
          <Route path="/agents/social" element={<SocialAgent />} />
          <Route path="/agents/seo" element={<SEOAgent />} />
          <Route path="/agents/ads" element={<AdsAgent />} />
          <Route path="/agents/email" element={<EmailAgent />} />
          <Route path="/agents/analyst" element={<AnalystAgent />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;