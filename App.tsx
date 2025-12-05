import React from 'react';
import Navbar from "@/components/Navbar.tsx"; 
import Hero from '@/components/Hero.tsx'; 
import AboutSection from '@/components/AboutSection.tsx';
import MenuSection from '@/components/MenuSection.tsx';
import ReviewsSection from '@/components/ReviewsSection.tsx';
import Locations from '@/components/Locations.tsx';
import Footer from '@/components/Footer.tsx';
import ChatWidget from '@/components/ChatWidget.tsx';

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
