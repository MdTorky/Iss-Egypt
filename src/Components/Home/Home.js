// Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';
import { useLanguage } from '../../language';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the Logo component
import { faArrowUp, faArrowDown, faTree } from '@fortawesome/free-solid-svg-icons';
import images from '../../data/images.json';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Home({ language, languageData }) {
    const { toggleLanguage } = useLanguage();

    useEffect(() => {
        // Ensure that the languageData and language are updated when the language changes
        // You can use this hook to make sure the component updates when the language changes
    }, [language, languageData]);

    const root = document.documentElement; // Access the root element
    const themeColor = getComputedStyle(root).getPropertyValue('--theme');


    const languageText = languageData[language];
    const isRtl = language === 'ar';
    const [isExpanded, setIsExpanded] = useState(false);
    // Define an array of objects with logo and text data
    const rows = [
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1Vfiu3DK-3RM1f809nN3diCp3JF4PL5Ou",
            text: languageText.President,
            name: languageText.PresidentName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1mv16htDcHsPmq49GMV6rB-dFlJitpcHE",
            text: languageText.VicePresident,
            name: languageText.VicePresidentName
        },
        {
            imgSrc: "https://media.licdn.com/dms/image/D5635AQF0MIeuBcl5Mg/profile-framedphoto-shrink_200_200/0/1685270083622?e=1695877200&v=beta&t=GeibXGb0ja1Pu01sujqekGljcF_crKJa-EQFmag6rg0",
            text: languageText.Academic,
            name: languageText.AcademicName

        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1syRLTGWu6_CrGM3s9XhQcCe5ZunzE2wZ",
            text: languageText.Social,
            name: languageText.SocialName
        },
        {
            imgSrc: "https://drive.google.com/uc?export=view&id=1RXetI-vSuvQCPYcvGg5C4qvRfFjAm08G",
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
            imgSrc: "https://drive.google.com/uc?export=view&id=1GV8vUzPG_jU-H5o9uj4hO8Fwb_N8iZ0E",
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




    const [currentSlide, setCurrentSlide] = useState(0); // Use a single currentSlide state
    const [currentSlide2, setCurrentSlide2] = useState(0); // Use a single currentSlide state
    const [currentSlide3, setCurrentSlide3] = useState(0); // Use a single currentSlide state

    useEffect(() => {
        const slides = document.querySelectorAll(".slide");
        const slides2 = document.querySelectorAll(".slide2");
        const slides3 = document.querySelectorAll(".slide3");
        const btns = document.querySelectorAll(".btn");
        const btns2 = document.querySelectorAll(".btn2");
        const btns3 = document.querySelectorAll(".btn3");

        const manualNav = (manual) => {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                btns[index].classList.remove('active');
            });

            slides[manual].classList.add("active");
            btns[manual].classList.add("active");
        };

        const manualNav2 = (manual) => {
            slides2.forEach((slide, index) => {
                slide.classList.remove('active');
                btns2[index].classList.remove('active');
            });

            slides2[manual].classList.add("active");
            btns2[manual].classList.add("active");
        };

        const manualNav3 = (manual) => {
            slides3.forEach((slide, index) => {
                slide.classList.remove('active');
                btns3[index].classList.remove('active');
            });

            slides3[manual].classList.add("active");
            btns3[manual].classList.add("active");
        };

        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                setCurrentSlide(i); // Update the current slide
                manualNav(i);
            });
        });

        btns2.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                setCurrentSlide2(i); // Update the current slide
                manualNav2(i);
            });
        });
        btns3.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                setCurrentSlide3(i); // Update the current slide
                manualNav3(i);
            });
        });
    }, []);



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

            <h1 className="nameTitle">{languageText.IssPres}
                <div className="showMore" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? <FontAwesomeIcon icon={faArrowUp} className='color' /> : <FontAwesomeIcon icon={faArrowDown} className='color2' />}
                </div>
            </h1>
            <div className={`homeItems ${isExpanded ? 'expanded' : ''}`}>
                {/* <div className="homeItems"> */}
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
                <div className="blog">
                    <div className="blogContainer">
                        <div className="blogImg">
                            <img src={images.achievementImg} alt="" />
                        </div>
                        <div className="blogText">
                            <p className="subtitle">{languageText.blogSubtitle}</p>
                            <h2 className="title">{languageText.blogTitle1} <span className="color">{languageText.blogTitle2} </span>{languageText.blogTitle3}</h2>
                            <p className="description">{languageText.blogDescription}</p>
                        </div>
                    </div>
                    <div className="blogContainer2">
                        <div className="blogItem">
                            <img src={images.upcomingEventImg1} alt="" />
                            <p className="subtitle">{languageText.upcomingEventSubtitle1}</p>
                            <h2 className="description">{languageText.upcomingEventDescription1}</h2>
                        </div>
                        <div className="blogItem">
                            <img src={images.upcomingEventImg2} alt="" />
                            <p className="subtitle">{languageText.upcomingEventSubtitle2}</p>
                            <h2 className="description">{languageText.upcomingEventDescription2}</h2>
                        </div>
                    </div>
                </div>
                <div className="events">

                    {/* Academic Events */}
                    <div className="eventBox">
                        <h1>
                            {language === 'ar' ? (
                                <>
                                    {languageText.AcademicEvents.split(' ').slice(0, -1).join(' ')}
                                    <span style={{ color: themeColor }}>
                                        {languageText.AcademicEvents.split(' ').pop()}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span style={{ color: themeColor }}>
                                        {languageText.AcademicEvents.split(' ')[0]}
                                    </span>{' '}
                                    {languageText.AcademicEvents.split(' ').slice(1).join(' ')}
                                </>
                            )}
                        </h1>
                        <div className="eventBox">
                            <div className="slide active">
                                <img src={images.academicImg1} alt="" />
                                <div className="info">
                                    <h2>{languageText.AcademicEventTitle1}<span className="creator"> {languageText.AcademicEventCreator1}</span></h2>
                                    <p>{languageText.AcademicEventDescription1}</p>
                                </div>
                            </div>
                            <div className="slide">
                                <img src={images.academicImg2} alt="" />
                                <div className="info">
                                    <h2>{languageText.AcademicEventTitle2}<span className="creator"> {languageText.AcademicEventCreator2}</span></h2>
                                    <p>{languageText.AcademicEventDescription2}</p>

                                </div>
                            </div>
                            <div className="slide">
                                <img src={images.academicImg3} alt="" />
                                <div className="info special">
                                    <h2>{languageText.AcademicEventTitle3}<span className="creator"> {languageText.AcademicEventCreator3}</span></h2>
                                    <p>{languageText.AcademicEventDescription3}</p>

                                </div>
                            </div>
                            <div className="navigation">
                                <div className="btn active"></div>
                                <div className="btn"></div>
                                <div className="btn"></div>
                            </div>
                        </div>
                    </div>

                    {/* Social Events */}
                    <div className="eventBox">
                        <h1>
                            {language === 'ar' ? (
                                <>
                                    {languageText.SocialEvents.split(' ').slice(0, -1).join(' ')}
                                    <span style={{ color: themeColor }}>
                                        {languageText.SocialEvents.split(' ').pop()}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span style={{ color: themeColor }}>
                                        {languageText.SocialEvents.split(' ')[0]}
                                    </span>{' '}
                                    {languageText.SocialEvents.split(' ').slice(1).join(' ')}
                                </>
                            )}
                        </h1>
                        <div className="eventBox">
                            <div className="slide2 active">
                                <img src={images.socialImg1} alt="" />
                                <div className="info">
                                    <h2>{languageText.SocialEventTitle1}</h2>
                                    <p>{languageText.SocialEventDescription1}</p>
                                </div>
                            </div>
                            <div className="slide2">
                                <img src={images.socialImg2} alt="" />
                                <div className="info">
                                    <h2>{languageText.SocialEventTitle2}</h2>
                                    <p>{languageText.SocialEventDescription2}</p>

                                </div>
                            </div>
                            <div className="slide2">
                                <img src={images.socialImg3} alt="" />
                                <div className="info">
                                    <h2>{languageText.SocialEventTitle3}</h2>
                                    <p>{languageText.SocialEventDescription3}</p>

                                </div>
                            </div>
                            <div className="navigation">
                                <div className="btn2 active"></div>
                                <div className="btn2"></div>
                                <div className="btn2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Cultural Events */}
                    <div className="eventBox">
                        <h1>
                            {language === 'ar' ? (
                                <>
                                    {languageText.CultureEvents.split(' ').slice(0, -1).join(' ')}
                                    <span style={{ color: themeColor }}>
                                        {languageText.CultureEvents.split(' ').pop()}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span style={{ color: themeColor }}>
                                        {languageText.CultureEvents.split(' ')[0]}
                                    </span>{' '}
                                    {languageText.CultureEvents.split(' ').slice(1).join(' ')}
                                </>
                            )}
                        </h1>
                        <div className="eventBox">
                            <div className="slide3 active">
                                <img src={images.cultureImg1} alt="" />
                                <div className="info">
                                    <h2>{languageText.CultureEventTitle1}<span className="creator"> {languageText.CultureEventCreator1}</span></h2>
                                    <p>{languageText.CultureEventDescription1}</p>
                                </div>
                            </div>
                            <div className="slide3">
                                <img src={images.cultureImg2} alt="" />
                                <div className="info">
                                    <h2>{languageText.CultureEventTitle2}<span className="creator"> {languageText.CultureEventCreator2}</span></h2>
                                    <p>{languageText.CultureEventDescription2}</p>

                                </div>
                            </div>
                            <div className="slide3">
                                <img src={images.cultureImg3} alt="" />
                                <div className="info">
                                    <h2>{languageText.CultureEventTitle3}</h2>
                                    <p>{languageText.CultureEventDescription3}</p>

                                </div>
                            </div>
                            <div className="navigation">
                                <div className="btn3 active"></div>
                                <div className="btn3"></div>
                                <div className="btn3"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <h1 className="connectTitle">Connect With Us</h1>
                <div className="connect">
                    <div className="socialBar">
                        <a><div className="socialCircle facebook"><FontAwesomeIcon icon={faFacebook} className="facebook" /></div></a>
                        <div className="socialCircle instagram"><FontAwesomeIcon icon={faInstagram} className="instagram" /></div>
                        <div className="socialCircle youtube"><FontAwesomeIcon icon={faYoutube} className="youtube" /></div>
                        <div className="socialCircle linkedIn"><FontAwesomeIcon icon={faLinkedin} className="linkedIn" /></div>
                        <div className="socialCircle linktree"><FontAwesomeIcon icon={faTree} className="linktree" /></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;
