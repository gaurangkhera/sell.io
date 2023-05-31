"use client";

import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, getProviders, useSession } from 'next-auth/react';

const Nav = () => {
  const { data : session } = useSession();

  const [providers, setProviders] = useState(null)

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  if(providers){
	console.log(providers)
  }
  
  return (
    <div><header className="p-4 dark:dark:bg-gray-800 dark:dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<Link rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 font-black">
            sell.io
		</Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent dark:hover:text-gray-300">Home</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent dark:hover:text-gray-300">Explore</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent dark:hover:text-gray-300">About</Link>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='px-8 py-3 m-2 text-lg font-semibold rounded dark:dark:bg-indigo-500 rounded-full'
                >
                  Sign in
                </button>
              ))}
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header></div>
  )
}

export default Nav;