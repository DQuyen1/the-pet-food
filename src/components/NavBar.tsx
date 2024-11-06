import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import "../assets/css/NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  });

  const goToCart = () => {
    navigate("/cart");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
      }}
    >
      <h3
        className="app-name"
        style={{ flexGrow: 1 }}
        onClick={() => navigate("/main")}
      >
        <span className="line-one">Pate-aholic</span>

        {/* <span className="line-two">FOOD</span> */}
      </h3>
      <div
        className="navbar-content"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexGrow: 8,
        }}
      >
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "normal",
            fontFamily: "Arial",
          }}
        >
          {" "}
          GIỚI THIỆU
        </NavLink>
        <NavLink
          to="/shop"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "normal",
            fontFamily: "Arial",
          }}
        >
          SHOP
        </NavLink>
        <NavLink
          to="/menu"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "normal",
            fontFamily: "Arial",
          }}
        >
          MENU THỨC ĂN
        </NavLink>
        <NavLink
          to="/blog"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "normal",
            fontFamily: "Arial",
          }}
        >
          BLOG
        </NavLink>
        <NavLink
          to="/contact"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "normal",
            fontFamily: "Arial",
          }}
        >
          LIÊN HỆ
        </NavLink>
      </div>
      <div
        className="navbar-icon"
        style={{
          marginRight: "0rem",
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <CiSearch className="search-icon" />
        {userId ? (
          <AiOutlineUser
            className="user-icon"
            onClick={() => goToProfile()}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <span
            style={{
              cursor: "pointer",
              alignContent: "center",
              fontWeight: "bold",
              fontSize: "18px",
              fontFamily: "Arial",
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        )}
        <BiCart
          className="cart-icon"
          onClick={() => goToCart()}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
