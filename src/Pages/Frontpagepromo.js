import React from 'react'
import { Link } from 'react-router-dom'
const Frontpagepromo = () => {
  return (
    <div>
        <button><Link to='/Workshopup'>Post Workshop</Link></button>
        <button><Link to='/Lectureup'>Post Lecture</Link></button>
        <button><Link to='/Competitionup'>Post Competition</Link></button>
    </div>
  )
}

export default Frontpagepromo