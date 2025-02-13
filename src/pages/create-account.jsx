import React from "react";
import "../styles/CreateAccount.css";

import { useState } from "react";

import axios from "axios";

import { Button, Col, Form, Row } from "react-bootstrap";
import SimpleBanner from "../components/SimpleBanner";

import banner5 from "../assets/images/services.webp";

import regularFolderIcon from "../assets/icons/doc.png";

import { useNavigate } from "react-router-dom";


const domain = process.env.REACT_APP_API_DOMAIN_NAME



export default function CreateAccount() {
  const [authority_letter_document, setAuthorityLetterDocument] =
    useState(null);
  const [w9_document, setW9Document] = useState(null);
  const [insurance_document, setInsuranceDocument] = useState(null);
  const [noa_document, setNOADocument] = useState(null);

  const [contact_name, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company_name, setCompanyName] = useState("");

  const [current_plan, setCurrentPlan] = useState();
  const [current_plan0, setCurrentPlan0] = useState("Study");

  const navigate = useNavigate();


  const body = JSON.stringify({
    contact_name,
    email,
    phone,
    company_name,
    current_plan,
  })


  const onSubmitForm = async(e) => {
    e.preventDefault();
    if(!authority_letter_document || !w9_document || !insurance_document){
      alert("Please upload at least the Authority Letter, the W9, and the insurance")
    }
    else{
      const result = await createNewAccount(body);

      if (result == "Success"){
        await uploadFiles(email, authority_letter_document, w9_document, insurance_document, noa_document);
        navigate("/");
      }
    }
    
  }

  return (
    <div>
      <SimpleBanner
        banner_img={banner5}
        banner_img_description="Create Account Truck Cargo"
      />

      <div className="spacer" />

      <h2 className="text-center create-account-custom-header2">
        <span className="create-account-din-alternate-bold-font">
        Getting started is very easy
        </span>
      </h2>

      <div className="create-account-folder-icon-div">
        <img src={regularFolderIcon} alt="Folder Icon Truck Cargo" />
      </div>

      <h4 className="text-center create-account-custom-title">
        Send the documents
      </h4>

      <div className="create-account-paragraph-div">
        <p className="create-account-paragraph-p">
        Just upload your necessary documents and one of our counselor will reach you, do not wait any longer and start your abroad process.


        </p>
      </div>

      <h4 className="text-center create-account-custom-title">
      Complete this form and you will receive an update fromm our counseler to start your journey to abroad life

      </h4>

      <div className="create-account-form-div">
      <Row>
          <div key={`inline-radio`} className="mb-3 radio-div0" onChange={(e) => setCurrentPlan0(e.target.value)} >
          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-1`} className="create-account-radio" value={"Study"} defaultChecked={true} />
            <span className="create-account-label-radio-span">Study</span>
          </label>

          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-2`} className="create-account-radio" value={"Work"} />
            <span className="create-account-label-radio-span">Work</span>
          </label>
          
          </div>
        </Row>

        <Row>
          <div key={`inline-radio`} className="mb-3 radio-div" onChange={(e) => setCurrentPlan(e.target.value)} >
          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-1`} className="create-account-radio" value={"US"} defaultChecked={true} />
            <span className="create-account-label-radio-span">US</span>
          </label>

          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-2`} className="create-account-radio" value={"AU"} />
            <span className="create-account-label-radio-span">Australia</span>
          </label>
          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-3`} className="create-account-radio" value={"CA"} />
            <span className="create-account-label-radio-span">Canada</span>
          </label>
          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-4`} className="create-account-radio" value={"UK"} />
            <span className="create-account-label-radio-span">UK</span>
          </label>
          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-5`} className="create-account-radio" value={"JAP"} />
            <span className="create-account-label-radio-span">Japan</span>
          </label>
          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-6`} className="create-account-radio" value={"KOR"} />
            <span className="create-account-label-radio-span">Korea</span>
          </label>
          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-7`} className="create-account-radio" value={"DEN"} />
            <span className="create-account-label-radio-span">Denmark</span>
          </label>
          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-8`} className="create-account-radio" value={"NZ"} />
            <span className="create-account-label-radio-span">New Zealand</span>
          </label>
          </div>
        </Row>
        <Form className="create-account-form" onSubmit={(e)=>{onSubmitForm(e)}} >
          <Row className="create-account-row">
            <Col xs={12} sm={12} md={6} lg={6} className="create-account-col">
              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicCompanyName"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="FULL NAME"
                  value = {company_name}
                  onChange = {(e) => setCompanyName(e.target.value)}
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
                  value = {contact_name}
                  onChange = {(e) => setContactName(e.target.value)}
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
                  value = {phone}
                  onChange = {(e) => setPhone(e.target.value)}
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
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="create-account-col">
              <div className="create-account-upload-file-div" style={{backgroundColor: (authority_letter_document?"#f89422":"transparent")  }}>
                <p className="create-account-upload-file-p" style={{color: (authority_letter_document?"white":"#9d9e9f")  }}>MARKSHEET</p>
                <label
                  for="uploadAuthorizationLetterButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadAuthorizationLetterButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) =>
                    setAuthorityLetterDocument(e.target.files[0])
                  }
                />
              </div>

              <div className="spacer-15" />

              <div className="create-account-upload-file-div" style={{backgroundColor: (w9_document?"#f89422":"transparent")  }}>
                <p className="create-account-upload-file-p" style={{color: (w9_document?"white":"#9d9e9f")  }}>CITIZENSHIP(FRONT)</p>
                <label
                  for="uploadW9Button"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadW9Button"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setW9Document(e.target.files[0])}
                />
              </div>

              <div className="spacer-15" />

              <div className="create-account-upload-file-div" style={{backgroundColor: (insurance_document?"#f89422":"transparent")  }}>
                <p className="create-account-upload-file-p" style={{color: (insurance_document?"white":"#9d9e9f")  }}>CITIZENSHIP(BACK)</p>
                <label
                  for="uploadInsuranceButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadInsuranceButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setInsuranceDocument(e.target.files[0])}
                />
              </div>

              <div className="spacer-15" />

              <div className="create-account-upload-file-div" style={{backgroundColor: (noa_document?"#f89422":"transparent")  }}>
                <p className="create-account-upload-file-p" style={{color: (noa_document?"white":"#9d9e9f")  }}>
                  CHARACTER CERTIFICATE
                </p>
                <label
                  for="uploadNOAButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadNOAButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setNOADocument(e.target.files[0])}
                />
              </div>
            </Col>
          </Row>

          <div className="create-account-button-div">
            <Button
              variant="primary"
              className="create-account-button"
              type="submit"
            >
              SUBMIT NOW!
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}


const createNewAccount = async(body) => {

  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }

  const url = `${domain}/user-account/signup`;

  const axios_result = await axios.post(url, body, config).then(async(res) => {
    const result = await res.data
    console.log(result);
    return "Success";
  }).catch((error) => {
    return "Error";
  })

  return axios_result;

}



const uploadFiles = async (email, authority_letter_document, w9_document, insurance_document, noa_document) => {

  const config = {
    headers: {
    "Content-Type": "multipart/form-data"
  }
  }


  const formData = new FormData();

      formData.append('documents', authority_letter_document, `authority_letter-${email}.pdf`);
      formData.append('documents', w9_document, `w9-${email}.pdf`);
      formData.append('documents', insurance_document, `insurance-${email}.pdf`);

      if(noa_document){
            formData.append('documents', noa_document, `noa-${email}.pdf`);
      }



  const url = `${domain}/user-account/upload-documents/${email}`;

  await axios.post(url, formData, config).then(async(res) => {
    const result = await res.data
  }).catch((error) => {
    console.log("Error")
  })
}
