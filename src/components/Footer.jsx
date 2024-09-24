import { Container, Row } from "react-bootstrap";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/icons/facbook-icon.png";
import instagramIcon from "../assets/icons/instagram-icon.png";
import { useSectionContext } from "../context/SectionContext";
import "../styles/Footer.css";


import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useContextMenu } from "../context/MenuContext";


function Footer() {
    const { homeSection } = useSectionContext();
    const { aboutUsSection } = useSectionContext();
    const { contactUsSection } = useSectionContext();
    const { servicesSection } = useSectionContext();
const {current_link, setCurrentLinkHelper} = useContextMenu();
const {user, login, logout} = useAuth();

    useEffect(() => {
    // console.log(current_link);
  }, [current_link])

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <Container className="footer-div">
        <Row className="footer-nav-row">
          <div className="footer-nav">

        
                 <Nav.Link className="footer-link" onClick={() => scrollToSection(homeSection)}>
            <span className={current_link === "Home" ? "secondary-color-span" : ""}>Home</span>
          </Nav.Link>
          <Nav.Link  className="footer-link">
            <span onClick={() => scrollToSection(servicesSection)} className={current_link === "Services" ? "secondary-color-span" : ""}>Services</span>
          </Nav.Link>
          <Nav.Link  className="footer-link">
            <span 
            onClick={() => scrollToSection(aboutUsSection)}
            className={current_link === "AboutUs" ? "secondary-color-span" : ""}>About Us</span>
          </Nav.Link>
          <Nav.Link  className="footer-link">
            <span onClick={() => scrollToSection(contactUsSection)} className={current_link === "ContactUs" ? "secondary-color-span" : ""}>Contact Us</span>
          </Nav.Link>

            {user?
              <Link exact to="/logout" as={NavLink}  className="footer-link">
                <span onClick={()=>setCurrentLinkHelper("Logout")} className={current_link=="Logout"?"secondary-color-span":""}>Study Abroad</span>
              </Link>
            :""}


          </div>
        </Row>

        <Row className="footer-nav-row">
          <div className="list-of-usa-states-div">
          <p>24/7 Online Service for Queries</p>

            <p>
              Japan, Korea, Australia, US, Canada, New Zealand, Denmark, UK
            </p>

            <p>Copyright © 2024</p>
              <p className="developer-url-text">Developed by Ruchan Kayastha</p>
          </div>
        </Row>
        <Row className="contact-us-s-media-row">
  <div className="contact-us-s-media-div">
    <a href="https://www.facebook.com/profile.php?id=61559697112834" className="contact-us-s-media-a" target="_blank" rel="noopener noreferrer">
      <img src={facebookIcon} alt="Facebook Icon " />
    </a>
    <a href="https://www.instagram.com/studyglobeeducation" className="contact-us-s-media-a" target="_blank" rel="noopener noreferrer">
      <img src={instagramIcon} alt="Instagram Icon " />
    </a>
  </div>
</Row>

        <Row className="footer-space-row">
          <div className="footer-space-div" />
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
