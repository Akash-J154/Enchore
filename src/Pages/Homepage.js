import React from "react";

const Homepage = () => {
  return (
    <div className="relative h-96 lg:h-[85vh] bg-white w-[90%] lg:w-[90%] mt-[15vh] ml-auto mr-auto rounded-2xl">
      <div className="lg:w-[80%] h-">
        <p className="text-5xl font-bold pl-4 pt-4">Explore opportunities across the globe to
   align your career interests </p>
        <p className="text-1xl font-thin pl-4 pt-4">Early Talent Engagement Platform with a community of Students, Teachers,and Working Professionals.</p>
        <div className="relative ml-auto mr-auto w-full ">
        <img className="absolute md:h-56 lg:h-80 top-0" alt="" src="mainpic.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
