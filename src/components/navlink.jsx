'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <div className="relative group">
      <Link
        className={`rounded p-1 ${
          pathName === link.url ? 'bg-black text-white' : 'text-black'
        }`}
        href={link.url}
      >
        {link.title}
      </Link>
      <span className="block h-[3px] bg-black absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </div>
  );
};

export default NavLink;
