"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../reusable/Button";
import Wrapper from "../reusable/Wrapper";
import { Menu } from "lucide-react"

// Header of every page. it shows logo, navigation links, and sign in/up button
export default function Header() {
  // toggle state make responsive navbar with hamburger menu
  const [toggleNav, setToggleNav] = useState(false); 

  // usePathname gets the path of the selected or specified link
  const pathname = usePathname();

  // A list of link to be used in navigation menu
  const links = [
    { linkName: "Home", linkPath: "/" },
    { linkName: "Treatments", linkPath: "/treatments" },
    { linkName: "Spas", linkPath: "/spas" },
    { linkName: "Blogs", linkPath: "/blogs" },
  ];

  // A helper function to set toggle
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

          {/* This Hamburger menu icon will be hidden in medium or above screen */}
          <button
            className={`block md:hidden ${toggleNav ? "hidden" : "block"}`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <Menu strokeWidth={1} height={30} width={30}/>
          </button>

          {/* This is for mobile view */}
          <div
            className={`md:hidden absolute w-full bg-white text-black flex flex-col mx-auto text-center gap-y-8 shadow-lg ${
              toggleNav ? " top-0 duration-300" : " -top-96 duration-300"
            }`}
          >
            {/* Hamburger menu icon */}
            <button onClick={() => setToggleNav(!toggleNav)} className="self-end">
              <Menu strokeWidth={1} height={30} width={30}/>
            </button>

            {/* Listing the navigation menu with their links, whenever user will navigate to a link, 
              usePathname will match the link path, and change the opacity of that menu item */}
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

          {/* This one is for medium and larger screens view */}
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
