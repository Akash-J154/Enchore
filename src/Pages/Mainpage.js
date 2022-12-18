import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from './useContent'
import './Mainpage.css'

const Mainpage = () => {
    let {travel,setTravel}=useContext(useContent)
    const handleuser=()=>{
        setTravel('user')
    }
    const handlefaculty=()=>{
        setTravel('faculty')
    }
    const handlepromoter=()=>{
        setTravel('promoter')
    }
  return (
    <div className='homea'>
      <div className='all'>
        <div className='petti'><div  id='img1'></div><button onClick={handleuser}><Link to='/Signin'>User</Link></button> <br></br></div>
        <div className='petti'><div  id='img3'></div><button onClick={handlefaculty}><Link to='/Signin'>Faculty</Link></button> <br></br></div>
        <div className='petti'><div  id='img2'></div><button onClick={handlepromoter}> <Link to='/Signin'>Promoter</Link></button><br></br></div>
      </div>
    </div>

  )
}

export default Mainpage