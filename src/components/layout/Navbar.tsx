'use client';

import React from 'react';

import Link from 'next/link';

import { navItems } from '@/constants/navigation';

import Icon from '../icon';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sticky top-0 left-0 w-full z-50'>
      <div className='flex items-center justify-between px-4 py-2 sm:py-4'>
        <div className='hidden sm:block mx-auto rounded-full bg-white/50 backdrop-blur-md shadow-md overflow-hidden'>
          <ul className='inline-flex px-6 space-x-6'>
            {navItems.map((item) => (
              <Link href={item.href} key={item.id}>
                <li className='py-3 text-sm font-medium text-black hover:text-orange'>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <Button
          size='icon'
          variant='outline'
          className='mx-auto sm:hidden border-none rounded-full bg-white/50 backdrop-blur-md shadow-md'
          onClick={toggleMenu}
        >
          {!isMenuOpen ? (
            <Icon name='RiArrowDownS' className='rotate-0 transition' />
          ) : (
            <Icon name='RiArrowDownS' className='rotate-180 transition' />
          )}
        </Button>

        {isMenuOpen && (
          <div className='w-full absolute top-full left-0 z-50 sm:hidden transition'>
            <div className='w-48 mx-auto rounded-lg bg-white/50 backdrop-blur-lg shadow-md overflow-hidden'>
              <ul className='p-4 flex flex-col space-y-2'>
                {navItems.map((item) => (
                  <Link href={item.href} key={item.id}>
                    <li className='py-2 text-sm font-medium text-black hover:text-orange text-center'>
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
