import React, { useState } from "react";
import { login } from "../../../shared/api/authApi";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [carPlateNumber, setCarPlateNumber] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, carPlateNumber);
      onLoginSuccess(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="text"
        value={carPlateNumber}
        onChange={(e) => setCarPlateNumber(e.target.value)}
        placeholder="Car plate number"
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
