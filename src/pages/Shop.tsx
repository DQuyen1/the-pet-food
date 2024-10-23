import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import ProductService from "../services/productService";
// import blankImage from "../assets/images/blank.jpg";
import pet5 from "../assets/images/pet5.png"; // Import the image

export default function Shop() {
  const [products, setProducts] = useState([]);
  const product_service = new ProductService();

  async function fetchProduct() {
    const response = await product_service.fetchProduct();
    setProducts(response);
    console.log("product data: ", response);
  }

  useEffect(() => {
    fetchProduct();
    console.log("product not yet: ", products);
  }, []);

  return (
    <div>
      {/* Full-width image at the top */}
      <img
        src={pet5}
        alt="Blank"
        style={{
          width: "100vw", // Make the image span the full width of the screen
          height: "760px", // Adjust the height of the image
          objectFit: "cover",
          marginBottom: "20px", // Add some space below the image
        }}
      />

      <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        <div
          style={{
            flex: "none",
            width: "338px",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            padding: "20px",
            height: "646px",
          }}
          className="category-item"
        >
          <div
            style={{
              backgroundColor: "#0020C1",
              padding: "10px 15px 10px 5px",
              color: "white",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              width: "100%",
              fontSize: "20px",
              marginBottom: "1rem",
            }}
          >
            <p>Danh mục sản phẩm</p>
          </div>

          <button
            className="p-button"
            style={{
              all: "unset",
              marginBottom: "1rem",
              fontSize: "18px",
              borderBottom: "1px solid black",
              width: "100%",
            }}
          >
            Pate lon King’s Pet 380g
          </button>
          <hr />
          <button
            className="p-button"
            style={{
              all: "unset",
              marginBottom: "1rem",
              fontSize: "18px",
              borderBottom: "1px solid black",
              width: "100%",
            }}
          >
            Pate túi King’s Pet 70g
          </button>
          <hr />
          <button
            className="p-button"
            style={{
              all: "unset",
              marginBottom: "1rem",
              fontSize: "18px",
              borderBottom: "1px solid black",
              width: "100%",
            }}
          >
            Pate tươi The Pet Vietnam hộp 1kg
          </button>
          <hr />
          <button
            className="p-button"
            style={{
              all: "unset",
              marginBottom: "1rem",
              fontSize: "18px",
              borderBottom: "1px solid black",
              width: "100%",
            }}
          >
            Pate tươi
          </button>
          <button
            className="p-button"
            style={{
              all: "unset",
              marginBottom: "1rem",
              fontSize: "18px",
              borderBottom: "1px solid black",
              width: "100%",
            }}
          >
            Pate lon Alpha Pet 400gr
          </button>
          <button
            className="p-button"
            style={{
              all: "unset",
              marginBottom: "1rem",
              fontSize: "18px",
              borderBottom: "1px solid black",
              width: "100%",
            }}
          >
            Thức ăn dinh dưỡng
          </button>
          <button
            className="p-button"
            style={{
              all: "unset",
              marginBottom: "1rem",
              fontSize: "18px",
              borderBottom: "1px solid black",
              width: "100%",
            }}
          >
            Thức ăn Khô
          </button>
          <button
            className="p-button"
            style={{ all: "unset", marginBottom: "1rem", fontSize: "18px" }}
          >
            Khác
          </button>
        </div>

        <div
          style={{
            flex: 1,
            // backgroundColor: "lightcoral",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            height: "500px",
            width: "70%",
            marginLeft: "20px",
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} style={{ flex: "1 1 calc(33.33%)" }}>
              <ProductItem />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
