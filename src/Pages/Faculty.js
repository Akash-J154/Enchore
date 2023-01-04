import React, { useEffect, useState } from "react";
import "./Faculty.css";
import { Link } from "react-router-dom";

import axios from "axios";
const Faculty = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://127.0.0.1:8000/user/student/list/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((data) => {
          console.log(data);
          setStudent(data.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  return (
    <div className="background">
      <div className="topbar">
        <div className="logoside">
          <img
            className="w-[70%] mr-auto ml-auto relative top-4"
            src="logologo.png"
          ></img>
        </div>
      </div>
      <div className="middlebar ">
        <h1 >Student Details</h1>
        <div className="master  ">
          <table style={{ width: "100%" }}>
            <tr >
              {student.map((item) => {
                return (
                  <tr >
                    <td className="w-32">{item.first_name}</td>
                    <td className="w-32">{item.rollno}</td>
                    <td className="w-32">{item.clas}</td>
                    <td className="w-56"><Link
                     to= {{pathname:"/Sanalysis", state: { names:'kau'}}}
                      
                    >
                      Details
                    </Link></td>
                  </tr>
                );
              })}
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
