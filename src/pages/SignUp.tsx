import { useState } from "react";

import AuthService from "../services/authService";
import "../assets/css/SignUp.css";

type ErrorType = {
  username?: string;
  email?: string;
  fullname?: string;
  address?: string;
  phone?: string;
  password?: string;
  "confirm-password"?: string;
};

export default function Signup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<ErrorType>({});

  const auth_service = new AuthService();

  const validateField = (name: string, value: string) => {
    let errorMessage = "";

    switch (name) {
      case "username":
      case "fullname":
      case "address":
      case "password":
        if (value.length < 5) {
          errorMessage = `${name} must be at least 5 characters.`;
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          errorMessage = "Email format is invalid.";
        }
        break;
      case "phone":
        if (value.length < 9) {
          errorMessage = "Phone number must be at least 9 characters.";
        }
        break;
      case "confirm-password":
        if (value !== password) {
          errorMessage = "Passwords do not match.";
        }
        break;
      default:
        break;
    }

    // Set or clear the error message for the field
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    // Update state based on input field
    switch (id) {
      case "username":
        setUsername(value);
        validateField("username", value);
        break;
      case "email":
        setEmail(value);
        validateField("email", value);
        break;
      case "fullname":
        setFullname(value);
        validateField("fullname", value);
        break;
      case "address":
        setAddress(value);
        validateField("address", value);
        break;
      case "phone":
        setPhone(value);
        validateField("phone", value);
        break;
      case "password":
        setPassword(value);
        validateField("password", value);
        validateField("confirm-password", confirmPassword); // Check confirm password as well
        break;
      case "confirm-password":
        setConfirmPassword(value);
        validateField("confirm-password", value);
        break;
      default:
        break;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    validateField(id, value); // Validate on blur
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Final validation before submission
    if (Object.values(errors).some((error) => error)) {
      return; // Prevent submission if there are errors
    }

    // Log values to console
    console.log("User Info:", {
      username,
      email,
      fullname,
      address,
      phone,
      password,
    });

    auth_service.signUp(
      username,
      email,
      password,
      fullname,
      address,
      Number(phone)
    );

    // Clear form or perform further actions after successful signup
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only digits (0-9)
    if (/^\d*$/.test(value)) {
      setPhone(value);
      validateField("phone", value); // Validate on change
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Create an Account</h1>

      <form className="signup-form" onSubmit={handleSignup} method="POST">
        {/* {Object.values(errors).some((error) => error) && (
          <p className="error-message">Please correct the errors above.</p>
        )} */}

        <div className="signup-field">
          <label className="signup-label" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="signup-input"
            required
            value={username}
            onChange={handleOnChange} // Validate on change
            onBlur={handleBlur} // Validate on blur
          />
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}
        </div>

        <div className="signup-field">
          <label className="signup-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="signup-input"
            required
            value={email}
            onChange={handleOnChange} // Validate on change
            onBlur={handleBlur} // Validate on blur
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="signup-field">
          <label className="signup-label" htmlFor="fullname">
            Full Name:
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="signup-input"
            required
            value={fullname}
            onChange={handleOnChange} // Validate on change
            onBlur={handleBlur} // Validate on blur
          />
          {errors.fullname && (
            <p className="error-message">{errors.fullname}</p>
          )}
        </div>

        <div className="signup-field">
          <label className="signup-label" htmlFor="address">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="signup-input"
            required
            value={address}
            onChange={handleOnChange} // Validate on change
            onBlur={handleBlur} // Validate on blur
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </div>

        <div className="signup-field">
          <label className="signup-label" htmlFor="phone">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="signup-input"
            required
            value={phone}
            onChange={handlePhoneChange} // Validate on change
            onBlur={handleBlur} // Validate on blur
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <div className="signup-field">
          <label className="signup-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="signup-input"
            required
            value={password}
            onChange={handleOnChange} // Validate on change
            onBlur={handleBlur} // Validate on blur
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>

        <div className="signup-field">
          <label className="signup-label" htmlFor="confirm-password">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="signup-input"
            required
            value={confirmPassword}
            onChange={handleOnChange} // Validate on change
            onBlur={handleBlur} // Validate on blur
          />
          {errors["confirm-password"] && (
            <p className="error-message">{errors["confirm-password"]}</p>
          )}
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <p className="login-prompt">
        Already have an account? <a href="/login">Login here</a>.
      </p>
    </div>
  );
}
