import { TextField } from "@mui/material";
import { BsStarFill } from "react-icons/bs";

export default function Order() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <img src="src/assets/images/blank.jpg" alt="product-image" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "1rem",
          }}
        >
          <p>Pate hỗn hợp gà ( Mixed Chicken and liver ) hộp 1kg</p>
          <div>
            <p>500.000đ</p>
            <BsStarFill color="yellow" />
            <BsStarFill color="yellow" />
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ display: "flex" }}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <img
        src="src/assets/images/blank.jpg"
        alt=""
        style={{ width: "10%", height: "10%" }}
      />

      <img
        src="src/assets/images/blank.jpg"
        alt=""
        style={{ width: "10%", height: "10%", marginLeft: "1rem" }}
      />
      <p style={{ width: "900px" }}>
        Được làm từ thịt ức gà đã được kiểm dịch chặt chẽ, ninh nhừ với gan gà
        tươi mọng trong nhiều giờ để giữ trọn hương vị thơm ngon, sản phẩm là sự
        lựa chọn thích hợp cho cún và mèo. | The product is made from the
        freshest well-known brand of chicken breast, braised for a long time
        with fresh chicken liver to keep all the nutrients and flavors. The
        product is suitable for all cats and dogs
      </p>
      <p>Review (1)</p>
      <p>Review for Pate hỗn hợp gà (Mixed chicken and liver) hộp 1 kg </p>
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          width: "70%",
          alignItems: "center",
          gap: "0.5rem",
          borderRadius: "5px",
          borderColor: "#D9D9D9",
          padding: "0.5rem 0rem",
        }}
      >
        <p style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}>4.00</p>
        <div>
          <BsStarFill color="yellow" />
          <BsStarFill color="yellow" />
        </div>
      </div>
      <div>
        <TextField
          id="full-name"
          variant="outlined"
          hiddenLabel
          sx={{ width: "70%" }}
        />
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <input type="radio" name="option" value="1" /> Male
          <input type="radio" name="option" value="2" /> Female
          <TextField
            id="full-name"
            variant="outlined"
            hiddenLabel
            placeholder="Your name (Required)"
            sx={{
              height: "30px",
              "& .MuiInputBase-root": {
                height: "100%", // Ensures the input field stretches to the container height
              },
              "& input": {
                padding: "0 8px", // Adjust for good spacing
              },
            }}
          />
          <TextField
            placeholder="Email"
            sx={{
              height: "30px",
              "& .MuiInputBase-root": {
                height: "100%", // Ensures the input field stretches to the container height
              },
              "& input": {
                padding: "0 8px", // Adjust for good spacing
              },
            }}
          />
          <button
            style={{
              color: "#ffffff",
              backgroundColor: "#007AFF",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "none",
            }}
          >
            POST A COMMENT
          </button>
        </div>
      </div>
    </div>
  );
}
