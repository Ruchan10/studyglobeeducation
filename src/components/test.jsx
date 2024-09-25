import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Button, Link, Paper, TextField } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { onAuthStateChanged } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import "jspdf-autotable";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import "../styles/UserAccountInfo.css";

// Function to calculate column widths
const calculateColumnWidths = (rows, column) => {
  const maxLength = Math.max(
    ...rows.map((row) => (row[column] ? row[column].toString().length : 0))
  );
  return Math.max(maxLength * 10, 70); // Minimum width set to 70
};
const paginationModel = { page: 0, pageSize: 5 };

const CustomToolbar = ({ rows, columns }) => {
  const handleExportCsv = () => {
    const data = rows.map((row) => {
      const result = {};
      columns.forEach((col) => {
        result[col.headerName] = row[col.field];
      });
      return result;
    });

    // Convert to CSV format
    const csvData = data.map((row) => Object.values(row).join(",")).join("\n");
    const csvBlob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const csvUrl = URL.createObjectURL(csvBlob);

    // Create a link to download the CSV
    const link = document.createElement("a");
    link.href = csvUrl;
    link.setAttribute("download", "data.csv"); // Specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{ padding: "8px", display: "flex", justifyContent: "flex-end" }}
    >
      <Button variant="outlined" onClick={handleExportCsv}>
        Export to CSV
      </Button>
    </div>
  );
};

export default function FullFeaturedCrudGrid() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDeleteClick = (id) => async () => {
    try {
      setIsDeleting(true);
      const docRef = doc(db, "users", id);
      await deleteDoc(docRef);
      // Refresh the table by fetching the data again
      fetchUsers();
    } catch (error) {
      console.error("Error deleting document: ", error);
    } finally {
      setIsDeleting(false);
    }
  };

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/admin");
      }
      setLoading(false);
    });
    fetchUsers();
  }, []);

  // Filtered rows based on search query
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

  const columns = [
    {
      field: "purpose",
      headerName: "Purpose",
      width: calculateColumnWidths(users, "purpose"),
      sortable: true,
    },
    {
      field: "country",
      headerName: "Country",
      width: calculateColumnWidths(users, "country"),
      sortable: true,
    },
    {
      field: "firstName",
      headerName: "First name",
      width: calculateColumnWidths(users, "firstName"),
      sortable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: calculateColumnWidths(users, "lastName"),
      sortable: true,
    },
    {
      field: "address",
      headerName: "Address",
      width: calculateColumnWidths(users, "address"),
      sortable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: calculateColumnWidths(users, "phone"),
      sortable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: calculateColumnWidths(users, "email"),
      sortable: true,
    },
    {
      field: "marksheet",
      headerName: "Marksheet",
      width: calculateColumnWidths(users, "marksheet"),
      sortable: true,
      filterable: false,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noopener">
          View Marksheet
        </Link>
      ),
    },
    {
      field: "passport",
      headerName: "Passport",
      width: calculateColumnWidths(users, "passport"),
      sortable: true,
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
      width: calculateColumnWidths(users, "charCert"),
      sortable: true,
      filterable: false,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noopener">
          View Character Certificate
        </Link>
      ),
    },
    {
      field: "provCert",
      headerName: "Provisional",
      width: calculateColumnWidths(users, "provCert"),
      sortable: true,
      filterable: false,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noopener">
          View Provisional Certificate
        </Link>
      ),
    },
    {
      field: "additionalDoc",
      headerName: "Extra Docs",
      width: calculateColumnWidths(users, "additionalDoc"),
      sortable: true,
      filterable: false,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noopener">
          View Extra Docs
        </Link>
      ),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ],
    },
  ];

  return (
    <div className="color-background">
      <h2 className="text-center landing-custom-header2">
        <span className="secondary-color-span landing-din-alternate-bold-font">
          Submitted Users Information
        </span>
      </h2>

      <div className="user-list-container">
        {/* Search Box */}
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
              slots={{
                Toolbar: () => (
                  <CustomToolbar rows={filteredRows} columns={columns} />
                ),
              }}
              sx={{ border: 0 }}
            />
          </Paper>
        )}
      </div>
    </div>
  );
}
