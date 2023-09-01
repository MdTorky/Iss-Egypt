import NavBar from './Components/NavBar/NavBar';
import img1 from './images/logo.png';
import { useState } from 'react'; // Import useState from React

function App() {
  const [language, setLanguage] = useState("en"); // Initialize the language state in App.js

  const toggleLanguage = () => {
    // Function to toggle the language
    setLanguage(language === "ar" ? "en" : "ar");
    console.log(language);
  };



  return (
    <div className={`App ${language === "ar" ? "arabic" : ""}`}>
      <div className="logo">
        <img src={img1} alt="" />
      </div>
      <NavBar language={language} toggleLanguage={toggleLanguage} /> {/* Pass language and toggleLanguage as props */}
      <div style={{ height: '900px', position: 'relative', marginTop: "1000px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium saepe nam quasi quo aliquid modi dolorem officiis ad in!</div>
    </div>
  );
}

export default App;
