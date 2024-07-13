import React from 'react'
import { treatments_data } from '@/lib/treatments_data';
import Image from 'next/image';

interface TreatmentsProps {
  setSelectedTreatment: (slug: string | null) => void;
  data: {
    _id: string;
    title: string;
    description: string;
    image: string;
  }[];
}

export default function Treatments ({ setSelectedTreatment, data }:TreatmentsProps) {
  const [activeSlug, setActiveSlug] = React.useState<string | null>(null);

  const handleClick = (slug: string) => {
    setSelectedTreatment(slug);
    setActiveSlug(slug);
  };

  return (
    <section className="relative grid grid-cols-4 gap-10 mt-10">
      <div className="absolute top-0 left-0 bg-trinary blur-lg rounded-full w-96 h-96 -translate-x-80 translate-y-48 -z-10"></div>
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
