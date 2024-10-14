"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
      <Link href="/" className="text-xl font-bold text-primary">
        Mockvue
      </Link>
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary cursor-pointer ${
            path == "/dashboard" && "text-primary"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            path == "/dashboard/questions" && "text-primary"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            path == "/dashboard/upgrade" && "text-primary"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            path == "/dashboard/how-it-works" && "text-primary"
          }`}
        >
          How it works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
