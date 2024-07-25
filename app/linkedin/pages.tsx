import React from 'react';
import Link from 'next/link';

const LinkedInButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <a className="inline-flex justify-between items-center p-3 bg-[#0077B5] text-white rounded w-64">
        <div className="inline-flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22.23 0H1.77C.79 0 0 .774 0 1.726v20.548C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.726V1.726C24 .774 23.21 0 22.23 0zM7.19 20.452H3.56V8.994h3.63v11.458zM5.375 7.644a2.07 2.07 0 1 1 0-4.141 2.07 2.07 0 0 1 0 4.141zm14.99 12.808h-3.63v-5.57c0-1.33-.027-3.04-1.855-3.04-1.86 0-2.145 1.45-2.145 2.95v5.66h-3.63V8.994h3.48v1.573h.05c.485-.92 1.67-1.885 3.44-1.885 3.68 0 4.36 2.426 4.36 5.584v6.186h-.01z"
            />
          </svg>
          <span>LinkedIn</span>
        </div>
        <span className="ml-2 text-white">→</span>
      </a>
    </div>
  );
};

export default LinkedInButton;
