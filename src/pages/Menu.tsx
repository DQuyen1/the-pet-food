import ProductItem from "../components/ProductItem";
import blankImage from "../assets/images/blank.jpg";
import ProductService from "../services/productService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <p>Danh sách thức ăn tại Thepetfood Vietnam</p>
      <img
        src="https://res.cloudinary.com/dchov8fes/image/upload/v1729851335/gosgipl1bvisqnilqb6a.png"
        alt=""
        style={{ width: "800px", height: "400px", marginBottom: "1rem" }}
      />{" "}
      <br />
      <img
        src="https://res.cloudinary.com/dchov8fes/image/upload/v1729851516/lgi8omr3v4txme1lgqlx.png"
        alt=""
        style={{ width: "800px", height: "400px", marginBottom: "1rem" }}
      />
      {/* Flex container to hold ProductItem components */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping if there are more than 3 items
          justifyContent: "space-between", // Space items evenly
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

                cursor: "pointer",
                // Add spacing between rows
              }}
              onClick={() => goToProductDetail(product.productId)}
            >
              <ProductItem
                name={product.productName}
                price={product.price}
                image={product.imageUrl || blankImage}
              />
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}
