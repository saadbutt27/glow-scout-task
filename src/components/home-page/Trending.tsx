"use client"
import React, { useState } from 'react';
import Wrapper from '../reusable/Wrapper';
import Image, { StaticImageData } from 'next/image';
import LaserResurfacing from '../../../public/images/laser-resurfacing.svg';
import ChemicalPeels from '../../../public/images/chemical-peels.svg';
import AcneBluelight from '../../../public/images/acne-bluelight.svg';
import Thermage from '../../../public/images/thermage.svg';
import Botox from '../../../public/images/botox.svg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Treatment {
    title: string;
    image: StaticImageData;
  }

export default function Trending() {
    const treatments_data: Treatment[] = [
        { title: "Laser Resurfacing", image: LaserResurfacing },
        { title: "Chemical Peels", image: ChemicalPeels },
        { title: "Acne Bluelight Therapy", image: AcneBluelight },
        { title: "Thermage", image: Thermage },
        { title: "Botox", image: Botox }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % treatments_data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + treatments_data.length) % treatments_data.length);
    };

    return (
        <section className="mt-10 bg-primary relative">
            {/* <div className="absolute top-36 -right-10 w-96 h-72 bg-trinary rounded-t-full blur-xl -z-10 -rotate-90"></div>
            <div className="absolute top-[35rem] -left-10  w-96 h-72 rounded-t-full bg-trinary blur-xl -z-10 rotate-90"></div> */}
            <Wrapper>
                <div className="relative flex flex-col justify-between items-center gap-y-10">
                    <h2 className="text-4xl mt-16 z-10">Trending Treatments</h2>
                    <p className="z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.</p>
                    <div className="flex items-center gap-x-10 w-full overflow-hidden pb-6 pt-1 z-10 relative">
                        <ChevronLeft height={40} width={40} onClick={prevSlide} className="cursor-pointer absolute left-0 z-20" />
                        <ul className="w-4/5 flex gap-x-4 transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                            {treatments_data.concat(treatments_data).map((treatment, index) => (
                                <li key={index} className="min-w-[25%] transition-opacity duration-500">
                                    <Image 
                                        className="rounded-md object-cover" 
                                        src={treatment.image} 
                                        alt={treatment.title} 
                                        height={300} 
                                        width={300}
                                    />
                                    <h3 className="text-xl font-semibold mt-5">{treatment.title}</h3>
                                    <p>Lorem ipsum</p>
                                </li>
                            ))}
                        </ul>
                        <ChevronRight height={40} width={40} onClick={nextSlide} className="cursor-pointer absolute right-0 z-20" />
                    </div>
                    <div className="flex justify-center my-5 z-10">
                        <p className="text-center text-2xl border-b-2 border-gray-300 inline-block tracking-widest animate-[pulse_2s_ease-in-out_infinite] select-none">
                            SWIPE TO EXPLORE
                        </p>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
