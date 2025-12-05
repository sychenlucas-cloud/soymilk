import React from 'react';
import Navbar from './components/navbar.tsx'; 
import Hero from './components/hero.tsx'; 
import AboutSection from './components/aboutSection.tsx';
import MenuSection from './components/menuSection.tsx';
import ReviewsSection from './components/reviewsSection.tsx';
import Locations from './components/locations.tsx';
import Footer from './components/footer.tsx';
import ChatWidget from './components/chatWidget.tsx';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-900 bg-soy-cream">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <ReviewsSection />
        <Locations />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
