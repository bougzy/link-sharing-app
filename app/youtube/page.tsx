import React from 'react';
import Link from 'next/link';

interface YoutubeButtonProps {
  link: string;
}

const YoutubeButton: React.FC<YoutubeButtonProps> = ({ link }) => {
  return (
    <div className="flex justify-center items-center">
      <a href={link} className="inline-flex items-center p-3 bg-red-600 text-white rounded w-64" style={{
        textDecoration: 'none', 
      }}>
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M23.49 6.67a3.125 3.125 0 0 0-2.21-2.21C19.26 4 12 4 12 4s-7.26 0-9.28.46A3.125 3.125 0 0 0 .51 6.67 32.484 32.484 0 0 0 0 12a32.484 32.484 0 0 0 .51 5.33c.28 1.09 1.27 1.99 2.21 2.21C4.74 20 12 20 12 20s7.26 0 9.28-.46a3.125 3.125 0 0 0 2.21-2.21C23.99 17.26 24 12 24 12s-.01-5.26-.51-5.33zM9.8 15.26v-6.52l5.87 3.26-5.87 3.26z"
          />
        </svg>
        YouTube
        <span className="ml-auto text-white">→</span>
      </a>
    </div>
  );
};

export default YoutubeButton;
