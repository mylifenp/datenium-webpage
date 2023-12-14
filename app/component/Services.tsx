// ServiceCard.js
import React from 'react';
import Image from 'next/image';
const services = [
  {
    "category": "AI/ML Consulting",
    "description": "Empower businesses to harness the transformative potential of Artificial Intelligence and Machine Learning. Tailored solutions range from developing cutting-edge algorithms to implementing AI-driven strategies for enhanced efficiency and decision-making."
  }, 
  {
    "category": "Mobile/Web Development",
    "description": "Focus on creating responsive, intuitive, and feature-rich applications. From native mobile apps to cross-platform solutions and responsive web designs, development services cater to diverse platforms and user preferences. Ensure seamless and engaging user experiences with efficient performance."
  },
  {
    "category": "Cloud & DevOps",
    "description": "Embrace the power of the cloud and optimize development processes with services covering cloud migration, DevOps practices implementation, and ensuring continuous integration and delivery. Enable organizations to achieve agility, scalability, and reliability."
  },
  {
    "category": "Data Science",
    "description": "Unlock hidden insights within data through data science expertise. Services encompass data analysis, predictive modeling, and machine learning to extract valuable information for strategic decision-making. Transform data into a powerful asset for businesses."
  },
  {
    "category": "Software Engineering",
    "description": "Deliver high-quality, scalable, and robust solutions in the realm of Software Engineering. Expertise includes full-stack development, software architecture, and application optimization. Ensure software aligns with business objectives and exceeds industry standards."
  },

  {
    "category": "Digital Solutions",
    "description": "Revolutionize your digital landscape with comprehensive solutions, specializing in seamless user experiences, scalable applications, and innovative digital strategies. Services cover web and mobile development, as well as immersive technologies."
  },
]




const Services = () => {
  return (
    <div id='our-services' className="bg-white dark:bg-gray-900 text-center text-white md:text-center p-6 ">
      <h2 className="text-l md:text-2xl font-bold my-4">Our Services</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 ">
        {services.map((service, index) => (
          <div key={index}>
            <div className="text-black md:h-full max-w-full rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-cyan-500/50 p-4">
              <h2 className="text-left text-white uppercase font-bold text-lg md:text-l  lg:text-xl xl:text-2xl">{service.category}</h2>
              <p className="text-left h-full max-w-full whitespace-no-wrap my-2 md:my-5 lg:text-xl xl:text-2xl">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Services;
