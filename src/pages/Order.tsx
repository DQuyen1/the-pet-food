import { TextField } from "@mui/material";
import { BsStarFill } from "react-icons/bs";
import blankImage from "../assets/images/blank.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import ProductService from "../services/productService";

import { toast } from "react-toastify";
import { useCart } from "../context/cartContext";
import CartItemService from "../services/cartItemService";
// import CommentSection from "../components/CommentSection";
// import defaultImg from "../assets/images/default.jpg";

export default function Order() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const product_service = new ProductService();
  const cart_item_service = new CartItemService();

  const { addItemToCart } = useCart();

  function handleQuantityChange(action) {
    if (action === "plus") {
      setQuantity(quantity + 1);
    } else if (action === "minus") {
      setQuantity(quantity - 1);
      if (quantity <= 1) {
        setQuantity(1);
      }
    }
  }

  const rating = useMemo(() => {
    const randomRating = () => {
      const ratingValue = (Math.random() * 2 + 3).toFixed(0);
      return parseInt(ratingValue);
    };
    return randomRating();
  }, []); // Runs only once when the component is mounted

  const sold = useMemo(() => {
    const randomSold = () => (Math.random() * 2 + 4).toFixed(1);
    return randomSold();
  }, []); // Runs only once when the com

  async function fetchProductById() {
    const response = await product_service.fetchProductById(id); // Assuming your service has a fetchCategories method
    setProduct(response);
    console.log("product data by id: ", response);
  }

  async function addToCart() {
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
      // const cartItemId = Date.now(); // Returns the current timestamp
      const cartId = localStorage.getItem("cartId");

      const data = await cart_item_service.createCartItem(
        Number(cartId),
        Number(id),
        quantity
      );

      addItemToCart(
        data.cartItemId,
        Number(id),
        quantity,
        product.productName,
        product.price
      );
      toast.success("Item added to cart successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <div style={{ marginLeft: "25rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginBottom: "1rem",
          width: "90%",
        }}
      >
        <img
          src={product?.imgUrl || blankImage}
          alt="product-image"
          style={{ width: "600px", height: "400px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "1rem",
          }}
        >
          {/* <p>Pate hỗn hợp gà ( Mixed Chicken and liver ) hộp 1kg</p> */}
          <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            {product?.productName || "Loading product name..."}
          </p>
          <div>
            <p style={{ fontWeight: "bold" }}>
              {product?.price || "Loading product price..."}đ
            </p>
            {Array.from({ length: rating }).map((_, index) => (
              <BsStarFill key={index} color="yellow" />
            ))}

            <span style={{ marginLeft: "0.5rem" }}>(đã bán {sold}k+)</span>
          </div>

          <div style={{ display: "flex", marginTop: "5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0rem",
                borderCollapse: "collapse",
              }}
            >
              <button
                style={{
                  // all: "unset",
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#D6D1D1",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => handleQuantityChange("minus")}
              >
                -
              </button>
              <span
                style={{
                  fontSize: "1.2rem",
                  // margin: "0 10px",
                  padding: "0.27rem 0.65rem",
                  borderRadius: "5px",
                  backgroundColor: "#D6D1D1",
                }}
              >
                {quantity}
              </span>{" "}
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#D6D1D1",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  // all: "unset",
                }}
                onClick={() => handleQuantityChange("plus")}
              >
                +
              </button>
            </div>

            <button
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#007AFF",
                color: "#ffffff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "1.5rem",
              }}
              onClick={addToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dchov8fes/image/upload/v1730298407/ljfefajq1cozudxymjvw.png"
        // src={blankImage}
        alt=""
        style={{ width: "10%", height: "10%" }}
      />

      <img
        src="https://res.cloudinary.com/dchov8fes/image/upload/v1730298414/xtinnwtqgal9yaohgej0.png"
        // src={blankImage}
        alt=""
        style={{ width: "10%", height: "10%", marginLeft: "1rem" }}
      />
      <p style={{ width: "900px" }}>
        {/* Được làm từ thịt ức gà đã được kiểm dịch chặt chẽ, ninh nhừ với gan gà
        tươi mọng trong nhiều giờ để giữ trọn hương vị thơm ngon, sản phẩm là sự
        lựa chọn thích hợp cho cún và mèo. | The product is made from the
        freshest well-known brand of chicken breast, braised for a long time
        with fresh chicken liver to keep all the nutrients and flavors. The
        product is suitable for all cats and dogs */}
        {product?.description || "Loading product description..."}
      </p>
      <p>Review (1)</p>
      <p style={{ fontWeight: "bold" }}>Review for {product?.productName} </p>
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          width: "760px",
          alignItems: "center",
          gap: "0.5rem",
          borderRadius: "5px",
          borderColor: "#D9D9D9",
          padding: "0.5rem 0.5rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <p style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}>4.00</p>
        <div>
          <BsStarFill color="yellow" style={{ filter: "brightness(0.9)" }} />
          <BsStarFill color="yellow" style={{ filter: "brightness(0.9)" }} />
        </div>
      </div>

      {/* <div
        style={{
          border: "1px solid #D9D9D9",
          padding: "0.5rem 0.5rem",
          borderRadius: "5px",
          width: "760px",
        }}
      >
        <CommentSection comments={comments} />
      </div> */}

      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <TextField
          id="full-name"
          variant="outlined"
          hiddenLabel
          sx={{
            width: "778px",
          }}
          InputProps={{
            style: {
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
            },
          }}
          className="comment-input"
          // onChange={(e) => setUserComment(e.target.value)}
          // value={userComment}
        />
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            border: "1px solid #D9D9D9",
            width: "760px",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            padding: "0.5rem",
          }}
        >
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
            placeholder="Email (Optional)"
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
            // onClick={addNewComment}
          >
            POST A COMMENT
          </button>
        </div>
      </div>
    </div>
  );
}
