import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faImage, faBook } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import { useLanguage } from '../../language';
import { useEffect } from 'react';


const NavBar = ({ language, toggleLanguage, languageData }) => {

    useEffect(() => {
        // Ensure that the languageData and language are updated when the language changes
        // You can use this hook to make sure the component updates when the language changes
    }, [language, toggleLanguage, languageData]);

    const languageText = languageData[language];
    const isRtl = language === 'ar';

    return (
        <div className={`navbar ${language === "ar" ? "arabic" : ""}`}>
            <ul>
                <li><a href="/"><icon data-content={languageText.home}><FontAwesomeIcon icon={faHouse} /></icon></a></li>
                <li><a href=""><icon data-content={languageText.services}><FontAwesomeIcon icon={faBook} /></icon></a></li>
                <li><a href=""><icon data-content={languageText.gallery}><FontAwesomeIcon icon={faImage} /></icon></a></li>
                <li>
                    <a onClick={toggleLanguage}>
                        <icon data-content={languageText.language}>
                            {language === "en" ? "EN" : "AR"}
                        </icon>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
