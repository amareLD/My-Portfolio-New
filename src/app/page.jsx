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
      className=" flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  "
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row  pb-10 mb-20">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full md:w-3/5 lg:w-1/2 md:-bottom- lg:pr-8 mb-8 lg:mb-0  ">
          <Image
            src="/portfoliome.png"
            alt="hero"
            layout=""
            width={550}
            height={550}
            className="absolute    bottom-0 left-0 md:-bottom-32 md:-left-32 object-contain overflow-hidden "
          />
          <Image
            src="/hero3.png"
            alt="hero"
            layout=""
            width={350}
            height={350}
            className="absolute p-0 m-0   md:-bottom-32 md:-left-0 object-contain overflow-hidden hover:scale-110 transition-transform duration-300 rounded-lg"
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center pt-10  ">
          {/*NAME*/}
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Hello👋 , I'm <span className="text-white">Lahiru Darshana.</span>
            <br />
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[40px] font-secondary  h-24
          font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4"> I am a </span>
              <TypeAnimation
                sequence={[
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

          {/* DESC */}
          <p
            className="text-lg md:text-xl mb-8 text-white font-bold "
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            " Welcome to my digital canvas, where innovation and creativity
            converge. This canvas showcases a diverse collection of projects
            that reflect my commitment to excellence."
          </p>
          {/* BUTTONS */}
          <div className="flex flex-col lg:flex-row gap-4 mt-0">
          <Link href="/portfolio" >
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white mb-2 lg:mb-0 transition-colors hover:bg-teal-400 hover:text-black hover:ring-black">
              View My Work
            </button>
          </Link>
           
            <Link href="/contact" >
              <button className="p-4 rounded-lg ring-1 ring-white bg-white text-black transition-colors hover:bg-teal-400 hover:text-white hover:ring-white">
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
