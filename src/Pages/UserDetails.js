import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
const Programme = [
  { id: "1", value: "BT", label: "Btech" },
  { id: "2", value: "BR", label: "BArch" },
  { id: "3", value: "DI", label: "Diploma" },
  { id: "4", value: "O", label: "Others" },
];
const course = [
  { value: "CS", label: "Computer Science" },
  { value: "ME", label: "Mechanical" },
  { value: "EEE", label: "Electrical" },
  { value: "EC", label: "Electronics" },
  { value: "CH", label: "Chemical" },
];
const gender = [
  { value: "M", label: "Male" },
  { value: "F", label: "Female" },
];
const category = [
  { value: "G", label: "General" },
  { value: "OBC", label: "OBC" },
  { value: "SC", label: "SC" },
  { value: "ST", label: "ST" },
  { value: "EWS", label: "EWS" },
];
const institutions = [
  { value: "tkm", label: "TKM" },
  { value: "cet", label: "CET" },
  { value: "gect", label: "GEC Thrissur" },
  { value: "geck", label: "GEC Kannur" },
  { value: "rgr", label: "Ragagiri" },
];
const classes = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  { value: "D", label: "D" },
 
];
const UserDetails = () => {
  const [userinfo, setUserInfo] = useState({
    fields: [],
    response: [],
  });
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { fields } = userinfo;

   // console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        fields: [...fields, value],
        response: [...fields, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        fields: fields.filter((e) => e !== value),
        response: fields.filter((e) => e !== value),
      });
    }
  };
  const [selectedProgramme, setProgramme] = useState("");
  const [selectedCourse, setCourse] = useState("");
  const [clas, setClas] = useState("");
  const [selectedGender, setGender] = useState("");
  const [selectedCategory, setCategory] = useState("");
  const [selectedinterest, setInterest] = useState("");
  const [institution,setInstitution]=useState()
  const [income, setIncome] = useState();
  const [interest,setIntersest]=useState()
  const [phone, setPhone] = useState();
  const [img, setimg] = useState();
  const [rollno,setRollno]=useState()
  const [preview, setPreview] = useState();
  const nav = useNavigate();
  // useEffect(()=>{
  //       setProgramme(Programme)
  // })
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(img);
    var formData = new FormData();
    formData.append("phone_no", phone);//ok
     formData.append("programme", selectedProgramme);
    formData.append("course", selectedCourse);//ok
    formData.append("gender", selectedGender);//ok
    formData.append("clas", clas);//ok
     formData.append("category", selectedCategory);
    formData.append("inst", institution);//dropdown
    formData.append("interest", userinfo.response); // ok
    formData.append("rollno", rollno);//ok
    formData.append("income",0)
    formData.append("avatar", img);//ok
    console.log(formData, "dsjyg");
    await axios
      .post(
        `http://127.0.0.1:8000/user/add/`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      )
      .then((data) => {
        console.log(data);
        nav("/Signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleProgramme = (selectedOption) => {
    setProgramme(selectedOption.value);
    console.log(selectedProgramme);
  };
  const handleClas = (selectedOption) => {
    setClas(selectedOption.value);
    console.log(selectedProgramme);
  };
  const handleInstitution = (selectedOption) => {
    setInstitution(selectedOption.value);
    console.log(selectedProgramme);
  };
  const handleCategory = (selectedOption) => {
    setCategory(selectedOption.value);
    console.log(selectedCategory);
  };
  const handleCourse = (selectedOption) => {
    setCourse(selectedOption.value);
    console.log(selectedCourse);
  };
  const handleInterest = (selectedOption) => {
    setInterest(selectedOption.value);///interest
    console.log(selectedCourse);
  };
  const handleGender = (selectedOption) => {
    setGender(selectedOption.value);
    console.log(selectedGender);
  };
  const handleimage = (e) => {
    setimg(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleClick}>
      <div className="bg-[#8a2be2] h-screen w-screen">
        UserDetails
        <div className="bg-white pl-10  pr-0 ml-auto mr-auto w-[60%] h-[80vh] flex flex-row justify-between">
          <div className="">
            <img
              src={preview}
              alt="sd"
              className="w-[150px] h-[150px] rounded-full mt-16"
            />
            <input
              type={"file"}
              src={img}
              onChange={handleimage}
              className="pl-4 pt-5"
            ></input>
            <div className="">
              <label>Gender</label>
              <Select
                className=""
                onChange={handleGender}
                options={gender}
                placeholder={"Gender"}
              />
            </div>
            {/* multiple checkbokes */}
            <div className="form-check m-3">    
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="DS"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Data Science
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="AI"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Artificial Intelligence
                </label>
              </div>
            
              <label>Class</label>
              <Select
                onChange={handleClas}
                options={classes}
                placeholder={"Class"}
              />
          </div>
          <div className="">
            <div className="">
              <div>
                {/* <label>College</label>
                <br></br>
                <input
                  type={"text"}
                  className="w-[123%] h-[85%] border-2 rounded-lg"
                ></input> */}
              </div>
              <div>
                <label>Phone Number</label>
                <br></br>
                <input
                  type={"number"}
                  className="border-2"
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
              <br></br>
            </div>
            <div className="">
              <div>
                <label>Programme</label>
                <Select
                  className=""
                  onChange={handleProgramme}
                  options={Programme}
                  placeholder={"Select Programme"}
                />
              </div>
              <br></br>
              <div>
                <label>Course</label>
                <Select
                  className=""
                  onChange={handleCourse}
                  options={course}
                  placeholder={"Select Course"}
                />
              </div>
              <br></br>
            </div>
            <div className="">
             
              <div className="">
                <label>Category</label>
                <Select
                  className="w-40 lg:w-56"
                  onChange={handleCategory}
                  options={category}
                  placeholder={"Select Category"}
                />
              </div>
              <br></br>
             


              <div className="">      
                <label>Institution</label> 
                <Select
                  className="w-40 lg:w-56"
                  onChange={handleInstitution}
                  options={institutions}
                  placeholder={"Select your interest"}
                />
              </div>
              <br></br>
                {/* <label className="text-white">ROll NO</label> */}
              <input type={'number'} onChange={(e)=>setRollno(e.target.value)} placeholder='roll' className='border-2'></input>

            </div>
                  {console.log(userinfo.response)}
            <button className=" bg-orange-300"> Save</button>
          </div>
          <br></br>
        </div>
      </div>
    </form>
  );
};

export default UserDetails;
