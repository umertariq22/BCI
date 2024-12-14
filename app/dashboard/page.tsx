'use client';
import React, { useState } from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Button from '../components/ui/button';
import SearchInput from '../components/ui/search-input';

const Page = () => {
  const [search, setSearch] = useState("");

  const suggestions = [
    'Apple',
    'Mobile Phone',
    'Phobia'
  ]

  const handleChange = (input: string) => {
    setSearch(input);
  };

  const handleKeyPress = (button: string) => {
    console.log("Button pressed:", button);
  };

  return (

            <div className='max-w-4xl mx-auto'>
              <h1 className='text-xl font-semibold lg:text-2xl'>What can I help you with?</h1>
              <SearchInput input={search} onChange={(e: any) => handleChange(e.target.value)} />
              <h1 className='mt-8 text-lg font-semibold'>Suggested Searches</h1>
              <div className='mt-5 flex flex-wrap gap-3' >
               {suggestions.map((suggestion, index) => (
                 <div key={index} onClick={() => setSearch(suggestion)} className='hover:bg-neutral-200 cursor-pointer bg-neutral-50 text-xs lg:text-sm px-4 lg:px-5 py-2 border rounded-md' >{suggestion}</div>
               ))}
              </div>
              <h1 className='mt-8 text-lg font-semibold'>My Virtual Keyboard</h1>
              <div className='mt-5'>
                <Keyboard
                  input={search}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                />
              </div>
             <div className='mt-8 flex justify-end' >
              <Button >
                <div className='flex items-center gap-3' >
                  <span>Search</span>
                  <ArrowRightCircleIcon className='size-5 text-white' />
                </div>
              </Button>
             </div>
            </div>
  );
};

export default Page;
