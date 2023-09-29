import "./Attractions.css";
// import { useLanguage } from '../../language';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot, faBus, faXmark, faVanShuttle
} from '@fortawesome/free-solid-svg-icons';
import attractionsData from "../../data/attractions.json"

var groceries = attractionsData.groceries
var attractions = attractionsData.attractions
var mosques = attractionsData.mosques

const Attractions = ({ language, languageData }) => {
    useEffect(() => {
    }, [language, languageData]);

    const languageText = languageData[language];


    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedBus, setSelectedBus] = useState(null);

    const togglePopup = (bus) => {
        if (selectedBus && selectedBus.id === bus.id) {
            // If the same story is clicked again, close the popup
            setPopupVisible(false);
            setSelectedBus(null);
        } else {
            // Close the college popup if open
            setSelectedBus(bus);
            setPopupVisible(true);
        }
    };

    const closePopup = () => {
        setPopupVisible(false);
    };


    const Button = ({ item, languageText }) => {

        const [popupVisible, setPopupVisible] = useState(false);

        return (
            <div className="icons">

                <button className="icon" onClick={() => { window.open(item.location, "_blank") }}>
                    <span class="tooltip" >{languageText.Location}</span>
                    <span><FontAwesomeIcon icon={faLocationDot} /></span>
                </button>
                {item && item.bus && (

                    <button className={`icon ${popupVisible && selectedBus && selectedBus.id === item.id
                        ? 'active' : ''}`}
                        onClick={() => {
                            if (item && item.bus) {
                                togglePopup(item)
                            }
                            else {
                                alert(languageText.error3 + " " + item.name)
                            }
                        }}>
                        <span class="tooltip" >{languageText.Bus}</span>
                        <span><FontAwesomeIcon icon={faBus} /></span>
                    </button>
                )}
            </div >

        )
    }

    // function busRoute(item) {
    //     var busElement = document.getElementById("bus");
    //     busElement.innerHTML = "Bus: " + item;
    // }

    return (
        <div className="attraction">
            <h1 className="title">{languageText.attractions}</h1>
            <h1 className="bus" id="bus"></h1>

            <div className="sectionBox">
                <div className="outerBox">
                    <div className="innerBox">
                        <h2>{languageText.groceries}</h2>
                        <div className="cards">
                            {groceries.map((grocery, index) => (
                                <div className="card" key={index}>
                                    <div className="img"><img src={grocery.img} alt="" /></div>
                                    <div className="cardsBottomContent">
                                        <p>{grocery.name} </p>
                                        <Button item={grocery} languageText={languageText} popupVisible={popupVisible} setPopupVisible={setPopupVisible} index={index} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="outerBox">
                    <div className="innerBox">
                        <h2>{languageText.mosques}</h2>
                        <div className="cards">
                            {mosques.map((mosque, index) => (
                                <div className="card" key={index}>
                                    <div className="img"><img src={mosque.img} alt="" /></div>
                                    <div className="cardsBottomContent">
                                        <p>{mosque.name} </p>
                                        <Button item={mosque} languageText={languageText} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="outerBox">
                    <div className="innerBox">
                        <h2>{languageText.attractions}</h2>
                        <div className="cards">
                            {attractions.map((attraction, index) => (
                                <div className="card" key={index}>
                                    <div className="img"><img src={attraction.img} alt="" /></div>
                                    <div className="cardsBottomContent">
                                        <p>{attraction.name} </p>
                                        <Button item={attraction} languageText={languageText} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {popupVisible && selectedBus && (
                    <div className={`popup ${popupVisible ? 'popup-opening' : 'popup-closing'}`}>
                        <div className="popup-content">

                            <div className="top">
                                <img src={selectedBus.busImg} alt="" />
                            </div>

                            <div className="bottom">
                                <>
                                    <div className="bus">{selectedBus.bus}</div>
                                    <button className="icon" onClick={closePopup}>
                                        <span class="tooltip" >{languageText.close}</span>
                                        <span><FontAwesomeIcon icon={faXmark} /></span>
                                    </button>
                                </>

                            </div>
                            <div className="iconAnimation">
                                <div className="busIcon">
                                    <FontAwesomeIcon icon={faVanShuttle} />
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Attractions;