import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logopage = () => {
  const na = useNavigate();
  const greet = () => {
    na("/Signin");
  };
  useEffect(() => {
    setTimeout(greet, 2000);
  });
  return (
    <>
      <div className="bg-[#2C73EB]">
        <img src="Code.gif" alt="" className="h-screen mr-auto ml-auto" />
      </div>
    </>
  );
};

export default Logopage;
