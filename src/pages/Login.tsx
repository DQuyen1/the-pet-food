// import { useState } from "react";
// import "../assets/css/Login.css";

// export default function Login() {
//   //const data_service = new DataService();
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   const login = (e: React.FormEvent<HTMLFormElement>) => {
//     // data_service.get('/user', `username=${username}&password=${password}`);

//     e.preventDefault();
//     console.log("log event: ", e);
//   };

//   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.id === "username") {
//       setUsername(e.target.value);
//       console.log("username: ", username);
//     } else if (e.target.id === "password") {
//       setPassword(e.target.value);
//       console.log("password: ", password);
//     }
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={login} method="POST">
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             required
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             required
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import "../assets/css/Login.css";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("log event: ", e);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
      console.log(username);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
      console.log(password);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login Page</h1>
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
          />
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
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
