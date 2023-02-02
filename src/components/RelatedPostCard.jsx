import React from "react";
import { Link } from "react-router-dom";


const RelatedPostCard = ({img,about,title,author,date,text,link}) => {
  return (
    <div className=" py-10  ">
      <div className="box-content w-[400px] h-[500px] md:mx-20 mx-5 lg:mx-12 hover:scale-110 duration-300 rounded-xl bg-slate-50 shadow-2xl">
        <div>
          <img src={img} alt="img" className="h-[210px] w-[400px] rounded-t-xl" />
        </div>
        <div className="flex-col justify-start items-center my-5 mx-5 ">
          <p className="text-sm font-semibold text-[#316989]">{about}</p>
          <p className="text-xl font-bold text-[#023059] w-[320px] my-3">
           {title}
          </p>
          <div className="flex justify-start items-center my-3 space-x-2">
            <p className="text-[#316989] text-xs font-semibold">{author}</p>
            <div className="box-content w-2 h-2 rounded-full items-center justify-center bg-[#0f74ae]"></div>
            <p className="text-[#316989] text-xs font-semibold">{date}</p>
          </div>
          <p className="text-xs font-semibold text-[#316989] my-3">
           {text}
          </p>
         <p className="text-[#316989] hover:text-zinc-900 underline underline-offset-2"> <Link to={link}>Read More </Link></p>
        </div>
      </div>
    </div>
  );
};

export default RelatedPostCard;
