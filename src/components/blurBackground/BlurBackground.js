import React from "react";

const BlurBackground = ({ children, show, onClose }) => {
 
  const handleClick = () => {
    onClose();
  };
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ${
        show ? "visible" : "hidden"
      } `}
    >
      <div className="flex flex-col items-end">
        <button onClick={handleClick} className="text-red-500 m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default BlurBackground;
