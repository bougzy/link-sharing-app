import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FreeCodeCampButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <a className="inline-flex items-center p-3 bg-[#302267] text-white rounded w-64">
      <Image src="/image/free.png" alt="dev" 
           width={10}
           height={10} className="w-5 h-5 mr-2"
         />
        FreeCodeCamp
        <span className="ml-auto text-white">→</span>
      </a>
    </div>
  );
};

export default FreeCodeCampButton;
