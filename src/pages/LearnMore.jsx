import React from "react";
import { useParams } from "react-router-dom";

import "../styles/ClavesSteps.css";

import { Col, Row } from "react-bootstrap";

import correctIcon from "../assets/icons/correct-icon.png";

function LearnMore() {
  const { country } = useParams();

  const getContentForCountry = () => {
    switch (country) {
      case "US":
        return <div>Information about studying in the United States.</div>;
      case "AU":
        return <div>Information about studying in Australia.</div>;
      case "CA":
        return <div>Information about studying in Canada.</div>;
      case "UK":
        return <div>Information about studying in the United Kingdom.</div>;
      // Add more cases for other countries
      default:
        return <div>Information not available for the selected country.</div>;
    }
  };

  return (
    <Row className="claves-para-exito-row">
      <Col xs={12} sm={12} md={6} lg={6} className="claves-para-exito-col">
        <div className="claves-para-exito-col-body  claves-para-exito-col-first">
          <div className="v-card-icon-div"></div>
          <div className="claves-para-exito-button-div">
            <p className="claves-para-exito-button-p">
              Learn More About Studying in {country}
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
                    {getContentForCountry()}
                  </p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>PLACE HOLDER</p>
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
                  <p className="claves-para-exito-title-p">placeholder</p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>placeholder</p>
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
                  <p className="claves-para-exito-title-p">placeholder</p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>placeholder</p>
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
            <p className="claves-para-exito-button-p">placeholder</p>
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
                  <p className="claves-para-exito-title-p">placeholder</p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>placeholder</p>
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
                    Transparency and Integrity{" "}
                  </p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>placeholder</p>
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
                  <p className="claves-para-exito-title-p">placeholder</p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>placeholder</p>
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

export default LearnMore;
