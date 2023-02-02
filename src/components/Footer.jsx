import React from "react";
import Logo from "../assets/lenslogo.png";
// import Line from "../assets/Line4.png";
// import Linkedin from "../assests/Linkedin.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-transparent to-[#0f74aea3] py-10 ">
      <div className="flex-col md:mx-20 mx-5 lg:mx-20">
        <div className="flex">
          <div className="grid grid-cols-3 gap-0">
            <div className="flex-col justify-center items-center space-y-2 text-2xl">
              <div className="mb-7 space-y-3">
                <img src={Logo} alt="logo" className=" h-14" />
                <p>
                  Tomorrow’s Vision,
                  <span className="font-semibold"> Today!</span>
                </p>
              </div>
              <p className="text-xl font-bold text-cyan-900 mt-5">
                Follow Us 
              </p>
              <div className="flex space-x-10 justify-start">
                <Link to="">
                  <span className="hover:text-blue-700  ">
                    {" "}
                    <FacebookIcon />
                  </span>
                </Link>
                <Link to="">
                  <span className="hover:text-blue-700 ">
                    {" "}
                    <LinkedInIcon />
                  </span>
                </Link>
                <Link to="">
                  <span className="hover:text-blue-400 ">
                    {" "}
                    <TwitterIcon />
                  </span>
                </Link>
                <Link to="">
                  <span className="hover:text-pink-500 ">
                    {" "}
                    <InstagramIcon />
                  </span>
                </Link>
                {/* <div className="flex space-x-4 justify-center">
            </div> */}
              </div>
            </div>

            <div className="grid grid-row-6 gap-4">
              <p className="text-3xl font-bold text-black py-3 ">
                Contact Us
              </p>
              <p className="text-xl font-normal text-black  flex justify-start items-center">
                <WhatsAppIcon className="w-5 h-5 mr-5" />
                <Link to="">
                  <span className="hover:text-cyan-900 ">+1-517-9300-792</span>
                </Link>
              </p>
              <p className="text-xl font-normal text-black flex justify-start items-center">
                <LocalPhoneIcon className="w-5 h-5 mr-5" />
                <Link to="">
                  <span className="hover:text-cyan-900 ">+91-9990-736-796</span>
                </Link>
              </p>
              <p className="text-xl font-normal text-black flex justify-start items-center">
                <MailIcon className="w-5 h-5 mr-5" />
                <Link to="">
                  <span className="hover:text-cyan-900 ">
                    solutions@lenscorp.ai
                  </span>
                </Link>
              </p>
              <p className="text-xl font-normal text-black flex justify-start items-center">
                <ApartmentIcon className="w-5 h-5 mr-5" />
                <Link to="">
                  <span className="hover:text-cyan-900 ">
                    4288 Indian Glen Drive, Okemos, MI, 48864, USA
                  </span>
                </Link>
              </p>
              <p className="text-xl font-normal text-black flex justify-start items-center">
                <ApartmentIcon className="w-5 h-5 mr-5" />
                <Link to="">
                  <span className="hover:text-cyan-900 ">
                    1628, 16th floor, 9A Building, Gurugram, 122002, India
                  </span>
                </Link>
              </p>
            </div>

            <div className="grid grid-row-6 gap-0 mx-20 ">
              <p className="text-3xl font-bold text-black py-3 ">Sitemap</p>
              <p className="text-xl font-normal text-black flex justify-start">
                <Link to="">
                  <span className="hover:text-cyan-900 ">Services</span>
                </Link>
              </p>
              <p className="text-xl font-normal text-black flex justify-start">
                <Link to="">
                  <span className="hover:text-cyan-900 ">Products</span>
                </Link>
              </p>
              <p className="text-xl font-normal text-black flex justify-start">
                <Link to="">
                  <span className="hover:text-cyan-900 ">Blogs</span>
                </Link>
              </p>
              <p className="text-xl font-normal text-black flex justify-start">
                <Link to="">
                  <span className="hover:text-cyan-900 ">Company</span>
                </Link>
              </p>
              <p className="text-xl font-normal text-black flex justify-start">
                <Link to="">
                  <span className="hover:text-cyan-900 ">Resources</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="flex-col space-y-3">
            <p className="text-3xl font-bold text-black py-3">Downloads</p>
            <p className="text-xl font-normal text-black">
              <Link to="">
                <span className="hover:text-cyan-900 ">Code of Conduct</span>
              </Link>
            </p>
            <p className="text-xl font-normal text-black">
              <Link to="">
                <span className="hover:text-cyan-900 ">Products</span>
              </Link>
            </p>
          </div>
        </div>
        {/* <img src={Line} alt="line" className="w-[1340px] h-1 mt-6" /> */}
        {/* <span className="w-20 h-2 border-2 box-content border-cyan-900 bg-cyan-900 rotate-180"></span> */}
        {/* <div className="flex space-x-5 justify-center mt-4">
            <p className="text-xl font-bold text-cyan-700">Follow Us on</p>
            <Link to=""><span className="hover:text-blue-700 ">   <FacebookIcon/></span></Link>
            <Link to=""><span className="hover:text-blue-700 ">   <LinkedInIcon/></span></Link>
            <Link to=""><span className="hover:text-blue-400 ">   <TwitterIcon/></span></Link>
            <Link to=""><span className="hover:text-pink-500 ">  <InstagramIcon/></span></Link>
            <div className="flex space-x-4 justify-center">
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
