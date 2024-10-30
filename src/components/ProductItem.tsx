import "../assets/css/ProductItem.css";
import { BsStarFill } from "react-icons/bs";

export default function ProductItem({ name, price, image }) {
  function randomRating() {
    const rating = (Math.random() * 2 + 3).toFixed(0);
    return parseInt(rating);
  }

  function randomSold() {
    const sold = (Math.random() * 2 + 4).toFixed(1);
    return sold;
  }

  const rating = randomRating();

  return (
    <div>
      <img src={image} alt="" className="product-image" />
      <p style={{ width: "220px" }}>{name}</p>
      <p style={{ fontWeight: "bold" }}>{price} đ</p>
      {Array.from({ length: rating }).map((_, index) => (
        <BsStarFill key={index} color="yellow" />
      ))}

      <span>(đã bán {randomSold()}k+)</span>
    </div>
  );
}
