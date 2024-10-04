'use client';
import Brain from '@/components/brain';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className=" h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div
            className="  p-4 sm:p-8 md:p-12 lg:p-20  flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
                src="/me.JPG"
                alt=""
                width={150}
                height={150}
                className="w-25 h-25 rounded-md object-cover shadow-xl  border-8  overflow-hidden hover:scale-110 transition-transform duration-300"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-[48px]">BIOGRAPHY🧬</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-[24px] text-justify">
              ✌<br/>
              I’m an undergraduate at the University of Sri Jayewardenepura in
              the Faculty of Technology. I have good knowledge, experience, and
              excitement in Full-stack development mostly in JavaScript- related
              technologies and UI/UX design.And also I'm so passionate and
              interested in Game development and Game design Because video
              gaming is part of my life😁. I also like to do creative things and
              I think I have the skill to do that. So currently I have a Good academic knowledge too. I’m always trying to update with new technologies and
              continuously learning all the things currently doing as well as
              what I would like to do in the future.👨🏻‍💻
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="text-[20px] italic">◻▫What is "real"?▪◼</span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                  width="200"
                  height="100"
                  viewBox="0 0 637 443"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M635 215.005C630.745 215.005 627.102 215.583 623 217.005C607.564 222.356 593.11 227.611 577 231.116C505.661 246.638 434.472 262.388 363.556 279.783C312.08 292.409 260.365 304.072 209.333 318.449C189.667 323.99 169.969 328.22 150.5 334.505C137.986 338.545 125.246 340.269 113.333 345.338C109.027 347.171 104.622 346.005 100.111 346.005C96.7865 346.005 95.3921 349.213 92.2222 350.005C89.4127 350.707 90 356.267 90 358.449C90 363.47 93.6496 365.31 98.4444 365.949C119.87 368.806 131.841 352.832 146.5 340.116C159.703 328.663 169.951 314.797 181.556 301.783C187.147 295.512 190.87 288.429 194.889 281.116C199.426 272.859 204.547 264.999 208.056 256.227C220.51 225.09 229.295 192.48 229.944 158.727C230.102 150.515 230.362 142.151 229.833 133.949C229.231 124.616 224.644 116.492 222.333 107.561C220.699 101.242 220.792 94.693 219.333 88.3384C217.429 80.0428 214.578 71.8511 211.889 63.7828C207.402 50.3237 202.565 36.6736 196.111 24.005C194.237 20.3254 191.556 17.2982 190.222 13.3384C188.554 8.38565 187.839 6.42384 182.5 5.0606C178.454 4.02768 174.393 1.88236 170.222 2.00505C159.618 2.31695 151.241 10.4018 143.667 16.8939C121.368 36.0071 100.93 61.8089 91.6111 90.1717C89.6223 96.2247 88.8531 102.531 86.5556 108.505C82.9521 117.874 76.649 126.762 75 136.783C72.6215 151.237 71 166.684 71 181.338C71 196.745 71.9809 210.512 75.2222 225.561C77.3921 235.635 79.8952 245.484 82.4444 255.449C84.3279 262.812 86.2288 270.479 89 277.561C91.7269 284.529 96.0837 289.952 99.4444 296.449C102.456 302.271 107.83 305.329 113.333 308.561C118.956 311.863 122.982 316.604 128.944 319.449C152.631 330.754 177.057 325.409 200.778 316.894C207.7 314.409 216.599 311.737 222 306.561C226.651 302.103 229.937 296.304 234.056 291.394C238.148 286.515 241.31 280.536 244.222 274.894C247.54 268.466 254.952 268.537 257.444 260.894C259.086 255.859 261.41 249.113 259.556 243.783C258.885 241.855 258.612 237.056 257.389 235.561C254.616 232.172 243.054 233.606 239.611 234.116C235.769 234.685 232.457 239.275 229.778 241.783C225.271 246.002 220.029 249.903 215.056 253.561C202.598 262.72 201.455 280.161 202.056 294.283C202.397 302.305 209.004 303.216 216.056 302.949C225.3 302.601 236.347 302.13 241.333 293.005C245.138 286.043 246.825 278.366 249.056 270.838C252.258 260.029 254.75 248.712 256.056 237.616C256.128 237.002 256.782 234.97 256.944 237.005C257.366 242.272 257.037 247.726 257 253.005C256.905 266.64 252.601 279.099 251.111 292.505C250.798 295.319 250.096 298.456 250 301.227C249.708 309.7 252.306 297.849 253.056 295.338C256.787 282.837 261.719 270.789 265.556 258.338C268.889 247.519 270.348 236.416 273.056 225.449C276.924 209.781 278.771 193.581 283.889 178.227C288.5 164.393 292.193 150.24 295 135.894C297.239 124.452 300.855 113.597 303.778 102.338C306.873 90.415 304.557 103.201 303.333 107.949C298.69 125.966 296.535 144.096 290.389 161.727C284.962 177.297 281.227 194.901 273.778 209.672C269.453 218.247 267.069 226.856 263.944 235.838C261.617 242.531 258.415 248.917 256.222 255.672C254.171 261.99 250.802 269.386 250.111 275.949C249.58 280.998 249.408 284.915 247.222 289.561C245.763 292.661 245.593 296.227 244.5 299.505C242.557 305.334 242.988 307.368 248 301.783C256.05 292.813 263.747 283.735 270.611 273.838C276.863 264.824 281.541 255.443 288.333 246.783C294.37 239.086 298.464 229.865 303.889 221.727C305.448 219.389 306 218.515 306 215.783C306 196.001 302.072 256.016 307.222 275.116C308.114 278.422 308.643 287.596 311.556 289.449C315.986 292.269 322.296 285.04 324.333 282.005C335.026 266.075 338.877 251.139 339 232.005C339.031 227.166 338.801 222.285 339 217.449C339.204 212.501 341.805 208.468 342.778 203.727C343.343 200.969 343.866 192.568 341.111 199.338C337.383 208.5 331.607 218.125 330.056 227.949C329.26 232.987 326.174 237.749 326 242.783C325.808 248.34 325.995 253.981 326.556 259.505C326.748 261.401 325.919 277.489 326.889 277.783C330.707 278.94 330.161 278.087 332.056 281.561C333.643 284.472 333.091 283.909 334 280.894C337.215 270.235 343.894 261.163 346.556 250.338C348.435 242.695 351.689 235.645 354.222 228.227C357.095 219.815 363.655 212.548 365.889 204.172C367.584 197.815 373.146 194.73 377.222 190.005C378.171 188.906 382 182.797 382 187.283C382 199.806 377.579 211.83 375.667 224.116C374.088 234.254 374 245.192 374 255.449C374 258.103 372.564 267.235 374.667 269.338C382.238 276.91 405.782 247.347 408.556 242.672C414.718 232.284 415.257 219.239 417 207.561C418.676 196.334 423 186.546 423 175.116C423 174.188 423.225 162.891 422.944 165.838C421.97 176.071 419.325 186.023 418.222 196.227C416.51 212.061 412.944 230.153 417.556 245.783C418.755 249.846 421.086 254.681 424.778 257.005C428.93 259.619 436.693 258.174 440.556 255.838C452.914 248.366 461.151 236.949 465.333 223.116C466.13 220.48 471.254 203.921 465.389 202.116C455.271 199.003 441.665 207.034 434 212.449C413.623 226.846 396.578 246.989 379.722 265.172C361.437 284.897 341.372 302.716 322.333 321.672C301.157 342.756 280.288 363.001 257.389 382.227C250.422 388.077 243.373 393.73 236.167 399.283C226.875 406.443 218.024 415.216 207.778 421.005C195.032 428.206 180.698 434.94 166.667 439.338C165.113 439.825 155.742 442.951 154 440.338C151.358 436.375 152.832 427.468 153.056 423.005C153.217 419.786 153.339 416.229 156.444 414.394C167.01 408.151 180.293 407.419 191.333 402.005C203.617 395.982 215.505 389.159 228.222 383.949C251.774 374.302 279.014 378.591 303.667 379.561C330.777 380.626 357.981 380.005 385.111 380.005C398.061 380.005 410.998 380.203 423.944 380.505C438.628 380.848 454.206 382.279 468.444 377.783C490.847 370.708 518.034 354.083 530.333 333.227C532.282 329.922 537.778 323.841 537.778 320.005C537.778 316 535.292 313.251 536 309.005"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                />
                <path
                    d="M337 162.005C330.135 161.147 339.425 151.372 342 150.227C343.897 149.384 344.718 151.423 344.944 153.005C345.437 156.454 343.828 157.736 342.056 160.394C339.201 164.676 336.072 146.089 342 149.227C345.6 151.133 342.995 163.171 337.5 161.949C334.323 161.244 333.556 153.498 337.056 153.061C343.172 152.296 344.274 162.005 339 162.005C330.533 162.005 331.041 146.933 338.889 146.061C344.036 145.489 344.281 157.418 340.778 159.783C334.118 164.278 333.08 157.589 336.778 152.561C341.019 146.793 344 151.62 344 156.949C344 159.82 341.214 162.33 338.667 159.783C336.164 157.28 335.989 152.653 334.222 149.783C332.365 146.764 341.979 138.447 343.056 147.061C343.679 152.045 347.041 158.005 338.556 158.005C332.045 158.005 335.68 150.005 340 150.005C343.883 150.005 345.646 158.862 342.944 161.338C341.564 162.604 338.523 162.005 336.778 162.005C332.515 162.005 333.003 160.016 332 156.005"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                />
                <path
                    d="M2 222.005C34.2573 230.069 69.4434 225.052 102.111 223.005C193.075 217.306 285.598 209.249 374.389 187.783C405.278 180.315 435.652 170.765 466.444 162.894C478.297 159.864 490.282 157.095 502 153.561C507.684 151.846 513.963 147.005 520 147.005"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
                initial={{opacity: 0.2, y: 0}}
                animate={{opacity: 1, y: '10px'}}
                transition={{repeat: Infinity, duration: 3, ease: 'easeInOut'}}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
            >
              <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
                initial={{x: '-300px'}}
                animate={isSkillRefInView ? {x: 0} : {}}
                transition={{delay: 0.2}}
                className="font-bold text-[32px]"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
                initial={{x: '-300px'}}
                animate={isSkillRefInView ? {x: 0} : {}}
                className="flex gap-4 flex-wrap text-[24px]"
            >
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div> */}
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Unreal Engine
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Graphic design
              </div>
              {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div> */}
              <div className="rounded  p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                python
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C#
              </div>
              {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div> */}
              {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div> */}
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Adobe xd
              </div>
              <div className="rounded  p-2  cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
                initial={{opacity: 0.2, y: 0}}
                animate={{opacity: 1, y: '10px'}}
                transition={{repeat: Infinity, duration: 3, ease: 'easeInOut'}}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
            >
              <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
              className="flex flex-col gap-12 justify-center pb-48"
              ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
                initial={{x: '-300px'}}
                animate={isExperienceRefInView ? {x: '0'} : {}}
                transition={{delay: 0.2}}
                className="font-bold text-[32px]"
            >
              MY EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
                initial={{x: '-300px'}}
                animate={isExperienceRefInView ? {x: '0'} : {}}
                className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="text-[24px] flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    JavaScript Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-[18px] mt-[10px] border-4 border-black rounded-md ">
                    I have nearly 3 year experience in JavaScript related
                    technologies,frameworks,some essential parts and best
                    practices.{' '}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-teal-400 text-[18px] font-semibold">
                    2021 - Present
                  </div>
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div> */}
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-teal-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="text-[24px] flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-teal-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    React & Next Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-[18px] mt-[10px] border-4 border-black rounded-md ">
                    I have nearly 2 years of experience in React.Js and I have a
                    good idea of the basic key concept of React.Js.Also, I do
                    have Next.Js development knowledge and knowledge about their
                    basic concepts too.{' '}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-teal-400 text-[18px] font-semibold">
                    2022 - Present{' '}
                  </div>
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div> */}
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="text-[24px] flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    UI/UX Designer{' '}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-[18px] mt-[10px] border-4 border-black rounded-md">
                    I also have an interest about to do UI/UX Design related to
                    web designing, and mobile app development. I have some
                    experience with work within Figma & Adobe XD.{' '}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-teal-400 text-[18px] font-semibold">
                    2010 - 2019{' '}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-teal-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="text-[24px] flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-teal-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Game Development & Game Designing
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-[18px] mt-[10px] border-4 border-black rounded-md">
                    I did some small gaming projects as a hobby. I have
                    beginner-level experience in using Unreal Engine 4.3 & 5. I
                    still learning a lot of things Game development and Game
                    design.{' '}
                  </div>

                  {/* JOB DATE */}
                  <div className=" p-3 text-teal-400 text-[18px] font-semibold">
                    2022 - Present{' '}
                  </div>

                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        {/*<div className="hidden lg:block h-full w-1/3 absolute top-0 right-0 z-30 ">*/}
        {/*  <Brain scrollYProgress={scrollYProgress}/>*/}
        {/*</div>*/}

      </div>
    </motion.div>
  );
};

export default AboutPage;
