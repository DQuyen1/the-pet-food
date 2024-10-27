import BlogSection from "../components/BlogSection";
import "../assets/css/BlogSection.css";
import dog1 from "../assets/images/thuoc-tam-giup-tri-cac-loai-ve-cho.jpg";
import cat1 from "../assets/images/Scottish-fold-cat.webp";
import dog2 from "../assets/images/Golden-Retriever.jpg";
import cat2 from "../assets/images/images.jpg";
import dog3 from "../assets/images/dog_hyperventilating_2_1024x1024.webp";
import cat3 from "../assets/images/image-79322-800.jpg";

export default function Blog() {
  const blogData = [
    {
      src: dog1,
      content: "Cách trị ve chó tại nhà từ thiên nhiên hiệu quả cao",
    },
    {
      src: cat1,
      content:
        "Chăm sóc mèo bị tiêu chảy: Lời khuyên hàng đầu từ các chuyên gia",
    },
    {
      src: dog2,
      content: "Chó bị viêm da nên và không nên ăn gì? Hướng dẫn Sen chi tiết",
    },
    { src: cat3, content: "Sự Thật Ngỡ Ngàng Lý Do Mèo Ít Uống Nước" },
    {
      src: cat2,
      content:
        "Chó bị chảy nước miếng có tự hết không? Làm sao ngăn ngừa tình trạng này",
    },
    {
      src: dog3,
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
