import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import img1 from './images/logo.png';
import { useState } from 'react'; // Import the LTR stylesheet // Import useState from React
import languageData from './language.json';

function App() {
  const [language, setLanguage] = useState("en"); // Initialize the language state in App.js

  const toggleLanguage = () => {
    // Function to toggle the language
    setLanguage(language === "ar" ? "en" : "ar");
    console.log(language);
  };

  document.body.className = language === 'ar' ? 'arabic' : '';



  return (
    <div className={`App ${language === "ar" ? "arabic" : ""}`}>
      <div className="logo">
        <img src={img1} alt="" />
      </div>
      <NavBar language={language} toggleLanguage={toggleLanguage} /> {/* Pass language and toggleLanguage as props */}



      <Footer language={language} languageData={languageData} />


    </div>
  );
}

export default App;
