"use client"
import React, { useState } from 'react'
import Treatments from './Treatments'
import Link from 'next/link'

interface TreatmentDataType {
    _id: string;
    title: string;
    description: string;
    image: string;
}
  
export default function TreatmentsClient({ data }: { data: TreatmentDataType[] | undefined }) {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  return (
    <>
        <div className="flex flex-col items-center gap-y-2 mt-10">
            <div className="absolute top-36 -right-10 w-96 h-72 bg-trinary rounded-t-full blur-xl -z-10 -rotate-90"></div>
            <h1 className="text-4xl">Treatments</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.</p>
            <div className="mt-5 w-[80%] flex items-center gap-x-10 bg-frinary rounded-full py-4 px-6 backdrop-filter backdrop-blur-md border border-white/30 shadow-md">
            <div className="flex justify-between items-center flex-1 gap-x-4">
                <label className="flex-1 flex items-center border-[2px] border-secondary rounded-full p-3 bg-white/20">
                <select className="block w-full bg-transparent focus:outline-none text-secondary">
                    <option>Filters</option>
                    <option>Treatment 1</option>
                    <option>Treatment 2</option>
                    <option>Treatment 3</option>
                    <option>Treatment 4</option> 
                </select>
                </label>
                <span className="w-[2px] h-10 bg-[#351120] bg-opacity-20"></span>
                <Link href={selectedTreatment ? `/compare/${selectedTreatment}` : '/'} passHref>
                <button 
                    disabled={!selectedTreatment}
                    className="bg-secondary rounded-full px-6 py-2.5 text-primary">
                    Compare Treatments
                </button>
                </Link>
            </div>
            <div className="flex-1 flex items-center border-[2px] border-secondary rounded-full bg-white/20 p-1">
                <input
                type="text"
                placeholder="Search by Treatment"
                className="flex-1 bg-transparent focus:outline-none text-secondary placeholder:text-secondary px-3"
                />
                <button className="bg-secondary text-frinary px-6 py-2 rounded-full">
                Search
                </button>
            </div>
            </div>
        </div>
        <Treatments setSelectedTreatment={setSelectedTreatment} data={data}/>
    </>
  )
}
