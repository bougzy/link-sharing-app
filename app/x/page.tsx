import React from 'react';
import Link from 'next/link';

const TwitterButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <a className="inline-flex items-center p-3 bg-[#1DA1F2] text-white rounded w-64">
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.606 1.794-1.564 2.163-2.719-.951.563-2.004.973-3.127 1.192-.896-.955-2.18-1.553-3.606-1.553-2.723 0-4.932 2.209-4.932 4.932 0 .387.043.765.127 1.127-4.093-.205-7.73-2.167-10.16-5.144-.424.728-.666 1.573-.666 2.477 0 1.708.87 3.213 2.188 4.096-.807-.026-1.567-.248-2.23-.616v.061c0 2.379 1.691 4.356 3.93 4.805-.411.111-.844.171-1.283.171-.313 0-.616-.031-.916-.088.617 1.928 2.408 3.334 4.527 3.373-1.665 1.308-3.765 2.089-6.043 2.089-.393 0-.779-.023-1.161-.067 2.162 1.385 4.727 2.193 7.487 2.193 8.982 0 13.88-7.447 13.88-13.9 0-.211-.005-.422-.014-.633.952-.686 1.78-1.546 2.44-2.529z"
          />
        </svg>
        Twitter
        <span className="ml-auto text-white">→</span>
      </a>
    </div>
  );
};

export default TwitterButton;
