import { Button, TextField } from "@mui/material";
import blankImage from "../assets/images/blank.jpg";
import userImage from "../assets/images/user.png";

export default function Policy() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Chính sách đối trả</h2>
      <img
        src={blankImage}
        alt=""
        style={{ width: "100%", height: "20rem", marginBottom: "2rem" }}
      />
      <div>
        <p>
          Công ty cam kết đổi trả sản phẩm pate tươi chó mèo Thepet.vn trong 03
          (ba) ngày đầu tiên nếu mèo không ăn.
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Đối tượng áp dụng: </span>khách
          hàng mua hàng online tại web/fanpage phân phối.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Danh mục sản phẩm được phép đổi trả:
        </p>
        <span>* Pate cá ngừ.</span> <br />
        <span>* Pate cá nục.</span>
        <span style={{ fontWeight: "bold" }}>Điều kiện đổi trả:</span>
        <p>
          + Khách hàng sử dụng lần đầu tiên Pate tươi chó mèo Thepet.vn. <br />{" "}
          + Mèo không ăn trong 03 (ba) ngày tính từ ngày mua sản phẩm. <br /> +
          Sản phẩm đổi trả không được bảo quản trong ngăn đá.
        </p>
        <span style={{ fontWeight: "bold" }}>Điều kiện từ chối đổi trả:</span>
        <p>* Sản phẩm nằm ngoài danh mục.</p>
        <p>* Sản phẩm đã đông đá.</p>
        <p>
          – Trong các trường hợp khác, công ty sẽ có chính sách giải quyết riêng
          cho mỗi trường hợp.
        </p>
      </div>
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
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <label
            htmlFor="name"
            style={{ fontWeight: "bold", textAlign: "left", width: "100%" }}
          >
            Name
          </label>
          <label
            htmlFor="email"
            style={{
              fontWeight: "bold",
              textAlign: "left",
              width: "95%",
              marginLeft: "rem",
            }}
          >
            Email
          </label>
          <label
            htmlFor="website"
            style={{
              fontWeight: "bold",
              textAlign: "left",
              width: "100%",
              marginLeft: "1.5rem",
            }}
          >
            Website
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField id="" variant="outlined" hiddenLabel />
          <TextField id="" variant="outlined" hiddenLabel />
          <TextField id="" variant="outlined" hiddenLabel />
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
