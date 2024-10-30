export default class PaymentDetailService {
  async fetchPaymentDetail(userId) {
    const url = `https://13.215.159.74/api/PaymentDetail/user/${userId}`;

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
      console.log("Fetched product:", data);
      return data; // Return the data for further usage
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
}
