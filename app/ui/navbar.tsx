// components/Navbar.js
"use client";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    document.body.classList.add('overflow-hidden');
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <nav className=" text-white bg-gray-800 p-4 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="font-bold text-xl lg:text-2xl 2xl:text-3xl">Datenium</span>

        </Link>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="text-white lg:hidden absolute top-0 left-0 w-full h-full bg-gray-800 z-50">
            <div className="flex items-center justify-center w-full h-full">
              <button className="text-white absolute top-4 right-4 " onClick={closeMenu}>
                <FiX size={24} />
              </button>
              <ul className="text-white flex flex-col space-y-4 ">
                <li className='md:text-2xl lg:text-3xl 2xl:text-5xl'>
                  <Link href="/" onClick={closeMenu}>Home</Link>
                </li>
                <li className='md:text-2xl lg:text-3xl xxl:text-5xl'>
                  <Link href="/about" onClick={closeMenu}>About</Link>
                </li>
                {/* <li>
                  <Link href="/services" onClick={closeMenu}>Services
                  </Link>
                </li> */}
                <li>
                  <Link href="/contacts" onClick={closeMenu}>Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 text-xl lg:text-xl 2xl:text-2xl">
          <Link href="/about">About
          </Link>
          {/* <Link href="/services">Services
          </Link> */}
          <Link href="/contacts">Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
