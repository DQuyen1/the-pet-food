export default class CartItemService {
  async createCartItem(cartId: number, productId: number, quantity: number) {
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
      console.log(data);
      return data;
    } catch (error) {
      console.log("error while create cart item: ", error);
    }
  }

  async updateCartItem(cartItemId: number, quantity: number) {
    const url = `https://13.215.159.74/api/CartItem/${cartItemId}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: quantity,
        }),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("error while create cart item: ", error);
    }
  }
}
