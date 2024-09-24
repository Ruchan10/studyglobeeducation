import React from "react";
import { Card, Col, Row } from 'react-bootstrap';
import "../styles/ServiceGrid.css";

import appsupp_img from "../assets/images/appliSupport.png";
import careerguide_img from "../assets/images/careerGuide.png";
import predep_img from "../assets/images/preDepSupp.png";
import schol_img from "../assets/images/scholarship.png";
import searchuni_img from "../assets/images/searchUni.png";
import visapro_img from "../assets/images/visaProcess.png";

function ServiceGrid() {
  return (
      <div className='service-grid-div'>
      <Row className="service-grid-row">
          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={searchuni_img} alt="University Selection" className="service-grid-card-img"/>
                  <p className="subtext">University Selection</p>
                  <p className="description">Helping you choose the right university based on your profile and preferences.</p>
              </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={appsupp_img} alt="Application Support" className="service-grid-card-img"/>
                  <p className="subtext">Application Support</p>
                  <p className="description">Guiding you through the application and admission process with ease.</p>
              </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={visapro_img} alt="Visa Processing" className="service-grid-card-img"/>
                  <p className="subtext">Visa Processing</p>
                  <p className="description">Comprehensive support for obtaining your student visa.</p>
              </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={schol_img} alt="Scholarships & Aid" className="service-grid-card-img"/>
                  <p className="subtext">Scholarships & Aid</p>
                  <p className="description">Identifying scholarship opportunities and financial aid to fund your education.</p>
              </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={predep_img} alt="Pre-departure Support" className="service-grid-card-img"/>
                  <p className="subtext">Pre-departure Support</p>
                  <p className="description">Preparing you for life abroad with essential information and tips.</p>
              </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="service-grid-col">
              <Card className="service-grid-card">
                  <img src={careerguide_img} alt="Career Guidance" className="service-grid-card-img"/>
                  <p className="subtext">Career Guidance</p>
                  <p className="description">Helping you align your education with your career goals.</p>
              </Card>
          </Col>
      </Row>
      </div>
  );
}

export default ServiceGrid;
