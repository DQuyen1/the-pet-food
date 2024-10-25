export default class ProductService {
  async fetchProduct() {
    const url = "https://13.215.159.74/api/Product";

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

  async fetchProductById(id: string) {
    const url = `https://13.215.159.74/api/Product/${id}`;

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
      console.log("Fetched product by id:", data);
      return data; // Return the data for further usage
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  async fetchProductByCategoryId(categoryId: number) {
    const url = `https://13.215.159.74/api/Product/category/${categoryId}`;

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
      console.log("Fetched product by category id:", data);
      return data; // Return the data for further usage
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
}
