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
import OrderService from "../services/orderService";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export default function Profile() {
  const user_service = new UserService();
  const order_service = new OrderService();
  const [currentUser, setCurrentUser] = useState(null);
  // const [recentOrder, setRecentOrder] = useState([]);
  const [orders, setOrders] = useState([]); // State for storing user's orders
  const navigate = useNavigate();

  // Fetch user information
  async function fetchUserById() {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const response = await user_service.fetchUserById(userId);
      setCurrentUser(response);
    }
  }

  // Fetch user orders
  async function fetchUserOrders() {
    const userId = localStorage.getItem("userId");
    try {
      const userOrderData = await order_service.fetchOrdersByUserId(userId);
      setOrders(userOrderData);
    } catch (error) {
      console.error("Error fetching orders: ", error);
    }
  }

  // Handle logout
  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return format(date, "dd-MM-yyyy HH:mm");
  }

  useEffect(() => {
    fetchUserById();
    fetchUserOrders();

    // const storedOrder = localStorage.getItem("recentOrder");
    // if (storedOrder) {
    //   setRecentOrder(JSON.parse(storedOrder));
    // }
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>

      {/* User Information */}
      {currentUser ? (
        <Paper style={{ padding: "2rem", marginBottom: "2rem" }}>
          <Typography variant="h6" gutterBottom>
            User Information
          </Typography>
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

      {/* Order History */}
      <Typography variant="h6" gutterBottom>
        Order History
      </Typography>
      {orders.length > 0 ? (
        <TableContainer component={Paper} style={{ marginBottom: "2rem" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order#</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Total Price</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.orderId} hover>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{formatDate(order.date)}</TableCell>

                  <TableCell>{order.total} đ</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => navigate(`/order-detail/${order.orderId}`)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1">No orders found.</Typography>
      )}

      {/* Logout Button */}
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
