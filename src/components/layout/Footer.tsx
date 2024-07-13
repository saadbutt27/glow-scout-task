import Link from 'next/link'
import React from 'react'
import Wrapper from '../reusable/Wrapper'

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
                            <li>Home</li>
                            <li>Treatments</li>
                            <li>Spas</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-base space-y-2 text-center">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl mb-2">Follow Us</h4>
                        <ul className="text-base space-y-2 text-center">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    </footer>
  )
}
