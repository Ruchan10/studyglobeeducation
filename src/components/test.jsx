import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import { useContextMenu } from "../context/MenuContext";
import { useSectionContext } from "../context/SectionContext";
import { auth } from "../firebaseConfig";
import "../styles/Navbar.css";

function CustomNavbar() {
  const { current_link, setCurrentLinkHelper } = useContextMenu();
  const { aboutUsSection } = useSectionContext();
  const { homeSection } = useSectionContext();
  const { contactUsSection } = useSectionContext();
  const { servicesSection } = useSectionContext();
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const element = homeSection.current;
  useEffect(() => {
    console.log("IN NAV BAR");
    onAuthStateChanged(auth, (user) => {
      console.log("IN AUTH STATA CHANGED");

      if (user) {
        console.log("USER");
        console.log(user);

        setUser(user);
      } else {
        console.log("USER == null");
        console.log(user);
        setUser(null);
      }
      setLoading(false);
    });

    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [hash, element]);

  return (
    <Navbar
      bg="light"
      variant="light"
      className="navbar"
      collapseOnSelect
      expand="lg"
      ref={homeSection}
    >
      <Navbar.Brand className="navbar-brand">
        <img
          src={logo}
          width="100%"
          height="80"
          className="d-inline-block align-top navbar-brand-img"
          alt="React Bootstrap logo"
          onClick={() => navigate("/")}
        />
      </Navbar.Brand>
      <Navbar.Toggle
        className="navbar-toggle"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto navbar-nav">
          <Nav.Link
            className="navbar-link"
            onClick={() => scrollToSection(homeSection)}
          >
            <span
              className={current_link === "Home" ? "secondary-color-span" : ""}
            >
              Home
            </span>
          </Nav.Link>
          <Nav.Link className="navbar-link">
            <span
              onClick={() => scrollToSection(servicesSection)}
              className={
                current_link === "Services" ? "secondary-color-span" : ""
              }
            >
              Services
            </span>
          </Nav.Link>
          <Nav.Link className="navbar-link">
            <span
              onClick={() => scrollToSection(aboutUsSection)}
              className={
                current_link === "AboutUs" ? "secondary-color-span" : ""
              }
            >
              About Us
            </span>
          </Nav.Link>
          <Nav.Link className="navbar-link">
            <span
              onClick={() => scrollToSection(contactUsSection)}
              className={
                current_link === "ContactUs" ? "secondary-color-span" : ""
              }
            >
              Contact Us
            </span>
          </Nav.Link>
          {user ? (
            <Nav.Link className="navbar-link">
              <span
                onClick={() => navigate("/users")}
                className={
                  current_link === "List" ? "secondary-color-span" : ""
                }
              >
                List
              </span>
            </Nav.Link>
          ) : null}
          {user ? (
            <Nav.Link className="navbar-link">
              <span
                onClick={() => setCurrentLinkHelper("Logout")}
                className={
                  current_link === "Logout" ? "secondary-color-span" : ""
                }
              >
                Logout
              </span>
            </Nav.Link>
          ) : null}
          {!user ? (
            <Nav.Link className="navbar-link">
              <span
                onClick={() => navigate("/admin")}
                className={
                  current_link === "Login" ? "secondary-color-span" : ""
                }
              >
                Login
              </span>
            </Nav.Link>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
