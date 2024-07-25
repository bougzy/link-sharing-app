import React from 'react';
import Link from 'next/link';


interface GithubButtonProps {
  link: string;
}

const GithubButton: React.FC<GithubButtonProps> = ({ link }) => {
  return (
    <div className="flex justify-center items-center">
      <a href={link} className="inline-flex items-center p-3 bg-black text-white rounded w-64" style={{
        textDecoration: 'none', 
      }} >
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 0C5.371 0 0 5.373 0 12c0 5.301 3.438 9.8 8.205 11.387.599.111.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.614-4.042-1.614-.546-1.385-1.332-1.755-1.332-1.755-1.09-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.806 1.304 3.492.997.108-.774.42-1.304.763-1.605-2.665-.306-5.467-1.334-5.467-5.933 0-1.31.467-2.381 1.235-3.221-.124-.306-.536-1.538.117-3.205 0 0 1.008-.322 3.302 1.23.956-.266 1.98-.398 3.002-.403 1.02.005 2.046.137 3.002.403 2.293-1.552 3.298-1.23 3.298-1.23.656 1.667.244 2.899.12 3.205.77.84 1.232 1.911 1.232 3.221 0 4.61-2.807 5.624-5.479 5.923.431.372.815 1.103.815 2.221 0 1.606-.014 2.902-.014 3.299 0 .32.219.694.824.576C20.565 21.796 24 17.3 24 12 24 5.373 18.627 0 12 0z"
          />
        </svg>
        GitHub
        <span className="ml-auto text-white">→</span>
      </a>
    </div>
  );
};

export default GithubButton;
