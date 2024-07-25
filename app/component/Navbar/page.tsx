import React from "react";

const Navbar: React.FC = () => {
  return (
   
    <nav className="bg-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <a href="#" className="flex items-center">
          <img src="/devlinks-logo.png" alt="Devlinks" className="h-8" />
          <span className="ml-2 text-xl font-semibold text-gray-800">devlinks</span>
        </a>
        <div className="flex-grow flex justify-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-indigo-600 bg-indigo-100 px-3 py-2 rounded-md flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.828a4 4 0 10-5.656-5.656m4 4l-4 4m4-4H4m16 4h-7m7 4h-7" />
              </svg>
              Links
            </a>
            <a href="#" className="text-gray-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19.364A7.5 7.5 0 1117.364 7.12m0 0A7.5 7.5 0 015.12 19.364m0 0L5 21l-1.414-1.414m13.172 0L21 15" />
              </svg>
              Profile Details
            </a>
          </div>
        </div>
        <a href="#" className="text-indigo-600 border border-indigo-600 px-3 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition">
          Preview
        </a>
      </div>
    </nav>
  
  );
};

export default Navbar;
