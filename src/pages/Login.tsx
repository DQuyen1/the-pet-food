// import { useState } from "react";
// import "../assets/css/Login.css";

// export default function Login() {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   const login = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("log event: ", e);
//   };

//   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.id === "username") {
//       setUsername(e.target.value);
//       console.log(username);
//     } else if (e.target.id === "password") {
//       setPassword(e.target.value);
//       console.log(password);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1 className="login-title">Login Page</h1>

//       {/* New text to encourage account creation */}
//       <p className="account-message">
//         Don't have an account? <a href="/signup">Create one here</a>.
//       </p>

//       <form className="login-form" onSubmit={login} method="POST">
//         <div className="login-field">
//           <label className="login-label" htmlFor="username">
//             Username:
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             className="login-input"
//             required
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="login-field">
//           <label className="login-label" htmlFor="password">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="login-input"
//             required
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";
import "../assets/css/Login.css";
import AuthService from "../services/authService";
import CartService from "../services/cartService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const navigation = useNavigate();

  const auth_service = new AuthService();
  const cart_service = new CartService();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Log in logic (send request to the API)
    console.log("Logging in with:", { username, password });

    try {
      const data = await auth_service.login(username, password);
      localStorage.setItem("userId", JSON.stringify(data.userId));
      const cartData = await cart_service.createCart(data.userId);
      localStorage.setItem("cartId", JSON.stringify(cartData.cartId));
      navigation("/");
    } catch (error) {
      console.log("error while login: ", error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
      if (e.target.value.length >= 3) {
        setErrors((prevErrors) => ({ ...prevErrors, username: undefined })); // Clear error if valid
      }
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
      if (e.target.value.length >= 5) {
        setErrors((prevErrors) => ({ ...prevErrors, password: undefined })); // Clear error if valid
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.id === "username" && username.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is incorrect",
      }));
    } else if (e.target.id === "password" && password.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is incorrect",
      }));
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login Page</h1>

      {/* New text to encourage account creation */}
      <p className="account-message">
        Don't have an account? <a href="/signup">Create one here</a>.
      </p>

      <form className="login-form" onSubmit={login} method="POST">
        <div className="login-field">
          <label className="login-label" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="login-input"
            required
            onChange={handleOnChange}
            onBlur={handleBlur} // Validate on blur
          />
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}{" "}
          {/* Show error */}
        </div>
        <div className="login-field">
          <label className="login-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-input"
            required
            onChange={handleOnChange}
            onBlur={handleBlur} // Validate on blur
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}{" "}
          {/* Show error */}
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
