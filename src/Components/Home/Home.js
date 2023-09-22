// Home.js
import React, { useEffect } from 'react';
import './Home.css';
import { useLanguage } from '../../language';
import Logo from './Logo'; // Import the Logo component

function Home({ language, languageData }) {
    const { toggleLanguage } = useLanguage();

    useEffect(() => {
        // Ensure that the languageData and language are updated when the language changes
        // You can use this hook to make sure the component updates when the language changes
    }, [language, languageData]);

    const languageText = languageData[language];
    const isRtl = language === 'ar';

    // Define an array of objects with logo and text data
    const rows = [
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            // logoSrc: 'https://drive.google.com/uc?export=view&id=1XwQuhZL3rmRo3O9dCYhlVKmchuo9pgsT',
            text: languageText.President,
            name: languageText.PresidentName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1mv16htDcHsPmq49GMV6rB-dFlJitpcHE",
            // logoSrc: 'https://drive.google.com/uc?export=view&id=1XwQuhZL3rmRo3O9dCYhlVKmchuo9pgsT',
            text: languageText.VicePresident,
            name: languageText.VicePresidentName
        },
        {
            imgSrc: "https://media.licdn.com/dms/image/D5635AQF0MIeuBcl5Mg/profile-framedphoto-shrink_200_200/0/1685270083622?e=1695877200&v=beta&t=GeibXGb0ja1Pu01sujqekGljcF_crKJa-EQFmag6rg0",
            // logoSrc:'https://drive.google.com/uc?export=view&id=1APJFNAD_ORg28mWkfPMCMeDZR98HPCIi',
            text: languageText.Academic,
            name: languageText.AcademicName

        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1syRLTGWu6_CrGM3s9XhQcCe5ZunzE2wZ",
            // logoSrc:'https://drive.google.com/uc?export=view&id=1XwQuhZL3rmRo3O9dCYhlVKmchuo9pgsT',
            text: languageText.Social,
            name: languageText.SocialName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1RXetI-vSuvQCPYcvGg5C4qvRfFjAm08G",
            // logoSrc: 'https://drive.google.com/uc?export=view&id=1XwQuhZL3rmRo3O9dCYhlVKmchuo9pgsT',
            text: languageText.Culture,
            name: languageText.CultureName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            // logoSrc: 'https://drive.google.com/uc?export=view&id=1fwGuCx8Q0skK7GZBnIN0w0LSAEncrE5d',
            text: languageText.Media,
            name: languageText.MediaName
        },
        {

            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            // logoSrc: 'https://drive.google.com/uc?export=view&id=1xBxM8yXMiwNLnIfrxUrWRRJdfGniA4ed',
            text: languageText.Sport,
            name: languageText.SportName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1GV8vUzPG_jU-H5o9uj4hO8Fwb_N8iZ0E",
            // logoSrc: 'https://drive.google.com/uc?export=view&id=1XwQuhZL3rmRo3O9dCYhlVKmchuo9pgsT',
            text: languageText.HR,
            name: languageText.HRName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            // logoSrc: 'https://drive.google.com/uc?export=view&id=1xBxM8yXMiwNLnIfrxUrWRRJdfGniA4ed',
            text: languageText.Logistics,
            name: languageText.LogisticsName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            // logoSrc: 'https://drive.google.com/uc?export=view&id=1XwQuhZL3rmRo3O9dCYhlVKmchuo9pgsT',
            text: languageText.Women,
            name: languageText.WomenName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            // logoSrc: 'https://drive.google.com/uc?export=view&id=1XwQuhZL3rmRo3O9dCYhlVKmchuo9pgsT',
            text: languageText.PublicReleation,
            name: languageText.PublicReleationName
        },


        // Add more objects as needed
    ];

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
            <div className="homeItems">
                <h1 className="nameTitle">{languageText.IssPres}</h1>
                <div className="row">
                    {rows.map((row, index) => (
                        <div className="rowCircle" key={index}>
                            <img src={row.imgSrc} alt="" />
                            <Logo logoSrc={row.logoSrc} />
                            <p>{row.name}</p>
                            <span>{row.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="homeBoxes">
                <h1 className="homeTitle">{languageText.achievements}</h1>
                {/* <div className="row">
                    <div className="rowText">
                        <h1>Academic Committee</h1>
                        <p>Academic Committee</p>
                    </div>
                    <div className="rowBox">
                        <img src="https://drive.google.com/uc?export=view&id=1GoI8_VNOFe_AqNjz6pQqFgWpZe_qw_xb" alt="" />
                    </div>
                    <div className="rowBox">
                        <div class="wrapper">
                            <img src="https://drive.google.com/uc?export=view&id=1GoI8_VNOFe_AqNjz6pQqFgWpZe_qw_xb" alt="" />
                            <img src="https://drive.google.com/uc?export=view&id=1GoI8_VNOFe_AqNjz6pQqFgWpZe_qw_xb" alt="" />
                            <img src="https://drive.google.com/uc?export=view&id=1GoI8_VNOFe_AqNjz6pQqFgWpZe_qw_xb" alt="" />
                            <img src="https://drive.google.com/uc?export=view&id=1GoI8_VNOFe_AqNjz6pQqFgWpZe_qw_xb" alt="" />
                        </div>
                    </div>
                </div> */}
                <div className="blog">
                    <div className="blogContainer">
                        <div className="blogImg">
                            <img src="https://drive.google.com/uc?export=view&id=1ebPb8_uFXp_7RrmCk5y-ImZyAictfWSC" alt="" />
                        </div>
                        <div className="blogText">
                            <p className="subtitle">{languageText.blogSubtitle}</p>
                            <h2 className="title">{languageText.blogTitle1} <span className="color">{languageText.blogTitle2} </span>{languageText.blogTitle3}</h2>
                            <p className="description">{languageText.blogDescription}</p>
                        </div>
                    </div>
                    <div className="blogContainer2">
                        <div className="blogItem">
                            <img src="https://drive.google.com/uc?export=view&id=1GoI8_VNOFe_AqNjz6pQqFgWpZe_qw_xb" alt="" />
                            <p className="subtitle">{languageText.upcomingEventSubtitle1}</p>
                            <h2 className="description">{languageText.upcomingEventDescription1}</h2>
                        </div>
                        <div className="blogItem">
                            <img src="https://drive.google.com/uc?export=view&id=1GoI8_VNOFe_AqNjz6pQqFgWpZe_qw_xb" alt="" />
                            <p className="subtitle">{languageText.upcomingEventSubtitle2}</p>
                            <h2 className="description">{languageText.upcomingEventDescription2}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
