import "./Events.css";
import Carditems from "../Components/Carditems";
import React, { useEffect, useContext, useState } from "react";
import { useContent } from "./useContent";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Notificationbar from "../Components/Notificationbar";
import Dropdown from "../Components/Dropdown";
import axios from "axios";
const Events = () => {
  const { name, setName, state, setstate, loc, setLoc } =
    useContext(useContent);

  const [result, setresult] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [events, setEvents] = useState([]);
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
        console.log(data); // ************************************************
        setLectures(data.data);
       
         
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
        // console.log(data)//        *******************************
        setEvents(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {

  //   (async () => {
  //     await axios
  //       .get(``, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  //         },
  //       })
  //       .then((data) => {
  //         console.log("success");
  //         console.log(data);
  //         if (data.status === 200) {

  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   })();
  // }, []);

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
    <div className="bg-[#bad2f7] h-screen">
      <div className="flex flex-row h-full z-index-0 ">
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
                <Link to="/Events">
                  Credit Events
                  {/* <Dropdown
                    trigger={<button>Credit Events </button>}
                    menu={[
                      <div className="flex flex-col gap-3 pl-5">
                        <div>
                        <button onClick={handleMenuOne}>
                          Lectures
                        </button></div>
                        <div><button onClick={handleMenuTwo}>
                          Workshop
                        </button></div>
                      </div>,
                    ]}
                  /> */}
                </Link>
                <div className="flex flex-col gap-0 pl-5">
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
        <div className="h-full bg-white lg:bg-[#dfdfdf] pr-[20%] pl-[10%] lg:pl-[15%] overflow-hidden w-screen">
          <Navbar />
          <div className="relative w-[80vh] flex flex-row justify-between top-24 left-20 ">
            <div className="w-[30vh] h-[30vh] bg-white rounded-2xl">
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


            <div className="w-[30vh] h-[30vh] bg-white rounded-2xl">
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
          {/* <hdggdj></hdggdj> ************************************************** */}
          {console.log("events", events)}
          {/* <Carditems /> */}
          <div className=" w-full grid grid-cols-1 lg:grid-cols-4 bg-[]">
            {events &&
              events.map((item) => {
                return (
                  <div className="h-80  mt-20  ml-3 mr-10 ">
                    <Carditems
                      key={item.id}
                      title={item.name}
                      mode={item.mode}
                      date={item.date}
                      link={item.link}
                      provider={item.provider}
                      price={item.price}
                      point={item.point}
                      logo={item.logo}
                    />
                  </div>
                );
              })}
              {/* {loc==='home'?(result.map((index, item) => {
            return(
           <div className="h-80   mt-20  ml-3 mr-10 ">
              <Carditems key={index} />
             </div>)
           })):(loc==='lecture'?(lectures.map((index, item) => {
             return(
             <div className="h-80   mt-20  ml-3 mr-10 ">
              <Carditems key={index} />
             </div>)
           })):(events.map((index, item) => {
             return(
             <div className="h-80   mt-20  ml-3 mr-10 ">
               <Carditems key={index} title={item.name} mode={item.mode} date={item.date} link={item.link} provider={item.provider} price={item.price} point={item.point} logo={item.logo} />
             </div>)
           })))}  */}
          </div>
          {/*  */}
        </div>
        <div className="bg-[#892be275]  h-screen w-[20%] lg:w-[19%] hidden lg:block fixed ml-[80%] rounded-3xl mt-[1%]  ">
          <Notificationbar name={name} state={state} />
          {/*                       leftside                                  */}
        </div>
      </div>
    </div>
  );
};

export default Events;
