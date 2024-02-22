import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Lajout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SoSecuriGaz from './components/SoSecuriGaz';
import FeaturesGaZ from './components/FeaturesGaZ';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Team from './components/Team';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Layout>
      <App/>
    </Layout>
    <SoSecuriGaz />
    <FeaturesGaZ />
    <NewsLetter />
    {/* <Contact /> */}
    <Team />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
