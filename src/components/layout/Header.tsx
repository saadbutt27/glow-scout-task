"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../reusable/Button";
import Wrapper from "../reusable/Wrapper";

export default function Header() {
  const [toggleNav, setToggleNav] = useState(false); // make responsive navbar with hamburger menu
  const pathname = usePathname();
  const links = [
    { linkName: "Home", linkPath: "/" },
    { linkName: "Treatments", linkPath: "/treatments" },
    { linkName: "Spas", linkPath: "/spas" },
    { linkName: "Blogs", linkPath: "/blogs" },
  ];

  const handleLinkClick = () => {
    setToggleNav(false); // Close the sidebar when a link is clicked
  };

  return (
    <header className="sticky top-0 bg-primary py-2 w-full z-50">
      <Wrapper>
        <nav className="flex items-center justify-between my-4 relative">
          <div>
            <Link href={"/"} onClick={handleLinkClick}>
              <h1 className="text-4xl font-semibold">Glow Scout</h1>
            </Link>
          </div>

          <button
            className={`block md:hidden ${toggleNav ? "hidden" : "block"}`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>

          {/* This one is for mobile view */}
          <div
            className={`md:hidden absolute w-full bg-white text-black flex flex-col mx-auto text-center gap-y-8 shadow-lg ${
              toggleNav ? " top-0 duration-300" : " -top-96 duration-300"
            }`}
          >
            <button onClick={() => setToggleNav(!toggleNav)} className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div>
              <ul className="text-lg font-medium">
                {links.map((link, index) => (
                  <li key={index} className="mb-6">
                    <Link
                      onClick={handleLinkClick}
                      className={
                        pathname === link.linkPath
                          ? "text-secondary/80"
                          : "text-secondary"
                      }
                      href={link.linkPath}
                    >
                      {link.linkName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* This one is for computer's view */}
          <div className="hidden md:block">
            <ul className="flex gap-x-14 text-lg font-medium">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    onClick={handleLinkClick}
                    className={
                      pathname === link.linkPath ? "text-secondary/80" : "text-secondary"
                    }
                    href={link.linkPath}
                  >
                    {link.linkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden md:block">
            <Button text={"Sign In/Up"}/>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
}
