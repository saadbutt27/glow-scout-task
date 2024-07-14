import React from 'react'
import Image from 'next/image';
import SpaImage1 from "../../../../../public/images/spa-main.svg"
import SpaImage2 from "../../../../../public/images/spa-naim.svg"
import SpaImage3 from "../../../../../public/images/SpaImage.svg"
import { Heart, Clock5, MapPin } from "lucide-react"
import StarRatings from '@/components/reusable/StarRatings';
import Link from 'next/link';
import Favorite from './Favorite';

export default function SpaDetails({name}: {name:string}) {
  return (
    <section className="flex items-start w-full mt-5">
        <div className="basis-3/5 flex gap-2 w-full">
            {/* Images */}
            <div className="relative w-3/5">
                <div className="rounded-lg overflow-hidden shadow-inner">
                    <Image
                        className="rounded-lg shadow-inner"
                        src={SpaImage1}
                        alt="Spa Image"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 rounded-lg shadow-inner" style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)' }}></div>
                    <p className="absolute top-0 right-0 bg-trinary text-secondary rounded-bl-md rounded-tr-md px-3 py-2 shadow-inner">View all images</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-2/5">
                <Image src={SpaImage2} className="rounded-lg" alt="Spa Image" height={214} width={214} />
                <Image src={SpaImage3} className="rounded-lg" alt="Spa Image" height={214} width={214} />
            </div>
        </div>
        <div className="basis-2/5 flex flex-col gap-y-4 border-2 border-secondary rounded-lg p-6">
            {/* Details */}
            <h2 className="text-2xl font-semibold">{name.toUpperCase()}</h2>
            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Add to favourites</p>
                <Favorite />
            </div>
            <div className="flex flex-col">
                <p className="text-lg font-semibold">Ratings</p>
                <span className="flex gap-x-2 items-center">
                    <StarRatings ratings={4} size={20} /> (5,212)
                </span>
            </div>

            <hr className="border-t-[1px] border-solid border-t-secondary m" />
            
            <div className="flex items-center gap-x-2">
                <Clock5 />
                <p className="text-lg">
                    <span className="text-green-600">Open</span> until 12:00p.m.
                </p>
            </div>
            <div className="flex items-start gap-x-2">
                <MapPin />
                <div>
                    <p className="text-lg">
                        13th Street 47 W 13th St, New York
                    </p>
                    <Link href="#" className="font-semibold underline">Get direction</Link>
                </div>
            </div>

            <hr className="border-t-[1px] border-solid border-t-secondary mb-1" />

            <button className="rounded-md px-6 py-2.5 hover:text-lg font-semibold text-secondary bg-primary border-2 border-secondary duration-300">
                Visit Website
            </button>
            <button className="bg-secondary rounded-md px-6 py-2.5 hover:text-lg text-primary duration-300">
                Book Now
            </button>
        </div>
    </section>
  )
}
