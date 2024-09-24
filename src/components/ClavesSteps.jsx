import React from "react";

import "../styles/ClavesSteps.css";

import { Col, Row } from "react-bootstrap";

import correctIcon from "../assets/icons/correct-icon.png";

function ClavesSteps() {
  return (
    <Row className="claves-para-exito-row">
      <Col xs={12} sm={12} md={6} lg={6} className="claves-para-exito-col">
        <div className="claves-para-exito-col-body  claves-para-exito-col-first">
          <div className="v-card-icon-div"></div>
          <div className="claves-para-exito-button-div">
            <p className="claves-para-exito-button-p">Keys for Success
            </p>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">
                  Personalized Guidance
                  </p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                    We understand that every student’s dream is unique. Our expert counselors offer personalized advice tailored to your aspirations, ensuring you choose the right path for your education and career goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">
                  End-to-End Support
                  </p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                    From selecting the right university to visa processing and pre-departure briefings, we provide comprehensive support at every step of your journey abroad. You can rely on us for a smooth and hassle-free experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">Expert Network</p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                    Leverage our extensive network of partner universities, scholarship providers, and immigration experts. We connect you with the best opportunities, ensuring you have all the resources you need to succeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} className="claves-para-exito-col">
      <div className="claves-para-exito-col-body  claves-para-exito-col-first">
          <div className="v-card-icon-div"></div>
          <div className="claves-para-exito-button-div">
            <p className="claves-para-exito-button-p">Our Commitment
            </p>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">
                  Dedicated Service
                  </p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                    We are committed to providing exceptional service with a focus on your needs. Our team of professionals is dedicated to ensuring that every aspect of your journey is handled with care and attention to detail.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">
                  Transparency and Integrity                  </p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                    We believe in transparency and honesty in all our interactions. You will receive clear and accurate information about every step of the process, and our team is always here to address any questions or concerns you may have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">Continuous Support</p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                    Our commitment extends beyond your initial application. We offer ongoing support throughout your educational journey, providing assistance and guidance to help you achieve your goals and overcome any challenges you may face.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
      
      </Col>
    </Row>
  );
}

export default ClavesSteps;
