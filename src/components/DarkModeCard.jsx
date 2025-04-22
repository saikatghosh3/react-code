import React, { useState } from "react";

const DarkModeCard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* 🌗 Toggle Switch */}
      <div className="mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            onChange={() => setDarkMode(!darkMode)}
          />
          <div className={`w-14 h-8 bg-gray-400 rounded-full shadow-inner transition duration-300 ${darkMode ? "bg-green-500" : "bg-gray-400"}`}>
            <div className={`w-6 h-6 bg-white rounded-full shadow transform transition duration-300 ${darkMode ? "translate-x-6" : "translate-x-1"}`}></div>
          </div>
          <span className="ml-3 font-semibold text-lg">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </label>
      </div>

      {/* 🧾 Profile Card */}
      <div className={`w-80 p-6 rounded-xl shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-2xl font-bold mb-2">John Doe</h2>
        <p className="text-sm mb-4">Front-end Developer</p>

        <input
          type="text"
          placeholder="Update status..."
          className={`w-full px-4 py-2 rounded-md border transition duration-300 focus:outline-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-black"
          }`}
        />

        <ul className="mt-4 space-y-1">
          <li className="font-bold text-green-500">HTML</li>
          <li className="hover:text-orange-400 transition">CSS</li>
          <li className="hover:text-orange-400 transition">JavaScript</li>
        </ul>

        <button
          disabled
          className="mt-6 w-full py-2 rounded-md bg-gray-500 text-white cursor-not-allowed"
        >
          Message
        </button>
      </div>
    </div>
  );
};

export default DarkModeCard;
