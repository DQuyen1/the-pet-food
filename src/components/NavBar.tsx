import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import "../assets/css/NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
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
      <h3 className="app-name" style={{ flexGrow: 1 }}>
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
        <NavLink to="/" style={{ textDecoration: "none" }}>
          {" "}
          GIỚI THIỆU
        </NavLink>
        <NavLink to="/shop" style={{ textDecoration: "none" }}>
          SHOP
        </NavLink>
        <NavLink to="/menu" style={{ textDecoration: "none" }}>
          MENU THỨC ĂN
        </NavLink>
        <NavLink to="/blog" style={{ textDecoration: "none" }}>
          BLOG
        </NavLink>
        <NavLink to="/contact" style={{ textDecoration: "none" }}>
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
        <AiOutlineUser className="user-icon" />
        <BiCart className="cart-icon" />
      </div>
    </div>
  );
}
