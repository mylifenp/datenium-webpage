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
              NavyaNirmata.io: Pioneering Modern Solutions with Creativity and Precision.
            </h1>
            <p className="text-base md:text-md lg:text-lg xl:text-xl ">
              NavyaNirmata.io is your dedicated partner for comprehensive development solutions. With a focus on excellence and innovation, we bring together skilled development teams tailored to meet your unique needs. Whether you`&apos;`re embarking on a software project, building a digital presence, or enhancing your technological capabilities, NavyaNirmata.io delivers top-notch expertise. Our commitment to quality and efficiency ensures that your vision transforms into reality. Explore the limitless possibilities with NavyaNirmata.io – where development meets ingenuity for all your requirements.</p>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
              <a href="#" className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-6">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>

        {/* Image (conditionally rendered based on screen size) */}
        <div className="flex items-center justify-center relative">
          <Image src='/web_development_banner.svg'
            className="top-0 left-0 w-full h-full"
            priority
            alt="Screenshots of the dashboard project showing desktop version" 
            width={1000}
            height={760} 
            />
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
