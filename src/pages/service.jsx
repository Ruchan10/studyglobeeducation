import React from "react";
import "../styles/Service.css";

import { Button } from "react-bootstrap";

import SimpleBanner from "../components/SimpleBanner";

import { Link } from "react-router-dom";
import dollarIcon from "../assets/icons/money-icon.png";
import banner5 from "../assets/images/banner5.jpg";

export default function Service() {
  return (
    <div>
      <SimpleBanner
        banner_img={banner5}
        banner_img_description={"Service Detail Truck Cargo"}
      />

      <div className="spacer" />

      <h2 className="text-center service-custom-header2">
        <span className="service-din-alternate-bold-font">
        Choose the service of your preference


        </span>
      </h2>

      <div className="service-dollar-icon-div">
        <img src={dollarIcon} alt="Folder Icon Truck Cargo" />
      </div>

      <h4 className="text-center service-custom-title">
      And you can get the following services

</h4>


      <div className="service-button-div">
        <Link to="/create-account">
          <Button variant="primary" className="service-button">
          START NOW!


          </Button>
        </Link>
      </div>
    </div>
  );
}
