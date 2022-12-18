import React from 'react' 
import './Sanalysis.css'
import { Link } from 'react-router-dom';
const Sanalysis = ({nam,roll,cla}) => {
  return (
    
    <div className='background'>
      <div className='topbar'>
        {console.log(nam)}
        <div className='logoside'>
          <img className='w-[70%] mr-auto ml-auto relative top-4' src='logologo.png'></img>
          <div className='idspace'>
            <div className='photo'>

            </div>
            <label className='text-2xl'>{nam}</label>
            <label>ComputerScience</label>
            <label className='text-lg'>R5{cla} B20CS{cla}{roll}</label>
            <label className='text-xs'>damodardas@gmail.com</label>
          </div>
        </div>
      </div>
      <div className='middlebar'>
        <h1>Student Details</h1>
        <div className='master'>
<table>
  <tr className="sticky-table-headers">
    <th>Event</th>
    <th>Points</th>
    <th>Certificate</th>
    <th><label>Verified</label></th>
    <th>Submit</th>
  </tr>
  <tr>
    <td>NIT Hackathon</td>
    <td>30</td>
    <td><button>Downlord</button></td>
    <td><input type="checkbox"></input></td>
    <td><button>PASS</button></td>
  </tr>
  
  <tr>
    <td>Python Workshop</td>
    <td>15</td>
    <td><button>Downlord</button></td>
    <td><input type="checkbox"></input></td>
    <td><button>PASS</button></td>
  </tr>
  <tr>
    <td>Thathva lecture</td>
    <td>10</td>
    <td><button>Downlord</button></td>
    <td><input type="checkbox"></input></td>
    <td><button>PASS</button></td>
  </tr>
  <tr>
    <td>Python Workshop</td>
    <td>15</td>
    <td><button>Downlord</button></td>
    <td><input type="checkbox"></input></td>
    <td><button>PASS</button></td>
  </tr>
  <tr>
    <td>Thathva lecture</td>
    <td>10</td>
    <td><button>Downlord</button></td>
    <td><input type="checkbox"></input></td>
    <td><button>PASS</button></td>
  </tr>
  <tr>
    <td>Python Workshop</td>
    <td>15</td>
    <td><button>Downlord</button></td>
    <td><input type="checkbox"></input></td>
    <td><button>PASS</button></td>
  </tr>
  <tr>
    <td>Thathva lecture</td>
    <td>10</td>
    <td><button>Downlord</button></td>
    <td><input type="checkbox"></input></td>
    <td><button>PASS</button></td>
  </tr>
  <tr>
    <td>Python Workshop</td>
    <td>15</td>
    <td><button>Downlord</button></td>
    <td><input type="checkbox"></input></td>
    <td><button>PASS</button></td>
  </tr>
  <tr>
    <td>Thathva lecture</td>
    <td>10</td>
    <td><button>Downlord</button></td>
    <td><input type="checkbox"></input></td>
    <td><button>PASS</button></td>
  </tr>
  <tr>
    <td>Python Workshop</td>
    <td>15</td>
    <td><button>Downlord</button></td>
    <td><input type="checkbox"></input></td>
    <td><button>PASS</button></td>
  </tr>
</table>

        </div>
      </div>
    </div>
  )
}

export default Sanalysis