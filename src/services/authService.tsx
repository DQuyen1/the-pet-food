import axios from "axios";

export default class AuthService {
  async login(userName, password) {
    const url = "http://13.215.159.74/api/User/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
        body: JSON.stringify({
          userName,
          password,
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

  async signUp(userName, email, password, fullName, address, phone) {
    const url = "http://13.215.159.74/api/User";

    try {
      const response = await axios.post(url, {
        userName,
        email,
        password,
        fullName,
        address,
        phone,
      });

      // Axios automatically throws an error for non-2xx status codes
      return response.data; // You can access the response data directly
    } catch (error) {
      console.log(
        "Error while signing up: ",
        error.response ? error.response.data : error.message
      );
    }
  }
}
