import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutSection from "./components/Pages/AboutSection/AboutSection";
import Contacts from "./components/Pages/Contacts/Contacts";
import MyTeam from "./components/Pages/MyTeam/MyTeam";
import Services from "./components/Pages/Services/Services";
import General from "./components/Pages/General/General";
import Gallery from "./components/Pages/Gallerey/Gallerey";
import "./styles/global.css";
import './styles/variables.css';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/team" element={<MyTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallerey" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
