import "./Events.css";
import Carditems from "../Components/Carditems";
import React, { useEffect, useContext, useState } from "react";
import { useContent } from "./useContent";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Notificationbar from "../Components/Notificationbar";
import axios from "axios";
import Cardobj from "../Components/Cardobj";
const Events = () => {
  const { name,  state,events,setEvents,setLoc,setCategory,interestedcategory,st} =
    useContext(useContent);
    
    function truncate(str) {
    str= str.split(" ").splice(0,10).join(" ");
     str=str+"..."
     return str;
  }
  useEffect(()=> setLoc('events'),[])

    useEffect(()=>{
      ( async()=>{
        try{
     const response = await axios.get('http://127.0.0.1:8000/user/student/details/',{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      
      setCategory(response.data.interest)
      console.log('interest',interestedcategory)    
    }
      catch(error){
        console.log(error)
      }
    }
    )()
    },[])
 
  const handleMenuOne = async () => {
    setLoc("lecture");
    await axios
      .get("http://127.0.0.1:8000/events/lecture/list/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        
        setEvents(data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleMenuTwo = async () => {
    setLoc("workshop");
    await axios
      .get("http://127.0.0.1:8000/events/workshop/list/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
       
        setEvents(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   (async ()=>{await axios.get('http://127.0.0.1:8000/events/list',{
  //     headers:{
  //       'Content-type':'application-json',
  //       Authorization:`Bearer ${window.localStorage.getItem("token")}`
  //     }
  //   })
  //   .then((data)=>{
  //     data &&
  //       setresult(data.data)
  //   })})()
  //   setstate(false)
  // }, []);

  return (
    <div className="h-screen bg-[#dfdfdf] overflow-y-hidden">
      <div className="flex flex-row h-screen z-index-0 ">
        <div className="bg-[#8a2be2] w-[23%] lg:w-[18%] h-screen  hidden lg:block">
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

              <Link to="/Dashboard" className="pl-5">
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
                <Link to="/Events">Credit Events</Link>
                <div className="flex flex-col gap-0 ">
                  <div>
                    <button onClick={handleMenuOne}>Lectures</button>
                  </div>
                  <div>
                    <button onClick={handleMenuTwo}>Workshop</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row">
              <img src="team.png" className="w-[24px] h-auto" alt="" />
              <a href="#About" className="pl-5">
                About
              </a>
            </div>
          </div>

          <div className="mt-10 lg:mt-4 w-[100%] pl-10 lg:pl-20 mr-auto">
            <Link to="/Logout" className=" text-white  ">
              Logout
            </Link>
          </div>
        </div>
        <div  className=" h-full pr-[20%] pl-[10%] lg:pl-[15%]  w-screen lg:w-[62%]   overflow-y-scroll overflow-x-hidden scrollbar-hide ">
          <Navbar />
          <div className="relative w-[80vh] flex flex-col lg:flex-row justify-between top-24 ">
            <div className="w-[30vh] h-[30vh] bg-white rounded-2xl mt-5 ml-10">
              <label className="pl-16">Estimated AP</label>
              <div className=" progress blue ">
                <span className="progress-left">
                  <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar"></span>
                </span>
                <div className="progress-value">35%</div>
              </div>
            </div>

            <div className="w-[30vh] h-[30vh] bg-white rounded-2xl mt-10 lg:mt-5 ml-10">
              <label className="pl-16">Verified AP </label>
              <div className=" progress blue ">
                <span className="progress-left">
                  <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar"></span>
                </span>
                <div className="progress-value">20%</div>
              </div>
            </div>
          </div> 
            <div className="relative lg:right-52 top-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[42vh] gap-y-7 h-full mt-32 ">
              {events &&
              events.map((item) => {
                return (
                  <div className="h-full ">
                    
                    <Cardobj
                      key={item.id}
                      title={item.name}
                      mode={item.mode}
                      date={item.date}
                      link={item.link}
                      provider={item.provider}
                      price={item.price}
                      point={item.point}
                      logo={item.logo}
                      details={truncate(item.details)}
                      speaker={item.speaker}
                      venue={item.venue}
                      category={item.category}

                    />
                  </div>
                );
              })
            }
              
            </div>
        
          
        </div>
        <div className="bg-[#892be275]  h-screen w-[20%]  hidden lg:block rounded-3xl mt-[1%]  ">
          <Notificationbar name={name} state={state} />
          {/*                       leftside                                  */}
        </div>
      </div>
    </div>
  );
};

export default Events;
