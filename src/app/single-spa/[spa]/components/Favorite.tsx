"use client"
import React, { useState } from 'react'
import { Heart } from 'lucide-react'

// This components implements the functionality of adding to favorites
// Basically the changing of color of the heart
// Reason to separate this component is using state as I tracket when user clicks on heart, it stores the state of the heart
// and based on that fills red color to the heart, or vice versea
export default function Favorite() {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleClick = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <Heart
            strokeWidth={1}
            onClick={handleClick}
            className={`cursor-pointer transition-transform hover:scale-125 duration-300 ${isFavorited ? "scale-125" : "scale-100"}`}
            fill={isFavorited ? "#ef4444" : "#fff"}
        />
    );
}
