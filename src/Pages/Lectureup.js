import React from 'react'
import './Lectureup.css'
import Select from "react-select";
import { Link } from 'react-router-dom';

const Lectureup = () => {
    const mode = [
      {id:'1', value: "BT", label: "Online" },
      {id:'2', value: "BR", label: "Offline" },
    ];
    const handleProgramme = (selectedOption) => {
      // setProgramme(selectedOption.value);
      // console.log( selectedProgramme);
    };
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
        <form action="">
        <p>
          <label for="">Name of Lecture</label>
          <input type="text"/>
        </p>
        <p>
          <label for="">Provider</label>
          <input type="text"/>
        </p>
        <p class="">
          <label for="">details</label>
          <input name="" id="" cols="0" rows="2"></input>
        </p>
        <p clas>
          <label for="">Provider</label>
          <input className='pb-3' type="file"/>
        </p>
        <p>
          <label for="">Price</label>
          <input type="text"/>
        </p>
        <p>
          <label for="">Link</label>
          <input type="link"/>
        </p>
        <p>
          <label for="">Activity points</label>
          <input type="Number"/>
        </p>
        <p>
          <label for="">Brochure</label>
          <input type="text"/>
        </p>
        <p>
          <label for="">date</label>
          <input type="text"/>
        </p>
        <p>
          <label for="">Venue</label>
          <input type="text"/>
        </p>
        <p>
        <label>Mode</label>
                <Select
                  
              
                  onChange={handleProgramme}
                  options={mode}
                  placeholder={"Select Programme"}
              />
        </p>
        <p>
          <label for="">Speaker</label>
          <input type="text"/>
        </p>
        <p id='sentbtn' class="full-width">
          <button className='rounded-xl text-white'>Send</button>
        </p>
      </form>
        </div>
        </div>
    </div>
  )
}

export default Lectureup