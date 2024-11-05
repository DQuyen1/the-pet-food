import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Grid } from "@mui/material";
import OrderService from "../services/orderService";
import { format } from "date-fns";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const order_service = new OrderService();

  useEffect(() => {
    fetchAllOrders();
  }, []);

  async function fetchAllOrders() {
    try {
      const response = await order_service.fetchAllOrders();
      setOrders(response);
    } catch (error) {
      console.log("Error while fetching orders: ", error);
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return format(date, "dd-MM-yyyy HH:mm");
  }

  const totalSum = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <Box
      sx={{ padding: "20px", backgroundColor: "#f4f6f8", minHeight: "100vh" }}
    >
      <Box>
        <Typography variant="h4" gutterBottom>
          Order List
        </Typography>

        <Typography variant="h4" gutterBottom>
          Total: {totalSum.toFixed(0)}đ
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {orders.map((order) => (
          <Grid item xs={12} key={order.orderId}>
            <Paper
              onClick={() => navigate(`/admin_order_detail/${order.orderId}`)}
              sx={{
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              <Box>
                <Typography variant="h6">Order#: {order.orderId}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {formatDate(order.date)}
                </Typography>
              </Box>
              <Typography variant="h6" color="primary">
                Total: {order.total.toFixed(0)}đ
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
