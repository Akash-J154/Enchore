import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Carditems from './Carditems'
import "./Notification.css";
import axios from "axios";
import { useContent } from "../Pages/useContent";
const Notificationbar = ({ name, state }) => {
  const [result, setresult] = useState([]);
  let {filtred,setFiltered}=useContext(useContent)
  const [nam,setNam]=useState([])
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
    console.log(data)
        setCardDetails(data.data)
        console.log('card',card)
  })
  .catch((err)=>{
    console.log(err)
  })

    })()
  },[])
const handleClick=async()=>{
  // await axios.get("http://127.0.0.1:8000/events/workshop/list/",{
  //   headers:{
  //     "Content-Type": "multipart/formdata",
  //     Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  //   }

  // })
  // .then((data)=>{
  //   console.log(data)
  //       setCardDetails(data.data)
  //       console.log('card',card)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
 
        console.log('card inside function',card)
      card.map((item)=>setNam(item.name))

        console.log(nam,nam[0])
   let st= card.filter((ret)=>{if(ret?.name?.includes(nam[0]))
    return ret})
  console.log(st)
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
  // useEffect(() => {
  //   axios
  //     .get("", {
  //       headers: {
  //         "Content-Type": "multipart/formdata",
  //       },
  //     })
  //     .then((data) => {
  //       setresult(data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
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
      {state === true ? (
        <div className="bg-white h-80  ml-auto mr-auto mt-5 rounded-3xl flex flex-col pl-3">
          
          {/* {result.map((item, index) => {
            return <p key={index}>{item.title}</p>;
          })} */}


            <button onClick={handleClick}>Your Interested Fields Filter</button>
            {console.log('cardoutside',card)}
        </div>
      ) : (
        <div className="bg-white h-80  ml-auto mr-auto mt-5 rounded-3xl flex flex-col pl-3">
          <p className="ml-auto mr-auto font-semibold">Filter</p>
          <hr className="w-56 ml-auto mr-auto"></hr>
          <div className="mt-10  flex flex-col gap-3">
           
            {/* <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input type="checkbox"  className="checkbox" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input type="checkbox"  className="checkbox" />
              </label>
            </div> */}
            {/* {console.log(check)} */}
            {/* <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input type="checkbox"  className="checkbox" defaultChecked={'true'} />
                {console.log('current status' + check)}
              </label>
            </div> */}
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Notificationbar;
