"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LinkFormProps {
  onSubmit: (isValid: boolean, link: string, platform: string) => void;
  style?: React.CSSProperties;
}

const LinkForm: React.FC<LinkFormProps> = ({ onSubmit, style }) => {
  const [selectedPlatform, setSelectedPlatform] = useState("GitHub");
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState("");
  const [linkError, setLinkError] = useState("");
  const [linkTouched, setLinkTouched] = useState(false);

  const platforms = [
    { name: "GitHub", image: "/image/github.png" },
    { name: "YouTube", image: "/image/youtube.png" },
    { name: "LinkedIn", image: "/image/linkedin.png" },
    { name: "Other Platform", image: "/image/other-platform.png" }
  ];

  useEffect(() => {
    if (linkTouched) {
      if (!link) {
        setLinkError("Link can't be empty");
        onSubmit(false, link, selectedPlatform);
      } else {
        try {
          const platformName = selectedPlatform.toLowerCase();
          const linkDomain = new URL(link).hostname.toLowerCase();
          if (!linkDomain.includes(platformName)) {
            setLinkError("Please check the URL");
            onSubmit(false, link, selectedPlatform);
          } else {
            setLinkError("");
            onSubmit(true, link, selectedPlatform);
          }
        } catch (error) {
          setLinkError("Invalid URL");
          onSubmit(false, link, selectedPlatform);
        }
      }
    }
  }, [link, selectedPlatform, linkTouched, onSubmit]);

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
    setLinkTouched(true);
  };

  return (
    <div className="mt-14 p-3 rounded-2 w-100 bg-gray-300" style={{ backgroundColor: '#FAFAFA', borderRadius: '12px' }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-400">Link #1</h2>
        <button className="text-gray-400">Remove</button>
      </div>
      <form>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Platform</label>
          <div className="relative">
            <div
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm cursor-pointer flex items-center bg-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center flex-grow">
                {platforms.find(p => p.name === selectedPlatform)?.image && (
                  <Image
                    src={platforms.find(p => p.name === selectedPlatform)?.image || ''}
                    alt={selectedPlatform}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                )}
                <span className={selectedPlatform === "GitHub" ? "text-gray-500" : ""}>{selectedPlatform}</span>
              </div>
              <div className={`w-0 h-0 border-l-4 border-r-4 border-t-4 border-t-gray-600 border-l-transparent border-r-transparent ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
                {platforms.map(platform => (
                  <div
                    key={platform.name}
                    className={`p-2 flex items-center cursor-pointer hover:bg-gray-100 ${platform.name === "GitHub" ? "text-gray-500" : ""}`}
                    onClick={() => {
                      setSelectedPlatform(platform.name);
                      setIsOpen(false);
                      setLinkTouched(false);
                      setLinkError("");
                    }}
                  >
                    <Image
                      src={platform.image}
                      alt={platform.name}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span>{platform.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Link</label>
          <input
            type="text"
            value={link}
            onChange={handleLinkChange}
            className={`block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${linkError ? 'border-red-500' : 'border-gray-300'}`}
            placeholder={linkError || `e.g. https://www.${selectedPlatform.toLowerCase()}.com/johnappleseed`}
          />
        </div>
      </form>
    </div>
  );
};

export default LinkForm;
