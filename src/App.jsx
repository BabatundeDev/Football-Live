import React, { useState } from 'react';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import FeaturedVideo from './components/FeaturedVideo';
import MatchCardGrid from './components/MatchCardGrid';
import './App.css';

const App = () => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const handleWatch = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
  };

  return (
    <div className="app-wrapper">
      <AppNavbar />
      <main>
        <FeaturedVideo videoUrl={selectedVideoUrl} />
        <MatchCardGrid onWatch={handleWatch} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
