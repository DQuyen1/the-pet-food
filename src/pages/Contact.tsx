import { Box, Button, TextField } from "@mui/material";
import userImage from "../assets/images/default.jpg";
import "../assets/css/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page-content" style={{ width: "51%" }}>
      <p style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        CHI NHÁNH MỚI
      </p>
      <h2 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Hệ thống phân phối pate tươi cho chó mèo
      </h2>
      <hr className="custom-hr" />
      <p
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontFamily: "sans-serif",
          fontSize: "1.2rem",
        }}
      >
        Danh sách được cập nhật ngày 08/08/2024
      </p>
      <p style={{ fontFamily: "sans-serif" }}>
        Pate tươi quốc dân cho chó mèo Thepetfood.vn đã mở rộng “độ phủ” của
        mình để các Sen có thể dễ dàng mua hàng phục vụ boss. Cùng cập nhật lại
        hơn 100+địa chỉ hiện đang phân phối pate tươi The Pet -food nào:
      </p>
      <p style={{ fontFamily: "sans-serif", marginBottom: "1rem" }}>
        [Lưu ý: với những cửa hàng cộng tác viên [CTV], các Sen vui lòng liên hệ
        trước theo số điện thoại hotline để được phục vụ tốt nhất ạ ^^]
      </p>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      >
        <img
          src={userImage}
          alt="image"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            borderColor: "yellow",
          }}
        />
        <p style={{ fontWeight: "bold", marginLeft: "1rem" }}>MÍT</p>
      </div>
      <hr />
      {/* <div style={{ marginTop: "1rem" }}> */}
      <p
        style={{
          fontWeight: "bold",
          // marginBottom: "0.1rem",
          marginTop: "1rem",
        }}
      >
        Leave a reply
      </p>{" "}
      <br />
      <p style={{ marginTop: "-0.5rem" }}>
        Your email address will not be published. Required fields are marked *
      </p>
      <br />
      {/* </div> */}
      <Box mt={-1}>
        {" "}
        {/* Equivalent to -1rem if default spacing is 8px */}
        <label htmlFor="comment" style={{ fontWeight: "bold" }}>
          Comment*
        </label>
      </Box>
      <br />
      <TextField
        id="full-name"
        variant="outlined"
        hiddenLabel
        fullWidth
        sx={{
          height: 100,
          "& .MuiOutlinedInput-root": { height: "100%" },
        }}
      />
      <div style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex" }}>
          <label
            htmlFor="name"
            style={{ fontWeight: "bold", textAlign: "left" }}
          >
            Name
          </label>
          <label
            htmlFor="email"
            style={{
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "14.3rem",
            }}
          >
            Email
          </label>
          <label
            htmlFor="website"
            style={{
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "14.3rem",
            }}
          >
            Website
          </label>
        </div>
        <div style={{ display: "flex" }}>
          <TextField id="" variant="outlined" hiddenLabel />
          <TextField
            id=""
            variant="outlined"
            hiddenLabel
            sx={{ marginLeft: "3rem" }}
          />
          <TextField
            id=""
            variant="outlined"
            hiddenLabel
            sx={{ marginLeft: "3rem" }}
          />
        </div>
      </div>
      <Button
        variant="contained"
        sx={{
          marginTop: "1rem",
          backgroundColor: "#1978E0",
          marginBottom: "1rem",
        }}
      >
        POST A COMMENT
      </Button>
    </div>
  );
}
