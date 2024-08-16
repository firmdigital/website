import { useEffect } from "react";
import ReactGA from 'react-ga4';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Layout from './components/Layout';
import SoSecuriGaz from './components/SoSecuriGaz';
import FeaturesGaZ from './components/FeaturesGaZ';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Team from './components/Team';
import BackToTopButton from './components/BackToTop';
import Agence from './components/Agence';
import Services from './components/Services';
import TechStack from './components/TechStack';
import BlogSection from './components/Blog';

ReactGA.initialize('G-9L1YRG75J3');

function App() {

  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked a button'
    });
  };

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    handleButtonClick();
  }, []);

  return (
    <Router>
      <Navbar />
      <BackToTopButton />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Layout>
              <div className="w-full pt-10 space-y-20">
                <Agence />
                <Services />
                <TechStack />
              </div>
            </Layout>
            <SoSecuriGaz />
            <FeaturesGaZ />
            <BlogSection />
            <Team />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
