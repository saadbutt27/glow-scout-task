import React from 'react'
import Image from 'next/image'
import AboutImage1 from  "../../../public/images/about1.svg"
import AboutImage2 from  "../../../public/images/about2.svg"

// This is fifth section, which shows the details about us
export default function About() {
  return (
    <section className="mt-20 bg-secondary py-20">
        <div className="flex justify-between items-center gap-x-10">
            <Image src={AboutImage1} alt="about-image" className="rounded-r-md"/>
            <div className="flex flex-col gap-y-4 text-trinary text-center w-[40%]">
                <h2 className="text-4xl">About</h2>
                <h2 className="text-4xl">“Glow Scout”</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh  faucibus.
                </p>
            </div>
            <Image src={AboutImage2} alt="about-image" className="rounded-l-md"/>
        </div>
</section>
  )
}
