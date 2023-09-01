import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faImage } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar = ({ language, toggleLanguage }) => { // Accept language and toggleLanguage as props
    return (
        <div className={`navbar ${language === "ar" ? "arabic" : ""}`}>
            <ul>
                <li><a href=""><icon><FontAwesomeIcon icon={faHouse} /></icon></a></li>
                <li><a href=""><icon><FontAwesomeIcon icon={faCircleInfo} /></icon></a></li>
                <li><a href=""><icon><FontAwesomeIcon icon={faImage} /></icon></a></li>
                <li>
                    <a onClick={toggleLanguage}>
                        <icon>
                            {language === "en" ? "EN" : "AR"}
                        </icon>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
