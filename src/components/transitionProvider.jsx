'use client';

import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar';
import Footer from './footer';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Button from './Button';

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-400 dark:to-black transition-colors duration-300"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black dark:bg-gray-200 rounded-b-[100px] z-40 transition-colors"
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white dark:text-black text-8xl cursor-default z-50 w-fit h-fit transition-colors"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black dark:bg-gray-200 rounded-t-[100px] bottom-0 z-30 transition-colors"
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
