import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Services from './Components/Services/Services';
import NavBar from './Components/NavBar/NavBar';
import Residences from './Components/Residences/Residences';
import Footer from './Components/Footer/Footer';
import img1 from './images/logo.png';
import languageData from './language.json';
import { useDarkMode } from './DarkModeContext';
import Attractions from './Components/Attractions/Attractions';
import Transportation from './Components/Transportation/Transportation';
import BankAccount from './Components/BankAccount/BankAccount';

function App() {
  // Initialize the language state with the default language (e.g., "en")
  const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
  const { darkMode, setDarkMode } = useDarkMode(); // Initialize to false

  const toggleDarkMode = () => {
    // Toggle the dark mode state and it will automatically be saved to local storage
    setDarkMode(!darkMode);
  };


  // Function to toggle the language
  const toggleLanguage = () => {
    // Toggle the language and save it to localStorage
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);
  };

  // Set the document body class based on the selected language and dark mode
  useEffect(() => {
    document.body.className = `${language === 'ar' ? 'arabic' : ''} ${darkMode ? 'dark-mode' : ''}`;
  }, [language, darkMode]);

  return (
    <Router>
      <div className={`App ${language === 'ar' ? 'arabic' : ''}`}>
        <div className="logo">
          <img src={img1} alt="" />
        </div>
        <div className="appContainer">
          <NavBar
            language={language}
            toggleLanguage={toggleLanguage}
            languageData={languageData}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <div className={`routes ${language === 'ar' ? 'arabic' : ''}`}>
            <Routes>
              <Route path="/" element={<Home language={language} languageData={languageData} />} />
              <Route path="/services" element={<Services language={language} languageData={languageData} />} />
              <Route path="/residences" element={<Residences language={language} languageData={languageData} />} />
              <Route path="/attractions" element={<Attractions language={language} languageData={languageData} />} />
              <Route path="/transportation" element={<Transportation language={language} languageData={languageData} />} />
              <Route path="/openAccount" element={<BankAccount language={language} languageData={languageData} />} />

            </Routes>
          </div>
          <Menu language={language} languageData={languageData} />
        </div>
        <Footer language={language} languageData={languageData} />
      </div>
    </Router>
  );
}

export default App;
