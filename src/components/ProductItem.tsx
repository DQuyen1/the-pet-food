import "../assets/css/ProductItem.css";
import { BsStarFill } from "react-icons/bs";
import blankImage from "../assets/images/blank.jpg";

export default function ProductItem() {
  return (
    <div>
      <img src={blankImage} alt="" className="product-image" />
      <p>Product name</p>
      <p>Price</p>
      <BsStarFill color="yellow" />
      <BsStarFill color="yellow" />
      <span>(đã bán 7k+)</span>
    </div>
  );
}
