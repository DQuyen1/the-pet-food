import '../assets/css/BlogSection.css'

export default function BlogSection({src, content}) {
    return (
        <div className='blog-section'>
            <img src={src} alt="" className="blog-image"/>
            <p className='blog-text'>{content}</p>
        </div>
    
    )
                
                
}