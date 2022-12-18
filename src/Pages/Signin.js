import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useContent } from "./useContent";
import "./Signin.css";
const Signin = () => {
  let username;
  let {travel,setTravel}=useContext(useContent)
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    let arra = email.split("@");
    username = arra[0];
    console.log(username);
    const user = {
      username: username,
      email: email,
      password: password,
    };

    await fetch(`http://127.0.0.1:8000/user/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.clear();
          localStorage.setItem("token", data.access_token);
          if(travel==='user')
          nav("/Dashboard");
           else if (travel==='faculty')
           nav('/Faculty')
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setEmail("");
        setPassword("");
        if (error.response === 400) setErrors("incorrect username or password");
        else if (error.response.status === 404)
          setErrors("Not found response code");
        else setErrors("Login Failed");
      });
  };

  return (
    <div className="flex flex-row w-screen h-screen">
      <div
        id="pap"
        className="hidden sm:block  sm:visible w-[50%] h-screen bg-[#2C73EB]"
      >
        <img src="logologo.png" alt="" className="w-[200px] pt-10 ml-10 h-auto" />
      </div>
      <div className="w-[100%] sm:w-[50%]  h-screen ">
        <div className=" ml-auto mr-auto block mt-[25%] h-[60vh] p-0 w-[80%] sm:w-[50%] ">
          {errors && <p>{errors}</p>}
          <p className="font-inter font-bold text-2xl">Account Login</p>
          <p className="text-xs p-0">
            If you are already a member you can login with <br></br> your email
            and password
          </p>
          <form onSubmit={handlesubmit} className="flex flex-col pt-10">
            <label>Email address</label>
            <input
              type={"email"}
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1.5px] h-12 rounded-lg w-80 border-[#8a2be2] shadow-md shadow-gray-300"
            ></input>
            <label className="pt-4">Password</label>
            <input
              type={"password"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[1.5px] h-12 w-80 rounded-lg border-[#8a2be2] shadow-md shadow-gray-300"
            ></input>
            <Form.Check
              type="checkbox"
              label="Remember me"
              className="pt-4"
            ></Form.Check>
            <button className=" w-80 text-white rounded-lg bg-[#8a2be2] h-12 mt-5">
              Register Account
            </button>
            <p className="pt-4">
              Don't have an account ?
              <Link to="/Signup" className="text-[#8a2be2]">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;