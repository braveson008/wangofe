import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const Auth = ({ onLoginSuccess }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggle = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      {isRegistering ? (
        <RegisterForm onRegisterSuccess={onLoginSuccess} />
      ) : (
        <LoginForm onLoginSuccess={onLoginSuccess} />
      )}
      <button onClick={handleToggle}>
        {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
      </button>
    </div>
  );
};

export default Auth;
