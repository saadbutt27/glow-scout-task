import React from 'react'
import Wrapper from '@/components/reusable/Wrapper';
import Spas from './components/Spas';
import { get_spas } from '@/lib/api_functions';
import { SpaDataType } from '@/lib/types';

import type { Metadata } from "next";

// Metadata, it'll be shown in browser's tab
export const metadata: Metadata = {
  title: "Spas - Glow Scout",
  description: "Generated by create next app",
};

// This is a next.js server component and out spas page, it'll list down all spas
// The page has some filters and input fields to search spas
// Calling a child component which is listing down all spas  
export default async function Spa() {
  // Here we're calling a function to hit the API to get all spas
  const filteredData: SpaDataType[] | undefined = await get_spas();

  return (
    <main className="border-t-2 border-t-secondary">
      <Wrapper>
        <div className="flex flex-col items-center gap-y-2 mt-10">
            <div className="absolute top-36 -right-10 w-96 h-72 bg-trinary rounded-t-full blur-xl -z-10 -rotate-90"></div>
            <h1 className="text-4xl">Salons & Spas</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.</p>
            <div className="mt-5 w-[80%] flex items-center gap-x-5 bg-frinary rounded-full py-4 px-6 backdrop-filter backdrop-blur-md border border-white/30 shadow-md">
              <label className="basis-1/5 flex items-center border-[2px] border-secondary rounded-full p-3 bg-white/20">
                <select className="block w-full bg-transparent focus:outline-none text-secondary">
                    <option>Filters</option>
                    <option>Spa 1</option>
                    <option>Spa 2</option>
                    <option>Spa 3</option>
                    <option>Spa 4</option> 
                </select>
              </label>
              <span className="w-[2px] h-10 bg-[#351120] bg-opacity-20"></span>
              <label className="basis-[30%] flex items-center border-[2px] border-secondary rounded-full p-3 bg-white/20">
                <input 
                  type="text" 
                  placeholder="Select your location" 
                  className="block w-full bg-transparent focus:outline-none text-secondary placeholder:text-secondary" 
                />
              </label>
              <span className="w-[2px] h-10 bg-[#351120] bg-opacity-20"></span>
              <div className="flex-1 flex items-center border-[2px] border-secondary rounded-full bg-white/20 p-1">
                <input
                  type="text"
                  placeholder="Search by Treatment or Spa"
                  className="flex-1 bg-transparent focus:outline-none text-secondary placeholder:text-secondary px-3"
                />
                <button className="bg-secondary text-frinary px-6 py-2 rounded-full">
                Search
                </button>
              </div>
            </div>
        </div>
        <Spas data={filteredData}/>
      </Wrapper>
    </main>
  )
}
