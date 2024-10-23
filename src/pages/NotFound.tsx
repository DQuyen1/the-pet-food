import { Link } from "react-router-dom";
import notFoundImage from "../assets/images/image-not-found.png";

export default function NotFound() {
  return (
    <div className="not-found">
      <img src={notFoundImage} alt="not-found" />
      <Link to="/" className="link-home">
        Go Home
      </Link>
    </div>
  );
}
