// import React, { useEffect, useState } from "react";
// import {
//   Typography,
//   Grid,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Button,
// } from "@mui/material";
// import { useCart } from "../context/cartContext";
// import UserService from "../services/userService";
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const user_service = new UserService();
//   const { cart } = useCart(); // Accessing cart from context
//   const [currentUser, setCurrentUser] = useState(null);
//   const [recentOrder, setRecentOrder] = useState([]);
//   const navigate = useNavigate();
//   const { clearCart } = useCart();

//   // Fetch user by ID
//   async function fetchUserById() {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       const response = await user_service.fetchUserById(userId);
//       setCurrentUser(response);
//     }
//   }

//   function handleLogout() {
//     // Clear localStorage
//     localStorage.clear();
//     clearCart();
//     // Redirect to home page
//     navigate("/");
//   }
//   useEffect(() => {
//     fetchUserById();

//     const storedOrder = localStorage.getItem("recentOrder");
//     if (storedOrder) {
//       setRecentOrder(JSON.parse(storedOrder));
//       // Optionally clear the stored order if you don't want to keep it
//       //localStorage.removeItem("recentOrder");
//     }
//   }, []);

//   return (
//     <div style={{ padding: "2rem" }}>
//       <Typography variant="h4" gutterBottom>
//         User Profile
//       </Typography>
//       {currentUser ? (
//         <Paper style={{ padding: "2rem", marginBottom: "2rem" }}>
//           <Typography variant="h6">User Information</Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} md={6}>
//               <Typography>
//                 <strong>Full Name:</strong> {currentUser.fullName}
//               </Typography>
//               <Typography>
//                 <strong>Email:</strong> {currentUser.email}
//               </Typography>
//               <Typography>
//                 <strong>Phone:</strong> {currentUser.phone}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography>
//                 <strong>Address:</strong> {currentUser.address}
//               </Typography>
//               <Typography>
//                 <strong>City:</strong> {currentUser.city}
//               </Typography>
//               <Typography>
//                 <strong>Country:</strong> {currentUser.country}
//               </Typography>
//             </Grid>
//           </Grid>
//         </Paper>
//       ) : (
//         <Typography variant="body1">Loading user information...</Typography>
//       )}

//       <Typography variant="h6" gutterBottom>
//         Order History
//       </Typography>
//       {cart.length > 0 ? (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Product</TableCell>
//                 <TableCell>Price</TableCell>
//                 <TableCell>Quantity</TableCell>
//                 <TableCell>Subtotal</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {cart.map((item, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{item.productName}</TableCell>
//                   <TableCell>{item.productPrice} đ</TableCell>
//                   <TableCell>{item.quantity}</TableCell>
//                   <TableCell>{item.productPrice * item.quantity} đ</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       ) : (
//         <Typography variant="body1">No orders found.</Typography>
//       )}
//       <Button
//         variant="contained"
//         color="primary"
//         style={{ marginTop: "2rem" }}
//         onClick={() => handleLogout()}
//       >
//         Logout
//       </Button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import UserService from "../services/userService";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const user_service = new UserService();
  const [currentUser, setCurrentUser] = useState(null);
  const [recentOrder, setRecentOrder] = useState([]); // State for storing the recent order
  const navigate = useNavigate();

  // Fetch user by ID
  async function fetchUserById() {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const response = await user_service.fetchUserById(userId);
      setCurrentUser(response);
    }
  }

  // Function to handle logout
  function handleLogout() {
    localStorage.clear();
    // Clear cart if you have a cart context
    // clearCart(); // Uncomment if you have cart context
    navigate("/");
  }

  // Retrieve recent order from localStorage
  useEffect(() => {
    fetchUserById();

    const storedOrder = localStorage.getItem("recentOrder");
    if (storedOrder) {
      setRecentOrder(JSON.parse(storedOrder));
      // Optionally clear the stored order if you don't want to keep it
      //localStorage.removeItem("recentOrder");
    }
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      {currentUser ? (
        <Paper style={{ padding: "2rem", marginBottom: "2rem" }}>
          <Typography variant="h6">User Information</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Full Name:</strong> {currentUser.fullName}
              </Typography>
              <Typography>
                <strong>Email:</strong> {currentUser.email}
              </Typography>
              <Typography>
                <strong>Phone:</strong> {currentUser.phone}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Address:</strong> {currentUser.address}
              </Typography>
              <Typography>
                <strong>City:</strong> {currentUser.city}
              </Typography>
              <Typography>
                <strong>Country:</strong> {currentUser.country}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Typography variant="body1">Loading user information...</Typography>
      )}

      <Typography variant="h6" gutterBottom>
        Order History
      </Typography>
      {recentOrder.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentOrder.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.productPrice} đ</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.productPrice * item.quantity} đ</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1">No orders found.</Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "2rem" }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}
