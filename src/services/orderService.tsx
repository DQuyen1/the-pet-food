export default class OrderService {
  async createOrder(userId, total) {
    const url = "http://13.215.159.74/api/Order";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
        body: JSON.stringify({
          userId,
          total,
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
