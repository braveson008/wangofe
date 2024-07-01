import React, { useState } from "react";
import { useStore } from "./app/providers/StoreProvider";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const App = () => {
  const { user, setUser } = useStore();
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  const handleLoginSuccess = (user) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <Home />
      ) : (
        <Auth onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;
