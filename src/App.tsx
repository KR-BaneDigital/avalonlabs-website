import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IndustryPage from './pages/IndustryPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ScheduleDemoPage from './pages/ScheduleDemoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/industry/:slug" element={<IndustryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schedule-demo" element={<ScheduleDemoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
