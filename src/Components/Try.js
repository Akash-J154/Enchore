import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
const Try = () => {
  const [selectedProgramme, setProgramme] = useState([]);
  const Programme = [
    {id:'1', value: "BT", label: "Btech" },
    {id:'2', value: "BR", label: "BArch" },
    {id:'3', value: "DI", label: "Diploma" },
    {id:'4' ,value: "O", label: "Others" },
  ];
  const state = [
    { id:'1', currentid: "1", label: "ffhvbcv" },
    { id: "2", currentid: "1", label: "dddcvbvcb" },
    { id: "3", currentid: "2", label: "gggcvb" },
  ];
  const [states, setState] = useState([]);
  useEffect(() => {
    setProgramme(Programme);
  }, []);
  const handleProgramme = (id) => {
    const dt = state.filter((x) => x.currentid === id);
    setState(dt);
     console.log('states are',states)
  };
  const [bar,setBar]=useState()
const handlechangestate=(changestate)=>{
    setBar(changestate)
    console.log(bar)
}
  return (
    <div>
      <label>Programme</label>
      <select
        className="form-control select-class"
        onChange={(e) => handleProgramme(e.target.value)}
      >
        {selectedProgramme && selectedProgramme !== undefined
          ? selectedProgramme.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>
                  {ctr.label}
                </option>
              );
            })
          : "NO programme"}
      </select>
      <label>State</label>
      <select className="form-control w-32 " onChange={(e)=>handlechangestate(e.target.value)}>
        {states && states !== undefined
          ? states.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>{ctr.label}</option>
               
              );
            })
          : "NO Staet"
          }
         
      </select>
     
    </div>
  );
};

export default Try;
