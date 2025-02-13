import React from "react";

import EditFileIcon from "../assets/icons/edit-file-icon.png";
import banner2 from "../assets/images/uni.jpg";

import { Button } from "react-bootstrap";
import "../styles/ServiceBanner.css";

function ServiceBanner() {
  return (
    <div className="complexBanner-div">
      <div className="complexBanner-img-div">
        <img
          src={banner2}
          width={"100%"}
          height="800"
          alt="Service Truck Cargo"
          className="complexBanner-banner-img"
        />
      </div>

      <div className="complexBanner-tag-div">
        <div className="complexBanner-text-div">
          <p className="complexBanner-header-p">Our commitment

    </p>
          <h2 className="custom-header2">
            <span className="complexBanner-din-alternate-bold-font">
            Ready to use our services?
            </span>
          </h2>
          <p className="complexBanner-header-p-light">
          Just upload your necessary documents and one of our counseler will reach you, do not wait any longer and start your abroad process.
          </p>
          <div className="complexBanner-icon-div">
            <img
              src={EditFileIcon}
              className="complexBanner-icon"
              alt="Edit File Truck Cargo"
            />
          </div>

          <div className="complexBanner-button-div">
            <Button variant="primary" className="complexBanner-button">
              SEND DOCUMENTS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceBanner;
