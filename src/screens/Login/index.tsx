import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  localStorage.setItem("isLogin", "false");

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("isLogin", "true");
      navigate("/");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Click here to login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
