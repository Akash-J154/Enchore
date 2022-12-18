import React, { useEffect,useState } from 'react' 
import './Faculty.css'
import { Link } from 'react-router-dom';

import axios from 'axios';
const Faculty = () => {
    const [student,setStudent]=useState([])
    
    useEffect(()=>{
        (async()=>{
                await axios.get('http://127.0.0.1:8000/user/student/list/',{
                    headers:{
                        "Content-Type": "application/json",
             Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                    }
                })
                .then((data)=>{
                    console.log(data)
                    setStudent(data.data)})
                .catch((err)=>console.log(err))
        })()
    },[])
  return (
    <div className='background'>
      <div className='topbar'>
        <div className='logoside'>
          <img className='w-[70%] mr-auto ml-auto relative top-4' src='logologo.png'></img>
        </div>
      </div>
      <div className='middlebar'>
        <h1>Student Details</h1>
        <div className='master'>
<div className='flex flex-row  '>
  <div className="flex flex-col border-2 w-[70%]">
  {student.map((item)=>{
    return(
        <div className='flex flex-row gap-56'>
        <p>{item.first_name}</p>
    <p>{item.rollno}</p>
    <p>{item.clas}</p>
    <Link to='/Sanalysis' nam={item.first_name} roll={item.rollno} cla={item.clas}>Details</Link>
    </div>
    )
  })}
  </div>
  
  
</div>

        </div>
      </div>
    </div>
  )
}

export default Faculty