import React from "react";

import "../styles/BannerCarousel.css";

import banner1 from "../assets/images/banner.jpg";
import banner4 from "../assets/images/banner0.jpg";
import banner3 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner5 from "../assets/images/banner3.jpg";
import banner6 from "../assets/images/banner4.jpg";

import Carousel from 'react-bootstrap/Carousel';

function PrincipalBanner() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="PrincipalBanner-div">
          <div className="PrincipalBanner-img-div">
            <img
              src={banner1}
              width={"100%"}
              height="700"
              alt={"Rand Img"}
              className="banner-img"
            />
          </div>

          <div className="PrincipalBanner-tag-div">
            <div className="PrincipalBanner-text-div">
              <h2 className="PrincipalBanner-custom-header2">
                <span className="PrincipalBanner-din-alternate-bold-font">
                  BEST FOR NEPALI STUDENTS
                </span>
              </h2>
              <h2 className="PrincipalBanner-custom-header2">
                <span className="PrincipalBanner-din-alternate-bold-font">
                  AFFORDABLE FEES
                </span>
              </h2>
              <h2 className="PrincipalBanner-custom-header2">
                <span className="PrincipalBanner-din-alternate-bold-font">
                  CAREER FOCUSED COURSES
                </span>
              </h2>

              <h2 className="PrincipalBanner-custom-header2">
                <span className="PrincipalBanner-din-alternate-bold-font">
                  EASY PROCESS
                </span>
              </h2>

              <h2 className="PrincipalBanner-custom-header2">
                <span className="PrincipalBanner-din-alternate-bold-font">
                  HELP FORM EXPERTS
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="SecondaryBanner-div">
          <div className="SecondaryBanner-img-div">
            <img
              src={banner3}
              width={"100%"}
              height="700"
              alt={"Create Account Truck Cargo"}
              className="banner-img"
            />
          </div>

          <div className="SecondaryBanner-tag-div">
            <div className="SecondaryBanner-text-div">
              <h2 className="SecondaryBanner-custom-header2">
                <span className="SecondaryBanner-din-alternate-bold-font">
                  GO TO THIS UNI
                </span>
              </h2>
              <h2 className="SecondaryBanner-custom-header2">
                <span className="SecondaryBanner-din-alternate-bold-font">
                  COMPLETELY FREE
                </span>
              </h2>
              <h2 className="SecondaryBanner-custom-header2">
                <span className="SecondaryBanner-din-alternate-bold-font">
                  AND A GREAT FUTURE
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="ThirdBanner-div">
          <div className="ThirdBanner-img-div">
            <img
              src={banner4}
              width={"100%"}
              height="700"
              alt={"Create Account Truck Cargo"}
              className="banner-img"
            />
          </div>

          <div className="ThirdBanner-tag-div">
            <div className="ThirdBanner-text-div">
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  BUT NOT THIS UNI
                </span>
              </h2>
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  IT SUCKS
                </span>
              </h2>
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  BAD BAD
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="ThirdBanner-div">
          <div className="ThirdBanner-img-div">
            <img
              src={banner5}
              width={"100%"}
              height="700"
              alt={"Create Account Truck Cargo"}
              className="banner-img"
            />
          </div>

          <div className="ThirdBanner-tag-div">
            <div className="ThirdBanner-text-div">
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  BUT NOT THIS UNI
                </span>
              </h2>
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  IT SUCKS
                </span>
              </h2>
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  BAD BAD
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <div className="ThirdBanner-div">
          <div className="ThirdBanner-img-div">
            <img
              src={banner2}
              width={"100%"}
              height="700"
              alt={"Create Account Truck Cargo"}
              className="banner-img"
            />
          </div>

          <div className="ThirdBanner-tag-div">
            <div className="ThirdBanner-text-div">
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  BUT NOT THIS UNI
                </span>
              </h2>
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  IT SUCKS
                </span>
              </h2>
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  BAD BAD
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Carousel.Item>


      <Carousel.Item>
        <div className="ThirdBanner-div">
          <div className="ThirdBanner-img-div">
            <img
              src={banner6}
              width={"100%"}
              height="700"
              alt={"Create Account Truck Cargo"}
              className="banner-img"
            />
          </div>

          <div className="ThirdBanner-tag-div">
            <div className="ThirdBanner-text-div">
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  BUT NOT THIS UNI
                </span>
              </h2>
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  IT SUCKS
                </span>
              </h2>
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  BAD BAD
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default PrincipalBanner;
