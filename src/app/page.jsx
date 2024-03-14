'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative     ">
          <Image src="/hero.png" alt="" fill className="object-contain  overflow-hidden hover:scale-110 transition-transform duration-300  rounded-lg" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/*NAME*/}
          {/* <span className="text-4xl md:text-6xl font-bold">hbnnnnnnnnnhb</span> */}
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello👋 , I'm <span className="text-white">Lahiru Darshana.</span>
            <br/>
            <span className="text-white">I'm a </span>
             Full-stack Web Developer
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge.This canvas show of my portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
