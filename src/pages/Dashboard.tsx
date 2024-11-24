import { useNavigate } from "react-router-dom";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import OrderService from "../services/orderService";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [totalOrder, setTotalOrder] = useState(0);
  const navigate = useNavigate();
  const order_service = new OrderService();

  /*************  ✨ Codeium Command ⭐  *************/
  /**
/******  3c22f496-2e8e-45b6-82a6-93f64f50ba31  *******/
  async function fetchAllOrders() {
    try {
      const response = await order_service.fetchAllOrders();
      setTotalOrder(response.length);
      console.log("length: ", response.length);
    } catch (error) {
      console.log("error while login: ", error);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <Box
      sx={{ padding: "20px", backgroundColor: "#f4f6f8", minHeight: "100vh" }}
    >
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Overview Section */}
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        <Grid item xs={12} md={4}>
          <Paper
            onClick={() => navigate("/orders")}
            sx={{
              padding: "20px",
              backgroundColor: "#1976d2",
              color: "#fff",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#1565c0", // Darken the color on hover for visual feedback
              },
            }}
          >
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h4" sx={{ fontSize: "2rem" }}>
              {totalOrder}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{ padding: "20px", backgroundColor: "#388e3c", color: "#fff" }}
          >
            <Typography variant="h6">Products Sold</Typography>
            <Typography variant="h4">30</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{ padding: "20px", backgroundColor: "#d32f2f", color: "#fff" }}
          >
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h4">2.400.000đ</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Box sx={{ marginTop: "40px" }}>
        <Typography variant="h5" gutterBottom>
          Recent Activity
        </Typography>
        <Paper sx={{ padding: "20px" }}>
          <Typography variant="body1">New user registered: John Doe</Typography>
          <Typography variant="body1">
            Product added: Wireless Headphones
          </Typography>
          <Typography variant="body1">Order #1234 completed</Typography>
        </Paper>
      </Box>

      {/* Quick Links */}
      <Box sx={{ marginTop: "40px" }}>
        <Typography variant="h5" gutterBottom>
          Quick Links
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button fullWidth variant="contained" color="secondary">
              Product Management
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button fullWidth variant="contained" color="success">
              Settings
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <Button
              fullWidth
              variant="contained"
              color="info"
              onClick={() => navigate("/orders")}
            >
              View All Orders
            </Button> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
