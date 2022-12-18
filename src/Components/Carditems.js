import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const Carditems = ({
  title,
  mode,
  date,
  link,
  provider,
  price,
  point,
  logo,
}) => {
  const [state, setState] = useState("none");
  const [cardstate, setCardstate] = useState("grid");
  const handleClick = () => {
    setState("flex");
    setCardstate("none");
  };
  const [img, setimg] = useState("avata.png");
  const handleimage = (e) => {
    setimg(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div>
      <div
        className=" lg:ml-20 mt-10 lg:mt-5   "
        style={{ display: `${cardstate}` }}
      >
        <Card className="border-2 w-[20rem] h-[24rem] lg:h-[20rem]  lg:w-[10rem] ">
          <Card.Img
            variant="top"
            src={logo}
            className="lg:w-[10rem] h-[15rem] lg:h-[10rem]"
          />
          <Card.Body className="flex flex-col">
            <Card.Title>{title}</Card.Title>
            <p>{date}</p>
            <p>{mode}</p>
            <a href={link}>Co to there site</a>
            <p>{provider}</p>
            <button onClick={handleClick}>Apply</button>
          </Card.Body>
        </Card>
      </div>

      <div className='bg-white h-80 w-[80%] mt-5 ml-auto  mr-auto' style={{display:`${state}`,flexDirection:'row'}}>
       <div className='w-[50%]  bg-blue-100'><img src='scholar.png' alt='' className=' h-80'/></div> 
       <div className='w-[50%]  '>
          
        <label>Upload Certificate</label>
        <input
              type={"file"}
              src={img}
              onChange={handleimage}
              
              className="pl-4 pt-5"
            ></input>
        <button>Apply</button>
       </div>
    </div>
    </div>
  );
};

export default Carditems;
