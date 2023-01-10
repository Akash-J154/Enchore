import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { useContent } from '../Pages/useContent';
const Cardobj = ({ title,
  mode,
  date,
  link,
  provider,
  price,
  point,
  logo,details,
speaker,venue,category}) => {
  const [state, setState] = useState("none");
  const [cardstate, setCardstate] = useState("grid");
  const {creditpoints,setCreditpoints}=useContext(useContent);
  const handleClick = () => {
    setState("flex");
    setCardstate("none");
  };
  const [img, setimg] = useState("avata.png");
  const handleimage = (e) => {
    setimg(URL.createObjectURL(e.target.files[0]));
  };
  const handleApply=async()=>{
    setState("none");
    setCardstate("grid");
    
    try{
    const res= await axios.put('http://127.0.0.1:8000/user/student/addActivity/',
    {
      // 'point':point
      
      "valid":0,
      "points":20
      
    

    },{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
    console.log(res)
    setCreditpoints(res.data.point)  
  }
  catch(error){
    console.log(error)
  }
  }
  return (

  <div>    

    <div className=" w-[41vh]  " style={{ display: `${cardstate}` }}>
  <div className="ml-auto mr-auto ">
    <div >
     
      <div className="flex flex-col bg-white border rounded-lg overflow-hidden w-72 ml-auto mr-auto h-[80vh]">
        <a href={link} className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
          <img src={logo} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        </a>

        <div className="flex flex-col flex-1 p-4 sm:p-6">
          <h2 className="text-gray-800 text-lg font-semibold mb-2">{title}</h2>
          <h2 className="text-gray-800 text-lg font-semibold mb-2">
            <a href={link} className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">Go to their site</a>
          </h2>

          <p className="text-gray-500 mb-8">{details}</p>
          <p>{mode}</p>
          <p>{point}</p>
          <p>${price}</p>
          <p>{provider}</p>
          <p>{venue}</p>
          <button onClick={handleClick}>Add Certificate</button>
          <div className="flex justify-between items-end mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <span className="block text-indigo-500">{speaker}</span>
                <span className="block text-gray-400 text-sm">{date}</span>
              </div>
            </div>

            <span className="text-gray-500 text-sm border rounded px-2 py-1">{category}</span>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      <div className='bg-white h-80 w-[50%] mt-5 ml-auto  mr-auto' style={{display:`${state}`,flexDirection:'row'}}>
       <div className='w-[50%]  bg-blue-100'><img src='scholar.png' alt='' /></div> 
       <div className='w-[50%]  '>
          
        <label>Upload Certificate</label>
        <input
              type={"file"}
              src={img}
              onChange={handleimage}
              
              className="pl-4 pt-5"
            ></input>
        <button onClick={handleApply}>Apply</button>
       </div>
    </div>
      </div>
  )
}

export default Cardobj