export default class OrderItemService {
  async createCartItem(cartId, productId, quantity) {
    const url = "https://13.215.159.74/api/CartItem";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartId: cartId,
          productId: productId,
          quantity: quantity,
        }),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("error while login: ", error);
    }
  }
}
