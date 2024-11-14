// src/components/Logout.js
import React from 'react';
import { removeFromLocalStorage } from './LocalStorageHelper';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    
    removeFromLocalStorage('currentUser');
    
    onLogout();
  };

  return (
    <div className="logout">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
