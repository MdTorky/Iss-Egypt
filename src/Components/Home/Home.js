// Home.js
import { React, useEffect } from 'react';
import "./Home.css";
import { useLanguage } from '../../language';


function Home({ language, languageData }) {
    const { toggleLanguage } = useLanguage();

    useEffect(() => {
        // Ensure that the languageData and language are updated when the language changes
        // You can use this hook to make sure the component updates when language changes
    }, [language, languageData]);

    const languageText = languageData[language];
    const isRtl = language === 'ar';

    return (
        <div className="home-container">
            <div className="homeWrapper">
                <p>{languageText.together}</p>
                <div className="words">
                    <span>
                        {languageText.rise} <br />
                        {languageText.advance} <br />
                        {languageText.succeed} <br />
                        {languageText.rejoice} <br />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
