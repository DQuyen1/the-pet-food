export default class AuthService {
  async login(userName, password) {
    const url = "https://13.215.159.74/api/User/login";

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
    const url = "https://13.215.159.74/api/User";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
        body: JSON.stringify({
          userName,
          email,
          password,
          fullName,
          address,
          phone: Number(phone),
        }),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      if (data) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("error while login: ", error);
    }
  }
}
