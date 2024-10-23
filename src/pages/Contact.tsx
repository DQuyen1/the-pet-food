import { Button, TextField } from "@mui/material";
import userImage from "../assets/images/user.png";

export default function Contact() {
  return (
    <div className="contact-page-content" style={{ top: "20%" }}>
      <p style={{ textAlign: "center" }}>CHI NHÁNH MỚI</p>
      <h2 style={{ textAlign: "center" }}>
        Hệ thống phân phối pate tươi cho chó mèo
      </h2>
      <hr />
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Danh sách được cập nhật ngày 08/08/2024
      </p>
      <p>
        Pate tươi quốc dân cho chó mèo Thepetfood.vn đã mở rộng “độ phủ” của
        mình để các Sen có thể dễ dàng mua hàng phục vụ boss. Cùng cập nhật lại
        hơn 100+địa chỉ hiện đang phân phối pate tươi The Pet -food nào:
      </p>
      <p>
        [Lưu ý: với những cửa hàng cộng tác viên [CTV], các Sen vui lòng liên hệ
        trước theo số điện thoại hotline để được phục vụ tốt nhất ạ ^^]
      </p>
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={userImage}
          alt="image"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "100px",
            borderColor: "yellow",
          }}
        />
        <p style={{ fontWeight: "bold" }}>MÍT</p>
      </div>
      <hr />
      <div style={{ marginTop: "1rem" }}>
        <span style={{ fontWeight: "bold" }}>Leave a reply</span> <br />
        <span>
          Your email address will not be published. Required fields are marked *
        </span>
        <br />
      </div>
      <label htmlFor="comment" style={{ fontWeight: "bold" }}>
        Comment*
      </label>
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
        sx={{ marginTop: "1rem", backgroundColor: "#1978E0" }}
      >
        POST A COMMENT
      </Button>
    </div>
  );
}
