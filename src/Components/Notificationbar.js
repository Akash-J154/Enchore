import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Carditems from './Carditems'
import "./Notification.css";
import axios from "axios";
import { useContent } from "../Pages/useContent";
const Notificationbar = ({ name, state }) => {
  // const [result, setresult] = useState([]);
  let {st,events,setEvents,loc}=useContext(useContent)
 
  const [userinfo, setUserInfo] = useState({
    fields: [],
    response: [],
  });
  const [card,setCardDetails]=useState([])
  
  useEffect(()=>{
    (async()=>{
      await axios.get("http://127.0.0.1:8000/events/workshop/list/",{
    headers:{
      "Content-Type": "multipart/formdata",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    }

  })
  .then((data)=>{
    console.log('inside notification',data)
        setEvents(data.data)
       
  })
  .catch((err)=>{
    console.log(err)
  })

    })()
  // setCardDetails([{'id':1,'cate':'java'},
  // {'id':2,'cate':'java'},
  // {'id':3,'cate':'ml'}])

  },[]) 
  // ***************************************************just for training purpose***************************************8*
const handleClick=async()=>{
 
 
    let dd=['java','ml']   
    st= events.filter((ret)=>{if(ret?.cate?.includes(dd[0])||ret?.cate?.includes(dd[1]))
    return ret})
   console.log('filtered',st);
}

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { fields } = userinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        fields: [...fields, value],
        response: [...fields, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        fields: fields.filter((e) => e !== value),
        response: fields.filter((e) => e !== value),
      });
    }
  };
  const [check, setcheck] = useState(false);
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
            {console.log('cardoutside',card)}
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
