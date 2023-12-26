import Link from "next/link";
import Button from "./Button";
import React, { MouseEvent } from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[url(https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?format=auto&auto=compress&dpr=2&crop=entropy&fit=crop&w=1920&h=1282&q=80)]">
      <span className=" flex flex-col items-center justify-center mx-auto">
        <h2 className="font-bold text-center text-3xl lg:text-3xl xl:text-5xl">Unleashing Future Data, Today.</h2>
        <div className="p-4 text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
          Datenium is a software development company focused on creating <br /> customized high-performance solutions.
        </div>

      </span>
      <div>
        <Button className=" hover:scale-110 hover:bg-indigo-500 duration-300 my-10"> 
        <Link href="/contacts">Contact us</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
