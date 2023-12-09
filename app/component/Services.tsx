// ServiceCard.js
import React from 'react';
import Image from 'next/image';
const services = [
  {
    "title": "Business Applications",
    "description": "Enhance your business operations with customized software solutions. Streamline processes, improve efficiency, and achieve your business goals.",
  },
  {
    "title": "E-commerce Solution",
    "description": "Elevate your online presence and boost sales with comprehensive e-commerce solutions. From user-friendly interfaces to secure payment gateways, we provide everything you need to succeed in the digital marketplace.",
  },
  {
    "title": "Web & Mobile Solution",
    "description": "Stay ahead in the digital landscape with cutting-edge web and mobile solutions. Whether it's a responsive website or a feature-rich mobile app, we deliver solutions that cater to the evolving needs of your audience.",
  },
  {
    "title": "Digital Marketing",
    "description": "Drive brand awareness and engagement through strategic digital marketing services. From social media campaigns to email marketing, we help you connect with your target audience and maximize your online presence.",
  },
  {
    "title": "Search Engine Optimization (SEO)",
    "description": "Boost your website's visibility and rankings on search engines with our SEO services. Increase organic traffic, improve search engine rankings, and enhance your online presence to reach a wider audience.",

  },
  {
    "title": "Graphics Designing",
    "description": "Make a lasting impression with visually appealing graphics. Our design team creates stunning visuals that resonate with your brand, from logos and marketing collateral to website and social media graphics.",
  }
]



const Services = () => {
  return (
    <div id='our-services' className="bg-white dark:bg-gray-900 text-center text-white md:text-center p-6 ">
      <h2 className="text-l md:text-2xl font-bold my-4">Our Services</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:min-h-screen lg:min-h-screen ">
        {services.map((service, index) => (
          <div key={index}>
            <div className="text-stone-800 h-full max-w-full rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-cyan-500/50 p-4">
              <h2 className="text-left text-white uppercase font-bold text-lg md:text-l">{service.title}</h2>
              <p className="text-left h-full max-w-full whitespace-no-wrap my-2 md:my-5">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Services;
