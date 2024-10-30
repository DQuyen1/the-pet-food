import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import ProductService from "../services/productService";
import pet5 from "../assets/images/pet5.png"; // Import the image
import CategoryService from "../services/categoryService";
import "../assets/css/Shop.css";
import { useNavigate } from "react-router-dom";
import UserService from "../services/userService";
import Pagination from "@mui/material/Pagination";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("Tất cả");
  const product_service = new ProductService();
  const category_service = new CategoryService();
  const user_service = new UserService();
  const navigation = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

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

  function changeCategory(id, name) {
    fetchProductByCategoryId(id);
    setCurrentCategory(name);
    setCurrentPage(1); // Reset to first page when category changes
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

  function goToProductDetail(id: number) {
    navigation(`/order/${id}`);
    console.log("goToProductDetail: ", id);
  }

  function allCategory() {
    setCurrentCategory("Tất cả");
    fetchProduct();
    console.log(currentUser);
  }

  // const handlePageChange = (event, value) => {
  //     setCurrentPage(value);
  //   };

  // const displayedProducts = products.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  const displayedProducts =
    products && products.length > 0
      ? products.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : [];

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

      <p style={{ marginLeft: "16rem", marginBottom: "20px" }}>
        SHOP/{currentCategory}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // height: "55vh"
        }}
      >
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
            marginLeft: "15rem",
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

          <button className="p-button" onClick={() => allCategory()}>
            Tất cả
          </button>

          {categories.length > 0 ? (
            categories.map((category, index) => (
              <button
                key={index}
                className="p-button"
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
            flexWrap: "wrap",
            marginLeft: "20px",
            maxWidth: "1100px",
          }}
        >
          {displayedProducts && displayedProducts.length > 0 ? (
            displayedProducts.map((product, index) => (
              <button
                key={index}
                style={{
                  // flex: "1 1 220px",
                  // maxWidth: "220px",
                  // margin: "10px", // Adds even spacing around each item
                  // boxSizing: "border-box",

                  flex: "1 1 220px", // Ensures each item occupies 25% width, accounting for margins
                  maxWidth: "220px",
                  margin: "0px 10px", // Controls top/bottom spacing
                  boxSizing: "border-box",
                }}
                className="product-button"
                onClick={() => goToProductDetail(product.productId)}
              >
                <ProductItem
                  name={product.productName}
                  price={product.price}
                  image={product.imgUrl || pet5}
                />
              </button>
            ))
          ) : (
            <div style={{ justifyItems: "center", width: "100%" }}>
              <p>Don't have any product yet</p>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <Pagination
          count={products ? Math.ceil(products.length / itemsPerPage) : 1}
          page={currentPage}
          onChange={(event, value) => {
            console.log(event);
            setCurrentPage(value);
          }}
          variant="outlined"
        />
      </div>
    </div>
  );
}
