export default class AuthService {
  async login() {
    const url = "http://13.215.159.74/api/User/login";

    try {
      const response = await fetch(url, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("error while login: ", error);
    }
  }
}
