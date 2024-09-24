import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Link, Paper, TextField } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { onAuthStateChanged } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullFeaturedCrudGrid from "../components/test";
import { auth, db } from "../firebaseConfig";
import "../styles/UserAccountInfo.css";

const paginationModel = { page: 0, pageSize: 5 };

export default function UserInfo() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState(users);
  const [rowModesModel, setRowModesModel] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const calculateColumnWidths = (rows, column) => {
    const maxLength = Math.max(
      ...rows.map((row) => (row[column] ? row[column].toString().length : 0))
    );
    return Math.max(maxLength * 10, 120);
  };

  const columns = [
    {
      field: "purpose",
      headerName: "Purpose",
      width: calculateColumnWidths(users, "purpose"),
    },
    {
      field: "country",
      headerName: "Country",
      width: calculateColumnWidths(users, "country"),
    },
    {
      field: "firstName",
      headerName: "First name",
      width: calculateColumnWidths(users, "firetName"),
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: calculateColumnWidths(users, "lastName"),
    },
    {
      field: "address",
      headerName: "Address",
      width: calculateColumnWidths(users, "address"),
    },
    {
      field: "phone",
      headerName: "Phone",
      width: calculateColumnWidths(users, "phone"),
    },
    {
      field: "email",
      headerName: "Email",
      width: calculateColumnWidths(users, "email"),
    },
    {
      field: "marksheet",
      headerName: "Marksheet",
      width: 130,
      filterable: false,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noopener">
          View Marksheet
        </Link>
      ),
    },
    {
      field: "passport",
      filterable: false,
      headerName: "Passport",
      width: 120,
      filterable: false,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noopener">
          View Passport
        </Link>
      ),
    },
    {
      field: "charCert",
      headerName: "Character",
      filterable: false,
      width: 120,
      filterable: false,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noopener">
          View Character
        </Link>
      ),
    },
    {
      field: "provCert",
      filterable: false,
      headerName: "Provisional",
      width: 130,
      filterable: false,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noopener">
          View Provisional
        </Link>
      ),
    },
    {
      field: "additionalDoc",
      filterable: false,
      headerName: "Extra Docs",
      width: 120,
      filterable: false,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noopener">
          View Extra
        </Link>
      ),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 70,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

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

  const handleDeleteClick = (id) => async () => {
    console.log("IN HANDLE DELETE CLICK FUNCTION");
    console.log(id);
    try {
      setIsDeleting(true);
      const docRef = doc(db, "users", id);

      await deleteDoc(docRef);

      console.log("Deleted successfully!");
    } catch (error) {
      console.error("Error deleting document: ", error);
      console.error("Failed to delete document.");
    } finally {
      setIsDeleting(false);
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
    }
  };

  const filteredRows = users.filter((row) => {
    return (
      row.purpose?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.address?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.phone?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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
        <TextField
          label="Search"
          variant="outlined"
          margin="normal"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {users.length === 0 ? (
          <p className="text-center">No users found.</p>
        ) : (
          <Paper sx={{ height: "90%", width: "100%" }}>
            <DataGrid
              rows={filteredRows}
              disableColumnMenu={true}
              autoHeight={true}
              disableRowSelectionOnClick
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              slots={{ toolbar: GridToolbar }}
              sx={{ border: 0 }}
            />
          </Paper>
        )}
      </div>
      <FullFeaturedCrudGrid />
    </div>
  );
}
