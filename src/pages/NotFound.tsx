import { Link } from 'react-router-dom';

export default function NotFound(){

    return (
  <div className="not-found">
    <img
      src="src/assets/images/image-not-found.png"
      alt="not-found"
    />
    <Link to="/" className="link-home">
      Go Home
    </Link>
  </div>
    )
};


