import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Services.css';
import img1 from '../../images/logo.png';
import img2 from '../../images/flag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarDays, faXmark, faCircleInfo, faCarBattery,
    faLaptopCode, faHelmetSafety, faGears, faFlaskVial, faBookBookmark, faEnvelope, faLocationDot, faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import images from "../../data/images.json";
import links from "../../data/upcomingEvents.json";
import faculties from "../../data/faculties.json";
import { useLanguage } from '../../language';

const Services = ({ language, languageData }) => {
    const { toggleLanguage } = useLanguage();
    // Get the current location
    const location = useLocation();

    useEffect(() => {
    }, [language, languageData]);

    useEffect(() => {
        if (selectedAnnouncement && selectedAnnouncement.id) {
            const updatedAnnouncement = announcements.find(announcement => announcement.id === selectedAnnouncement.id);
            if (updatedAnnouncement) {
                setSelectedAnnouncement(updatedAnnouncement);
            }
        }
    }, [language]);

    useEffect(() => {
        if (selectedFaculty && selectedFaculty.id) {
            const updatedFaculty = combinedFaculties.find(combinedFaculties => combinedFaculties.id === selectedFaculty.id);
            if (updatedFaculty) {
                setSelectedFaculty(updatedFaculty);
            }
        }
    }, [language]);
    const languageText = languageData[language];
    const isRtl = language === 'ar';

    const isServicesPage = location.pathname === '/services';
    const type = "Academic";


    // 1. Add a new Id

    // 2. Add Icon based on the Announcement, choose from these
    // a. images.academicAnnouncement (if academic announcement)
    // b. images.socialAnnouncement (if social announcement)
    // c. images.cultureAnnouncement (if culture announcement)
    // d. images.otherAnnouncement (if any other announcement)

    // 3. Add Event Image in the Background Image


    // 4. Add A TITLE in English and Arabic in language.Json
    // Then add announcementTitle1 or announcementTitle2 until announcementTitle7 based on what you written

    // 5. Add Organizer either
    // a. languageText.academicAnnouncementOrganizer (if the academic committee is the organizer)
    // b. languageText.socialAnnouncementOrganizer (if the social committee is the organizer)
    // c. languageText.cultureAnnouncementOrganizer (if the culture committee is the organizer)
    // d. languageText.otherAnnouncementOrganizer (if the other committee is the organizer)

    // FOR 6 AND 7 IF THERE IS NO LINKS LEAVE IT BLANK

    // 6. Add the Form Link or social media link for the event

    // 7. Add the Calender Link

    const announcements = [
        {
            id: 1,
            img: images.academicAnnouncement,
            backgroundImg: "https://drive.google.com/uc?export=view&id=1IdwpNokC5ILvmZne9L5rmb7PeCwZUk3i",
            title: languageText.announcementTitle1,
            organizer: languageText.academicAnnouncementOrganizer,
            link: "https://www.google.com",
            calendarLink: links.upcomingEventLink1,
        },
        {
            id: 2,
            img: img2,
            backgroundImg: images.academicAnnouncement,
            title: "Title 2",
            organizer: languageText.socialAnnouncementOrganizer,
            link: "Link 2",
            calendarLink: "",
        },
        {
            id: 3,
            img: img1,
            backgroundImg: images.academicAnnouncement,
            title: "Title3",
            organizer: languageText.cultureAnnouncementOrganizer,
            link: "",
            calendarLink: "Calendar Link3",
        },
    ];



    const facultiesData = [
        {
            Icon: faCarBattery,
            Title: languageText.FKE,

        },
        {
            Icon: faLaptopCode,
            Title: languageText.FC,
        },
        {
            Icon: faHelmetSafety,
            Title: languageText.FKA,

        },
        {
            Icon: faGears,
            Title: languageText.FKM,

        },
        {
            Icon: faFlaskVial,
            Title: languageText.FKT,

        },
        {
            Icon: faBookBookmark,
            Title: languageText.Found,

        },
    ];


    const combinedFaculties = faculties.map((faculty, index) => ({
        ...faculty,
        Icon: facultiesData[index].Icon,
        Title: facultiesData[index].Title,
    }));




    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

    const togglePopup = (announcement) => {
        if (selectedAnnouncement && selectedAnnouncement.id === announcement.id) {
            // If the same story is clicked again, close the popup
            setPopupVisible(false);
            setSelectedAnnouncement(null);
        } else {
            // Close the college popup if open
            setPopupVisibleFaculty(false);
            setSelectedFaculty(null);

            setSelectedAnnouncement(announcement);
            setPopupVisible(true);
        }
    };

    const [popupVisibleFaculty, setPopupVisibleFaculty] = useState(false)
    const [selectedFaculty, setSelectedFaculty] = useState(null);

    const togglePopupFaculty = (faculty) => {
        if (selectedFaculty && selectedFaculty.id === faculty.id) {
            setPopupVisibleFaculty(false);
            setSelectedFaculty(null);
        } else {
            // Close the announcement popup if open
            setPopupVisible(false);
            setSelectedAnnouncement(null);

            setSelectedFaculty(faculty);
            setPopupVisibleFaculty(true);
        }
    };
    const closePopup = () => {
        setPopupVisible(false);
        setPopupVisibleFaculty(false);
    };

    const handleMoreInfoClick = () => {
        if (selectedAnnouncement && selectedAnnouncement.link) {
            window.open(selectedAnnouncement.link, '_blank');
        } else {
            alert("No link available for this announcement.");
        }


    };

    const handleCalenderLinkClick = () => {
        if (selectedAnnouncement && selectedAnnouncement.calendarLink) {
            window.open(selectedAnnouncement.calendarLink, '_blank');
        } else {
            alert("No Calender link available for this announcement.");
        }
    }


    const GroupClick = () => {
        // if (selectedFaculty && selectedFaculty.group) {
        // } 
        window.open(selectedFaculty.group, '_blank');
    }

    const LocationClick = () => {
        // if (selectedFaculty && selectedFaculty.group) {
        // } 
        window.open(selectedFaculty.location, '_blank');
    }

    const WebsiteClick = () => {
        // if (selectedFaculty && selectedFaculty.group) {
        // } 
        window.open(selectedFaculty.website, '_blank');
    }

    const EmailClick = () => {
        // if (selectedFaculty && selectedFaculty.group) {
        // } 
        window.open(selectedFaculty.email2, '_blank');
    }






    return (
        <div className="services">
            <div className="annContainer">
                <div className="annContainer2">
                    <h2>{languageText.announcements}</h2>
                    <div className="annStories">
                        {announcements.map((announcement, index) => (
                            <div className={`story ${popupVisible && selectedAnnouncement && selectedAnnouncement.id === announcement.id
                                ? 'active' : ''}`} key={index} onClick={() => togglePopup(announcement)}>
                                <img src={announcement.img} alt={announcement.title} />
                            </div>
                        ))}
                    </div>

                    {popupVisible && selectedAnnouncement && (
                        <div className={`popup ${popupVisible ? 'popup-opening' : 'popup-closing'}`} style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0,
                0.5), rgba(0, 0, 0, 0.5)), url(${selectedAnnouncement.backgroundImg})`
                        }}>
                            <div className="popup-content">
                                <div className="topContent">
                                    <img src={selectedAnnouncement.img} alt={selectedAnnouncement.title} />
                                    <div className="topText">
                                        <h3>{selectedAnnouncement.title}</h3>
                                        <p>{selectedAnnouncement.organizer}</p>
                                    </div>
                                    <button onClick={closePopup} className="closeButton">
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                                <div className="bottomContent">

                                    <button onClick={handleMoreInfoClick}>
                                        <div className="sign">
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        </div>
                                        <div className="text">{languageText.info}</div>
                                    </button>

                                    <button onClick={handleCalenderLinkClick}>
                                        <div className="sign">
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                        </div>
                                        <div className="text">{languageText.calender}</div>
                                    </button>

                                </div>
                            </div>
                        </div>
                    )}
                    <h2>Help</h2>
                </div>
            </div>
            <div className="leftContainer">
                <div className="collegesBoxTitle">
                    <h2>Faculties</h2>
                    <div className="collegesBox">
                        {combinedFaculties.map((faculty, index) => (
                            <div
                                className={`college ${popupVisibleFaculty && selectedFaculty && selectedFaculty.id === faculty.id ? 'active' : ''}`}
                                key={index}
                                onClick={() => togglePopupFaculty(faculty)}
                            >
                                <div className="img">
                                    <FontAwesomeIcon icon={faculty.Icon} />
                                </div>
                                <div className="textBox">
                                    <div className="textContent">
                                        <p className="h1">{faculty.Title}</p>
                                        <span className="span">{faculty.abb}</span>
                                    </div>
                                    <p className="p">{faculty.email}</p>
                                </div>
                            </div>
                        ))}

                        {popupVisibleFaculty && selectedFaculty && (
                            <div className={`popupFaculty ${popupVisibleFaculty ? 'popup-opening' : 'popup-closing'}`}>
                                {/* <div className="popup-content">
                                    <div className="topContent">
                                        <img src={selectedFaculty.Icon} alt={selectedFaculty.Title} />
                                        <div className="topText">
                                            <h3>{selectedFaculty.Title}</h3>
                                            <p>{selectedFaculty.organizer}</p>
                                        </div>
                                        <button onClick={closePopup} className="closeButton">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                    <div className="bottomContent">
                                        <button onClick={handleMoreInfoClick}>
                                            <div className="sign">
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                            </div>
                                            <div className="text">{languageText.info}</div>
                                        </button>
                                        <button onClick={handleCalenderLinkClick}>
                                            <div className="sign">
                                                <FontAwesomeIcon icon={faCalendarDays} />
                                            </div>
                                            <div className="text">{languageText.calender}</div>
                                        </button>
                                    </div>
                                </div> */}

                                <div className="container">
                                    <div className="topSection">
                                        <div className="img">
                                            <FontAwesomeIcon icon={selectedFaculty.Icon} />
                                        </div>
                                        <div className="textBox">
                                            <div className="textContent">
                                                <h3>{selectedFaculty.abb}</h3>
                                                <button onClick={closePopup} className="closeButton">
                                                    <FontAwesomeIcon icon={faXmark} />
                                                </button>
                                            </div>
                                            <h2 className="p">{selectedFaculty.Title}</h2>
                                        </div>
                                    </div>

                                    <div className="bottomSection">
                                        <img src={selectedFaculty.image} alt="" />
                                        <div className="bottomLinks">
                                            <button onClick={GroupClick}>
                                                <div className="sign">
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </div>
                                                <div className="text">{languageText.Group}</div>
                                            </button>
                                            <button onClick={LocationClick}>
                                                <div className="sign">
                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                </div>
                                                <div className="text">{languageText.Location}</div>
                                            </button>
                                            <button onClick={WebsiteClick}>
                                                <div className="sign">
                                                    <FontAwesomeIcon icon={faInfoCircle} />
                                                </div>
                                                <div className="text">{languageText.Website}</div>

                                            </button>
                                            <button onClick={EmailClick}>
                                                <div className="sign">
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </div>
                                                <div className="text">{languageText.Email}</div>

                                            </button>
                                            {/* <button><FontAwesomeIcon icon={faEnvelope} />Email</button>
                                            <button><FontAwesomeIcon icon={faEnvelope} />Email</button>
                                            <button><FontAwesomeIcon icon={faEnvelope} />Email</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

{/* <button><FontAwesomeIcon icon={faCircleInfo} /></button>
                                                <button><FontAwesomeIcon icon={faMap} /></button> */}