import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DevToButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <a className="inline-flex items-center p-3 bg-black text-white rounded w-64">
          <Image src="/image/dev.png" alt="dev" 
           width={10}
           height={10} className="w-5 h-5 mr-2"
         />
        
        Dev.to
        <span className="ml-auto text-white">→</span>
      </a>
    </div>
  );
};

export default DevToButton;
