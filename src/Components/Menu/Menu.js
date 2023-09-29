import "./Menu.css"
import { useLanguage } from '../../language';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import images from '../../data/images.json';



const Menu = ({ language, languageData }) => {
    const { toggleLanguage } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        // Ensure that the languageData and language are updated when the language changes
        // You can use this hook to make sure the component updates when the language changes
    }, [language, languageData]);

    const languageText = languageData[language];
    const isRtl = language === 'ar';


    const names = [
        {
            imgSrc: images.presidentImg,
            text: languageText.President,
            name: languageText.PresidentName
        },
        {
            imgSrc: images.vicePresidentImg,
            text: languageText.VicePresident,
            name: languageText.VicePresidentName
        },
        {
            imgSrc: images.academicPresident,
            text: languageText.Academic,
            name: languageText.AcademicName

        },
        {
            imgSrc: images.socialPresident,
            text: languageText.Social,
            name: languageText.SocialName
        },
        {
            imgSrc: images.culturePresident,
            text: languageText.Culture,
            name: languageText.CultureName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            text: languageText.Media,
            name: languageText.MediaName
        },
        {

            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            text: languageText.Sport,
            name: languageText.SportName
        },
        {
            imgSrc: images.HR,
            text: languageText.HR,
            name: languageText.HRName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            text: languageText.Logistics,
            name: languageText.LogisticsName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            text: languageText.Women,
            name: languageText.WomenName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            text: languageText.PublicReleation,
            name: languageText.PublicReleationName
        },


        // Add more objects as needed
    ];

    const isNotServicesPage = location.pathname !== '/services';
    const isNotGalleryPage = location.pathname !== '/gallery';
    const isNotResidencesPage = location.pathname !== '/residences';
    const isNotAttractionsPage = location.pathname !== '/attractions';
    const isNotTransportationPage = location.pathname !== '/transportation';
    const isNotAccountPage = location.pathname !== '/openAccount';

    return (
        <div className={`sideMenu 
        ${language === 'ar' ? 'arabic' : ''} 
        ${isNotServicesPage ? '' : 'hidden'}
        ${isNotGalleryPage ? '' : 'hidden'}
        ${isNotResidencesPage ? '' : 'hidden'}
        ${isNotAttractionsPage ? '' : 'hidden'}
        ${isNotTransportationPage ? '' : 'hidden'}
        ${isNotAccountPage ? '' : 'hidden'}
        `}>

            <div className="liveBox">
                <div className="title">
                    <h1>{languageText.Egypt}</h1>
                    <h3>{languageText.IssPres2}</h3>
                </div>
                {names.map((name, index) => (
                    <div className="people">
                        <div className="peopleCard">
                            <div className="peopleImg">
                                <img src={name.imgSrc} alt="" />
                            </div>
                            <div className="peopleText">
                                <p className="name">{name.name}</p>
                                <p className="role">{name.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;