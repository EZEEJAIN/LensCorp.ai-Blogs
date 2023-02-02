import React from "react";
import Card from "../components/RelatedPostCard";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Image1 from "../assets/Deploying.webp";
import Image2 from "../assets/pacman.gif";
import Image3 from "../assets/primate.webp";
import Image4 from "../assets/trustworth.webp";
import Image5 from "../assets/open-cv.webp";
import RelatedPostCard from "../components/RelatedPostCard";

const Blogs = () => {
  const cardlist = [
    {
      img: Image2,
      about: "Artificial Intelligence",
      title: "Genetic Algorithms vs Reinforcement Learning",
      author: "KRITI SINGH",
      date: "May 21, 2022",
      text: "About Blog April 6, 2022 Genetic Algorithms vs Reinforcement Learning Kriti Singh Consider a recent decision you grappled with. Perhaps you struggled with it because you didn't know where to...",
      link: "",
    },
    {
      img: Image1,
      about: "Deployment",
      title: "Deploying PyTorch Applications using C++",
      author: "KRITI SINGH",
      date: "May 21, 2022",
      text: "For any deep learning project, the end goal is to create a system which can be easily used for inference. A simple solution can be to create an application that...",
      link: "",
    },
    {
      img: Image5,
      about: "Deployment",
      title: "How to use OpenCV Library to create C++ applications",
      author: "AZHAN MOHAMMED",
      date: "December 17, 2021",
      text: "A good AI model’s full potential is utilized only when it can be used by others who have no prior knowledge of how it works. Building an end-to-end  and reliable...",
      link: "",
    },
    {
      img: Image3,
      about: "Artificial Intelligence",
      title: "Accurate Face Recognition system to help Primates",
      author: "KRITI SINGH",
      date: "November 6, 2021",
      text: "Primates have become a commodity, despite being some of the most endangered. A series of frightening investigations from international specialists, UN agencies, conservation organisations...",
      link: "",
    },
    {
      img: Image4,
      about: "Artificial Intelligence",
      title: "Trustworthy AI",
      author: "KRITI SINGH",
      date: "October 16, 2021",
      text: "One of the challenges with the pursuit of AI is the incongruity between the fantasy concept of artificial intelligence and the real-world, practical applications of AI. In movies and science fiction novels, AI systems are sketched...",
      link: "",
    },
   
  ];

  return (
    <div>
      <Nav />
      <Header />
      <Content />
      <div className="flex items-center space-x-5 pt-20 text-black font-semibold pb-10 text-3xl bg-[#bdd6f495]">
      <div className="ml-20 box-content w-40 h-1 rounded- items-center justify-center bg-black"></div>
        <p className="mr-20">Related posts</p>
      </div>
      <div className="grid grid-cols-3 bg-[#bdd6f495] pb-20 gap-0">
          {cardlist.map((elem, index) => (
           
           <RelatedPostCard
              key={index}
              img={elem.img}
              about={elem.about}
              title={elem.title}
             author={elem.author}
             date={elem.date}
             text={elem.text} 
             link={elem.link}
              
            />
          ))}
        </div>
      
      <Footer />
    </div>
  );
};

export default Blogs;
