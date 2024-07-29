import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import './index.css'
import Login from "./Components/Login";
import Footer from "./Components/Footer";




const App = () => {
  const [bgCol, setBgCol] = useState('neutral-200')
  const [bgCol1, setBgCol1] = useState('neutral-300')
  const [text, settext] = useState('green-600')
  const [text1, settext1] = useState('black')

  const togglebtn =()=>{
    if(bgCol === 'neutral-200'){
      setBgCol('neutral-800')
      setBgCol1('neutral-900')
      settext('green-300')
      settext1('white')
    }
    else{
      setBgCol('neutral-200')
      setBgCol1('neutral-300')
      settext('green-600')
      settext1('black')
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar bgCol={bgCol} text={text} text1={text1} togglebtn={togglebtn} /><Homepage bgCol={bgCol} text={text} text1={text1} /><Footer bgCol={bgCol} text={text} text1={text1} /></>,
    },
    {
      path: "/Dashboard",
      element: <><Navbar bgCol={bgCol} text={text} text1={text1} togglebtn={togglebtn} /><Dashboard bgCol={bgCol} text={text} text1={text1} bgCol1={bgCol1} /><Footer bgCol={bgCol} text={text} text1={text1} /></>,
    },
    {
      path: "/Profile",
      element: <><Navbar bgCol={bgCol} text={text} text1={text1} togglebtn={togglebtn} /><Login bgCol={bgCol} text={text} text1={text1} bgCol1={bgCol1} /><Footer bgCol={bgCol} text={text} text1={text1} /></>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


export default App