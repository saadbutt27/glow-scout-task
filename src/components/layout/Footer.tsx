import Link from 'next/link'
import React from 'react'
import Wrapper from '../reusable/Wrapper'

// This is our footer component which show some quick links and links to our social media pages
export default function Footer() {
  return (
    <footer className="border-t-2 border-t-secondary mt-10">
        <Wrapper>
            <div className="flex items-center p-10 mt-10 bg-[#121212] text-trinary gap-x-10 rounded-t-lg">
                <Link href={"/"} className="basis-[30%]">
                    <h1 className="text-7xl font-semibold">Glow Scout</h1>
                </Link>
                <div className="flex-1 flex gap-x-16">
                    <div>
                        <h4 className="text-xl mb-2">Quick Links</h4>
                        <ul className="text-base space-y-2 text-center">
                            <li><Link href={"/"} className="underline">Home</Link></li>
                            <li><Link href={"/tretaments"} className="underline">Treatments</Link></li>
                            <li><Link href={"/spas"} className="underline">Spas</Link></li>
                            <li><Link href={"#"} className="underline">Blogs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-base space-y-2 text-center">
                            <li><Link href={"#"} className="underline">Privacy Policy</Link></li>
                            <li><Link href={"#"} className="underline">Terms & Conditions</Link></li>
                            <li><Link href={"#"} className="underline">About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl mb-2">Follow Us</h4>
                        <ul className="text-base space-y-2 text-center">
                            <li><Link href={"#"} className="underline">Instagram</Link></li>
                            <li><Link href={"#"} className="underline">Facebook</Link></li>
                            <li><Link href={"#"} className="underline">Youtube</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    </footer>
  )
}
