
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-b from-blue-600 to-purple-800">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-4 bg-transparent flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl sm:text-4xl xl:text-5xl font-extrabold text-yellow-300 flex items-center space-x-3">
          <span className="hover:text-yellow-400 cursor-pointer transition duration-300">
            SM Blogger
          </span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Menu Items */}
        <div
          className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-gradient-to-b from-blue-700 to-purple-800 sm:bg-transparent flex flex-col sm:flex-row items-center sm:space-x-8 p-4 sm:p-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="text-lg text-black hover:text-yellow-300 transition duration-300 mb-4 sm:mb-0"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-lg text-black hover:text-yellow-300 transition duration-300 mb-4 sm:mb-0"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-lg text-black hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
        </div>
      </nav>

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.png"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Main Content */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-extrabold text-center text-yellow-300 mb-6 drop-shadow-md px-4 sm:px-0">
        Welcome to SM Blogger – Your Source of Inspiration
      </h1>

      <p className="text-sm sm:text-lg text-center mb-8 px-6 sm:px-8 md:px-10 max-w-3xl leading-relaxed">
       
        <span className="block mb-4">
  At SM Blogger, we&apos;re dedicated to offering you an exciting blend of
  motivation, insightful stories, and powerful life lessons. Every
  piece of content is carefully crafted to ignite your passion, spark
  creativity, and provide inspiration for your personal growth.
</span>
<span className="block mb-6">
  Whether you&apos;re seeking a fresh perspective, a dose of encouragement,
  or simply the joy of reading, SM Blogger is here to guide and support
  you on your journey. Join us as we uncover transformative stories and
  explore thought-provoking topics that will shape your future!
</span>

      </p>

      <Link
        href="/blog"
        className="px-10 py-4 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        Explore Blogs
      </Link>

      {/* Footer */}
 <footer className="py-6 bg-gradient-to-r from-black/70 via-gray-900 to-black/70 w-full text-center text-gray-300 absolute bottom-0">
  <p>&copy; {new Date().getFullYear()} SM Blogger. All rights reserved.</p>
</footer>

    </div>
  );
}
  
