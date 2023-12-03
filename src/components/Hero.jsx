import React from "react";
// @ts-ignore
import bigImg from "../assets/BigImg.webp";
// @ts-ignore
import Star from "../assets/Symbol.png";
// @ts-ignore
import Person1 from "../assets/Person1.webp";
// @ts-ignore
import Person2 from "../assets/Person2.webp";
// @ts-ignore
import Person3 from "../assets/Person3.webp";
// @ts-ignore
import Person4 from "../assets/Person4.webp";
// @ts-ignore
import Person5 from "../assets/Person5.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { zoomOut } from "../zoomOut";

const Hero = () => {
  return (
    <section className="flex flex-none flex-col h-[100hv] max-w-[1200px] mx-auto  py-[150px]">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-none flex-col items-center justify-center px-[160px]"
      >
        <div className="bg-[#F1F2F4] py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px]">
          An other way to manage time
        </div>
        <div className="flex flex-none items-center justify-center text-center leading-[80px] tracking-wider">
          <p className="text-[80px] text-[#24292d] font-PlusJakartaSansExtraBold ">
            Your new favorite calendar 🗓️ app
          </p>
        </div>
        <div className="font-PlusJakartaSansMedium leading-[32px] text-center text-[19px] py-10 px-12 text-slate-500 tracking-wider">
          Here you should explain how cool your app is. Remember, <br></br>focus
          on the benefits for your users, not on the features.{" "}
        </div>
        <div>
          <a href="#contact">
            <button className="bg-[#2E2E2E] text-[#FEFEFE] rounded-lg py-4 px-8 font-PlusJakartaSansMedium text-[18px]">
              <p>Get started, it's free</p>
            </button>
          </a>
        </div>
        <div className="text-[14px] text-slate-500">
          Free 14 days trials,no credit card needed
        </div>

        <div className="flex flex-row py-12 gap-0">
          <div className="flex justify-center items-center relative text-center mr-44">
            <div className="absolute left-0 right-0 h-12 w-12 border-[5px] rounded-full border-white">
              {" "}
              <img src={Person1} alt="" className="" />
            </div>
            <div className="absolute left-8 right-0   h-12 w-12 border-[5px] rounded-full border-white">
              <img src={Person2} alt="" className="" />
            </div>
            <div className="absolute  left-16 right-0  h-12 w-12 border-[5px] rounded-full border-white">
              <img src={Person3} alt="" className=" " />
            </div>
            <div className="absolute -right-36 h-12 w-12 border-[5px] rounded-full border-white">
              <img src={Person4} alt="" className=" " />
            </div>
            <div className="absolute  -right-44 h-12 w-12 border-[5px] rounded-full border-white">
              <img src={Person5} alt="" className=" " />
            </div>
          </div>
          <div className="flex flex-none flex-col justify-center items-center ">
            <div className="flex justify-center items-center  gap-1">
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <div className=" font-bold text-md"> 5.0</div>
            </div>
            <div className="font-medium leading-[32px] text-center text-[14px] text-slate-500 ml-5 -mt-1">
              From 200+ happy users
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center">
        <motion.img
          src={bigImg}
          className="rounded-2xl border border-solid h-[729px] w-[1200px] border-gray-200"
          alt="sectionImg"
          variants={zoomOut(0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        />
      </div>
    </section>
  );
};

export default Hero;
