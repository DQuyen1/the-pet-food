import '../assets/css/Home.css'


export default function Home() {


    return(
        <div className='home-container'>
             <div className='title-description'> 
                <p style={{fontWeight: 'bold'}}>THE PET FOOD VIETNAM</p>
                <p>Công ty TNHH TMDV Thú Cưng Việt Nam (The Pet Viet Nam Trading Services Company)</p>
                <p>THEPETFOOD.VN</p>
                <p>Được thành lập từ năm 2022 , công ty TNHH TMDV Thú Cưng Việt Nam (The Pet Viet Nam Trading Services Company) tiền thân là shop bán</p>
                <p style={{fontWeight: 'bold'}}>hàng online, đã hoạt động bán sỉ và lẻ thức ăn homemade và phụ kiện cho chó mèo.</p>
             </div>

            <div className='body-content'>
            <img src="src/assets/images/blank.jpg" alt="image"  className='media-image'/>

            <p className='description'>Menu đa dạng trên 20 loại sản phẩm Pate tươi và thực phẩm bổ sung cho Chó Mèo, 
            Là một công ty mới trong lĩnh vực sản xuất thức ăn chó mèo, công ty TNHH TMDV Thú Cưng Việt Nam vẫn tự hào là <br /> đơn vị có quy mô lớn nhất, hoạt
            động chuyên nghiệp nhất, và có doanh thu cao nhất ngành Thức ăn tươi chó mèo tại Việt Nam. Với menu đa dạng trên 20 loại Pate tươi và thực 
            phẩm bổ sung cho chó mèo, <br /> dòng sản phẩm Pate tươi của công ty còn đứng đầu thị trường bởi chất lượng đặc trưng từ thịt, cá, bao bì chuyên 
            nghiệp, dịch vụ giao hàng, hậu mãi tốt và hệ thống phân phối rộng khắp tại các hệ thống thú y, <br /> petshop lớn.
            </p>

            <img src="src/assets/images/blank.jpg" alt="image" className='media-image' /> <br />


            <img src="src/assets/images/blank.jpg" alt="image" className='media-image' /><br />


            <div>
                <img src="src/assets/images/blank.jpg" alt="image"  style={{marginRight: '12px'}} className="triple-image"/>
                <img src="src/assets/images/blank.jpg" alt="image" style={{marginRight: '12px'}} className="triple-image"/>
                <img src="src/assets/images/blank.jpg" alt="image"  style={{marginRight: '12px'}} className="triple-image"/>
            </div>
            </div>
            <div className='fullwidth-container'>            
                <img src="src/assets/images/blank.jpg" alt="image"  className='fullwidth-image'/>
                <p className='text-center'>HƠN CẢ VẬT NUÔI <br />
                LÀ MỘT TÌNH YÊU BÉ NHỎ</p>
            </div>
        </div>
    );


}