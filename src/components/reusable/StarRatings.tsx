import React from 'react'
import { Star } from 'lucide-react'

export default function StarRatings({ratings, size} : {ratings:number, size:number}) {
  return (
    <div className="flex gap-x-1">
        {Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                fill={i < ratings ? "#E5BA1F" : "#fff"}
                width={size}
                height={size}
                strokeWidth={i < ratings ? 0 : 0.5}
            />
        ))}
    </div>
  )
}
