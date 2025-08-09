import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);

    if (success) {
      navigate("/");
    } else {
      setError("Nieprawidłowy login lub hasło");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <h2 className="login-content">Zaloguj sie</h2>
      <form onSubmit={handleLogin}>
        <input
          className="login-input"
          type="text"
          placeholder="Vitali"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="login-input"
          type="password"
          placeholder="coderslab"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button  className="login-button" type="submit">Zaloguj</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
    </div>
  );
};

export default Login;