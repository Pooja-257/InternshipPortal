import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css'; // Make sure this CSS file exists

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Interné</h1>
        <div className="navbar-links">
          <Link to="/">Home</Link>

          {!isLoggedIn && (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}

          {isLoggedIn && (
            <>
              <Link to="/apply">Apply</Link>
              <Link to="/upload">Upload</Link>
            </>
          )}

          {/* Logout Button always visible */}
          <button
            onClick={handleLogout}
            className="logout-btn"
            disabled={!isLoggedIn}
            title={!isLoggedIn ? "You are not logged in" : "Logout"}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}