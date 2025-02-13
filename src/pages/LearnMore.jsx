import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/ClavesSteps.css";

import { Row } from "react-bootstrap";

import correctIcon from "../assets/icons/correct-icon.png";

function LearnMore() {
  const { country } = useParams();
  const [getCountry, setCountry] = useState("");
  const [getStep0, setStep0] = useState("");
  const [getStep1, setStep1] = useState("");
  const [getStep2, setStep2] = useState("");
  const [getStep3, setStep3] = useState("");

  useEffect(() => {
    switch (country) {
      case "US":
        setCountry("United States");
        setStep0("Passport, English proficiency test/MOI");
        setStep1("Offer letter from respective University/ College");
        setStep2("I20");
        setStep3("1 Day Bank Balance");
        return;
      case "AU":
        setCountry("Australia");
        return;
      case "CA":
        setCountry("Canada");
        return;
      case "UK":
        setCountry("United Kingdom");
        return;
      default:
        setCountry("");
    }
  });

  return (
    <Row className="claves-para-exito-row ">
      <div className="claves-para-exito-col-body  claves-para-exito-col-first ">
        <h1 className="text-center ">
          <span className="secondary-color-span landing-custom-header2">
            Information about studying in {getCountry}
          </span>
        </h1>

        <div className="spacer" />

        <div className="claves-para-exito-card">
          <div className="claves-para-exito-header-div">
            <div className="claves-para-exito-icon-div">
              <img src={correctIcon} alt="Correct Truck Cargo" />
            </div>
            <div className="v-spacer"></div>
            <div className="claves-para-exito-card-body">
              <div className="claves-para-exito-title-div">
                <p className="claves-para-exito-title-p">Academic documents</p>
              </div>
              <div className="claves-text-div">
                <div className="claves-paragraph-div">
                  <p>{getStep0}</p>
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
                <p className="claves-para-exito-title-p">{getStep1}</p>
              </div>

              <div className="claves-text-div">
                <div className="claves-paragraph-div">
                  <p>{getStep2}</p>
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
                <p className="claves-para-exito-title-p">{getStep3}</p>
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
    </Row>
  );
}

export default LearnMore;
