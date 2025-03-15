import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          © 2025  All rights reserved. | Developed by{" "}
          <span className="font-semibold text-white">Anas Developer</span>
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white hover:text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8a6 6 0 1 0-12 0 6 6 0 1 0 12 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z"
              />
            </svg>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white hover:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zM12 15.4a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8z"
              />
            </svg>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white hover:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M23 3a10.92 10.92 0 0 1-3.15 1.29 4.48 4.48 0 0 0 1.98-2.47c-.88.52-1.85.9-2.87 1.1A4.46 4.46 0 0 0 16.7 3c-2.46 0-4.46 2-4.46 4.46 0 .35.04.7.1 1.03C7.16 8.39 3.8 6.1 1.54 2.5A4.43 4.43 0 0 0 2.67 7.6C3.21 7.58 3.75 7.48 4.26 7.31 3.14 7.48 2.26 7.96 1.73 8.7c-.2.33-.24.73-.19 1.12.24-.1.47-.22.71-.35a4.44 4.44 0 0 0 6.65-4.29A4.49 4.49 0 0 0 7.5 5c-.05.18-.07.36-.07.55C7.43 6.35 7.61 6.6 7.85 6.82c-.35-.12-.69-.27-1.02-.42C7.79 7.47 8.61 8.33 9.88 8.66c-.31.09-.63.16-.96.24-.34.08-.68.17-1.02.25-.52.11-1.05.21-1.58.32.6.18 1.19.3 1.79.41-.47.41-.98.73-1.53 1.07z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
