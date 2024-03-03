// import Image from "next/image";
import Link from 'next/link';
// import { useState } from "react";
// import NavLink from "./navLink";
// import { motion } from "framer-motion";
const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Lahiru</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .D
          </span>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          // onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-8 fle-col justify-between"></div>
          <div className="w-10 h-8 fle-col justify-between"></div>
          <div className="w-10 h-8 fle-col justify-between"></div>
        </button>
      </div>
      <div className="">2</div>
    </div>
  );
};

export default Navbar;
