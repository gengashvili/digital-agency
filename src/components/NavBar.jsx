"use client";
import useDarkModeToggle from "@/hooks/useDarkModeToggle";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const { themeHandler } = useDarkModeToggle();

  return (
    <header className="py-6 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left max-w-screen-2xl mx-auto">
      <Link href="/" className="text-2xl font-bold">
        digital agency
      </Link>
      <nav className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-4">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/portfolio" className="nav-link">
          Portfolio
        </Link>
        <Link href="/blog" className="nav-link">
          Blog
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
        <Link href="/dashboard" className="nav-link">
          Dashboard
        </Link>
      </nav>
      <button className=" mt-4 md:mt-0 md:ml-4" onClick={themeHandler}>
        theme change
      </button>
    </header>
  );
}
