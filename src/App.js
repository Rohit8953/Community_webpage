import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Landingpage from "./LandingPage/Landingpage";
import { Route, Routes } from "react-router-dom";
import Notification from "./LandingPage/Notification";
import Bookmark from "./LandingPage/Bookmark";
import Addtocart from "./LandingPage/Addtocart";
import Profile from "./LandingPage/Profile";

function App() {

return (
   <div className=''>
         <Navbar/>
         <Routes>
            <Route path='/' element={<Landingpage/>} />
            <Route path='/notification' element={<Notification/>} />
            <Route path='/bookmark' element={<Bookmark/>} />
            <Route path='/add' element={<Addtocart/>} />
            <Route path='/profile' element={<Profile/>} />
         </Routes>
         
      
   </div>
  );
};
export default App;
