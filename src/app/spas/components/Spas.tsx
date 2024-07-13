import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SpaImage from "../../../../public/images/SpaImage.svg"

interface SpaDataType {
    _id: string;
    name: string;
}

export default function Spas( { data }:{ data: SpaDataType[] }) {
    // const [selectedSpa, setSelectedSpa] = useState<string | null>(null);

  return (
    <section className="relative grid grid-cols-4 gap-10 mt-10">
    <div className="absolute top-0 left-0 bg-trinary blur-lg rounded-full w-96 h-96 -translate-x-80 translate-y-48 -z-10"></div>
      {data.map((spa, index) => (
        <Link href={`/single-spa/${spa._id}`}>
            <div key={index} className={`min-w-[25%] cursor-pointer hover:scale-105 duration-300`}> 
            <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-inner">
                <Image
                    className="rounded-lg shadow-inner"
                    src={SpaImage}
                    alt={spa.name}
                    layout="responsive"
                    objectFit="cover"
                    width={300}
                    height={200}
                />
                <div className="absolute inset-0 rounded-lg shadow-inner" style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)' }}></div>
                <p className="absolute top-0 right-0 bg-trinary text-secondary rounded-bl-md rounded-tr-md px-3 py-2 shadow-inner">Lorem ipsum</p>
                </div>
            </div>
            <h3 className="text-xl font-semibold mt-5">{spa.name}</h3>
            <p>Lorem ipsum</p>
            </div>
        </Link>
      ))}
  </section>
  )
}
