import React from "react";
// @ts-ignore
import Large1 from "../assets/Large1.webp";
// @ts-ignore
import Large2 from "../assets/Large2.webp";
// @ts-ignore
import Large3 from "../assets/Large3.webp";
// @ts-ignore
import Large4 from "../assets/Large4.webp";
// @ts-ignore
import Small1 from "../assets/Small1.png";
// @ts-ignore
import Small2 from "../assets/Small2.png";
// @ts-ignore
import Small3 from "../assets/Small3.png";
// @ts-ignore
import Small4 from "../assets/Small4.png";
import FeaturesSection from "./FeaturesSection";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Features = () => {
  const featuresData = [
    {
      index: "1",
      chipText: "Seamless Scheduling",
      chipBgColor: "#FEE9CB",
      heading: "Focus on what matters most for you",
      textContent:
        "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.",
      small: Small1,
      large: Large1,
    },
    {
      index: "2",
      chipText: "Smart Reminders & Task",
      chipBgColor: "#CCEAFD",
      heading: "Never miss an important deadline or event again",
      textContent:
        "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
      small: Small2,
      large: Large2,
    },
    {
      index: "3",
      chipText: "Seamless Scheduling",
      chipBgColor: "#DDF4E4",
      heading: "Focus on what matters most for you",
      textContent:
        "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks",
      small: Small3,
      large: Large3,
    },
    {
      index: "4",
      chipText: "Smart Reminders & Task",
      chipBgColor: "#FDDED6",
      heading: "Never miss an important deadline or event again",
      textContent:
        "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
      small: Small4,
      large: Large4,
    },
  ];

  return (
    <div className="flex flex-none flex-col h-[100hv] max-w-[1200px] mx-auto  py-[70px]">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-none flex-col items-center justify-center  gap-4"
      >
        <div className="bg-[#F1F2F4] py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px]">
          Our main features 🦸🏼
        </div>
        <div className="text--[#2E2E2E] flex flex-none items-center justify-center text-center tracking-wide text-[58px] font-PlusJakartaSansExtraBold ">
          Discover your new superpowers
        </div>
      </motion.div>

      {featuresData.map((data, index) => (
        <FeaturesSection
          key={index}
          index={index}
          chipText={data.chipText}
          chipBgColor={data.chipBgColor}
          heading={data.heading}
          textContent={data.textContent}
          small={data.small}
          large={data.large}
        />
      ))}
    </div>
  );
};

export default Features;
