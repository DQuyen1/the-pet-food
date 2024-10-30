import { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  // Grid,
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

  const products = [
    {
      productId: 2,
      productName: "Pate hỗn hợp gà (Mixed Chicken and liver) hộp 1kg",
      price: 95000,
    }, // example price
    {
      productId: 3,
      productName: "Pate hỗn hợp cá (Mixed ocean fish) hộp 1kg",
      price: 95000,
    },
    {
      productId: 4,
      productName: "Pate gà cá (Mixed ocean fish & chicken breast)",
      price: 95000,
    },
    { productId: 5, productName: "Pate cá ngừ (Tuna) hộp 1kg", price: 105000 },
    {
      productId: 6,
      productName: "Súp dinh dưỡng hải sản (Nutritonal cat soup) hộp 500g",
      price: 50000,
    },
    {
      productId: 7,
      productName: "Pate hỗn hợp cá nước ngọt (Mixed fresh water fish) hộp 1kg",
      price: 105000,
    },
    {
      productId: 8,
      productName: "Pate heo (Pork and liver) hộp 1kg",
      price: 165000,
    },
    {
      productId: 9,
      productName: "Pate gà (Chicken breast) hộp 1kg",
      price: 165000,
    },
    { productId: 12, productName: "Pate lon Bò bo rau củ 380g", price: 55000 },
    { productId: 13, productName: "Pate lon Heo rau củ 380g", price: 55000 },
    {
      productId: 14,
      productName: "Pate lon hỗn hợp Gà - Kỷ tử 380g",
      price: 55000,
    },
    {
      productId: 15,
      productName: "Pate lon Hỗn hợp cá - trái thơm 380g",
      price: 55000,
    },
    {
      productId: 16,
      productName: "Pate lon Hỗn hợp heo - trái thơm 380g",
      price: 55000,
    },
    {
      productId: 18,
      productName: "Pate Hỗn Hợp Cá Hồi King's Pet túi 70gr",
      price: 180000,
    },
    {
      productId: 19,
      productName: "Pate Hỗn Hợp Cá King's Pet Túi 70gr",
      price: 180000,
    },
    {
      productId: 21,
      productName: "Pate Hỗn Hợp Gà King's Pet Túi 70gr",
      price: 180000,
    },
    {
      productId: 22,
      productName: "Pate Hỗn Hợp Gà Cá King's Pet Túi 70gr",
      price: 180000,
    },
    { productId: 23, productName: "Pate cá thu hộp 1kg", price: 105000 },
    {
      productId: 24,
      productName: "Pate gà collagen (Mixed chicken with collagen) hộp 1kg",
      price: 105000,
    },
    {
      productId: 25,
      productName: "Pate gan (Chicken liver) hộp 1kg",
      price: 85000,
    },
    {
      productId: 26,
      productName: "Pate cá cam (Yellow Tail) hộp 1kg",
      price: 85000,
    },
    {
      productId: 27,
      productName: "Súp dinh dưỡng hải sản (Nutritional cat soup) 300gr",
      price: 30000,
    },
    {
      productId: 28,
      productName: "Pate hỗn hợp cá (Mixed ocean fish) hộp 1kg",
      price: 45000,
    },
  ];

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

  // Helper function to get product details by productId
  const getProductDetails = (productId) => {
    return products.find((product) => product.productId === productId);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    orderDetails.forEach((item) => {
      const product = products.find((p) => p.productId === item.productId);
      if (product) {
        totalPrice += product.price * item.quantity;
      }
    });

    return totalPrice;
  };

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
            {/* <Paper
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
            </Paper> */}

            {/* <Typography variant="h5" gutterBottom>
              Products in this Order
            </Typography> */}
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
                  {orderDetails.map((orderItem) => {
                    const productDetails = getProductDetails(
                      orderItem.productId
                    );
                    return (
                      <TableRow key={orderItem.orderItemId}>
                        <TableCell>
                          {productDetails?.productName || "Unknown Product"}
                        </TableCell>
                        <TableCell>
                          {productDetails?.price || "N/A"} đ
                        </TableCell>
                        <TableCell>{orderItem.quantity}</TableCell>
                        <TableCell>
                          {productDetails?.price * orderItem.quantity || 0} đ
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>

            <Paper style={{ marginTop: "1rem", padding: "1rem" }}>
              <Typography variant="h6">Total Amount</Typography>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {calculateTotalPrice()} đ
              </Typography>
            </Paper>
          </>
        )
      )}
    </div>
  );
}
