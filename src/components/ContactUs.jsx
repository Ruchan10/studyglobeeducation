import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/ContactUs.css";

import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Button, Col, Form, Row } from "react-bootstrap";
import { db, storage } from "../firebaseConfig";

const domain = process.env.REACT_APP_API_DOMAIN_NAME;

function ContactUs() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [marksheet, setMarksheet] = useState(null);
  const [provCert, setProvCert] = useState(null);
  const [passport, setPassport] = useState(null);
  const [charCert, setCharCert] = useState(null);
  const [additionalDoc, setAdditionalDoc] = useState(null);
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPlan, setCurrentPlan] = useState("Study");
  const [selectedCountry, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const saveUserData = async (userData) => {
    try {
      await addDoc(collection(db, "users"), userData);
    } catch (error) {
      console.error("Error saving user data:", error);
      throw error;
    }
  };

  const handleSelectChange = (e) => {
    setCountry(e.target.value);
  };

  const handleStudyWork = (e) => {
    if (e.target.value == "Work") {
      setCountry("JAP");
    }
    setCurrentPlan(e.target.value);
  };

  const onSubmitForm = async (e) => {
    try {
      if (selectedCountry == "") {
        console.error("Please select a country!!!");
        return;
      }
      if (
        !email ||
        !firstName ||
        !lastName ||
        !phone ||
        !marksheet ||
        !provCert ||
        !passport ||
        !charCert ||
        !additionalDoc
      ) {
        console.error("All Fields Are Required!!!");
        return;
      }
      const storageRef = ref(storage, `${firstName}_${lastName}_Marksheet`);
      const storageRef0 = ref(storage, `${firstName}_${lastName}_Provisional`);
      const storageRef1 = ref(storage, `${firstName}_${lastName}_Passport`);
      const storageRef2 = ref(storage, `${firstName}_${lastName}_Character`);
      const storageRef3 = ref(storage, `${firstName}_${lastName}_Additional`);

      await uploadBytes(storageRef, marksheet);
      await uploadBytes(storageRef0, provCert);
      await uploadBytes(storageRef1, passport);
      await uploadBytes(storageRef2, charCert);
      await uploadBytes(storageRef3, additionalDoc);

      const fileURL = await getDownloadURL(storageRef);
      const fileURL0 = await getDownloadURL(storageRef0);
      const fileURL1 = await getDownloadURL(storageRef1);
      const fileURL2 = await getDownloadURL(storageRef2);
      const fileURL3 = await getDownloadURL(storageRef3);

      const userData = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phone: phone,
        email: email,
        marksheet: fileURL,
        provCert: fileURL0,
        passport: fileURL1,
        charCert: fileURL2,
        additionalDoc: fileURL3,
        createdAt: new Date(),
      };

      await saveUserData(userData);
      setIsLoading(false);

      console.success("Files submitted successfully!");
      setEmail("");
      setPhone("");
      setMarksheet(null);
      setProvCert(null);
      setPassport(null);
      setAdditionalDoc(null);
      setCharCert(null);
      setAddress("");
      setFirstName("");
      setLastName("");
    } catch (error) {
      console.error("Sorry, can't submit files currently!!!");

      console.error("Error in uploading user data and file:", error);
    }
  };

  return (
    <Row className="contact-us-row">
      <div className="contact-us-col-body contact-us-col-first">
        <p className="contact-us-tag-p">Contact Us </p>

        <h2 className="contact-us-tag-h2">
          Don't wait any longer to contact us, we are here to find the best
          university and guide you.
        </h2>
      </div>
      <div className="spacer-15" />
      <div className="spacer-15" />
      <Row>
        <div
          key={`inline-radio`}
          className="mb-3 radio-div0"
          onChange={handleStudyWork}
        >
          <label className="create-account-label-radio">
            <input
              type="radio"
              name="group1"
              id={`inline-radio-1`}
              className="create-account-radio"
              value={"Study"}
              defaultChecked={true}
            />
            <span className="create-account-label-radio-span">Study</span>
          </label>
          <label className="create-account-label-radio">
            <input
              type="radio"
              name="group1"
              id={`inline-radio-2`}
              className="create-account-radio"
              value={"Work"}
            />
            <span className="create-account-label-radio-span">Work</span>
          </label>
        </div>
      </Row>
      <div className="spacer-15" /> <div className="spacer-15" />
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className="mx-auto">
          <Form.Group className="mb-3 text-center">
            <Form.Select
              className="contact-us-select"
              value={selectedCountry}
              onChange={handleSelectChange}
            >
              <option value="">Select Preferred country</option>
              {currentPlan === "Study" && (
                <option value="US">United States</option>
              )}
              {currentPlan === "Study" && <option value="AU">Australia</option>}
              {currentPlan === "Study" && <option value="CA">Canada</option>}
              {currentPlan === "Study" && (
                <option value="UK">United Kingdom</option>
              )}
              <option value="JAP">Japan</option>
              {currentPlan === "Study" && (
                <option value="KOR">South Korea</option>
              )}
              {currentPlan === "Study" && <option value="DEN">Denmark</option>}
              {currentPlan === "Study" && (
                <option value="NZ">New Zealand</option>
              )}
            </Form.Select>
          </Form.Group>
        </Col>
        {selectedCountry != "" && (
          <div className="create-account-button-div">
            <Button
              onClick={() => {
                navigate("/learnmore/" + selectedCountry);
              }}
              variant="primary"
              className="create-account-button"
            >
              Learn More
            </Button>
          </div>
        )}
      </Row>
      <div className="contact-us-col-body contact-us-col-second">
        <p className="contact-us-tag-p">
          <span className="tspan">Contact Us</span>
        </p>

        <Form
          className="create-account-form"
          //   onSubmit={(e) => {
          //     onSubmitForm(e);
          //   }}
        >
          <Row className="create-account-row">
            <Col xs={12} sm={12} md={6} lg={6} className="create-account-col">
              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicCompanyName"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="FIRST NAME"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicCompanyName"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="LAST NAME"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicContactName"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="ADDRESS"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicContactPhone"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="PHONE NUMBER"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicContactEmail"
              >
                <Form.Control
                  type="email"
                  className="create-account-form-control"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="create-account-col">
              <div
                className="create-account-upload-file-div"
                style={{
                  backgroundColor: marksheet ? "#f89422" : "transparent",
                }}
              >
                <p
                  className="create-account-upload-file-p"
                  style={{
                    color: marksheet ? "white" : "#9d9e9f",
                  }}
                >
                  {marksheet ? marksheet.name : "MARKSHEET"}
                </p>
                <label
                  htmlFor="uploadAuthorizationLetterButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadAuthorizationLetterButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setMarksheet(e.target.files[0])}
                />
              </div>

              <div className="spacer-15" />

              <div className="spacer-15" />

              <div
                className="create-account-upload-file-div"
                style={{
                  backgroundColor: passport ? "#f89422" : "transparent",
                }}
              >
                <p
                  className="create-account-upload-file-p"
                  style={{ color: passport ? "white" : "#9d9e9f" }}
                >
                  {passport ? passport.name : "PASSPORT"}
                </p>
                <label
                  htmlFor="uploadInsuranceButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadInsuranceButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setPassport(e.target.files[0])}
                />
              </div>

              <div className="spacer-15" />

              <div
                className="create-account-upload-file-div"
                style={{
                  backgroundColor: charCert ? "#f89422" : "transparent",
                }}
              >
                <p
                  className="create-account-upload-file-p"
                  style={{ color: charCert ? "white" : "#9d9e9f" }}
                >
                  {charCert ? charCert.name : "CHARACTER CERTIFICATE"}
                </p>
                <label
                  htmlFor="uploadNOAButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadNOAButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setCharCert(e.target.files[0])}
                />
              </div>
              <div className="spacer-15" />

              <div
                className="create-account-upload-file-div"
                style={{
                  backgroundColor: provCert ? "#f89422" : "transparent",
                }}
              >
                <p
                  className="create-account-upload-file-p"
                  style={{ color: provCert ? "white" : "#9d9e9f" }}
                >
                  {provCert ? provCert.name : "PROVISIONAL CERTIFICATE"}
                </p>
                <label
                  htmlFor="uploadW9Button"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadW9Button"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setProvCert(e.target.files[0])}
                />
              </div>
              <div className="spacer-15" />

              <div
                className="create-account-upload-file-div"
                style={{
                  backgroundColor: additionalDoc ? "#f89422" : "transparent",
                }}
              >
                <p
                  className="create-account-upload-file-p"
                  style={{ color: additionalDoc ? "white" : "#9d9e9f" }}
                >
                  {additionalDoc ? additionalDoc.name : "ADDITIONAL DOCUMENT"}
                </p>
                <label
                  htmlFor="uploadAddButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadAddButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setAdditionalDoc(e.target.files[0])}
                />
              </div>
            </Col>
          </Row>
          <div className="spacer-15" />

          <div className="create-account-button-div">
            <Button
              variant="primary"
              className="create-account-button"
              //   type="submit"
              onClick={onSubmitForm}
            >
              {isLoading ? "Submitting..." : "SUBMIT NOW!"}
            </Button>
          </div>
        </Form>
      </div>
    </Row>
  );
}

export default ContactUs;
