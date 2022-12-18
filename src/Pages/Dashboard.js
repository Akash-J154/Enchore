import React, { useEffect, useContext } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Homepage from "./Homepage";
// import Scholarships from "./Scholarships";
// import Events from './Events'
import Notificationbar from "../Components/Notificationbar";
import { useContent } from "./useContent";
// import Dropdown from "../Components/Dropdown";
const Dashboard = () => {
  const { name, setName,setLoc } = useContext(useContent);
  const [state, setstate] = useState(true);
  const handleclick = () => {
    setstate(true);
  };
  const handlehomepage = () => {
    setstate(true);
  };
  useEffect(()=>{
    setLoc('home')
  },[])
  useEffect(() => {
   
    (async () => {
      await axios
        .get(`http://127.0.0.1:8000/user/user/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((data) => {
          console.log("success");
          console.log(data);
          if (data.status === 200) {
            setName(data.data.username);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  return (
    <div className="bg-[#dfdfdf] h-full">
      <div className="flex flex-row h-screen z-index-0  ">
        <div className="bg-[#8a2be2] w-[23%] lg:w-[18%] h-screen fixed hidden lg:block">
          <div className="flex flex-row text-white">
            <img
              src="logologo.png"
              alt=""
              className="pt-6 ml-auto mr-auto w-[80%]"
            />
          </div>
          <div className="flex flex-col text-white pl-5 lg:pl-12 pt-16 lg:pt-5 gap-7">
            <div className="flex flex-row w-[100%] ml-auto mr-auto ">
              <img src="home.png" className="w-[24px] h-auto" alt="" />
              <Link to="/Dashboard" className="pl-5" onClick={handlehomepage}>
                Homepage
              </Link>
            </div>

            <div className="flex flex-row ">
              <img
                src="creditpoints.png"
                className="w-[24px] h-[25px]"
                alt=""
              />
              <div className="pl-5">
               <Link to="/Events" > CreditEvents </Link>
              </div>
            </div>

            <div className="flex flex-row">
              <img src="team.png" className="w-[24px] h-auto" alt="" />
              <a href="#About" className="pl-5">
                About
              </a>
            </div>
            <div className="flex flex-row">
              <img src="team.png" className="w-[24px] h-auto" alt="" />
              <Link to="/Logout" className=" text-white pl-5 "> Logout</Link>
                
              
            </div>
          </div>

        
        </div>

        <div
          id="Homepage"
          className="h-screen w-screen lg:w-[62%] overflow-x-hidden  lg:ml-[18%]  "
        >
          <Navbar />
          <div className="mt-16">
            <Homepage />
          </div>
        </div>
        <div className="bg-[#8349ba6e]  h-screen w-[20%] lg:w-[19%] hidden lg:block fixed ml-[80%] rounded-3xl mt-[1%]  ">
          <Notificationbar name={name} state={state} />
          {/*                       leftside                                  */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
