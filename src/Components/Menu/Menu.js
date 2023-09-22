import "./Menu.css"
import flag from '../../images/logo.png';
import { useLanguage } from '../../language';
import React, { useEffect } from 'react';


const Menu = ({ language, languageData }) => {
    const { toggleLanguage } = useLanguage();

    useEffect(() => {
        // Ensure that the languageData and language are updated when the language changes
        // You can use this hook to make sure the component updates when the language changes
    }, [language, languageData]);

    const languageText = languageData[language];
    const isRtl = language === 'ar';


    const names = [
        {
            name: languageText.PresidentName,
            role: languageText.President,
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1mv16htDcHsPmq49GMV6rB-dFlJitpcHE",
            role: languageText.VicePresident,
            name: languageText.VicePresidentName
        },
        {
            imgSrc: "https://media.licdn.com/dms/image/D5635AQF0MIeuBcl5Mg/profile-framedphoto-shrink_200_200/0/1685270083622?e=1695877200&v=beta&t=GeibXGb0ja1Pu01sujqekGljcF_crKJa-EQFmag6rg0",
            role: languageText.Academic,
            name: languageText.AcademicName

        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1syRLTGWu6_CrGM3s9XhQcCe5ZunzE2wZ",
            role: languageText.Social,
            name: languageText.SocialName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1RXetI-vSuvQCPYcvGg5C4qvRfFjAm08G",
            role: languageText.Culture,
            name: languageText.CultureName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            role: languageText.Media,
            name: languageText.MediaName
        },
        {

            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            role: languageText.Sport,
            name: languageText.SportName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1GV8vUzPG_jU-H5o9uj4hO8Fwb_N8iZ0E",
            role: languageText.HR,
            name: languageText.HRName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            role: languageText.Logistics,
            name: languageText.LogisticsName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            role: languageText.Women,
            name: languageText.WomenName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            role: languageText.PublicReleation,
            name: languageText.PublicReleationName
        },
    ];

    return (
        <div className={`sideMenu ${language === "ar" ? "arabic" : ""}`}>
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
                            <p className="role">{name.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;