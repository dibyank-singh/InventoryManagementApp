
import {Box} from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components import

import Navbar from "./Navbar";
import Dashbord from "../Home/DashBord/Dashbord";
import Landingpage from "../Landingpage";
import Login from "../Registration/Login"
import Signup from "../Registration/Signup"
import EditProduct from "./DashBord/EditProduct";



const Home=()=>{
    return(
        <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/dashbord" element={ <Dashbord/>}/>
            <Route path="/login" element={ <Login/>}/>
            <Route path="/signup" element={<Signup/> }/>
            {/* <Route path="/update/:id" element={<EditProduct/> }/> */}

          

          </Routes>
        </BrowserRouter>
        </>

    )
}
export default Home;