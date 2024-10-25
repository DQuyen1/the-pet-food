import {
  FormControl,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import "../assets/css/Cart.css";
import OrderService from "../services/orderService";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import UserService from "../services/userService";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const order_service = new OrderService();
  const { cart, updateItemQuantity, clearCart, removeItemFromCart } = useCart(); // Accessing cart directly from context
  const [currentUser, setCurrentUser] = useState(null);
  const user_service = new UserService();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  async function fetchUserById() {
    const userId = localStorage.getItem("userId");
    const response = await user_service.fetchUserById(userId);
    setCurrentUser(response);
    console.log("user data: ", response);

    if (response) {
      setFullName(response.fullName || "");
      setPhone(response.phone || "");
      setEmail(response.email || "");
      setAddress(response.address || "");
    }
    console.log(currentUser);
  }

  async function createOrder() {
    await order_service.createOrder(13, 100);

    const userId = localStorage.getItem("userId");

    if (!userId) {
      // Notify user to log in
      toast.warn("You need to log in first!", {
        position: "top-right",
        autoClose: 5000, // Duration in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (cart.length === 0) {
        toast.warn("You don't have any product yet!", {
          position: "top-right",
          autoClose: 3000, // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("Order created successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        localStorage.setItem("recentOrder", JSON.stringify(cart));

        clearCart();

        navigate("/profile");
      }
    }
  }

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.productPrice * item.quantity,
      0
    );
  };

  useEffect(() => {
    console.log("Global Cart Items: ", cart);
    fetchUserById();
  }, []);

  return (
    <div className="cart-page-content">
      <h3>Giỏ Hàng</h3>
      <div className="list-products">
        <table className="table-cart">
          <thead>
            <tr className="header-table">
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.productName}</td>
                  <td>{item.productPrice} đ</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          updateItemQuantity(item.cartItemId, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1} // Disable if quantity is 1
                      >
                        -
                      </Button>
                      <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          updateItemQuantity(item.cartItemId, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>{item.productPrice * item.quantity} đ</td>

                  <td>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => removeItemFromCart(item.cartItemId)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  No products yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <hr />
        <div style={{ margin: "1rem 0" }}>
          <p>Returning customer? Click here to login</p>
          <p>Đăng nhập hoặc đăng ký bằng tài khoản mạng xã hội. Đăng nhập</p>
          <p>Have a coupon? Click here to enter your code</p>
        </div>

        <hr />

        <FormControl fullWidth sx={{ margin: "1rem 0" }}>
          <Grid container spacing={2}>
            {/* Full Name and Phone */}
            <Grid item xs={12} md={6}>
              <label htmlFor="full-name">Full Name</label>
              <TextField
                id="full-name"
                variant="outlined"
                fullWidth
                value={fullName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="phone">Phone</label>
              <TextField
                id="phone"
                variant="outlined"
                fullWidth
                value={phone}
              />
            </Grid>

            {/* Email and Province/City */}
            <Grid item xs={12} md={6}>
              <label htmlFor="email-address">Email Address (optional)</label>
              <TextField
                id="email-address"
                variant="outlined"
                fullWidth
                value={email}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="province/city">Province/City</label>
              <TextField id="province/city" variant="outlined" fullWidth />
            </Grid>

            {/* District and Commune/Ward */}
            <Grid item xs={12} md={6}>
              <label htmlFor="district">District</label>
              <TextField id="district" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="commune">Commune/Ward/Town</label>
              <TextField id="commune" variant="outlined" fullWidth />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <label htmlFor="address">Address</label>
              <TextField
                id="address"
                variant="outlined"
                fullWidth
                value={address}
              />
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox />}
            label="Đăng ký nhận email"
            style={{ fontWeight: "bold" }}
          />
          {/* <FormControlLabel control={<Checkbox />} label="Create an account" /> */}

          <p
            style={{
              fontWeight: "bold",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            ADDITIONAL INFORMATION
          </p>
          <label htmlFor="order-notes" style={{ fontWeight: "bold" }}>
            Order notes (optional)
          </label>
          <TextField
            id="order-notes"
            variant="outlined"
            fullWidth
            placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng"
            sx={{
              height: 150,
              "& .MuiOutlinedInput-root": { height: "100%" },
              marginBottom: "2rem",
              marginTop: "1rem",
            }}
          />
          <div className="order-form">
            <div className="cart-page-summary">
              <div className="form-content">
                <p style={{ color: "#808080" }}>YOUR ORDER</p>
                <p style={{ color: "#808080" }}>PRODUCT</p>
              </div>
              {/* {cart.map((item, index) => (
                <div key={index} className="form-content">
                  <p>
                    {item.productName} x {item.quantity}
                  </p>
                </div>
              ))} */}

              <div className="form-content">
                <p style={{ color: "#808080", alignItems: "" }}>SUBTOTAL</p>
              </div>

              {/* {cart.map((item, index) => (
                <div key={index} className="form-content">
                  <p>{item.productPrice * item.quantity} đ</p>
                </div>
              ))} */}
              {/* <div className="form-content">
                <p>Pate hỗn hợp gà ( Mixed Chicken and liver ) hộp 1kg</p>
              </div>
              <div className="form-content">
                <p>190.000 đ</p>
              </div> */}
              <div className="form-content">
                <p style={{ fontWeight: "bold" }}>Shipping</p>
              </div>
              <div className="form-content">
                <p>
                  Nhân viên sẽ liên hệ để thông báo thời gian giao hàng. Phí
                  giao hàng sẽ được thông báo qua điện thoại{" "}
                </p>
              </div>
              <div className="form-content">
                <p style={{ fontWeight: "bold" }}>Total</p>
              </div>
              <div className="form-content">
                <p>{calculateTotal()} đ</p>
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <p style={{ fontWeight: "bold" }}>Chuyển khoản ngân hàng</p>
              <p>
                Thông tin chuyển khoản sẽ hiển thị sau khi bạn đặt hoàn tất đơn
                hàng. Vui lòng ghi mã đơn hàng của bạn trong phần Nội dung thanh
                toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển.
              </p>
            </div>
            <button
              style={{
                backgroundColor: "#357CFF",
                borderColor: "transparent",
                width: "90%",
                marginLeft: "5rem",
                cursor: "pointer",
              }}
              className="button-order"
              onClick={() => createOrder()}
            >
              <div style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
                <p>PLACE ORDER</p>
                <p>
                  Hoàn tiền với sản phẩm pate hỗn hợp gà: nếu sau 3 ngày boss
                  không ăn,
                </p>
                <p>Thepetfood sẽ hoàn tiền hoặc quy đổi sang sản phẩm khác.</p>
              </div>
            </button>
          </div>
        </FormControl>
      </div>
    </div>
  );
}
