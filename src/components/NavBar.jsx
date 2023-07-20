"use client";
import useDarkModeToggle from "@/hooks/useDarkModeToggle";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const { themeHandler } = useDarkModeToggle();

  return (
    <header className="bg-red-900 dark:bg-green-900">
      <Link href="/">digital agency</Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">BLog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
      <button onClick={themeHandler}>change theme</button>
    </header>
  );
}
