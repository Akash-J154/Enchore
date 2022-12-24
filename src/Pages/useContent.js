import { useState } from "react";
import React from "react";
export const useContent = React.createContext({});
export const UseAuth = ({ children }) => {
  const [name, setName] = useState(null);
  const [state, setstate] = useState(true);
  const [loc, setLoc] = useState("home");
  const [travel,setTravel]=useState()
  const [filtered,setFiltered]=useState([])
  const [firstname,setFirstname]=useState()
  const [events, setEvents] = useState([]);
  let st=[]
  return (
    <useContent.Provider
      value={{ name, setName, state, setstate, loc, setLoc,travel,setTravel,filtered,setFiltered,firstname,setFirstname,st,events,setEvents }}
    >
      {children}
    </useContent.Provider>
  );
};
