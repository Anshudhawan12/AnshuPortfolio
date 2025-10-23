import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Education data
const education = [
  {
    title: "Bachelor of Engineering in Computer Science",
    company_name: "Chitkara University Institute of Engineering & Technology, Punjab",
          icon: process.env.PUBLIC_URL + "/images/Chitkara-University-Logo.jpg", // ✅ correct
    iconBg: "#383E56",
    date: "2023 – 2027",
    points: [
      "CGPA: 9.04",
      "Currently pursuing Computer Science and Engineering with a focus on web development, Java, and DSA.",
      "Engaged in projects, coding challenges, and collaborative learning.",
    ],
  },
  {
    title: "12th Grade – Non-Medical",
    company_name: "Gobindgarh Public School, Mandi Gobindgarh",
   icon: process.env.PUBLIC_URL + "/images/gobindgarh.jpg", // ✅ correct
    iconBg: "#E6DEDD",
    date: "2021 – 2022",
    points: [
      "Percentage: 77.25%",
      "Focused on computational thinking, problem-solving, and introductory programming.",
    "Participated in school-level coding competitions and technology workshops.",
    "Developed foundational skills in logical reasoning and analytical thinking."
    ],
  },
  {
    title: "10th Grade",
    company_name: "Gobindgarh Public School, Mandi Gobindgarh",
       icon: process.env.PUBLIC_URL + "/images/gobindgarh.jpg", // ✅ correct
    iconBg: "#E6DEDD",
    date: "2019 – 2020",
    points: [
      "Percentage: 88.6%",
      "Focused on core subjects including Science and Mathematics.",
      "Actively participated in academic and extracurricular activities.",
    ],
  },
];

const EducationCard = ({ edu }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={edu.date}
      iconStyle={{ background: edu.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={edu.icon}
            alt={edu.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{edu.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {edu.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {edu.points.map((point, index) => (
          <li
            key={`edu-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My learning journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} edu={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
