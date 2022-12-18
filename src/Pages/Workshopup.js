import React, { useState } from 'react'
import './Workshopup.css'
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Workshopup = () => {
  var formData = new FormData();

  const nav =useNavigate()
  const [model,setModel]=useState()
  const [cate,setCate]=useState()
  const [name,setName]=useState()
  const [banner,setBanner]=useState()
  const [details,setDetails]=useState()
  const [img,setimg]=useState()
  const [price,setPrice]=useState()
  const [points,setPoints]=useState()
  const [brochure,setBrochure]=useState()
  // formData.append("name",name );
  const handleSubmit=async()=>{
    await axios
    .post(
      `http://127.0.0.1:8000/user/student/add/`,
      formData,

      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      }
    )
    .then((data) => {
      console.log(data);
      nav("/Signin");   ///navigate
    })
    .catch((err) => {
      console.log(err);
    });
  }
    const Mode = [
      {id:'1', value: "BT", label: "Online" },
      {id:'2', value: "BR", label: "Offline" },
    ];
    const Category = [
      {id:'1', value: "BT", label: "Computer Science" },
      {id:'2', value: "BR", label: "Civil" },
      {id:'3', value: "DI", label: "Mechanical" },
      {id:'4', value: "O", label: "Electronics" },
    ];
    const handleProgramme = (selectedOption) => {
      
      setModel(selectedOption)
    };
    const handlecate=(selectedOption) => {
      setCate(selectedOption)
    }
    const handleimage = (e) => {
      setimg(e.target.files[0]);
   
    }
   
  return (
    <div className='bg'>
        <div className='nav'>
            <h1>encore</h1>
        <div className='options'>
        
        </div>
        </div>
        <div className='mainbox'>
        <h2>Workshop Details Entry</h2>
        <div className='box'>
        <form onSubmit={handleSubmit}>
        <p>
          <label >Name of Workshop</label>
          <input type={"text"} onChange={(e)=>setName(e.target.value)}/>
        </p>
        <p>
          <label >Banner</label>
          <input type={"text"} onChange={(e)=>setBanner(e.target.value)}/>
        </p>
        <p >
          <label >details</label>
          <input type={'text'} onChange={(e)=>setDetails(e.target.value)}></input>
        </p>
        <p clas>
          <label >Provider</label>
          <input className='pb-3' type="file" onChange={handleimage}/>
        </p>
        <p>
          <label >Price</label>
          <input type={"number"} onChange={(e)=>setPrice(e.target.value)}/>
        </p>
        <p>
          <label>Link</label>
          <input type={"link"}/>
        </p>
        <p>
          <label >Activity points</label>
          <input type={"number"} onChange={(e)=>{setPoints(e.target.value)}}/>
        </p>
        <p>
          <label >Brochure</label>
          <input type={"text"} onChange={(e)=>{setBrochure(e.target.value)}}/>
        </p>
        <p>
          <label >date</label>
          <input type="date"/>
        </p>
        <p>
          <label >Venue</label>
          <input type={"text"}/>
        </p>
        <p>
        <label>Mode</label>
                <Select
                  onChange={handleProgramme}
                  options={Mode}
                  placeholder={"Select Programme"}
              />
        </p>
        <p>
        <label>Category</label>
                <Select

                  onChange={handlecate}
                  options={Category}
                  placeholder={"Select Category"}
              />
        </p>
        <p id='sentbtn' className="full-width">
          <button className='rounded-xl text-white'>Send</button>
        </p>
      </form>
        </div>
        </div>
    </div>
  )
}

export default Workshopup