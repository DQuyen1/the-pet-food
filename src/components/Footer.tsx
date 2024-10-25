import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook, BiLogoYoutube, BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import "../assets/css/Footer.css";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
          marginBottom: "2rem",
          // marginTop: "2rem",
        }}
      >
        <div>
          <img src={logo} alt="" />
          {/* <p style={{ color: "#163AEE", fontWeight: "bold" }}>FOOD</p> */}
        </div>
        <div className="container">
          <div className="icon-column">
            <BiPhoneCall
              style={{
                backgroundColor: "#FA4B2F",
                color: "white",
                fontSize: 40,
                borderRadius: "5%",
                padding: "10px 10px",
              }}
            />
          </div>
          <div className="text-column">
            <span>Hotline</span>
            <span>093.1263.080</span>
          </div>
        </div>

        <div className="container">
          <div className="icon-column">
            <CiMail
              style={{
                backgroundColor: "#FA4B2F",
                color: "white",
                fontSize: 40,
                borderRadius: "5%",
                padding: "10px 10px",
              }}
            />
          </div>
          <div className="text-column">
            <span>Email</span>
            <span>thepetfood@gmail.com</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
          <BiLogoFacebook fontSize={30} />
          <BsInstagram fontSize={30} />
          <BiLogoYoutube fontSize={30} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <div className="address-content">
          <p
            style={{
              fontWeight: "bold",
              color: "#F07561",
              marginBottom: "2rem",
            }}
          >
            ADDRESS
          </p>
          <p>
            Office: 6/9 Nguyen Tuyen Street, Binh Trung Tay Ward, Thu Duc City,{" "}
          </p>
          <p>Ho Chi Minh City</p>
          <p>Hotline: 0901234730 - Business license: 0315097789</p>
          <p>Contact</p>
          <p>About The Pet Vietnam</p>
          <p>Feedback</p>
        </div>
        <div className="policy-content">
          <p
            style={{
              fontWeight: "bold",
              color: "#F07561",
              marginBottom: "2rem",
            }}
          >
            POLICIES
          </p>
          <p>Environmental protection policy</p>
          <p>Payment methods</p>
          <p>Consumer privacy policy</p>
          <p>Purchasing Policy</p>
          <p>Return Policy</p>
          <p>Delivery Policy</p>
        </div>
      </div>
    </div>
  );
}
