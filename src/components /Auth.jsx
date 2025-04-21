import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Auth.css";

function Auth() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(""); // State to handle errors
  const navigate = useNavigate(); // Use navigate to redirect

  // Sample credentials for demonstration
  const validEmail = "host_404@gmail.com";
  const validPassword = "hellotest123";

  const handleLogin = () => {
    if (email && pass) {
      if (email === validEmail && pass === validPassword) {
        alert(`Welcome ${email}!`); // Successful login
        setError(""); // Clear any previous error
        navigate("/home"); // Redirect to home page after login
      } else {
        setError("Invalid email or password!"); // Show failure message
      }
    } else {
      setError("Please fill all fields!"); // Error if fields are empty
    }
  };

  return (
    <div className="card-details">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {/* Display error message */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Auth;
