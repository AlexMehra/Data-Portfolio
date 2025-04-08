'use client';

import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'resume', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<main className="flex bg-white">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} />


      {/* Scrollable Content */}
      <div className="ml-0 md:ml-64 w-full h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth border-l border-gray-100">
      {/* Sections */}
      <section id="home" className="snap-start h-screen flex items-center justify-center bg-white px-4">
  <div className="relative bg-white rounded-xl shadow-[0_10px_60px_rgba(0,0,0,0.3)] border border-gray-200 w-full max-w-3xl p-10">
    {/* Window top bar */}
    <div className="absolute top-0 left-0 w-full h-10 flex items-center px-4 space-x-2 bg-zinc-300 rounded-t-xl border-b border-gray-200">
      <span className="w-3 h-3 bg-red-400 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
    </div>

    <div className="pt-12 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900">
        I craft products,<br /> interactions & <span className="italic font-semibold text-gray-700">stories.</span>
      </h1>
      <p className="mt-6 text-gray-700 text-sm">
      "Driven by curiosity and a problem-solving mindset, I enjoy exploring data, uncovering insights, and building solutions that create real-world impact."      </p>
    </div>

    {/* Down Arrow */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <svg
        className="w-5 h-5 animate-bounce text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</section>

{/* project */}
<section id="projects" className="snap-start min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="relative bg-white rounded-xl shadow-[0_4px_40px_rgba(0,0,0,0.2)] border border-gray-200 w-full max-w-5xl p-10">
    {/* Top bar buttons */}
    <div className="absolute top-0 left-0 w-full h-10 flex items-center px-4 space-x-2 bg-gray-100 rounded-t-xl border-b border-gray-200">
      <span className="w-3 h-3 bg-red-400 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
    </div>

    <div className="pt-12">
      <h2 className="text-4xl font-semibold mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Project Card */}
        <div className="group p-4 bg-white border border-gray-200 rounded-xl shadow hover:shadow-xl transition">
          <img src="/powerBiGIF.gif" alt="Project Demo" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold group-hover:text-blue-600 transition">Project Name</h3>
          <p className="text-sm text-gray-500 mb-2">Brief project description goes here.</p>
          <p className="text-xs text-gray-400">Tech: React, Next.js • 2024</p>
        </div>

        {/* Add more project cards below the same way */}
      </div>
    </div>
  </div>
</section>


{/* Resume */}
<section id="resume" className="snap-start min-h-screen flex items-center justify-center bg-white px-4">
  <div className="relative bg-white rounded-xl shadow-[0_10px_60px_rgba(0,0,0,0.2)] border border-gray-200 w-full max-w-4xl p-10">
    
    {/* Top Browser Buttons */}
    <div className="absolute top-0 left-0 w-full h-10 flex items-center px-4 space-x-2 bg-gray-100 rounded-t-xl border-b border-gray-200">
      <span className="w-3 h-3 bg-red-400 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
    </div>

    {/* Content */}
    <div className="pt-12 text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Resume</h2>
      <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
        Download my resume or explore my professional journey below.
      </p>

      {/* Resume Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="https://drive.google.com/file/d/1xP9YUJanb7onBFTL35povXa-F7VxwYi5/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          View Resume on Google Drive
        </a>

        <a
          href="/resume.pdf"
          download
          className="inline-block px-5 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
        >
          Download PDF
        </a>
      </div>
    </div>
  </div>
</section>


{/* contact */}
<section id="contact" className="snap-start min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="relative bg-white rounded-xl shadow-[0_4px_40px_rgba(0,0,0,0.1)] border border-gray-200 w-full max-w-4xl p-10">
    <div className="absolute top-0 left-0 w-full h-10 flex items-center px-4 space-x-2 bg-gray-100 rounded-t-xl border-b border-gray-200">
      <span className="w-3 h-3 bg-red-400 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
    </div>
    <div className="pt-12">
      <h2 className="text-4xl font-semibold mb-6">Contact</h2>
      <form className="max-w-xl space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Message" className="w-full border p-2 rounded" />
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">Send</button>
      </form>
    </div>
  </div>
</section>

      </div>
    </main>
  );
}
