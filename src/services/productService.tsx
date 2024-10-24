export default class ProductService {
  async fetchProduct() {
    const url = "http://13.215.159.74/api/Product";

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

      const data = await response.json(); // Assuming the API returns JSON data
      console.log("Fetched product:", data);
      return data; // Return the data for further usage
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
}
