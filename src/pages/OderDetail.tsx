import { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import OrderService from "../services/orderService";

export default function OrderDetail() {
  const { orderId } = useParams();
  const order_service = new OrderService();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch order details
  async function fetchOrderDetails() {
    try {
      const response = await order_service.fetchOrderDetailsByOrderId(orderId);
      setOrderDetails(response);
    } catch (error) {
      console.error("Failed to fetch order details:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrderDetails();
  }, [orderId]);

  // Date format helper
  //   function formatDate(dateString) {
  //     const options = {
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     };
  //     return new Date(dateString).toLocaleDateString("en-GB", options);
  //   }

  return (
    <div style={{ padding: "2rem" }}>
      {loading ? (
        <CircularProgress />
      ) : (
        orderDetails && (
          <>
            <Typography variant="h4" gutterBottom>
              Order Details
            </Typography>
            <Paper
              elevation={3}
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Order Information</Typography>
                  <Typography>
                    <strong>Order ID:</strong> {orderId}
                  </Typography>
                  <Typography>
                    <strong>Date:</strong> {orderDetails.orderDate}
                  </Typography>
                  <Typography>
                    <strong>Status:</strong> {orderDetails.status}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Shipping Information</Typography>
                  <Typography>
                    <strong>Address:</strong> {orderDetails.shippingAddress}
                  </Typography>
                  <Typography>
                    <strong>City:</strong> {orderDetails.city}
                  </Typography>
                  <Typography>
                    <strong>Country:</strong> {orderDetails.country}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            <Typography variant="h5" gutterBottom>
              Products in this Order
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderDetails.products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>{product.productName}</TableCell>
                      <TableCell>{product.price} đ</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>
                        {product.price * product.quantity} đ
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Paper style={{ marginTop: "1rem", padding: "1rem" }}>
              <Typography variant="h6">Total Amount</Typography>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {orderDetails.totalPrice} đ
              </Typography>
            </Paper>
          </>
        )
      )}
    </div>
  );
}
