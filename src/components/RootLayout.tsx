import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../assets/css/RootLayout.css";

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
