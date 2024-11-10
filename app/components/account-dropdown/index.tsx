import { AppRoutes } from '@/app/routes';
import { ArrowUturnRightIcon } from '@heroicons/react/24/outline';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react'

const AccountDropdown = () => {
  const [accountDropdown, setAccountDropdown] = useState<boolean | null>(false);

  return (
    <div className='relative'>
        <button onClick={() => setAccountDropdown(!accountDropdown)} className='bg-white lg:bg-neutral-100 hover:bg-neutral-200 p-2 rounded-full'>
            <UserCircleIcon className='size-5' />
        </button>
        {accountDropdown && (
            <div className='absolute bottom-0 right-0 translate-y-full' >
                <div className='flex flex-col gap-1 divide-y text-sm font-medium bg-white w-52 shadow-md border border-gray-200 rounded-lg py-1 overflow-hidden' >
                    <Link href={AppRoutes.REGISTER} className='flex items-center gap-2 px-4 py-2 hover:bg-neutral-100' >
                        <ArrowUturnRightIcon className='size-5' />
                        <span>Sign Up</span>
                    </Link>
                    <Link href={AppRoutes.LOGIN} className='flex text-red-500 items-center gap-2 px-4 py-2 hover:bg-neutral-100' >
                        <ArrowLeftCircleIcon className='size-5' />
                        <span>Logout</span>
                    </Link>
                </div>
            </div>
        )}
    </div>
  )
}

export default AccountDropdown
