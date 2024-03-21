import React from 'react'; // Import React module
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <div> {/* Wrap all JSX elements in a parent element */}
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/artstation.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/tik-tok.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/discord.png" alt="" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
