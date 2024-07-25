import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StackOverflowButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <a className="inline-flex items-center p-3 bg-[#F48024] text-white rounded w-64">
      <Image src="/image/stack.png" alt="dev" 
           width={10}
           height={10} className="w-5 h-5 mr-2"
         />
        Stack Overflow
        <span className="ml-auto text-white">→</span>
      </a>
    </div>
  );
};

export default StackOverflowButton;
