export default class CartService {
  async getCartByUserId(userId) {
    const url = `http://13.215.159.74/api/Cart/${userId}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      // console.log("Fetched product:", data);
      return data; // Return the data for further usage
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  async createCart(userId: number) {
    const url = "http://13.215.159.74/api/Cart";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
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
