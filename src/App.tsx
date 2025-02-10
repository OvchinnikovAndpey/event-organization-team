import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutSection from './components/AboutSection/AboutSection';
import Contacts from './components/Contacts/Contacts';
import MyTeam from './components/MyTeam/MyTeam';
import Services from './components/Services/Services';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AboutSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/team" element={<MyTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
