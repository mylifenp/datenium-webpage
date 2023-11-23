import React from 'react';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <section className="bg-white text-black md:min-h-screen lg:min-h-screen">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-6 md:min-h-screen lg:min-h-screen">
        {/* Text content */}
        <div className="flex flex-col">
          <div className="text-left p-2 ">
            <h1 className="text-2xl md:text-xl lg:text-2xl xl:text-6xl font-bold mb-6">
              Empowering Your Business to the Next Level Through Strategic Technology Solutions
            </h1>
            <p className="text-base md:text-md lg:text-lg xl:text-xl ">
              Welcome to DigiWeb Solutions, your trusted partner in navigating the ever-evolving landscape of information technology. We are committed to delivering innovative solutions that propel your business forward, leveraging the power of technology to drive efficiency, productivity, and growth.
            </p>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
              <a href="#" className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-6">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>

        {/* Image (conditionally rendered based on screen size) */}
        <div className="hidden md:flex ">
          <Image src='/Featured_Img.jpg' alt="Hero Image" width={600} height={100} />
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
