// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between text-white">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <a href="/" className="flex items-center ">
              {/* Uncomment the line below and replace the src attribute with your logo URL */}
              {/* <img src="your-logo-url" className="h-8 me-3" alt="Company Logo" /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DigiWeb Technology</span>
            </a>
            <p className='flex items-center my-3'>
              DigiWeb Technology is a software development company that partners with large enterprises and innovative startups to bring ideas of any scale to life. Our expert services include building MVPs, developing software products from scratch, and scaling teams. We have a flexible pipeline that adapts to each client's unique needs, delivering results that empower you to achieve your business goals.
            </p>
          </div>

          <div className=" grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="dark:text-white font-medium">
                <li>
                  <a href="#" className="hover:underline">Stories</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Investors</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Careers</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">About</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="dark:text-white dark:text-gray-400 font-medium">
                <li>
                  <a href="#" className="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="dark:text-white font-medium">
                <li>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 dark:border-black-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear} <a href="/" className="hover:underline">DigiWeb Technology</a>. All Rights Reserved.
          </span>


          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <div className="flex justify-center space-x-4">
              <Link href="https://www.facebook.com" passHref>
                <FaFacebook className="text-2xl text-violet-500 cursor-pointer hover:text-blue-500" />
              </Link>
              <Link href="https://www.linkedin.com" passHref>
                <FaLinkedin className="text-2xl text-violet-500 cursor-pointer hover:text-blue-500" />
              </Link>
              <Link href="https://twitter.com" passHref>
                <FaTwitter className="text-2xl  text-violet-500 cursor-pointer hover:text-blue-500" />
              </Link>
              <Link href="https://www.instagram.com" passHref>
                <FaInstagram className="text-2xl  text-violet-500 cursor-pointer hover:text-blue-500" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>


  );
};



export default Footer;
