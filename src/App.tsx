import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutSection from './components/AboutSection/AboutSection';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import MyTeam from './components/MyTeam/MyTeam';
import Services from './components/Services/Services';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AboutSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/team" element={<MyTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;