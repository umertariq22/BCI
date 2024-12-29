'use client';
import React, { useState } from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/button';
import Sidebar from '../components/sidebar';
import SearchInput from '../components/ui/search-input';
import AccountDropdown from '../components/account-dropdown';
import CircularKeyboard from '../components/circular-keyboard';

const Page = () => {
  const [search, setSearch] = useState('');

  const suggestions = [
    'Apple',
    'Mobile Phone',
    'Phobia'
  ];

  const handleChange = (input: string) => {
    setSearch(input);
  };

  const handleKeyPress = (key: string) => {
    if (key === 'Space') {
      setSearch((prev) => prev + ' ');
    } else if (key === 'Backspace') {
      setSearch((prev) => prev.slice(0, -1));
    } else if (key === 'Enter') {
      console.log('Search submitted:', search);
    } else {
      setSearch((prev) => prev + key);
    }
  };

  return (
        <div className='flex-1 flex flex-col p-2 lg:p-4'>
          <div className='mt-1 lg:mt-0'>
            <div className='max-w-4xl mx-auto'>
              <h1 className='text-xl font-semibold lg:text-2xl'>What can I help you with?</h1>
              <SearchInput input={search} onChange={(e: any) => handleChange(e.target.value)} />
              <h1 className='mt-8 text-lg font-semibold'>My Virtual Keyboard</h1>
              <div className=" flex justify-center">
                <CircularKeyboard onKeyPress={handleKeyPress} />
              </div>
              {/* <div className='mt-8 flex justify-end'>
                <Button>
                  <div className='flex items-center gap-3'>
                    <span>Search</span>
                    <ArrowRightCircleIcon className='size-5 text-white' />
                  </div>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
  );
};

export default Page;
