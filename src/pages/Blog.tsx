import BlogSection from "../components/BlogSection";
import "../assets/css/BlogSection.css";
import blankImage from "../assets/images/blank.jpg";

export default function Blog() {
  const blogData = [
    {
      src: blankImage,
      content: "Cách trị ve chó tại nhà từ thiên nhiên hiệu quả cao",
    },
    {
      src: blankImage,
      content:
        "Chăm sóc mèo bị tiêu chảy: Lời khuyên hàng đầu từ các chuyên gia",
    },
    {
      src: blankImage,
      content: "Chó bị vim da nên và không nên ăn gì? Hướng dẫn Sen chi tiết",
    },
    { src: blankImage, content: "Sự Thật Ngỡ Ngàng Lý Do Mèo Ít Uống Nước" },
    { src: blankImage, content: "Sự Thật Ngỡ Ngàng Lý Do Mèo Ít Uống Nước" },
    {
      src: blankImage,
      content:
        "Chó bị chảy nước miếng có tự hết không? Làm sao ngăn ngừa tình trạng này",
    },
    {
      src: blankImage,
      content:
        "Chăm sóc mèo bị tiêu chảy: Lời khuyên hàng đầu từ các chuyên gia",
    },
  ];

  return (
    <div className="blog-content">
      {blogData.map((data) => (
        <BlogSection src={data.src} content={data.content} />
      ))}
    </div>
  );
}
