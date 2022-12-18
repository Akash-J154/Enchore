import React, { useContext } from "react";
import { useState } from "react";
import { useContent } from "../Pages/useContent";
import axios from "axios";
const Navbar = () => {
  let { name, loc } = useContext(useContent);
  const [value, setValue] = useState("/");
  const handleChange = async (e) => {
    setValue(e.target.value);
    await axios
      .get(`http://127.0.0.1:8000/events/${loc}/search?search=${value}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        console.log(data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row h-16 fixed w-[90%] bg-[rgba(186, 210, 247,100)]">
      <p className="font-bold text-lg font-inter pl-20 pt-6 ">Hello {name}</p>
      <div className="relative ">
        <img
          src="search-normal.jpg"
          alt=""
          className="absolute right-60  lg:right-72 top-6 h-6"
        />
        <input
          type={"text"}
          placeholder="Search"
          className="lg:w-80 ml-20 lg:ml-80 mt-5 rounded-md h-8 text-sm pl-10 border-1px"
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
