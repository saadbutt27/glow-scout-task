import React, { useState } from 'react'
import Image from 'next/image';
import { TreatmentDataType } from '@/lib/types';

interface TreatmentsProps {
  setSelectedTreatment: (slug: string | null) => void;
  data: TreatmentDataType[] | undefined;
}

export default function Treatments ({ setSelectedTreatment, data }:TreatmentsProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const handleClick = (slug: string) => {
    setSelectedTreatment(slug);
    setActiveSlug(slug);
  };

  if (!data) {
    return <div className="flex justify-center items-center m-5 font-semibold text-3xl">404 - Treatments not found</div>;
  }

  return (
    <section className="grid grid-cols-4 gap-10 mt-10">
        <div className="absolute top-[35rem] -left-10  w-96 h-72 rounded-t-full bg-trinary blur-xl -z-10 rotate-90"></div>
        {data.map((treatment, index) => (
            <div
              key={index}
              className={`min-w-[25%] cursor-pointer hover:scale-105 duration-300 ${activeSlug === treatment._id ? 'scale-105' : ''}`}
              onClick={() => handleClick(treatment._id)}
            > 
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-inner">
                  <Image
                    className="rounded-lg shadow-inner"
                    src={treatment.image}
                    alt={treatment.title}
                    layout="responsive"
                    objectFit="cover"
                    width={300}
                    height={200}
                  />
                  <div className="absolute inset-0 rounded-lg shadow-inner" style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)' }}></div>
                  <p className="absolute top-0 right-0 bg-trinary text-secondary rounded-bl-md rounded-tr-md px-3 py-2 shadow-inner">Lorem ipsum</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-5">{treatment.title}</h3>
              <p>{treatment.description}</p>
            </div>
        ))}
    </section>
  )
}
