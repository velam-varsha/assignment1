import React from "react";
import { motion } from "framer-motion";
import { rotate } from "../rotate";
import { zoomOut } from "../zoomOut";

const FeaturesSection = ({
  index,
  chipText,
  chipBgColor,
  heading,
  textContent,
  small,
  large,
}) => {
  return (
    <div
      className={`flex items-center justify-center my-20 gap-28 ${
        index % 2 === 1 ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <motion.div
        variants={zoomOut(0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col items-start justify-start h-auto w-[900px]"
      >
        <div
          className={`py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px] text-[#2E2E2E] `}
          style={{ backgroundColor: `${chipBgColor}` }}
        >
          {chipText}
        </div>
        <div className=" tracking-wide text-[40px] font-PlusJakartaSansExtraBold pt-3">
          {heading}
        </div>
        <div className="font-PlusJakartaSansMedium leading-[32px] text-[18px] py-10 text-slate-500 tracking-wide text-start">
          {textContent}
        </div>
        <div className="overflow-visible">
          <motion.img
            variants={zoomOut(0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.9 }}
            src={small}
            alt=""
            className="object-center h-auto w-[1000px] object-fill"
          />
        </div>
      </motion.div>
      <div className="overflow-visible ">
        <motion.img
          variants={rotate(0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          src={large}
          className="object-center h-auto w-[600px]] object-fill"
          alt="Img"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
