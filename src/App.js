import Signin from "./Pages/Signin";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import UserDetails from "./Pages/UserDetails";
import Try from "./Components/Try";
import Dashboard from "./Pages/Dashboard";
import Events from "./Pages/Events";
import Logout from "./Pages/Logout";
// import Adios from "./Pages/Adios";
import Anothertry from "./Pages/Anothertry";
import Fsurvey from "./Pages/Fsurvey";
import Logopage from "./Components/Logopage";
import Carditems from "./Components/Carditems";
import Mainpage from "./Pages/Mainpage";
import Workshopup from './Pages/Workshopup'
import Lectureup from './Pages/Lectureup'
import Competitionup from './Pages/Competitionup'
import Sanalysis from "./Pages/Sanalysis";
import Faculty from "./Pages/Faculty";
import Cardobj from "./Components/Cardobj";
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<Mainpage />}></Route>
          {/* <Route exact path="/" element={<Logopage />}></Route> */}
          <Route exact path="/Signin" element={<Signin />}></Route>
          <Route exat path="/Signup" element={<Signup />}></Route>
          <Route exact path="/UserDetails" element={<UserDetails />}></Route>
          <Route exact path="/Dashboard" element={<Dashboard />}></Route>
          <Route exact path="/Events" element={<Events />}></Route>
          <Route exact path='/Logout' element={<Logout/>}></Route>
          <Route exact path="/Try" element={<Try />}></Route>
          <Route exact path="/Fsurvey" element={<Fsurvey />}></Route>
          <Route exact path="/AnotherTry" element={<Anothertry />}></Route>
          <Route exact path="/Carditems" element={<Carditems />}></Route>
          <Route exact path="/Workshopup" element={<Workshopup />}></Route>
          <Route exact path="/Lectureup" element={<Lectureup/>}></Route>
          <Route exact path="/Competitionup" element={<Competitionup/>}></Route>
          <Route exact path='/Sanalysis' element={<Sanalysis/>}></Route>
          <Route exact path='/Faculty' element={<Faculty/>}></Route>
          <Route exact path='/Cardobj' element={<Cardobj/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
