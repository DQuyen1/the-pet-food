import {
  FormControl,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "../assets/css/Cart.css";

export default function Cart() {
  return (
    <div className="cart-page-content">
      {/* <div style={{ display: 'inline' }}> */}
      <h3>Giỏ Hàng</h3>
      {/* </div> */}
      <div className="list-products">
        <table className="table-cart">
          <thead>
            <tr className="header-table">
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Pate hỗn hợp gà (Mixed Chicken and liver) hộp 1kg</td>
              <td>95.000 đ</td>
              <td>2</td>
              <td>190.000 đ</td>
            </tr>
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
              <TextField id="full-name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="phone">Phone</label>
              <TextField id="phone" variant="outlined" fullWidth />
            </Grid>

            {/* Email and Province/City */}
            <Grid item xs={12} md={6}>
              <label htmlFor="email-address">Email Address (optional)</label>
              <TextField id="email-address" variant="outlined" fullWidth />
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
              <TextField id="address" variant="outlined" fullWidth />
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox />}
            label="Đăng ký nhận email"
            style={{ fontWeight: "bold" }}
          />
          <FormControlLabel control={<Checkbox />} label="Create an account" />

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

              <div className="form-content">
                <p style={{ color: "#808080", alignItems: "" }}>SUBTOTAL</p>
              </div>
              <div className="form-content">
                <p>Pate hỗn hợp gà ( Mixed Chicken and liver ) hộp 1kg</p>
              </div>
              <div className="form-content">
                <p>190.000 đ</p>
              </div>
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
                <p>190.000 đ</p>
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
              }}
              className="button-order"
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
