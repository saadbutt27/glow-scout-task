"use client"
import React, { useState } from 'react'
import { Star } from 'lucide-react'

export default function ReviewForm() {
    const [rating, setRating] = useState(0);

  return (
    <div className="self-start w-full flex flex-col justify-start gap-y-8 border-2 border-secondary rounded-lg p-10">
        <h3 className="text-3xl">Add you review</h3>

        <form className="flex justify-between items-start gap-x-10">
            <div className="basis-3/4 relative z-0 group">
                <input 
                    type="text" 
                    name="review" 
                    id="review" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                    placeholder="Write you review here..." 
                    required
                />
                {/* <label htmlFor="review" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label> */}
            </div>
            <div className="basis-1/4 flex flex-col gap-y-1">
                Ratings
                <div className="flex gap-x-1">
                    {Array.from({ length: 5 }, (_, index) => (
                        <Star
                            key={index}
                            size={30}
                            strokeWidth={1}
                            onClick={() => setRating(index + 1)}
                            fill={index < rating ? "#E5BA1F" : "#fff"}
                            className="cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </form>

    </div>
  )
}
