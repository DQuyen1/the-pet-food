import ProductItem from "../components/ProductItem";
import blankImage from "../assets/images/blank.jpg";

export default function Menu() {
  return (
    <div>
      <p>TIN KHUYẾN MÃI</p>
      <h2>Menu Thức Ăn The Petfood Vietnam</h2>
      <p>Danh sách thức ăn tại Thepetfood Vietnam</p>
      <img src={blankImage} alt="" /> <br />
      <img src={blankImage} alt="" />
      {/* Flex container to hold ProductItem components */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping if there are more than 3 items
          justifyContent: "space-between", // Space items evenly
        }}
      >
        <div style={{ flex: "1 1 calc(33.33%)", maxWidth: "33.33%" }}>
          <ProductItem />
        </div>
        <div style={{ flex: "1 1 calc(33.33%)", maxWidth: "33.33%" }}>
          <ProductItem />
        </div>
        <div style={{ flex: "1 1 calc(33.33%)", maxWidth: "33.33%" }}>
          <ProductItem />
        </div>

        <div style={{ flex: "1 1 calc(33.33%)", maxWidth: "33.33%" }}>
          <ProductItem />
        </div>
      </div>
    </div>
  );
}
