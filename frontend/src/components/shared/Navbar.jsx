import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const dropdownRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-4xl font-semibold text-[#FF5A5F]">
            JobPortal
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium"
            >
              Home
            </a>
            <a
              href="/jobs"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium"
            >
              Jobs
            </a>
            <a
              href="/browse"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium"
            >
              Browse
            </a>
          </div>

          {/* Profile or Auth Options */}
          <div className="relative" ref={dropdownRef}>
            {isLoggedIn ? (
              // If logged in, show profile dropdown
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 focus:outline-none"
              >
                <img
                  src="https://i.pinimg.com/236x/c7/af/a5/c7afa5b705fcf05794ca28af309503fb.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <svg
                  className="h-4 w-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              // If not logged in, show Sign In and Sign Up buttons
              <div className="flex items-center space-x-4">
                <a
                  href="/signin"
                  className="text-gray-700 hover:text-gray-900 px-4 py-2 text-lg font-medium border border-gray-300 rounded-md"
                >
                  Sign In
                </a>
                <a
                  href="/signup"
                  className="text-white bg-[#FF5A5F] hover:bg-[#FF7A7F] px-4 py-2 text-lg font-medium rounded-md"
                >
                  Sign Up
                </a>
              </div>
            )}

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <div className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JhB7BrQyZjNAcIpR4NiQoLBT0LKrcF.png"
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-medium text-gray-900">Patel MernStack</p>
                      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <a
                    href="/profile"
                    className="block px-4 py-2 mt-2 text-sm text-blue-600 hover:bg-gray-100 rounded-md"
                  >
                    View Profile
                  </a>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false); // Simulate logout
                      console.log('Logging out...');
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
