import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Signin.css";
import { useContent } from "./useContent";
const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState("");
  const nav = useNavigate();
  const start = useRef("");
  const errref = useRef("");
  let {travel,setTravel}=useContext(useContent)
  const user = {
    first_name: name,
    username: username,
    email: email,
    password1: password,
    password2: password2,
  };
  async function post() {
    await fetch(`http://127.0.0.1:8000/user/registration/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        localStorage.setItem("token", data.access_token);
        if(travel==='user')
        nav("/UserDetails");
        else if(travel==='faculty')
        nav('/Fsurvey')
      })
      .catch((error) => {
        console.log(error);
        setName("");
        setEmail("");
        setPassword("");
        setPassword2("");
        if (error.response === 400) setErrors("incorrect username or password");
        else if (error.response.status === 404)
          setErrors("Not found response code");
        else setErrors("Login Failed");
      });
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(username);
    password !== password2
      ? setErrors("both the password are different")
      : post();
  };
  useEffect(() => {
    errref.current.focus();
  }, [errors]);
  useEffect(() => {
    start.current.focus();
  }, []);
  return (
    <div className="flex flex-row w-screen h-screen">
      <div id="pap" className="hidden sm:block sm:visible w-[50%] h-screen  ">
        <img src="logo1.png" alt="" className="w-[200px] pt-10 ml-10 h-auto" />
      </div>

      <div className="w-[100%] sm:w-[50%] h-screen  ">
        <div className="w-[80%] ml-auto mr-auto block mt-[7%] h-[60vh] p-0 sm:w-[50%] ">
          {errors && <p>{errors}</p>}
          <p className="font-inter font-bold text-2xl">Account Signup</p>
          <p className="text-xs p-0">
            Become a member and enjoy exclusive <br></br>promotions
          </p>
          <form
            onSubmit={handlesubmit}
            className="flex flex-col pt-6 text-sm text-gray-400 font-inter"
          >
            <label>Full Name</label>
            <input
              type={"text"}
              value={name}
              ref={start}
              onChange={(e) => setName(e.target.value)}
              className="border-[1.5px] h-12 rounded-lg border-[#8a2be2] shadow-md shadow-gray-300"
            ></input>
            <label className="pt-4">Username</label>
            <input
              type={"text"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-[1.5px] h-12 rounded-lg border-[#8a2be2] shadow-md shadow-gray-300"
            ></input>
            <label className="pt-4">Email Address</label>
            <input
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1.5px] h-12 rounded-lg border-[#8a2be2] shadow-md shadow-gray-300"
            ></input>
            <label className="pt-4">Password</label>
            <input
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[1.5px] h-12 rounded-lg border-[#8a2be2] shadow-md shadow-gray-300"
            ></input>
            <label className="pt-4">Reenter Password</label>
            <input
              type={"password"}
              value={password2}
              ref={errref}
              onChange={(e) => setPassword2(e.target.value)}
              className="border-[1.5px] h-12 rounded-lg border-[#8a2be2] shadow-md shadow-gray-300"
            ></input>
            <label className="pt-4">Date of Birth</label>
            <input
              type={"date"}
              className="border-[1.5px] h-12 rounded-lg border-[#8a2be2] shadow-md shadow-gray-300"
            ></input>
            <button className="text-white rounded-lg bg-[#8a2be2] h-12 mt-5">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;