import Button from "./Button";
import React, { MouseEvent } from 'react';

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <span className=" flex flex-col items-center justify-center  mx-auto">
        <h2 className="font-bold text-center text-3xl lg:text-3xl xl:text-5xl text-transparent text-transparent text-transparent bg-gradient-radial from-[rgba(2,0,36,1)] via-[rgba(121,9,86,1)] to-[rgba(0,212,255,1)] bg-clip-text">Unleashing Future Data, Today.</h2>
        <div className="p-4 text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
          Datenium is a software development company focused on creating <br /> customized high-performance solutions.
        </div>

      </span>
      <div>
        <Button className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 my-10">Contact us</Button>
      </div>
    </div>



    // <section className="bg-white text-black md:min-h-screen lg:min-h-screen">
    //   <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-6 md:min-h-screen lg:min-h-screen">
    //     <div className="flex flex-col">
    //       <div className="text-left p-2 ">
    //         <h1 className="text-2xl md:text-xl lg:text-2xl xl:text-6xl font-bold mb-6">
    //           <strong>Datenium</strong> - where innovation meets intelligence.
    //         </h1>
    //         <p className="text-xl lg:text-2xl 2xl:text-3xl">
    //           At Datenium, we are driven by a passion for leveraging
    //           cutting-edge artificial intelligence to transform industries. Our
    //           expert team specializes in crafting data-driven solutions that
    //           propel businesses into the future. From insightful consulting to
    //           digital mastery, cloud and DevOps excellence, and robust software
    //           engineering, we are your strategic partner in navigating the
    //           evolving landscape of technology.
    //         </p>
    //         <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
    //           <a
    //             href="#"
    //             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Get started
    //           </a>
    //           <a
    //             href="#"
    //             className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-6"
    //           >
    //             Learn more <span aria-hidden="true">→</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex items-center justify-center relative">
    //       <Image
    //         src="/web_development_banner.svg"
    //         className="top-0 left-0 w-full h-full"
    //         priority
    //         alt="Screenshots of the dashboard project showing desktop version"
    //         width={0}
    //         height={0}
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroSection;
