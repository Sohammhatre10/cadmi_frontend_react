import React, { useState } from 'react';
import Products from './Products';
import { FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const suggestions = [
    'Find top universities in the USA',
    'Best colleges for Computer Science',
    'Affordable universities in Canada',
    'Top engineering colleges in India'
  ];

  return (
    <div className="flex h-screen bg-zinc-950 text-gray-900 relative font-light">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-64 bg-zinc-900 text-white p-6 flex flex-col items-center shadow-lg">
          <button 
            className="text-white text-lg mb-6 self-start" 
            onClick={() => setIsSidebarOpen(false)}
          >
            ✖
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-900 transition w-full">Login</button>
        </div>
      )}
      
      {/* Toggle Sidebar Button */}
      {!isSidebarOpen && (
        <button 
          className="text-white absolute top-4 left-4 text-lg" 
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {/* Cadmi.ai Title */}
        <h1 className="text-white text-8xl font-light mb-4">Cadmi.ai</h1>

        {/* Typewriter Text */}
        <h2 className="text-white text-2xl md:text-4xl font-light mb-6">
          <Typewriter
            words={["Say hello to your personal college recommendation engine Cadmi"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h2>

        {/* Search Box */}
        <div className="bg-zinc-800 p-4 rounded-2xl shadow-lg w-full max-w-2xl">
          <div className="flex items-center border border-white rounded-full p-3 shadow-sm">
            <input
              type="text"
              className="flex-1 bg-transparent text-white outline-none text-lg p-2"
              placeholder="Search for top colleges..."
            />
            <button className="bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition">
              <FaArrowRight />
            </button>
          </div>

          {/* Suggested Queries */}
          <div className="flex flex-wrap gap-2 mt-3">
            {suggestions.map((suggestion, index) => (
              <button 
                key={index} 
                className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-full text-white hover:bg-gray-700 transition"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-zinc-800 p-4 rounded-2xl shadow-lg w-full max-w-lg mt-6 flex justify-around text-white">
          <div className="flex flex-col items-center">
            <span>Universities</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Scholarships</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Admissions</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Study Abroad</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
