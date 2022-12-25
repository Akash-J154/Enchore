import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./Notification.css";
import axios from "axios";
import { useContent } from "../Pages/useContent";
const Notificationbar = ({ name, state }) => {
  
  let {events,setEvents,loc,interestedcategory}=useContext(useContent)
  

 
  // ***************************************************just for training purpose***************************************8*
const handleClick=async()=>{
    // let dd=['java','ml']  
    let filteredEvents=[];
filteredEvents = events.filter((ret)=>{if(ret?.category?.includes(interestedcategory[0])||ret?.category?.includes(interestedcategory[1]))
  return ret}) 
   console.log('filtered',events);
}
 

  const [date, setDate] = useState(new Date());
  
  const myEventsList = [
    {
      title: "my event",
      allDay: true,
      start: new Date(2022, 10, 28),
      end: new Date(2022, 10, 28),
    },
  ];
 
  return (
    <div className="mt-5 ml-2 mr-2 ">
      <div className="flex flex-row">
        <img src="bell.jpg" alt="" className="h-9 lg:h-10 rounded-xl " />
        <div className=" w-48 text-right pr-2">
          <p className="lg:pl-24 text-sm lg:text-base pt-2">{name}</p>
        </div>
        <div id="avatar" className="rounded-3xl bg-white w-10 h-10 "></div>
      </div>
      <div className="calendar-container mt-5 h">
        <Calendar
          onChange={setDate}
          value={date}
          labels={myEventsList}
          className="rounded-2xl font-inter "
        />
      </div>
      {loc !== 'home' ? (
        <div className="bg-white h-80  ml-auto mr-auto mt-5 rounded-3xl flex flex-col pl-3">
          
          {/* {result.map((item, index) => {
            return <p key={index}>{item.title}</p>;
          })} */}


            <button onClick={handleClick}>Your Interested Fields Filter</button>
           
        </div>
      ) : (
        <div className="bg-white h-80  ml-auto mr-auto mt-5 rounded-3xl flex flex-col pl-3">
          <p className="ml-auto mr-auto font-semibold">Dods</p>
          <hr className="w-32 ml-auto mr-auto"></hr>
          <div className="mt-10  flex flex-col gap-3">
          </div>
        </div>
      )}
    </div>
  );
};

export default Notificationbar;
