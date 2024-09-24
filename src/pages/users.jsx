import Paper from "@mui/material/Paper";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import "../styles/UserAccountInfo.css";
const columns = [
  { field: "purpose", headerName: "Purpose", width: 70 },
  { field: "country", headerName: "Country", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "address", headerName: "Address", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  {
    field: "marksheet",
    headerName: "Marksheet",
    width: 130,
    filterable: false,
  },
  { field: "passport", filterable: false, headerName: "Passport", width: 130 },
  { field: "charCert", headerName: "Character", filterable: false, width: 130 },
  {
    field: "provCert",
    filterable: false,
    headerName: "Provisional",
    width: 130,
  },
  {
    field: "additionalDoc",
    filterable: false,
    headerName: "Extra Docs",
    width: 130,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function UserInfo() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/admin");
      }
      setLoading(false);
    });

    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="color-background">
      <h2 className="text-center landing-custom-header2">
        <span className="secondary-color-span landing-din-alternate-bold-font">
          Submitted Users Information
        </span>
      </h2>

      <div className="user-list-container">
        {users.length === 0 ? (
          <p className="text-center">No users found.</p>
        ) : (
          <Paper sx={{ height: "90%", width: "100%" }}>
            <DataGrid
              rows={users}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              slots={{ toolbar: GridToolbar }}
              sx={{ border: 0 }}
            />
          </Paper>
        )}
      </div>
      {/* <FullFeaturedCrudGrid /> */}
    </div>
  );
}
