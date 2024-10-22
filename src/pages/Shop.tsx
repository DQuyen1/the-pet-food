import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import ProductService from "../services/productService";

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
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div
        style={{
          flex: "none", // Prevent automatic resizing
          width: "338px", // Set width to 500px
          backgroundColor: "transparent", // Transparent background
          display: "flex",
          alignItems: "flex-start", // Align content to the top-left
          justifyContent: "center",
          flexDirection: "column",
          padding: "20px",
          height: "646px", // Add padding for spacing
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
          backgroundColor: "lightcoral",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          //gap: '10px',
          height: "500px",
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} style={{ flex: "1 1 calc(33.33%)" }}>
            <ProductItem />
          </div>
        ))}
      </div>
    </div>
  );
}
