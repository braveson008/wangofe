import React, { useState } from "react";
import { register } from "../../../shared/api/authApi";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";

const RegisterForm = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [carPlateNumber, setCarPlateNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await register(email, fullname, carPlateNumber, address);
      onRegisterSuccess(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="text"
        value={fullname}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full name"
      />
      <Input
        type="text"
        value={carPlateNumber}
        onChange={(e) => setCarPlateNumber(e.target.value)}
        placeholder="Car plate"
      />
      <Input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
