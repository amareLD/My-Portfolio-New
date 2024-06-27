'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './navlink';
import { motion } from 'framer-motion';
import Button from './Button';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}

      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}

      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm text-white bg-black rounded-md p-1 font-semibold flex items-center justify-center ring-1 ring-white transition-colors hover:bg-Black hover:text-black hover:ring-white group"
        >
          <span className="w-12 h-8 mr-1 rounded flex items-center justify-center bg-black text-white group-hover:bg-white group-hover:text-black transition-colors">
            Lahiru
          </span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
            _D
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/amareLD">
          <div className="relative   group ">
            <Image
              src="/github.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150 "
            />
          </div>
        </Link>
        <Link href="https://lahirudarshana.medium.com/">
          <div className="relative   group ">
            <Image
              src="/medium.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150 "
            />
          </div>
        </Link>
        <Link href="https://www.artstation.com/lahirudarshana8">
          <div className="relative   group ">
            <Image
              src="/artstation.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150"
            />
          </div>
        </Link>
        <Link href="https://www.instagram.com/lahiru_____d/">
          <div className="relative   group ">
            <Image
              src="/instagram.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150"
            />
          </div>
        </Link>
        <Link href="https://web.facebook.com/profile.php?id=100008853782648">
          <div className="relative   group ">
            <Image
              src="/facebook.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150"
            />
          </div>
        </Link>
        <Link href="https://www.tiktok.com/@lahiru_d">
          <div className="relative   group ">
            <Image
              src="/tik-tok.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150"
            />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/lahiru-darshana-70889727b/">
          <div className="relative   group ">
            <Image
              src="/linkedin.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150"
            />
          </div>
        </Link>
        <Link href="https://discord.com/channels/978967354107109437/978967354820157492">
          <div className="relative   group ">
            <Image
              src="/discord.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150"
            />
          </div>
        </Link>
        <Button />
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden lg:hidden ">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
            <div className="bg-white bg-opacity-90 h-20 md:h-16 items-center justify-center flex gap-3 md:w-2/3 w-full rounded p-0.5">
              <Link href="https://github.com/amareLD">
                <div className="relative   group ">
                  <Image
                    src="/github.png"
                    alt=""
                    width={24}
                    height={24}
                    className="transition duration-300 ease-in-out transform group-hover:scale-150 "
                  />
                </div>
              </Link>
              <Link href="https://www.artstation.com/lahirudarshana8">
                <div className="relative   group ">
                  <Image
                    src="/artstation.png"
                    alt=""
                    width={24}
                    height={24}
                    className="transition duration-300 ease-in-out transform group-hover:scale-150"
                  />
                </div>
              </Link>
              <Link href="https://www.instagram.com/lahiru_____d/">
                <div className="relative   group ">
                  <Image
                    src="/instagram.png"
                    alt=""
                    width={24}
                    height={24}
                    className="transition duration-300 ease-in-out transform group-hover:scale-150"
                  />
                </div>
              </Link>
              <Link href="https://web.facebook.com/profile.php?id=100008853782648">
                <div className="relative   group ">
                  <Image
                    src="/facebook.png"
                    alt=""
                    width={24}
                    height={24}
                    className="transition duration-300 ease-in-out transform group-hover:scale-150"
                  />
                </div>
              </Link>
              <Link href="https://www.tiktok.com/@lahiru_d">
                <div className="relative   group ">
                  <Image
                    src="/tik-tok.png"
                    alt=""
                    width={24}
                    height={24}
                    className="transition duration-300 ease-in-out transform group-hover:scale-150"
                  />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/lahiru-darshana-70889727b/">
                <div className="relative   group ">
                  <Image
                    src="/linkedin.png"
                    alt=""
                    width={24}
                    height={24}
                    className="transition duration-300 ease-in-out transform group-hover:scale-150"
                  />
                </div>
              </Link>
              <Link href="https://discord.com/channels/978967354107109437/978967354820157492">
                <div className="relative   group ">
                  <Image
                    src="/discord.png"
                    alt=""
                    width={24}
                    height={24}
                    className="transition duration-300 ease-in-out transform group-hover:scale-150"
                  />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
