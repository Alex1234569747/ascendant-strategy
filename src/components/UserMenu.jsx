import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import { useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <>
      {user ? (
        <div className="user-menu">
          <button className="user-menu-btn" onClick={() => setShowDropdown(!showDropdown)}>
            <span className="user-avatar">{user.name.charAt(0).toUpperCase()}</span>
            <span className="user-name">{user.name}</span>
            <span className="user-plan">{user.plan}</span>
          </button>
          
          {showDropdown && (
            <div className="user-dropdown">
              <button onClick={() => { navigate('/dashboard'); setShowDropdown(false); }}>
                My Funnels
              </button>
              <button onClick={() => setShowModal(true)}>
                Account
              </button>
              <div className="dropdown-divider" />
              <button onClick={handleLogout} className="logout-btn">
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <button className="nav-cta" onClick={() => setShowModal(true)}>
          Sign In
        </button>
      )}
      
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}