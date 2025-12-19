import React from 'react'
import Header from "./component/Header";
import Footer from "./component/Footer"
import Navbar from './component/Navbar';
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact"
import Service from "./pages/Service";


const App = () => {
  return (
    <>
    {/* <Header/>
    <Footer/> */}
    <Navbar/>
    <Route>
      <Route path="/"element={<Home/>}/>
       <Route path="/about"element={<About/>}/>
        <Route path="/contact"element={<Contact/>}/>
         <Route path="/service"element={<Service/>}/>

    </Route>

    
    </>

  )
}

export default App