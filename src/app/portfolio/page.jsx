'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import ReactCarousel from '@/components/reactCarousel';
import { useRef } from 'react';

const images2 = [
  { src: '/path/to/image4.jpg', alt: 'Image 4', caption: 'Image 4' },
  { src: '/path/to/image5.jpg', alt: 'Image 5', caption: 'Image 5' },
  { src: '/path/to/image6.jpg', alt: 'Image 6', caption: 'Image 6' },
];

const items = [
  {
    id: 1,
    color: 'from-purple-300 to-purple-600',
    title: 'Attire Avenue',
    subtittle: 'E-Commerce Web application',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://mern-attire-avenue-app-8606.onrender.com/',
    images: [
      {
        src: '/attireavenue/1hompage.png',
        alt: 'Image 1',
        caption: 'Home page',
      },
      { src: '/attireavenue/1I.png', alt: 'Image 2', caption: ' Footer' },
      {
        src: '/attireavenue/2productcatalouge.png',
        alt: 'Image 3',
        caption: 'Product cards',
      },
      {
        src: '/attireavenue/3sigin.png',
        alt: 'Image 2',
        caption: 'Signin Page',
      },
      {
        src: '/attireavenue/4cart.png',
        alt: 'Image 3',
        caption: 'Shoping cart',
      },
    ],
  },
  {
    id: 2,
    color: 'from-purple-600 to-red-600',
    title: 'theRealblog',
    subtittle: 'Blog Full-stack App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    link: 'https://lama.dev',
    images: [
      { src: '/path/to/image1.jpg', alt: 'Image 4', caption: 'Image 4' },
      { src: '/path/to/image2.jpg', alt: 'Image 5', caption: 'Image 5' },
      { src: '/path/to/image3.jpg', alt: 'Image 6', caption: 'Image 6' },
    ],
  },
  {
    id: 3,
    color: 'from-red-600 to-violet-900',
    title: 'Reelfactz',
    subtittle: 'E-Commerce Web application',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    link: 'https://lama.dev',
    images: [
      { src: '/path/to/image1.jpg', alt: 'Image 1', caption: 'Image 1' },
      { src: '/path/to/image2.jpg', alt: 'Image 2', caption: 'Image 2' },
      { src: '/path/to/image3.jpg', alt: 'Image 3', caption: 'Image 3' },
    ],
  },
  {
    id: 4,
    color: 'from-violet-900 to-pink-600',
    title: 'Issue-Tracker',
    subtittle: 'Full-stack Web App to track the issue',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    link: 'https://lama.dev',
    images: [
      { src: '/path/to/image1.jpg', alt: 'Image 1', caption: 'Image 1' },
      { src: '/path/to/image2.jpg', alt: 'Image 2', caption: 'Image 2' },
      { src: '/path/to/image3.jpg', alt: 'Image 3', caption: 'Image 3' },
    ],
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-9xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div
                  className="  flex flex-col gap-4 text-white"
                  style={{ paddingTop: '75px', paddingBottom: '100px' }}
                >
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>

                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[3\450px] xl:w-[600px] xl:h-[420px] shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                    {/* <Image
                      src={item.img}
                      alt=""
                      fill
                      className="w-full h-full object-cover"
                    /> */}
                    <ReactCarousel
                      images={item.images}
                      subtittle={item.subtittle}
                    />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <div className="flex">
                    {' '}
                    <Link
                      href="/morePortfolio"
                      className=" flex w-fit p-2 mr-80  justify-right"
                    >
                      <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: '10px' }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: 'easeInOut',
                        }}
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
                        <path
                          d="M12 6V14"
                          stroke="#000000"
                          strokeWidth="1"
                        ></path>
                        <path
                          d="M15 11L12 14L9 11"
                          stroke="#000000"
                          strokeWidth="1"
                        ></path>
                      </motion.svg>
                      <span className="font-bold text-xl w-fit h-fit pl-2 pt-3  hover:text-black ">
                        see more
                      </span>
                    </Link>
                    <Link
                      href={item.link}
                      className="w-fit h-fit   justify-center"
                    >
                      <button
                        className={`p-4 text-black rounded-lg ring-1 font-bold ring-white bg-white transition-colors hover:bg-gradient-to-r ${item.color} hover:text-white hover:ring-white`}
                      >
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-stack Developer and UI/UX Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
