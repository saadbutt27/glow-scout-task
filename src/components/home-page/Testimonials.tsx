"use client"
import React, { useState } from 'react';
import Wrapper from '../reusable/Wrapper';
import Image from 'next/image';
import Client from '../../../public/images/client.svg';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testiomonials() {
    const clients_data = [
        {   
            name: "Ashley K.",
            image: Client ,
            feedback: "It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clients_data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + clients_data.length) % clients_data.length);
    };

    return (
        <section className="mt-20 bg-trinary p-20 relative">
            <Wrapper>
                <div className="relative flex flex-col justify-between items-center gap-y-10">
                    <h2 className="text-4xl mt-16 z-10">Client's Testimonials</h2>
                    <div className="flex items-center gap-x-10 w-full overflow-hidden pb-6 pt-1">
                        <ChevronLeft height={60} width={60} onClick={prevSlide} className="cursor-pointer" />
                        <div className="flex gap-x-10 items-center transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                            {clients_data.map((client, index) => (
                                <>
                                    <Image src={client.image} alt="client" className="rounded-lg" />
                                    <div className="space-y-4">
                                        <p className="text-5xl font-semibold">{client.name}</p>
                                        <p className="text-lg">{client.feedback}</p>
                                        <div className="flex gap-x-1">
                                            <Star fill="yellow" width={40} height={40} />
                                            <Star fill="yellow" width={40} height={40} />
                                            <Star fill="yellow" width={40} height={40} />
                                            <Star fill="yellow" width={40} height={40} />
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <ChevronRight height={60} width={60} onClick={nextSlide} className="cursor-pointer" />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}