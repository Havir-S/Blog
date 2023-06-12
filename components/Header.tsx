import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeaderProps {
  showReturn: boolean;
}

const Header = ({ showReturn }: HeaderProps) => {
  return (
    // <header className='sticky top-0 bg-purple-900 border-purple-500 border-b-4 border-x border-x-transparent rounded-b-[25px]'>
        // <div className='max-w-7xl flex justify-between p-5  mx-auto'>
        <div className='text-[#514538] border-b-4 border-[#514538] sticky h-20 top-0 z-10 sm:text-xl flex justify-between  mx-auto bg-amber-500 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-700'>
            <div className='max-w-full md:max-w-7xl mx-auto flex items-center justify-between gap-3 w-full px-3'>
              <div className='flex justify-center items-center'>
                <Link href='/' className='relative'>
                    <Image height={82} width={82} className='object-contain' src='/foxy.svg' alt='' />
                </Link>
                {showReturn && (
                <Link href='/' className='mr-3 font-prompt border-2 border-[#514538] font-bold px-4 py-1 rounded-full shadow-md hover:shadow-lg cursor-pointer transition duration-300 hover:scale-105 hover:border-white bg-transparent hover:text-white hover:bg-slate-900'>Home</Link>  
                )}
                <Link href='/' className='font-prompt border-2 border-[#514538] font-bold px-4 py-1 rounded-full shadow-md hover:shadow-lg cursor-pointer transition duration-300 hover:scale-105 hover:border-white bg-transparent hover:text-white hover:bg-slate-900'>Portfolio</Link>
              </div>   
              <div className='hidden sm:flex gap-3'>
                  <Image className='shadow-lg border border-[#514538] rounded-md' alt='' src='/english.svg' width={36} height={36} />
                  <Image className='shadow-lg border border-[#514538] rounded-md' alt='' src='/poland.svg' width={36} height={36} />
                  <Image className='shadow-lg border border-[#514538] rounded-md' alt='' src='/japan.svg' width={36} height={36} />
              </div>
            </div>
        </div>
    // </header>
  )
}

export default Header