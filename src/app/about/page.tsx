
// "use client";
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Menu, X } from 'lucide-react'; // Importing Lucide React icons

// export default function About() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 200); // Delay the animation for visibility
//     return () => clearTimeout(timer);
//   }, []);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="relative h-screen w-full">
//       {/* Header */}
//       <header className="py-6 fixed top-0 left-0 w-full bg-gradient-to-r from-black/90 to-transparent shadow-lg z-20">
//         <div className="container mx-auto flex justify-between items-center px-6">
//           {/* Website Title */}
//           <h1 className="text-3xl font-extrabold text-yellow-300 hover:text-yellow-400 cursor-pointer transition duration-300">
//             SM Blogger
//           </h1>

//           {/* Desktop Navigation Links */}
//           <nav className="space-x-8 hidden md:flex">
//             <a href="/" className="text-white hover:text-red-700 transition duration-200">Home</a>
//             <a href="/about" className="text-white hover:text-red-700 transition duration-200">About</a>
//             <a href="/contact" className="text-white hover:text-red-700 transition duration-200">Contact</a>
//           </nav>

//           {/* Mobile Menu Icon */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-white">
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Toggle icon */}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center py-4">
//             <a href="/" className="py-2">Home</a>
//             <a href="/blog" className="py-2">Blogs</a>

//             <a href="/about" className="py-2">About</a>
//             <a href="/contact" className="py-2">Contact</a>
//           </div>
//         )}
//       </header>

//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/about.jpeg"  // Replace with your background image path
//           alt="Background"
//           fill
//           className="z-0 object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-20 text-white">
//         <div
//           className={`max-w-4xl bg-opacity-80 bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
//           <p className="text-lg md:text-xl leading-relaxed mb-6">
//             Hi, I’m <span className="text-blue-400 font-semibold">Soban Saud</span>, a passionate blogger dedicated to sharing insights about
//             technology, web development, and artificial intelligence. With a knack for storytelling and a deep love for learning, I aim to
//             inspire and educate readers through my posts.
//           </p>

//           <div
//             className={`text-md md:text-lg italic text-gray-300 transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
//           >
//             <p>
//               "Through every word and story, I strive to connect with my audience, empowering them to embrace the ever-evolving world of
//               technology."
//             </p>
//           </div>

//           <div className="mt-8 flex justify-center">
//             <a
//               href="/blog"
//               className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
//             >
//               Read My Blog
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="py-6 bg-gradient-to-r from-black/70 via-gray-900 to-black/70 w-full text-center text-gray-300 relative">
//         <p>&copy; {new Date().getFullYear()} SM Blogger. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }












"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Importing Link from next/link
import { Menu, X } from 'lucide-react'; // Importing Lucide React icons

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay the animation for visibility
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative h-screen w-full">
      {/* Header */}
      <header className="py-6 fixed top-0 left-0 w-full bg-gradient-to-r from-black/90 to-transparent shadow-lg z-20">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Website Title */}
          <h1 className="text-3xl font-extrabold text-yellow-300 hover:text-yellow-400 cursor-pointer transition duration-300">
            SM Blogger
          </h1>

          {/* Desktop Navigation Links */}
          <nav className="space-x-8 hidden md:flex">
            <Link href="/" className="text-white hover:text-red-700 transition duration-200">Home</Link>
            <Link href="/about" className="text-white hover:text-red-700 transition duration-200">About</Link>
            <Link href="/contact" className="text-white hover:text-red-700 transition duration-200">Contact</Link>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Toggle icon */}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center py-4">
            <Link href="/" className="py-2">Home</Link>
            <Link href="/blog" className="py-2">Blogs</Link>
            <Link href="/about" className="py-2">About</Link>
            <Link href="/contact" className="py-2">Contact</Link>
          </div>
        )}
      </header>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about.jpeg"  // Replace with your background image path
          alt="Background"
          fill
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-20 text-white">
        <div
          className={`max-w-4xl bg-opacity-80 bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Hi, I’m <span className="text-blue-400 font-semibold">Soban Saud</span>, a passionate blogger dedicated to sharing insights about
            technology, web development, and artificial intelligence. With a knack for storytelling and a deep love for learning, I aim to
            inspire and educate readers through my posts.
          </p>

         
<div
  className={`text-md md:text-lg italic text-gray-300 transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
>
  <p>
    &quot;Through every word and story, I strive to connect with my audience, empowering them to embrace the ever-evolving world of
    technology.&quot;
  </p>
</div>


          <div className="mt-8 flex justify-center">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
            >
              Read My Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 bg-gradient-to-r from-black/70 via-gray-900 to-black/70 w-full text-center text-gray-300 relative">
        <p>&copy; {new Date().getFullYear()} SM Blogger. All rights reserved.</p>
      </footer>
    </div>
  );
}

