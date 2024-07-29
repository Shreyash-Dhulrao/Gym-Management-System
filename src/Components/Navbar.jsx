import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '/src/Components/Style/Images_Icons/Profile.svg?react';
import Menu from './Style/Images_Icons/3_Lines_right.svg?react'
import Cross from './Style/Images_Icons/Cross.svg?react'
import New from './Style/Images_Icons/New.svg?react'
import Dashboard from './Style/Images_Icons/Dashboard.svg?react'
import About from './Style/Images_Icons/About.svg?react'
import Home from './Style/Images_Icons/Home.svg?react'


const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`fixed top-0 left-0 w-full bg-${props.bgCol} text-${props.Text}`}>
      <div className="container flex justify-between items-center px-4">
        <Link to="/" className='flex items-end gap-1 p-1' >
          <h1 className={`text-3xl font-bold font-['New_York_Regular'] tracking-widest text-${props.text1}`}>GYM</h1>
          <p className={`text-md font-normal font-['SF_Pro_Text'] text-${props.text1}`}>Management System</p>
        </Link>
        <nav className="hidden md:flex space-x-2">
          <button onClick={props.togglebtn}>
            <New className={`text-${props.text} w-5 h-5`} />
          </button>
          <Link to="/" className={`hover:border-b-2 font-["SF_Pro_Text"] hover:border-${props.text1} hover:text-${props.text1} border-transparent border-b-2 transition duration-300 p-3 text-${props.text}`}>
            <div className='flex justify-center items-center gap-2 text-sm '>
              <Home className='w-4 h-4' />Home
            </div>
          </Link>
          <Link to="/Dashboard" className={`hover:border-b-2 font-["SF_Pro_Text"] hover:border-${props.text1} hover:text-${props.text1} border-transparent border-b-2 transition duration-300 p-3 text-${props.text}`}>
            <div className='flex justify-center items-center gap-2 text-sm'>
              <Dashboard className='w-4 h-4' />Dashboard
            </div>
          </Link>
          <Link to="/Profile" className={`hover:border-b-2 font-["SF_Pro_Text"] hover:border-${props.text1} hover:text-${props.text1} border-transparent border-b-2 transition duration-300 p-3 text-${props.text}`}>
            <div className='flex justify-center items-center gap-2 text-sm'>
              <ProfileIcon className='w-4 h-4' />Profile
            </div>
          </Link>
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <Cross className={`text-${props.text} w-8 h-8`} />
          ) : (
            <Menu className={`text-${props.text} w-8 h-8`} />

          )}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden absolute top-full  left-0 w-full py-4 bg-zinc-800 z-10">
          <ul className="space-y-2 px-4">
            <li>
              <Link to="/" className="text-xl block py-2 hover:text-zinc-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Dashboard"
                className="text-xl block py-2 hover:text-zinc-200"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/Dashboard"
                className="text-xl block py-2 hover:text-zinc-200"
              >
                Profile
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      )}
    </div>
  );
};
export default Navbar