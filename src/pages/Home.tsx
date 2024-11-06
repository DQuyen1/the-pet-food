import "../assets/css/Home.css";
import blankImage from "../assets/images/blank.jpg";
import company from "../assets/images/company.jpg";
import how from "../assets/images/1.jpg";
import what from "../assets/images/Web_150DPI-20190307-WeWork-Tabor-Center-Dogs-of-WeWork_Twitter.jpg";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "../assets/css/MainPage.css";
import slide1 from "../assets/images/image (4).png";
import slide2 from "../assets/images/image (6).png";
import slide3 from "../assets/images/pet5.png";
import { useState } from "react";

export default function Home() {
  const images = [slide1, slide2, slide3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="home-container">
      <div className="slider-container">
        <div className="slider-wrapper">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-image"
          />
          <button className="slider-button left-button" onClick={handlePrev}>
            <BsFillArrowLeftCircleFill fontSize={30} />
          </button>
          <button className="slider-button right-button" onClick={handleNext}>
            <BsFillArrowRightCircleFill fontSize={30} />
          </button>
        </div>
      </div>

      <div className="title-description">
        <p style={{ fontWeight: "bold" }}>THE PET FOOD VIETNAM</p>
        <p style={{ fontSize: "19px" }}>
          Công ty TNHH TMDV Thú Cưng Việt Nam (The Pet Viet Nam Trading Services
          Company)
        </p>
        <p style={{ fontSize: "19px" }}>THEPETFOOD.VN</p>
        <p style={{ fontSize: "19px" }}>
          Được thành lập từ năm 2022 , công ty TNHH TMDV Thú Cưng Việt Nam (The
          Pet Viet Nam Trading Services Company) tiền thân là shop bán
        </p>
        <p style={{ fontWeight: "bold", fontSize: "19px" }}>
          hàng online, đã hoạt động bán sỉ và lẻ thức ăn homemade và phụ kiện
          cho chó mèo.
        </p>
      </div>

      <div className="body-content">
        <img
          src="https://res.cloudinary.com/dchov8fes/image/upload/v1729850518/dfqm37bznk2wwchd8fjk.png"
          alt="image"
          className="media-image"
        />
        <p className="description">
          Menu đa dạng trên 20 loại sản phẩm Pate tươi và thực phẩm bổ sung cho
          Chó Mèo ,
        </p>
        <p className="description">
          Là một công ty mới trong lĩnh vực sản xuất thức ăn chó mèo, công ty
          TNHH TMDV The Pateaholic Việt Nam vẫn tự hào là đơn vị có quy mô lớn{" "}
        </p>
        <p className="description">
          nhất, hoạt động chuyên nghiệp nhất, và có doanh thu cao nhất ngành
          Thức ăn tươi chó mèo tại Việt Nam. Với menu đa dạng trên 20 loại Pate
          tươi
        </p>
        <p className="description">
          và thực phẩm bổ sung cho chó mèo, dòng sản phẩm Pate tươi của công ty
          còn đứng đầu thị trường bởi chất lượng đặc trưng từ thịt, cá, bao bì
        </p>
        <p className="description">
          chuyên nghiệp, dịch vụ giao hàng, hậu mãi tốt và hệ thống phân phối
          rộng khắp tại các hệ thống thú y, petshop lớn.
        </p>
        {/* <img src={dog} alt="image" className="media-image" /> <br />
        <img src={cat} alt="image" className="media-image" /> */}
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Arial",
            }}
          >
            <img
              src={company}
              alt="image"
              style={{ marginRight: "12px" }}
              className="triple-image"
            />
            <p
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                fontFamily: "Arial",
              }}
            >
              WHO WE ARE?
            </p>
            <p
              style={{ width: "425px", fontSize: "19px", fontFamily: "Arial" }}
            >
              Hiểu được những lợi ích khi thú cưng được dùng thức ăn tươi, The
              Pet VN chuyên cung cấp các sản phẩm thức ăn tươi độc quyền dành
              cho boss, với chi phí chỉ từ 8.000đ/ ngày.
            </p>
          </div>

          <div>
            <img
              src={how}
              alt="image"
              style={{ marginRight: "12px" }}
              className="triple-image"
            />
            <p
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                fontFamily: "Arial",
              }}
            >
              HOW WE WORK?
            </p>

            <p
              style={{ width: "425px", fontSize: "19px", fontFamily: "Arial" }}
            >
              Công thức độc quyền được bác sĩ thú y chế biến từ thịt ẩm mọng, cá
              tươi, gan béo bùi thơm mới, ninh nhừ trong nhiều giờ với nồi áp
              suất để giữ trọn hương vị đậm đà và cốt thịt giàu dinh dưỡng.
            </p>
          </div>
          <div>
            <img
              src={what}
              alt="image"
              style={{ marginRight: "12px" }}
              className="triple-image"
            />

            <p
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                fontFamily: "Arial",
              }}
            >
              WHAT WE GROW?
            </p>

            <p
              style={{ width: "425px", fontSize: "19px", fontFamily: "Arial" }}
            >
              Sứ mệnh duy nhất là chăm chút cho mỗi bữa ăn của boss. Bởi vì hơn
              cả vật nuôi – là một tình yêu bé nhỏ, cũng cần được yêu thương và
              mỗi bữa ăn không chỉ đơn thuần là nhu cầu thường nhật.
            </p>
          </div>
        </div>
      </div>
      <div className="fullwidth-container">
        <img src={blankImage} alt="image" className="fullwidth-image" />
        <div className="text-center">
          <p
            className="highlighted-p"
            style={{ fontSize: "40px", marginBottom: "20px" }}
          >
            HƠN CẢ VẬT NUÔI <br />
            LÀ MỘT TÌNH YÊU BÉ NHỎ
          </p>
          <p style={{ fontFamily: "Arial" }}>
            Thức ăn tươi cho thú cưng với công thức độc quyền được bác sĩ thú y
            chế biến từ thịt bò gà ẩm mọng, cá tươi mỡ màng, gan béo bùi thơm
            mới, ninh nhừ trong nhiều giờ với nồi áp suất để giữ trọn hương vị
            đậm đà và cốt thịt giàu dinh dưỡng.
          </p>
          <p style={{ fontFamily: "Arial" }}>
            Mỗi một thìa pate thơm lựng phục vụ trong bữa ăn đều được bác sĩ thú
            y chọn lọc tỉ mỉ từ khâu nguyên liệu tươi sống, với nguồn hàng uy
            tín có truy xuất nguồn gốc rõ ràng, đến khâu chế biến giúp giữ trọn
            tinh chất bổ dưỡng, tươi mới không sử dụng bất kỳ chất bảo quản,
            phẩm màu hay chất kích thích nào. Giúp cho Boss nhà bạn khỏe đẹp,
            mượt lông & giảm nguy cơ sỏi thận khi ăn quá nhiều thức ăn khô.
          </p>
          <p style={{ fontFamily: "Arial" }}>
            Để đến được tay khách hàng – từng sản phẩm đều là tâm huyết của cả
            tập thể The Pet Vietnam, với sứ mệnh duy nhất là chăm chút cho mỗi
            bữa ăn của Boss nhà bạn. Bởi vì chúng tôi tin – hơn cả vật nuôi – là
            một tình yêu bé nhỏ, cũng cần được yêu thương và mỗi bữa ăn đều là
            một niềm vui thưởng thức chứ không chỉ đơn thuần là nhu cầu thường
            nhật.
          </p>
        </div>
      </div>
    </div>
  );
}
