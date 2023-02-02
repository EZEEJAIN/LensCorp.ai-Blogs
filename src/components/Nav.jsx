import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/lenslogo.png";
// import Profile from "../assests/ProfileCircle.png";
// import { Link } from "react-router-dom";

const Nav = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 3){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className={`${colorChange?"bg-[#e7f1fe]":"bg-transparent"} duration-300 backdrop-blur-2xl  sticky top-0 z-50 shadow-xl h-[80px]`}>
      <div className="flex items-center justify-between md:mx-20 mx-5 lg:mx-20">
       <Link to="/"> <img src={Logo} alt="logo" className="py-5" /></Link>
        <div className="md:flex justify-end items-center hidden  space-x-14 text-black font-semibold text-2xl">
          <p>
            {" "}
            <div className="hover:text-cyan-700 hover:underline cursor-pointer duration-300 underline-offset-8 decoration-4 decoration-black">
              Home
            </div>{" "}
          </p>
          <p>
            <div className=" hover:text-cyan-700 hover:underline cursor-pointer duration-300 underline-offset-8 decoration-4 decoration-black">
              Company
            </div>
          </p>

          <p>
            <div className=" hover:text-cyan-700 hover:underline cursor-pointer duration-300 underline-offset-8 decoration-4 decoration-black">
              Blogs
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
