import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import img1 from './images/logo.png';
import { useState } from 'react'; // Import the LTR stylesheet // Import useState from React
import languageData from './language.json';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter and Route
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';


function App() {
  const [language, setLanguage] = useState("en"); // Initialize the language state in App.js

  const toggleLanguage = () => {
    // Function to toggle the language
    setLanguage(language === "ar" ? "en" : "ar");
    // console.log(language);
  };

  document.body.className = language === 'ar' ? 'arabic' : '';



  return (
    <Router>
      <div className={`App ${language === "ar" ? "arabic" : ""}`}>
        <div className="logo">
          <img src={img1} alt="" />
        </div>
        <div className="appContainer">
          <NavBar language={language} toggleLanguage={toggleLanguage} languageData={languageData} />
          <div className={`routes ${language === "ar" ? "arabic" : ""}`}>
            <Routes>
              <Route path="/" element={<Home language={language} languageData={languageData} />} />
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
