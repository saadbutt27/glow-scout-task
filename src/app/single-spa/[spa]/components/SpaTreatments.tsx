import React from 'react'
import { get_treatments } from '@/lib/api_functions';
import { TreatmentDataType } from '@/lib/types'; 
import Image from 'next/image';

export default async function SpaTreatments() {
  const filteredData: TreatmentDataType[] | undefined = await get_treatments();
  
  if (!filteredData) {
    return <div className="flex justify-center items-center m-5 font-semibold text-3xl">404 - Spas not found</div>;
  }
  return (
    <section>
        <div className="flex flex-col items-center gap-y-2 mt-10">
            <h1 className="text-4xl">Treatments</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.</p>
        </div>
        <div className="relative grid grid-cols-4 gap-10 mt-10">
            <div className="absolute top-0 left-0 bg-trinary blur-lg rounded-full w-96 h-96 -translate-x-80 translate-y-48 -z-10"></div>
                {filteredData.map((treatment, index) => (
                    <div key={index} className={`min-w-[25%] cursor-pointer hover:scale-105 duration-300`}> 
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
        </div>
    </section>
   )
}
