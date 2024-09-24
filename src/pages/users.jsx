import React from "react";
import "../styles/UserAccountInfo.css";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const columns = [
  { field: "purpose", headerName: "Purpose", width: 70 },
  { field: "country", headerName: "Country", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "address", headerName: "Address", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "marksheet", headerName: "Marksheet", width: 130 },
  { field: "passport", headerName: "Passport", width: 130 },
  { field: "charCert", headerName: "Character", width: 130 },
  { field: "provCert", headerName: "Provisional", width: 130 },
  { field: "additionalDoc", headerName: "Extra Docs", width: 130 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function UserInfo() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      }
    });
  });

  return <div className="profile-div">IN USERS PAGE</div>;
}
