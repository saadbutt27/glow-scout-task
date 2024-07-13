"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react';

export default function UploadImage() {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
  return (
    <div className="flex-1 flex flex-col items-center">
        {uploadedImage ? (
        <div className="relative w-96 h-56">
            <Image
            className="rounded-lg"
            src={uploadedImage}
            alt="Uploaded Image"
            layout="fill"
            objectFit="cover"
            />
        </div>
        ) : (
        <label className="flex flex-col items-center justify-center w-96 h-56 bg-[#F0F0F0] border-2 border-secondary rounded-lg cursor-pointer">
            <div className="flex flex-col items-center justify-center space-y-2">
            <div className="rounded-lg border-2 border-secondary p-2">
                <Plus />
            </div>
            <span className="font-medium text-gray-400">Select Treatment to Compare</span>
            </div>
            <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        )}
    </div>
  )
}
