import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import ProductService from "../services/productService";
import pet5 from "../assets/images/pet5.png"; // Import the image
import CategoryService from "../services/categoryService";
import "../assets/css/Shop.css";
import { useNavigate } from "react-router-dom";
import UserService from "../services/userService";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("Tất cả");
  const product_service = new ProductService();
  const category_service = new CategoryService();
  const user_service = new UserService();
  const navigation = useNavigate();

  // Fetch products
  async function fetchProduct() {
    const response = await product_service.fetchProduct();
    setProducts(response);
    console.log("product data: ", response);
  }

  async function fetchUserById() {
    const userId = localStorage.getItem("userId");
    const response = await user_service.fetchUserById(userId);
    setCurrentUser(response);
    console.log("product data: ", response);
  }

  // Fetch categories
  async function fetchCategories() {
    const response = await category_service.fetchCategory(); // Assuming your service has a fetchCategories method
    setCategories(response);
    console.log("category data: ", response);
  }

  async function fetchProductByCategoryId(categoryId: number) {
    const response = await product_service.fetchProductByCategoryId(categoryId); // Assuming your service has a fetchCategories method
    setProducts(response);
    console.log("product data by category id: ", response);
  }

  function changeCategory(id: number, name: string) {
    fetchProductByCategoryId(id);
    setCurrentCategory(name);
    //console.log("goToProductDetail: ", id);
  }

  function goToProductDetail(id: number) {
    navigation(`/order/${id}`);
    console.log("goToProductDetail: ", id);
  }

  function allCategory() {
    setCurrentCategory("Tất cả");
    fetchProduct();
  }

  useEffect(() => {
    fetchProduct();
    fetchCategories();
    fetchUserById();
  }, []);

  return (
    <div>
      {/* Full-width image at the top */}
      <img
        src={pet5}
        alt="Blank"
        style={{
          width: "100vw",
          height: "760px",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />

      <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
        SHOP/{currentCategory}
      </p>
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
            padding: "0px 20px",
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
            // style={{
            //   all: "unset",
            //   marginBottom: "1rem",
            //   fontSize: "18px",
            //   borderBottom: "1px solid black",
            //   width: "100%",
            // }}
            onClick={() => allCategory()}
          >
            Tất cả
          </button>

          {/* Dynamically render category buttons */}
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <button
                key={index}
                className="p-button"
                // style={{
                //   all: "unset",
                //   marginBottom: "1rem",
                //   fontSize: "18px",
                //   borderBottom: "1px solid black",
                //   width: "100%",
                // }}
                onClick={() =>
                  changeCategory(category.categoryId, category.categoryName)
                }
              >
                {category.categoryName}
              </button>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>

        <div
          style={{
            flex: 1,
            flexDirection: "row",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            height: "500px",
            width: "70%",
            marginLeft: "20px",
          }}
        >
          {products.length > 0 ? (
            products.map((product, index) => (
              <button
                key={index}
                style={{ flex: "1 1 calc(23.33%)", width: "100px" }}
                // style={{
                //   display: "inline-flex", // Makes button wrap tightly around content
                //   alignItems: "center",
                //   justifyContent: "center",
                //   padding: 0,
                //   margin: "10px",
                //   cursor: "pointer",
                //   border: "none", // Remove any default button border
                //   backgroundColor: "transparent", // Optional for aesthetic purposes
                // }}
                className="product-button"
                onClick={() => goToProductDetail(product.productId)}
              >
                <ProductItem
                  name={product.productName}
                  price={product.price}
                  image={product.imageUrl || pet5}
                />
              </button>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
}
