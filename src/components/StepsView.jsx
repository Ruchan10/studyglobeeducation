import React from "react";

import "../styles/StepsView.css";

import { Card, Col, Row } from "react-bootstrap";

import SignatureIcon from "../assets/icons/counsel.png";
import RegularFolderIcon from "../assets/icons/doc.png";
import TruckIcon from "../assets/icons/takeoff.png";

function StepsViews() {
  return (
    <Row className="start-step-card-row">
   

      <Col xs={12} sm={12} md={6} lg={4} className="start-step-col">
        <Card className="start-step-card">
          <Card.Header className="start-step-card-header">
            <img src={RegularFolderIcon} alt="Signature Icon" />
          </Card.Header>

          <Card.Body className="start-step-card-body">
            <h4 className="start-step-h4">Send the documents
            </h4>
          </Card.Body>

          <Card.Footer className="start-step-card-footer">
            <span className="third-color-span p-font">
            Provide your academic records, identification, and other necessary documents.
            </span>
          </Card.Footer>
        </Card>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="start-step-col">
        <Card className="start-step-card">
          <Card.Header className="start-step-card-header">
            <img src={SignatureIcon} alt="Signature Icon" />
          </Card.Header>

          <Card.Body className="start-step-card-body">
            <h4 className="start-step-h4">
            Personalized Counseling
            </h4>
          </Card.Body>

          <Card.Footer className="start-step-card-footer">
            <span className="third-color-span p-font">
            Our experts will guide you through selecting the right university and course that aligns with your goals.
            </span>
          </Card.Footer>
        </Card>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="start-step-col">
        <Card className="start-step-card">
          <Card.Header className="start-step-card-header">
            <img src={TruckIcon} alt="Signature Icon" />
          </Card.Header>

          <Card.Body className="start-step-card-body">
            <h4 className="start-step-h4">Start Your Journey</h4>
          </Card.Body>

          <Card.Footer className="start-step-card-footer">
            <span className="third-color-span p-font">
            Begin your study abroad adventure with our full support, from application to arrival.
            </span>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default StepsViews;
