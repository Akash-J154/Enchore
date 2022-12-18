import React from 'react'
import './Fsurvey.css'
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import Faculty from './Faculty';

const Fsurvey = () => {
  const Programme = [
    {id:'1', value: "BT", label: "Computer Science" },
    {id:'2', value: "BR", label: "Civil" },
    {id:'3', value: "DI", label: "Mechanical" },
    {id:'4', value: "O", label: "Electronics" },
  ];
  const handleProgramme = (selectedOption) => {
    // setProgramme(selectedOption.value);
    // console.log( selectedProgramme);
  };
  const nav=useNavigate()
  const handleSubmit=(e)=>{
            e.preventDefault()
            nav('/Signin')
  }
  return (
    <div className='back'>
      <div className='dbox'>
        <div className='image'></div>
       <form onSubmit={handleSubmit}>
           <label>Institution ID<span className='text-red-200'>*</span></label>
           <br></br>
           <input className='pl-3' type="text" placeholder='D45HJGHTKMCE'/>
           <label className='font-thin text-sm text-red-500'><Link to='/'>Register institution</Link></label>
              <div className="drop">
              <div>
                <label>Department</label>
                <Select
                  
              
                  onChange={handleProgramme}
                  options={Programme}
                  placeholder={"Select Programme"}
              />
              </div>
              <label>Upload ID<span className='text-red-200'>*</span></label>
              <input className='upload' type="file" id="myFile" name="filename"></input>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Fsurvey