import Image from "next/image";
import WomanImage from "../../../public/images/woman-image.svg"
import { CircleArrowOutUpRightIcon, SparkleIcon } from "lucide-react"

import Wrapper from "../reusable/Wrapper";
import Button from "../reusable/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Wrapper>
      <section className="mt-10">
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-6xl leading-snug font-semibold">
                REVEAL YOUR 
                BEAUTY WITH
              </h1>
              <h1 className="text-4xl sm:text-6xl leading-snug font-bold my-1">
                GLOW SCOUT
              </h1>
              <p className="text-lg text-slate-600 mt-4">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Ut ut nibh faucibus.“
              </p>
              <div className="mt-6">
                <button className="flex gap-x-2.5 border-2 border-secondary rounded-full px-6 py-2.5 bg-primary hover:bg-secondary hover:text-primary text-secondary duration-300 font-medium">
                  Sign Up
                  <CircleArrowOutUpRightIcon />
              </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10">
                <div className="absolute inset-0 flex justify-center items-center rounded-full z-10">
                  <div className="border-[1px] border-secondary rounded-full w-80 h-80 transform scale-x-[1.65] scale-y-125 translate-x-8 -translate-y-4 rotate-92"></div>
                  <div>
                    <SparkleIcon fill="currentColor" strokeWidth={1} className="absolute top-28 left-36 text-secondary w-14 h-20 -translate-x-3 -translate-y-10" />
                    <SparkleIcon fill="currentColor" strokeWidth={1} className="absolute top-28 left-36 text-secondary w-14 h-20 -translate-x-3 -translate-y-10 rotate-45" />
                  </div>
                </div>
                <Image
                  src={WomanImage}
                  alt="Hero Image"
                  objectFit="cover"
                  className="relative z-10 w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-trinary rounded-full blur-3xl z-0"></div>
            </div>
          </div>
          <div className="absolute z-20 w-full -translate-y-10 flex items-center gap-x-4 bg-trinary/30 rounded-full py-5 px-10 backdrop-filter backdrop-blur-md border border-white/30 shadow-md">
            <label className="flex flex-1 items-center border-[2px] border-secondary rounded-full p-3 bg-white/20">
              <select className="block w-full bg-transparent focus:outline-none text-secondary">
                <option>Select your Goals</option>
                <option>Goal 1</option>
                <option>Goal 2</option>
                <option>Goal 3</option>
                <option>Goal 4</option> 
              </select>
            </label>
            <span className="w-[2px] h-10 bg-[#351120] bg-opacity-20"></span>
            <label className="flex flex-1 items-center border-[2px] border-secondary rounded-full p-3 bg-white/20">
              <select className="block w-full bg-transparent focus:outline-none text-secondary">
                <option>Select your Location</option>
                <option>Location 1</option>
                <option>Location 2</option>
                <option>Location 3</option>
                <option>Location 4</option>
              </select>
            </label>

            <Link href={"/book-now"}> 
              <Button text={"Book Now!"}/>
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};