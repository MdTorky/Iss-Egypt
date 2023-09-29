import "./Residences.css"
import images from "../../data/images.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot, faInfoCircle, faEnvelope, faPhone, faBuilding
} from '@fortawesome/free-solid-svg-icons';
import kollegesData from "../../data/kolleges.json"
import { useLanguage } from '../../language';
import React, { useState, useEffect } from 'react';


const kolleges = kollegesData.on;
const kollegesOff = kollegesData.off;


const Button = ({ kollege, languageText }) => {

    return (
        <div className="icons">
            <button className="icon" onClick={() => { if (kollege && kollege.link) { window.open(kollege.link, "_blank") } else { alert(languageText.error) } }}>
                <span class="tooltip">{languageText.Website}</span>
                <span><FontAwesomeIcon icon={faInfoCircle} /></span>
            </button>
            <button className="icon" onClick={() => { window.open(kollege.location, "_blank") }}>

                <span class="tooltip" >{languageText.Location}</span>
                <span><FontAwesomeIcon icon={faLocationDot} /></span>
            </button>
            <button className="icon" onClick={() => { window.open(kollege.phone, "_blank") }}>
                <span class="tooltip" >{languageText.Phone}</span>
                <span><FontAwesomeIcon icon={faPhone} /></span>
            </button>
            <button className="icon" onClick={() => { if (kollege && kollege.email) { window.open(kollege.email, "_blank") } else { alert(languageText.error2) } }}>

                <span class="tooltip" >{languageText.Email}</span>
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
            </button>

        </div>

    )
}

const Residences = ({ language, languageData }) => {

    const { toggleLanguage } = useLanguage();
    useEffect(() => {
    }, [language, languageData]);

    const languageText = languageData[language];
    return (
        <div className="section">
            <h1 className="title">{languageText.residence}</h1>
            {/* <map name="">aa</map> */}
            {/* <div className="overlay"><FontAwesomeIcon icon={faBuilding} /></div> */}
            <div className="sectionBox">
                <div className="outerBox">
                    <div className="innerBox">
                        <h2>{languageText.on}</h2>
                        <div className="cards">
                            {kolleges.map((kollege, index) => (
                                <div className="card" key={index}>
                                    <div className="img"><img src={kollege.img} alt="" /></div>
                                    <div className="cardsBottomContent">
                                        <p>{kollege.name} <span>{kollege.female}</span></p>
                                        <Button kollege={kollege} languageText={languageText} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="outerBox">
                    <div className="innerBox">
                        <h2>{languageText.off}</h2>
                        <div className="cards">
                            {kollegesOff.map((kollege, index) => (
                                <div className="card" key={index}>
                                    <div className="img"><img src={kollege.img} alt="" /></div>
                                    <div className="cardsBottomContent">
                                        <p>{kollege.name} <span>{kollege.female}</span></p>
                                        <Button kollege={kollege} languageText={languageText} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Residences;