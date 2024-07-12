import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-6">
      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>Goals</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>Spas</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>Blogs</Link>
        </li>
      </ul>
      {/* <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
        <ShoppingCart className="h-6 w-6" />
      </div> */}
    </div>
  );
}
