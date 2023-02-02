import React from "react";
import Ai from "../assets/ExplainableAi.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="bg-white py-20 relative">
      <div className="flex justify-between">

        <div className="mx-64 z-10 -mt-[500px] w-[800px] box-content shadow-2xl rounded-2xl  border-[#0f74ae] bg-slate-100 ">
          <div className="pb-10 mx-10">
          <div className='flex-col py-7'>
              <p className='text-black text-base font-bold mb-2'>Artificial Intelligence</p>
                <p className='text-black text-4xl font-bold'>Explainable AI</p>
                <div className='flex justify-start items-center mt-3 space-x-2'>
                    <p className='text-black text-sm font-semibold'>Kriti Singh</p>
                    <div className='box-content w-2 h-2 bg-black rounded-full items-center justify-center'></div>
                    <p className='text-black text-sm font-semibold'>May 21, 2022</p>
                </div>
            </div>
          <img src={Ai} alt="g" className=" h-[450px] w-[900px] pb-10 rounded-3xl" />
            <div className="text-[#023059]  text-xl font-semibold flex justify-start"></div>
            <div className="text-black text-xs lg:text-sm space-y-5 font-medium">
              <p>
                {" "}
                Explainable AI is an emerging subject of machine learning
                research that refers to strategies that try to provide
                transparency to typically opaque AI models and their
                predictions. It refers to a model’s projected impact and
                probable biases. It’s understandable: models might acquire
                unfavorable techniques to achieve goals on training data, or
                they can develop tendencies that can cause harm if left
                untreated.
              </p>
              <p>
                Explainable AI supports the evaluation of model accuracy,
                fairness, transparency, and outcomes. When it comes to bringing
                AI models into production, an organization’s ability to explain
                AI is critical. Hence, XAI (Explainable AI) uses a variety of
                approaches and procedures to ensure that each choice made during
                the machine learning process can be traced and explained in a
                precise manner. AI, on the other hand, frequently uses an ML
                algorithm to arrive at a conclusion, but the AI system’s
                architects have little understanding of how the algorithm
                arrived at that result. This makes checking for correctness
                difficult and ultimately leads to a loss of control and
                responsibility.
              </p>
              <p>
                As AI advances, humans will find it more difficult to grasp,
                intuit and retrace how the computer arrived at a conclusion. The
                entire computation is transformed into a “black box” that is
                hard to decipher. Many people think of neural networks as black
                boxes that are tough to interpret as Neural networks employed in
                deep learning are among the most difficult for humans to
                comprehend. Even the algorithm’s creators, the engineers and
                data scientists, have no idea what’s going on within them or how
                the AI algorithm arrived at a certain outcome.
              </p>
            </div>
            <div className="text-black text-xs lg:text-sm space-y-5 mt-6 font-medium">
              <p>
                {" "}
                Bias, which might be based on race, gender, age, or region, has
                long been a concern when developing AI models. Furthermore,
                because production data differs from training data, AI model
                performance might drift or deteriorate which is why it is
                necessary for the company to monitor and manage models in order
                to increase AI explainability while assessing the commercial
                effect of such algorithms. End-user trust, model auditability,
                and productive AI usage are all aided by explainable AI. It also
                reduces the risks of manufacturing AI in compliance, legal,
                security, and reputation.
              </p>
              <p>
                With the increasing deployment of AI systems in high-stakes
                sectors such as healthcare, law, and banking, it is imperative
                to be cognizant of its explainability. Understanding how an
                AI-enabled system arrived at a certain result offers several
                advantages. Explainability can assist developers in ensuring
                that the system is operating as intended, it may be required to
                fulfill regulatory requirements, or it may be critical in
                allowing individuals affected by a decision to contest or amend
                the conclusion.
              </p>
              <p>
                Why is the system making the decision it is making? What parts
                of the input are being used to make a final decision? What
                features of the input are most important in the decision? Will
                these features enable the model to operate accurately and
                consistently over time and in different operating conditions?
                Operators and end-users have been in the “unknown” due to the AI
                landscape filled with black-box solutions with limited autonomy,
                leading to vast mistrust in the public eye. At LENS, our
                solutions, while maintaining the necessary Intellectual Property
                Rights for our clients, customers, and end-users, include a
                guarantee to leverage everything at our disposal to ensure
                complete transparency, till all the “how” and “why” are answered
                satisfactorily.
              </p>
              <p>
                We aim to build our models on a foundation of explainability, so
                individuals who are impacted by the technology can understand
                why decisions were made and adjust course as required to
                guarantee AI outputs are ethical, responsible, and fair.
              </p>
            </div>
          </div>
        </div>
        <div className="md:px-5 px-3 lg:px-5 xl:px-5 py-5 flex-col text-white space-y-5 justify-center items-center -mt-20 absolute top-[60px] right-28 w-[220px] h-[300px] md:ml-10 ml-3 lg:ml-20 xl:ml-20 box-content rounded-xl bg-[#0a486b] ">
          <p className="text-4xl text-white font-bold">Tags</p>
          <div className="flex-col  space-y-5">
            <div className="flex justify-start items-center space-x-3">
              <div className="box-content w-2 h-2 bg-cyan-100 rounded-full items-center justify-center"></div>
              <Link to="">
                <span className="hover:text-cyan-100">
                  Artificial Intelligence
                </span>
              </Link>
            </div>
            <div className="flex justify-start items-center space-x-3">
              <div className="box-content w-2 h-2 bg-cyan-100 rounded-full items-center justify-center"></div>
              <Link to="">
                <span className="hover:text-cyan-100 ">Computer Vision</span>
              </Link>
            </div>
            <div className="flex justify-start items-center space-x-3">
              <div className="box-content w-2 h-2 bg-cyan-100 rounded-full items-center justify-center"></div>
              <Link to="">
                <span className="hover:text-cyan-100">Object Detection</span>
              </Link>
            </div>
          </div>
          <p className="text-4xl text-white font-bold">Share</p>
          <div className="flex space-x-5 justify-start mt-4">
            <Link to="">
              <span className="hover:text-blue-700 ">
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
      </div>
    </div>
  );
};

export default Content;
