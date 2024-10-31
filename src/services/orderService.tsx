export default class OrderService {
  async fetchAllOrders() {
    const url = `https://13.215.159.74/api/Order`;

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

      return data; // Return the data for further usage
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  async fetchOrderByOrderId(orderId) {
    const url = `https://13.215.159.74/api/Order/${orderId}`;

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

      return data; // Return the data for further usage
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  async createOrder(cartId) {
    const url = `https://13.215.159.74/api/Order/cart?cartId=${cartId}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
        // body: JSON.stringify({
        //   userId,
        //   total,
        // }),
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

  async fetchOrdersByUserId(userId) {
    const url = `https://13.215.159.74/api/Order/user/${userId}`;

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

      return data; // Return the data for further usage
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  async fetchOrderDetailsByOrderId(orderId) {
    const url = `https://13.215.159.74/api/OrderItem/ByOrder/${orderId}`;

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
      console.log("Order detail: ", data);

      return data; // Return the data for further usage
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
}
