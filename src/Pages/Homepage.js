import React from "react";

const Homepage = () => {
  return (
    <div className="relative h-[90vh] lg:h-[80vh] bg-white w-[90%] lg:w-[90%] mt-[15vh] ml-auto mr-auto rounded-2xl">
      <div className="lg:w-[80%] h-">
        <p className="text-5xl font-bold pl-4 pt-4">Explore opportunities across the globe to
   align your career interests </p>
        <p className="text-1xl font-thin pl-4 pt-4">Early Talent Engagement Platform with a community of Students, Teachers,and Working Professionals.</p>
        <div className="relative ml-auto mr-auto w-full bg-green-100">
        <img className="absolute h-[40vh] md:h-40 lg:h-72 top-0" alt="" src="mainpic.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
