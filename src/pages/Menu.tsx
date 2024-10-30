import ProductItem from "../components/ProductItem";
import blankImage from "../assets/images/blank.jpg";
import ProductService from "../services/productService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "../assets/css/Menu.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Button, TextField } from "@mui/material";
import userImage from "../assets/images/default.jpg";

export default function Menu() {
  const [products, setProducts] = useState([]);

  const product_service = new ProductService();
  const navigate = useNavigate();

  async function fetchProduct() {
    const response = await product_service.fetchProduct();
    setProducts(response);
    console.log("product data: ", response);
  }

  function goToProductDetail(id: number) {
    navigate(`/order/${id}`);
    console.log("goToProductDetail: ", id);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  // const style = {
  //   color: "white",
  //   backgroundColor: "black",
  //   borderRadius: "20%",
  // };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <p>TIN KHUYẾN MÃI</p>
      <h2>Menu Thức Ăn The Petfood Vietnam</h2>
      <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
        Danh sách thức ăn tại Thepetfood Vietnam
      </p>
      <img
        src="https://res.cloudinary.com/dchov8fes/image/upload/v1729851335/gosgipl1bvisqnilqb6a.png"
        alt=""
        style={{
          width: "960.44px",
          height: "400px",
          marginBottom: "1rem",
          paddingLeft: "0rem",
          alignSelf: "flex-start",
          marginLeft: "26.5rem",
        }}
      />{" "}
      <br />
      <img
        src="https://res.cloudinary.com/dchov8fes/image/upload/v1729851516/lgi8omr3v4txme1lgqlx.png"
        alt=""
        style={{
          width: "960.44px",
          height: "400px",
          marginBottom: "1rem",
          paddingLeft: "0rem",
          alignSelf: "flex-start",
          marginLeft: "26.5rem",
        }}
      />
      {/* Flex container to hold ProductItem components */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping if there are more than 3 items
          alignItems: "flex-start",
          width: "54%",
          gap: "1rem", // Space items evenly
        }}
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 33.33%", // Ensures three items per row
                maxWidth: "23.33%",
                marginBottom: "1.5rem",
                gap: "1rem",
                cursor: "pointer",
                // Add spacing between rows
              }}
              onClick={() => goToProductDetail(product.productId)}
            >
              <ProductItem
                name={product.productName}
                price={product.price}
                image={product.imgUrl || blankImage}
              />
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          width: "50%",
          borderTop: "1px solid black",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 0rem",
        }}
      >
        <BsFillArrowLeftCircleFill fontSize={30} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Hướng dẫn chi tiết cách sử dụng</p>
          <p>các sản phẩm tại Thepetfood Vietnam</p>
        </div>
        <BsFillArrowRightCircleFill fontSize={30} />
      </div>
      <div>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            margin: "1rem 0rem",
          }}
        >
          3 THOUGHTS ON “ MENU THỨC ĂN THE PET FOOD VIETNAM
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "-10rem",
            gap: "1rem",
          }}
        >
          <p>
            <span style={{ fontWeight: "bold" }}>Pingback</span>: Bí Quyết Chọn
            Thức Ăn cho Chó Mèo Giúp Thú cưng Tăng Cân{" "}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Pingback:</span> THỨC ĂN CHO
            CHÓ NÀO LÀ TỐT NHẤT ? - DC KING
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Pingback</span>: 5 Cách làm
            Pate cho Chó{" "}
          </p>
        </div>
      </div>
      <div
        style={{
          // marginLeft: "-10rem",
          borderTop: "1px solid black",
          marginTop: "1rem",
          width: "920px",
          // width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "1rem",
          }}
        >
          <img
            src={userImage}
            alt="image"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />
          <p style={{ fontWeight: "bold", marginLeft: "1rem" }}>MÍT</p>
        </div>
        <hr style={{ color: "black" }} />
        <div style={{ marginTop: "1rem" }}>
          <span style={{ fontWeight: "bold" }}>Leave a reply</span> <br />
          <span>
            Your email address will not be published. Required fields are marked
            *
          </span>
          <br />
        </div>
        <label
          htmlFor="comment"
          style={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
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
          sx={{
            marginTop: "1rem",
            backgroundColor: "#1978E0",
            marginBottom: "1rem",
          }}
        >
          POST A COMMENT
        </Button>
      </div>
    </div>
  );
}
