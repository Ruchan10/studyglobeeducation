import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel";
import ClavesSteps from "../components/ClavesSteps";
import ContactUs from "../components/ContactUs";
import ServiceGrid from "../components/ServiceGrid";
import StepsViews from "../components/StepsView";
import { useSectionContext } from "../context/SectionContext";
import "../styles/ClavesSteps.css";
import "../styles/Landing.css";

export default function Landing() {
  const { hash } = useLocation();
  const { aboutUsSection, contactUsSection, servicesSection } = useSectionContext();

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = {
      "#aboutus-section": aboutUsSection.current,
      "#contactus-section": contactUsSection.current,
      "#services-section": servicesSection.current,
    };

    const targetElement = sections[hash];

    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [hash, aboutUsSection, contactUsSection, servicesSection]);

  return (
    <div>
      <BannerCarousel />
      <div className="banner-spacer" />
      <div className="color-background">

      <p className="text-center" ref={servicesSection}>
        <span className="third-color-span p-header-font">What We Offer</span>
      </p>

      <h2 className="text-center landing-custom-header2" >
        <span className="secondary-color-span landing-din-alternate-bold-font">
          Our Services
        </span>
      </h2>

      <div className="landing-paragraph">
        <p>
          <span className="third-color-span p-font">At Study Globe Education, we offer a range of services to guide and assist you through your study abroad journey. From university selection and application support to visa processing and beyond, we are committed to ensuring your success at every step.
          </span>
        
        </p>
      </div>

      <div className="spacer-25" />
      <ServiceGrid />
</div>
      <div className="spacer" />

<div className="color-background">
      <h2 className="text-center landing-custom-header2">
        <span className="landing-din-alternate-bold-font">Getting started is very easy</span>
      </h2>

      <div className="start-step-div">
        <StepsViews />

        <div className="comenzar-button-div">
          <Button variant="primary" className="comenzar-button" onClick={()=> scrollToSection(contactUsSection)}>
            START NOW!
          </Button>
        </div>
      </div>
      </div>
      {/* <div className="section-transition"></div> */}

      <div className="spacer-25" />
      <div className="spacer-25" />

      <div className="claves-para-exito-div">
      <div className="spacer-25" />

        <ClavesSteps />
      </div>

      <div className="spacer-25" />
      <div className="spacer-25" />
      <div className="claves-para-exito-div">
          <p className="claves-para-exito-tag-p" ref={aboutUsSection}>About Us
          </p>

          <h1 className="claves-para-exito-tag-h3">
          Study Globe Education is a premier education consultancy in Nepal, dedicated to helping students and professionals realize their dreams of studying and working abroad. With a team of experienced counselors and a wide network of global partners, we provide expert advice and personalized services tailored to your unique needs.
          </h1>

          <h1 className="claves-para-exito-tag-h3">
          Our services include university selection, application assistance, visa processing, scholarship guidance, and pre-departure support. We are committed to helping you navigate the complexities of international education and ensuring that your transition to studying or working abroad is as seamless as possible.
          </h1>
        </div>
      <div className="spacer" />

      <div className="contact-banner">
        <h1 className="contact-banner-title-h2">START YOUR BRIGHT FUTURE</h1>
      </div>

      <div className="spacer" />

      <div className="contact-us-div" ref={contactUsSection}>
        <ContactUs />
      </div>
    </div>
  );
}
