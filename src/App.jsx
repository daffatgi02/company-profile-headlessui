// file: src/App.jsx
import MainLayout from './layouts/MainLayout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ProgramsSection from './components/ProgramsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <MainLayout>
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ProgramsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </MainLayout>
  );
}

export default App;