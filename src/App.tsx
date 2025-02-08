import React from 'react';
import Header from './components/Header/Header';
import AboutSection from './components/AboutSection/AboutSection';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import MyTeam from './components/MyTeam/MyTeam';
import Services from './components/Services/Services';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <MyTeam />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;