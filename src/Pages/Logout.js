import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const nav = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem("token") === null) nav("/Signin");
  }, []);
  const handleclick = async () => {
    await fetch(`http://127.0.0.1:8000/user/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.clear();
        nav("/Signin");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <p>Are you sure you want to Logout</p>
      <button onClick={handleclick}>Logout</button>
    </div>
  );
};

export default Logout;
