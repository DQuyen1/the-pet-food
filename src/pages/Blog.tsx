import BlogSection from "../components/BlogSection";
import '../assets/css/BlogSection.css'


export default function Blog() {

    const blogData = [
        { src: 'src/assets/images/blank.jpg', content: 'Cách trị ve chó tại nhà từ thiên nhiên hiệu quả cao' },
        { src: 'src/assets/images/blank.jpg', content: 'Chăm sóc mèo bị tiêu chảy: Lời khuyên hàng đầu từ các chuyên gia' },
        { src: 'src/assets/images/blank.jpg', content: 'Chó bị vim da nên và không nên ăn gì? Hướng dẫn Sen chi tiết' },
        { src: 'src/assets/images/blank.jpg', content: 'Sự Thật Ngỡ Ngàng Lý Do Mèo Ít Uống Nước' },
        { src: 'src/assets/images/blank.jpg', content: 'Sự Thật Ngỡ Ngàng Lý Do Mèo Ít Uống Nước' },
        { src: 'src/assets/images/blank.jpg', content: 'Chó bị chảy nước miếng có tự hết không? Làm sao ngăn ngừa tình trạng này' },
        { src: 'src/assets/images/blank.jpg', content: 'Chăm sóc mèo bị tiêu chảy: Lời khuyên hàng đầu từ các chuyên gia' },
    ]



    return(
        <div className="blog-content">
            {blogData.map((data) => <BlogSection src={data.src} content={data.content} />)}
        </div>
       

    );

}


