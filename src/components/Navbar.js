import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      {!user && <Link to="/login">Login</Link>} |{" "}
      {!user && <Link to="/register">Register</Link>} |{" "}
      {user && <Link to="/dashboard">Dashboard</Link>} |{" "}
      {user?.role === "admin" && <Link to="/admin">Admin</Link>}
      {user && (
        <button onClick={logout} style={{ marginLeft: "20px" }}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
