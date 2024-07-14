"use client"
import React, { useState } from 'react'
import { Heart } from 'lucide-react'

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
