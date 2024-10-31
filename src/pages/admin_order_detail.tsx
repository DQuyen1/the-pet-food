import { useParams } from "react-router-dom";
import OrderService from "../services/orderService";
import { useEffect, useState } from "react";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { format } from "date-fns";

export default function AdminOrderDetail() {
  const { orderId } = useParams();
  const [order, setOrder] = useState([]);
  const [orderDate, setOrderDate] = useState(null);
  const order_service = new OrderService();

  async function fetchOrderDate(orderId) {
    try {
      const response = await order_service.fetchOrderByOrderId(orderId);
      setOrderDate(response.date);
    } catch (error) {
      console.log("error: ", error);
    }
  }

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

  function formatDate(dateString) {
    const date = new Date(dateString);
    return format(date, "dd-MM-yyyy HH:mm");
  }

  async function fetchOrderDetail(orderId) {
    try {
      const response = await order_service.fetchOrderDetailsByOrderId(orderId);
      setOrder(response);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const getProductDetails = (productId) => {
    return products.find((product) => product.productId === productId);
  };

  const calculateTotalPrice = () => {
    return order.reduce((total, item) => {
      const product = getProductDetails(item.productId);
      if (product) {
        return total + product.price * item.quantity;
      }
      return total;
    }, 0);
  };

  useEffect(() => {
    fetchOrderDetail(orderId);
    fetchOrderDate(orderId);
  }, [orderId]);

  return (
    <Box
      sx={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}
    >
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      <Paper
        sx={{
          padding: "16px",
          marginBottom: "20px",
          backgroundColor: "#f0f4f8",
        }}
      >
        <Typography variant="h6">Order#: {orderId}</Typography>
        <Typography variant="body1" color="text.secondary">
          Date: {orderDate ? formatDate(orderDate) : "Loading..."}
        </Typography>
      </Paper>

      <Paper sx={{ padding: "16px", marginBottom: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Products
        </Typography>
        <Divider sx={{ marginY: "10px" }} />

        {order.map((item) => {
          const product = getProductDetails(item.productId);
          return (
            <Grid
              container
              key={item.orderItemId} // Use orderItemId as the key
              spacing={2}
              alignItems="center"
              sx={{ paddingY: "8px" }}
            >
              <Grid item xs={6}>
                <Typography variant="body1">
                  {product?.productName || "Product Not Found"}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">Qty: {item.quantity}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" color="primary">
                  {product ? product.price * item.quantity : "0.00"}đ
                </Typography>
              </Grid>
            </Grid>
          );
        })}

        <Divider sx={{ marginY: "10px" }} />
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", paddingY: "8px" }}
        >
          <Typography variant="h6">Total: {calculateTotalPrice()}đ</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
