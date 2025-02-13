import { Container, Row } from "react-bootstrap";

import { Nav } from "react-bootstrap";
import facebookIcon from "../assets/icons/facbook-icon.png";
import instagramIcon from "../assets/icons/instagram-icon.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import tiktokIcon from "../assets/icons/tiktok.png";
import { useSectionContext } from "../context/SectionContext";
import "../styles/Footer.css";

import { useEffect } from "react";

import { useAuth } from "../context/AuthContext";
import { useContextMenu } from "../context/MenuContext";

function Footer() {
  const { homeSection } = useSectionContext();
  const { aboutUsSection } = useSectionContext();
  const { contactUsSection } = useSectionContext();
  const { servicesSection } = useSectionContext();
  const { current_link, setCurrentLinkHelper } = useContextMenu();
  const { user, login, logout } = useAuth();

  const currentURL = window.location.href;
  const showBtns = !currentURL.includes("users");
  useEffect(() => {
    // console.log(current_link);
  }, [current_link]);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <Container className="footer-div">
        <Row className="footer-nav-row">
          {showBtns ? (
            <div className="footer-nav">
              <Nav.Link
                className="footer-link"
                onClick={() => scrollToSection(homeSection)}
              >
                <span
                  className={
                    current_link === "Home" ? "secondary-color-span" : ""
                  }
                >
                  Home
                </span>
              </Nav.Link>
              <Nav.Link className="footer-link">
                <span
                  onClick={() => scrollToSection(servicesSection)}
                  className={
                    current_link === "Services" ? "secondary-color-span" : ""
                  }
                >
                  Services
                </span>
              </Nav.Link>
              <Nav.Link className="footer-link">
                <span
                  onClick={() => scrollToSection(aboutUsSection)}
                  className={
                    current_link === "AboutUs" ? "secondary-color-span" : ""
                  }
                >
                  About Us
                </span>
              </Nav.Link>
              <Nav.Link className="footer-link">
                <span
                  onClick={() => scrollToSection(contactUsSection)}
                  className={
                    current_link === "ContactUs" ? "secondary-color-span" : ""
                  }
                >
                  Contact Us
                </span>
              </Nav.Link>
            </div>
          ) : null}
        </Row>

        <Row className="footer-nav-row">
          <div className="list-of-usa-states-div">
            <p>24/7 Online Service for Queries</p>

            <p>
              USA, Australia, Denmark, UK, Canada, Republic of South Korea,
              Japan, Europe
            </p>
            <p>9800000000, studyglobeeducation@gmail.com</p>
            <p>
              <a
                href="https://www.linkedin.com/company/studyglobaltm/?originalSubdomain=np"
                className="contact-us-s-media-a"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Chabhel, Kathmandu
              </a>{" "}
              & UK
            </p>
            <p>Copyright © 2024</p>
            <p className="developer-url-text">Developed by Ruchan Kayastha</p>
          </div>
        </Row>
        <Row className="contact-us-s-media-row">
          <div className="contact-us-s-media-div">
            <a
              href="https://www.linkedin.com/company/studyglobaltm/?originalSubdomain=np"
              className="contact-us-s-media-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn Icon " />
            </a>
            <a
              href="https://www.tiktok.com/@studyglobaltm"
              className="contact-us-s-media-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktokIcon} alt="TikTok Icon " />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61559697112834"
              className="contact-us-s-media-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook Icon " />
            </a>
            <a
              href="https://www.instagram.com/studyglobeeducation"
              className="contact-us-s-media-a"
              target="_blank"
              rel="noopener noreferrer"
            >
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
