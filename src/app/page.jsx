'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const Homepage = () => {
//   return (
//     <motion.div
//       className="h-full "
//       initial={{ y: '-200vh' }}
//       animate={{ y: '0%' }}
//       transition={{ duration: 1 }}
//     >
//       <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
//         {/* IMAGE CONTAINER */}
//         <div className="h-1/2 lg:h-full lg:w-1/2 relative  ">
//           <Image
//             src="/hero.svg"
//             alt="hero"
//             fill
//             className="object-contain  overflow-hidden hover:scale-110 transition-transform duration-300  rounded-lg"
//           />
//         </div>
//         {/* TEXT CONTAINER */}
//         <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
//           {/*NAME*/}
//           {/* <span className="text-4xl md:text-6xl font-bold">hbnnnnnnnnnhb</span> */}
//           {/* TITLE */}
//           <h1
//             className="text-4xl md:text-6xl font-bold"
//             style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
//           >
//             Hello👋 , I'm <span className="text-white">Lahiru Darshana.</span>
//             <br />
//             <span className="text-white">I'm a </span>
//             Full-stack Web Developer
//           </h1>
//           {/* DESC */}
//           <p className="md:text-xl">
//             Welcome to my digital canvas, where innovation and creativity
//             converge.This canvas show of my portfolio showcases a diverse
//             collection of projects that reflect my commitment to excellence.
//           </p>
//           {/* BUTTONS */}
//           <div className="w-full flex gap-4">
//             <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
//               View My Work
//             </button>
//             <button className="p-4 rounded-lg ring-1 ring-black">
//               Contact Me
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Homepage;

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '@/components/varients';
import Button from '../components/Button';
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div
      className="flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-18"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row pb-10 lg:mt-20 xl:mt-10 mb-20 ">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full lg:w-1/2 xl:w-1/2 lg:pr-8 mb-8 lg:mb-0 ">
          {/* Mobile and Tablet Images - Smaller and Centered */}
          <div className=" lg:hidden sm:flex flex justify-center items-center ">
            <div className="relative">
              <Image
                src="/portfoliome.png"
                alt="hero"
                width={300}
                height={300}
                className="object-contain w-[220px] sm:w-[230px] md:w-[280px] top-4 left-4 sm:mt-4 sm:mb-2 md:mt-8 md:mb-2 mt-4 mb-4"
              />
              <Image
                src="/hero3.png"
                alt="hero"
                width={200}
                height={200}
                className="absolute top-1 left-12 sm:top-2 sm:left-14 md:top-2 md:left-16 object-contain hover:scale-110 transition-transform duration-300 rounded-lg w-[140px] sm:w-[140px] md:w-[180px]"
              />
            </div>
          </div>

          {/* Desktop Images - Original Layout */}
          <div className="hidden lg:block relative h-[400px] xl:h-[550px] ">
            <Image
              src="/portfoliome.png"
              alt="hero"
              width={550}
              height={550}
              className="lg:ml-4 xl:ml-24 absolute bottom-0 left-0 md:-bottom-32 md:-left-32 lg:left-6 xl:-bottom-32 xl:-left-20 object-contain overflow-hidden lg:w-[380px] xl:w-[550px]"
            />
            <Image
              src="/hero3.png"
              alt="hero"
              width={350}
              height={350}
              className="absolute md:-bottom-32 md:left-0 lg:left-32 xl:-bottom-32 xl:left-32 object-contain overflow-hidden hover:scale-110 transition-transform duration-300 rounded-lg  lg:w-[250px] xl:w-[350px]"
            />
          </div>
        </div>

        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-center pt-4 lg:pt-10">
          {/* NAME */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 text-center lg:text-left"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Hello👋, I'm <span className="text-white">Lahiru Darshana.</span>
            <br />
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 lg:mb-6 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-secondary h-16 sm:h-20 lg:h-24 font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  'AI/ML Enthusiast',
                  2000,
                  'Full-stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Web Designer',
                  2000,
                  
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl mb-6 lg:mb-8 text-white font-bold text-center lg:text-left"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            "Welcome to my digital canvas, where innovation and creativity
            converge. This canvas showcases a diverse collection of projects
            that reflect my commitment to excellence."
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row lg:flex-row gap-4 mt-0 items-center lg:items-start">
            <Link href="/portfolio">
              <button className="w-full sm:w-auto px-6 py-3 lg:p-4 rounded-lg ring-1 ring-black bg-black text-white transition-colors hover:bg-teal-400 hover:text-black hover:ring-black">
                View My Work
              </button>
            </Link>

            <Link href="/contact">
              <button className="w-full sm:w-auto px-6 py-3 lg:p-4 rounded-lg ring-1 ring-white bg-white text-black transition-colors hover:bg-teal-400 hover:text-white hover:ring-white">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;