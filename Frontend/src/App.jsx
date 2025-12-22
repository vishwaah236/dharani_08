import React from 'react'
import Header from "./component/Header";
import Footer from "./component/Footer"
import Navbar from './component/Navbar';
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact"
import Service from "./pages/Service";
import UseState from "./Hooks/UseState"
import UseEffect from './Hooks/UseEffect';


const App = () => {
  return (
    <>
    {/* <Header/>
    <Footer/> */}
    <Navbar/>
    <UseState/>
    <UseEffect/>

    <Route>
      <Route path="/"element={<Home/>}/>
       <Route path="/about"element={<About/>}/>
        <Route path="/contact"element={<Contact/>}/>
         <Route path="/service"element={<Service/>}/>
         <Route path="/UseState"element={<UseState/>}/>
         <Route path="/UseEffect"element={<UseEffect/>}/>
         </Route>

    
    </>

  )
}

export default App